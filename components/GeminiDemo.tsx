import React, { useState } from 'react';
import { generateMarketingSlogan } from '../services/geminiService';
import { Button } from './Button';
import { LoadingState } from '../types';
import { Bot, Copy, Check, MessageSquareWarning, Search } from 'lucide-react';

export const GeminiDemo: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !question) return;

    setStatus(LoadingState.LOADING);
    setResult('');
    try {
      const answer = await generateMarketingSlogan(topic, question);
      setResult(answer);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-24 bg-blue-900 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Hỏi đáp Luật Giao Thông cùng AI</h2>
            <p className="text-blue-200 mt-2">Bạn gặp tình huống khó? Quên mức phạt? Hãy hỏi trợ lý AI ngay.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Input Side */}
            <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50">
                <div className="flex items-center gap-2 mb-6">
                    <MessageSquareWarning className="h-6 w-6 text-blue-600" />
                    <h2 className="text-xl font-bold text-slate-800">Đặt câu hỏi</h2>
                </div>

                <form onSubmit={handleGenerate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Chủ đề cần hỏi</label>
                        <select 
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        >
                             <option value="">Chọn chủ đề...</option>
                             <option value="Biển báo giao thông">Biển báo giao thông</option>
                             <option value="Mức phạt vi phạm">Mức phạt vi phạm</option>
                             <option value="Sa hình & Quy tắc ưu tiên">Sa hình & Quy tắc ưu tiên</option>
                             <option value="Kỹ thuật lái xe căn bản">Kỹ thuật lái xe căn bản</option>
                             <option value="Mẹo thi lý thuyết">Mẹo thi lý thuyết</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Nội dung câu hỏi</label>
                        <textarea 
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32 resize-none"
                            placeholder="Ví dụ: Vượt đèn vàng bị phạt bao nhiêu? Gặp biển hình tròn viền đỏ là gì? Cách đề pa lên dốc không tắt máy?..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>
                    <Button 
                        type="submit" 
                        fullWidth 
                        disabled={status === LoadingState.LOADING || !topic || !question}
                        className="relative"
                    >
                        {status === LoadingState.LOADING ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Đang tra cứu...
                            </span>
                        ) : 'Tra Cứu Ngay'}
                    </Button>
                </form>
            </div>

            {/* Output Side */}
            <div className="flex-1 bg-white p-8 md:p-12 flex flex-col justify-center relative">
                {status === LoadingState.IDLE && (
                    <div className="text-center text-slate-400">
                        <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <Bot className="h-8 w-8 text-slate-300" />
                        </div>
                        <p>Câu trả lời sẽ hiển thị tại đây</p>
                    </div>
                )}

                {status === LoadingState.SUCCESS && (
                    <div className="w-full animate-fade-in-up">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 block bg-blue-50 w-fit px-2 py-1 rounded">Kết quả tra cứu</span>
                        <div className="relative group bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-inner">
                            <div className="prose prose-blue text-slate-700 leading-relaxed whitespace-pre-wrap">
                                {result}
                            </div>
                            <button 
                                onClick={copyToClipboard}
                                className="absolute top-2 right-2 p-2 text-slate-400 hover:text-blue-600 transition-colors"
                                title="Sao chép"
                            >
                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </button>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                             <Search className="h-3 w-3 text-blue-500" /> Thông tin dựa trên Luật GTĐB Việt Nam
                        </div>
                    </div>
                )}

                {status === LoadingState.ERROR && (
                    <div className="text-center text-red-500">
                        <p>Có lỗi xảy ra khi kết nối. Vui lòng kiểm tra mạng.</p>
                    </div>
                )}
            </div>
          </div>
        </div>
    </section>
  );
};