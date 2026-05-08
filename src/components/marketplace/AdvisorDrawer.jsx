import { useState, useRef, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, Loader2, Bot, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";

const LENDERS = [
  { id: "carecredit", name: "CareCredit", applyUrl: "https://www.carecredit.com/apply/", info: "0%–26.99% APR, $200–$25,000+, good credit, 6–60 mo, wide provider network" },
  { id: "prosper", name: "Prosper Healthcare Lending", applyUrl: "https://www.prosper.com/healthcare", info: "6.99%–35.99% APR, $2,000–$50,000, fair credit, 24–60 mo, fixed rates" },
  { id: "lendingclub", name: "LendingClub", applyUrl: "https://www.lendingclub.com/patient-solutions", info: "8.98%–35.99% APR, $1,000–$40,000, fair credit, 36–60 mo" },
  { id: "alphaeon", name: "Alphaeon Credit", applyUrl: "https://goalphaeon.com/", info: "0%–29.99% APR, $250+, good credit, elective/cosmetic focus" },
  { id: "greensky", name: "GreenSky", applyUrl: "https://www.greensky.com/", info: "0%–26.99% APR, $500–$65,000, good credit, up to 144 mo" },
  { id: "accessone", name: "AccessOne", applyUrl: "https://accessonepay.com/patients/", info: "0% APR always, $25–$25,000, no credit check required" },
  { id: "scratchpay", name: "Scratchpay", applyUrl: "https://scratchpay.com/", info: "0%–24.99% APR, $200–$10,000, fair credit, quick process" },
  { id: "sunbit", name: "Sunbit", applyUrl: "https://sunbit.com/", info: "0%–35.99% APR, $60–$10,000, broad eligibility, soft credit check" },
  { id: "cherry", name: "Cherry", applyUrl: "https://withcherry.com/consumers", info: "0%–29.99% APR, $200–$50,000, fair credit, true 0% APR, no hard credit check" },
  { id: "payzen", name: "PayZen", applyUrl: "https://payzen.com/patient-financing/", info: "0% interest, any amount, AI-powered personalized plans" },
  { id: "patientfi", name: "PatientFi", applyUrl: "https://search.patientfi.com/", info: "6.99%–32.99% APR, $200–$40,000, good credit, soft credit check" },
];

const LENDER_LIST = LENDERS.map(l => `- ${l.name} (apply: ${l.applyUrl}): ${l.info}`).join("\n");

const SYSTEM_PROMPT = `You are Cadu's friendly Financing Advisor — a knowledgeable guide helping users find the best healthcare financing options.

You know about these lenders on the Cadu marketplace (always include the apply link when recommending a lender):
${LENDER_LIST}

IMPORTANT: When recommending lenders, ALWAYS include their apply link as a markdown hyperlink, e.g. [Apply to CareCredit](https://www.carecredit.com/apply/). Never say you can't provide links.

Keep responses short and to the point — 2-3 sentences max unless the user asks for detail. Skip lengthy disclaimers after the first message. Do not add filler phrases.`;

function MessageBubble({ message }) {
  const isUser = message.role === "user";

  const handleLinkClick = (href) => {
    const lender = LENDERS.find(l => l.applyUrl === href || href.startsWith(new URL(l.applyUrl).origin));
    if (lender) {
      base44.entities.Click.create({
        lender_name: lender.name,
        lender_id: lender.id,
        apply_url: href,
      }).catch(() => {});
    }
  };

  return (
    <div className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
          <Bot className="h-3.5 w-3.5 text-primary" />
        </div>
      )}
      <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
        {isUser ? (
          <p className="leading-relaxed">{message.content}</p>
        ) : (
          <ReactMarkdown
            className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
            components={{
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(href)}
                  className="text-primary underline"
                >
                  {children}
                </a>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}

const GREETING = { role: "assistant", content: "What procedure are you financing, and what's your credit range?" };

export default function AdvisorDrawer({ open, onOpenChange }) {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!open) setMessages([GREETING]);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setInput("");

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    // Build conversation history for context
    const history = newMessages.map(m => `${m.role === "user" ? "User" : "Advisor"}: ${m.content}`).join("\n");
    const prompt = `${SYSTEM_PROMPT}\n\nConversation so far:\n${history}\n\nAdvisor:`;

    const reply = await base44.integrations.Core.InvokeLLM({ prompt });
    setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => onOpenChange(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="fixed bottom-24 right-4 md:bottom-24 md:right-6 z-[200] w-80 bg-white rounded-2xl shadow-2xl border border-border flex flex-col"
            style={{ height: "440px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Financing Advisor</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Ask anything about your options</p>
                </div>
              </div>
              <button
                onClick={() => onOpenChange(false)}
                className="p-1 rounded-md hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <MessageBubble key={i} message={msg} />
              ))}
              {loading && (
                <div className="flex gap-2">
                  <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Loader2 className="h-3 w-3 text-primary animate-spin" />
                  </div>
                  <div className="bg-secondary rounded-2xl px-3 py-2 text-xs text-muted-foreground">Thinking…</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-border flex-shrink-0">
              <div className="flex gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about your options…"
                  className="min-h-[38px] max-h-24 resize-none text-sm"
                  rows={1}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  size="icon"
                  className="h-10 w-10 flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground/60 mt-1.5 text-center">
                Not financial advice. Verify terms directly with lenders.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}