import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { createPageUrl } from "@/utils";
import { Bot, Sparkles, HeadphonesIcon, PenLine, Send, Loader2, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import NavMenu from "@/components/marketplace/NavMenu";
import ReactMarkdown from "react-markdown";

const AGENTS = [
  {
    key: "financing_advisor",
    name: "Financing Advisor",
    description: "Helps users find the best healthcare financing options based on their profile and needs.",
    icon: Sparkles,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    badge: "User-facing",
  },
  {
    key: "content_writer",
    name: "Content Writer",
    description: "Creates SEO-optimized blog posts and articles about healthcare financing topics.",
    icon: PenLine,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    badge: "Internal",
  },
  {
    key: "support_agent",
    name: "Support Agent",
    description: "Handles user inquiries, partnership requests, and contact form follow-ups.",
    icon: HeadphonesIcon,
    color: "bg-green-50 text-green-600 border-green-100",
    badge: "Internal",
  },
];

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

function AgentChat({ agent, onBack }) {
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    initConversation();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const initConversation = async () => {
    const conv = await base44.agents.createConversation({
      agent_name: agent.key,
      metadata: { name: `${agent.name} — ${new Date().toLocaleDateString()}` },
    });
    setConversation(conv);

    const unsub = base44.agents.subscribeToConversation(conv.id, (data) => {
      setMessages(data.messages || []);
    });
    return unsub;
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

  const Icon = agent.icon;

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
        <button onClick={onBack} className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1">
          ← Back
        </button>
        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${agent.color}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <p className="font-medium text-sm text-foreground">{agent.name}</p>
          <p className="text-xs text-muted-foreground">{agent.badge}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.length === 0 && !sending && (
          <div className="text-center text-muted-foreground text-sm mt-12">
            <Icon className="w-8 h-8 mx-auto mb-3 opacity-30" />
            <p>Start a conversation with {agent.name}</p>
            <p className="text-xs mt-1">{agent.description}</p>
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
      <div className="px-6 py-4 border-t border-border">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${agent.name}…`}
            className="min-h-[44px] max-h-32 resize-none text-sm"
            rows={1}
          />
          <Button onClick={sendMessage} disabled={!input.trim() || sending} size="icon" className="h-11 w-11 flex-shrink-0">
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}

export default function AdminAgents() {
  const [activeAgent, setActiveAgent] = useState(null);

  const agent = AGENTS.find((a) => a.key === activeAgent);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-2xl font-light tracking-tight text-primary cursor-pointer" style={{ fontFamily: "Georgia, serif" }}>
              cadu
            </span>
          </Link>
          <NavMenu />
        </div>
      </header>

      {agent ? (
        <AgentChat agent={agent} onBack={() => setActiveAgent(null)} />
      ) : (
        <main className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Bot className="w-5 h-5 text-primary" />
              <p className="text-xs font-medium uppercase tracking-widest text-primary">AI Agents</p>
            </div>
            <h1 className="text-3xl font-normal text-foreground mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Cadu Automation Hub
            </h1>
            <p className="text-muted-foreground max-w-xl">
              AI-powered agents that automate workflows — from content creation to user support and financing guidance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {AGENTS.map((a) => {
              const Icon = a.icon;
              return (
                <button
                  key={a.key}
                  onClick={() => setActiveAgent(a.key)}
                  className="w-full text-left flex items-center gap-5 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${a.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-foreground">{a.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{a.badge}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{a.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </button>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-xl border border-dashed border-border bg-muted/30">
            <p className="text-sm font-medium text-foreground mb-1">Blog Post Generator</p>
            <p className="text-xs text-muted-foreground mb-3">Use the Content Writer agent above to automatically draft new blog posts. Posts are saved as drafts for your review before publishing.</p>
            <Link to="/Blog">
              <Button variant="outline" size="sm">View Blog →</Button>
            </Link>
          </div>
        </main>
      )}
    </div>
  );
}