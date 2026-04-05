import { motion } from 'motion/react';
import { MessageSquare, Send, Sparkles, User, X as CloseIcon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { cn } from '@/src/lib/utils';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export function TravelAgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'agent'; text: string }[]>([
    { role: 'agent', text: "Hello! I'm your Nomad's Compass travel expert. With 15 years of experience in Europe and SE Asia, I can help you plan the perfect trip. What's on your mind?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are an experienced travel agent with 15 years of experience planning vacations in Europe and South East Asia. You are helpful, professional, and provide detailed recommendations for flights, hotels, experiences, and food across all price ranges (Economical, Medium, Expensive). Keep your tone warm and inspiring.",
        }
      });

      setMessages(prev => [...prev, { role: 'agent', text: response.text || "I'm sorry, I couldn't process that. How else can I help?" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'agent', text: "I'm having a bit of trouble connecting. Please try again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl w-[90vw] md:w-[400px] h-[600px] flex flex-col overflow-hidden border border-beige-300"
        >
          <div className="bg-earth-800 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-beige-200 rounded-full flex items-center justify-center">
                <Sparkles className="text-earth-800 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Travel Expert</h3>
                <p className="text-xs text-beige-300">Online & Ready to Help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full">
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-beige-50">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "")}>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  msg.role === 'user' ? "bg-earth-800 text-white" : "bg-beige-300 text-earth-800"
                )}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                </div>
                <div className={cn(
                  "max-w-[80%] p-4 rounded-2xl text-sm",
                  msg.role === 'user' ? "bg-earth-800 text-white rounded-tr-none" : "bg-white text-earth-900 shadow-sm rounded-tl-none border border-beige-200"
                )}>
                  <div className="prose prose-sm prose-stone max-w-none">
                    <Markdown>{msg.text}</Markdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-beige-300 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-earth-800" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-beige-200 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-beige-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-beige-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-beige-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-beige-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about your dream trip..."
                className="flex-1 bg-beige-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-earth-800"
              />
              <button
                onClick={handleSend}
                className="bg-earth-800 text-white p-3 rounded-xl hover:bg-earth-900 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-earth-800 text-white p-5 rounded-full shadow-2xl flex items-center gap-3 group"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
            Chat with an Expert
          </span>
        </motion.button>
      )}
    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}
