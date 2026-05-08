import { useState, useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, Loader2, Bot, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";

function MessageBubble({ message }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
          <Bot className="h-4 w-4 text-primary" />
        </div>
      )}
      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
        {isUser ? (
          <p className="leading-relaxed">{message.content}</p>
        ) : (
          <ReactMarkdown className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default function AdvisorDrawer({ open, onOpenChange }) {
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [awaitingReply, setAwaitingReply] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const messagesEndRef = useRef(null);
  const unsubRef = useRef(null);
  const convRef = useRef(null);

  useEffect(() => {
    if (open && !conversation) {
      initConversation();
    }
    return () => {
      if (unsubRef.current) unsubRef.current();
    };
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const initConversation = async () => {
    setInitializing(true);
    const conv = await base44.agents.createConversation({
      agent_name: "financing_advisor",
      metadata: { name: `Advisor Chat — ${new Date().toLocaleDateString()}` },
    });
    setConversation(conv);
    convRef.current = conv;
    unsubRef.current = base44.agents.subscribeToConversation(conv.id, (data) => {
      const msgs = data.messages || [];
      setMessages(msgs);
      // Hide thinking indicator once an assistant message arrives
      const lastMsg = msgs[msgs.length - 1];
      if (lastMsg && lastMsg.role !== "user") {
        setAwaitingReply(false);
      }
    });
    setInitializing(false);
  };

  const sendMessage = async () => {
    if (!input.trim() || !conversation || awaitingReply) return;
    const text = input.trim();
    setInput("");
    setAwaitingReply(true);
    await base44.agents.addMessage(conversation, { role: "user", content: text });
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
          {/* Backdrop (mobile only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => onOpenChange(false)}
          />

          {/* Floating panel */}
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
              {initializing && (
                <div className="flex items-center justify-center pt-6">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              )}
              {!initializing && messages.length === 0 && (
                <div className="text-center text-muted-foreground text-xs pt-6">
                  <Sparkles className="w-6 h-6 mx-auto mb-2 opacity-30" />
                  <p className="font-medium mb-1 text-sm">Your personal financing advisor</p>
                  <p className="max-w-[220px] mx-auto">Ask about lender eligibility, repayment options, or which plan fits you best.</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <MessageBubble key={i} message={msg} />
              ))}
              {awaitingReply && (
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
                  disabled={initializing}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || awaitingReply || initializing}
                  size="icon"
                  className="h-10 w-10 flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground/60 mt-1.5 leading-relaxed text-center">
                Not financial advice. Verify terms directly with lenders.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}