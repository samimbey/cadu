import { useState, useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, Loader2, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

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
  const [sending, setSending] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const messagesEndRef = useRef(null);
  const unsubRef = useRef(null);

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
    unsubRef.current = base44.agents.subscribeToConversation(conv.id, (data) => {
      setMessages(data.messages || []);
    });
    setInitializing(false);
  };

  const sendMessage = async () => {
    if (!input.trim() || !conversation || sending) return;
    const text = input.trim();
    setInput("");
    setSending(true);
    await base44.agents.addMessage(conversation, { role: "user", content: text });
    setSending(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[85vh] flex flex-col">
        <DrawerHeader className="border-b border-border pb-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-left">
              <DrawerTitle className="text-base font-medium">Financing Advisor</DrawerTitle>
              <p className="text-xs text-muted-foreground">Ask anything about your financing options</p>
            </div>
          </div>
        </DrawerHeader>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
          {initializing && (
            <div className="flex items-center justify-center pt-8">
              <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
            </div>
          )}
          {!initializing && messages.length === 0 && (
            <div className="text-center text-muted-foreground text-sm pt-8">
              <Sparkles className="w-7 h-7 mx-auto mb-3 opacity-30" />
              <p className="font-medium mb-1">Your personal financing advisor</p>
              <p className="text-xs max-w-xs mx-auto">Ask about lender eligibility, repayment options, your specific situation, or which option is right for you.</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <MessageBubble key={i} message={msg} />
          ))}
          {sending && (
            <div className="flex gap-3">
              <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Loader2 className="h-4 w-4 text-primary animate-spin" />
              </div>
              <div className="bg-secondary rounded-2xl px-4 py-2.5 text-sm text-muted-foreground">Thinking…</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-4 border-t border-border flex-shrink-0">
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about your options…"
              className="min-h-[44px] max-h-28 resize-none text-sm"
              rows={1}
              disabled={initializing}
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || sending || initializing}
              size="icon"
              className="h-11 w-11 flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">Enter to send · Shift+Enter for new line</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}