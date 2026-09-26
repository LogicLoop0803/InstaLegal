import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Send, Sparkles, User, ExternalLink, RefreshCw } from 'lucide-react';
import { askNyayaAI, type AIMessage } from '../services/aiService';

const SUGGESTED_PROMPTS = [
  "Summarize today's constitutional judgments",
  "Find judgments related to arbitration",
  "What changed in today's Supreme Court decisions?",
  "Show me recent insolvency judgments"
];

export const NyayaAIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      content: `### 👋 Welcome to InstaLegal AI Legal Intelligence

I am your specialized Supreme Court research assistant. Ask me to extract ratio decidendi, summarize case holdings, cross-reference statutory provisions, or discover verified counsel.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: AIMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await askNyayaAI(query);
      setMessages(prev => [...prev, response]);
    } catch (e) {
      console.error(e);
      setMessages(prev => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'assistant',
          content: 'Sorry, I encountered an issue accessing the legal intelligence index. Please try again.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-navy-900 border border-gold-500/20 rounded-xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="p-4 bg-navy-850 border-b border-gold-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-100 text-sm">InstaLegal AI Legal Assistant</h3>
              <span className="text-[10px] bg-gold-500/15 border border-gold-500/30 text-gold-300 font-semibold px-2 py-0.5 rounded-full">
                Apex AI v2.4
              </span>
            </div>
            <p className="text-xs text-slate-400">Trained on Supreme Court Ratio Decidendi & Statutes</p>
          </div>
        </div>

        <button
          onClick={() => setMessages([messages[0]])}
          className="p-1.5 rounded-lg text-slate-400 hover:text-gold-400 hover:bg-navy-800 transition-colors text-xs flex items-center gap-1"
          title="Reset conversation"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Clear</span>
        </button>
      </div>

      {/* Suggested Prompts */}
      <div className="p-3 bg-navy-950/60 border-b border-gold-500/10 flex flex-wrap gap-2">
        {SUGGESTED_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            disabled={isLoading}
            className="text-xs bg-navy-800 text-slate-300 hover:text-gold-300 hover:bg-navy-700 hover:border-gold-500/40 px-2.5 py-1 rounded-full border border-gold-500/15 transition-all text-left flex items-center gap-1.5 disabled:opacity-50"
          >
            <Sparkles className="w-3 h-3 text-gold-400 shrink-0" />
            <span className="truncate">{prompt}</span>
          </button>
        ))}
      </div>

      {/* Messages Feed */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[500px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'assistant' && (
              <div className="w-7 h-7 rounded-lg bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center shrink-0 text-xs">
                AI
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-xl p-3.5 text-sm ${msg.sender === 'user'
                ? 'bg-gold-500 text-navy-950 font-medium'
                : 'bg-navy-850 border border-gold-500/20 text-slate-200'
                }`}
            >
              <div className="whitespace-pre-line leading-relaxed font-sans text-xs sm:text-sm">
                {msg.content}
              </div>

              {/* Related Judgment Buttons */}
              {msg.relatedJudgmentIds && msg.relatedJudgmentIds.length > 0 && (
                <div className="mt-3 pt-2 border-t border-gold-500/20 flex flex-wrap gap-2">
                  <span className="text-[11px] font-bold text-gold-400 w-full">View Cited Judgments:</span>
                  {msg.relatedJudgmentIds.map(id => (
                    <button
                      key={id}
                      onClick={() => navigate(`/judgments/${id}`)}
                      className="text-xs bg-navy-900 text-gold-300 hover:text-gold-200 px-2 py-1 rounded border border-gold-500/30 flex items-center gap-1"
                    >
                      <span>Case {id}</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              )}

              <div
                className={`text-[10px] mt-1.5 text-right ${msg.sender === 'user' ? 'text-navy-900/70' : 'text-slate-500'
                  }`}
              >
                {msg.timestamp}
              </div>
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-navy-800 text-slate-300 font-bold flex items-center justify-center shrink-0 text-xs">
                <User className="w-4 h-4 text-gold-400" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3 justify-start items-center">
            <div className="w-7 h-7 rounded-lg bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center shrink-0 text-xs">
              AI
            </div>
            <div className="bg-navy-850 border border-gold-500/20 text-slate-400 px-4 py-2.5 rounded-xl text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
              <span>Searching Supreme Court intelligence index & generating ratio summary...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-navy-850 border-t border-gold-500/20 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask InstaLegal AI about any Supreme Court ratio, statute or precedent..."
          className="flex-1 bg-navy-900 border border-gold-500/20 rounded-lg px-3.5 py-2 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-2.5 rounded-lg bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
