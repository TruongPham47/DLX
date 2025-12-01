import React from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Tuyển sinh khóa mới tháng này
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Vững Tay Lái <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              An Toàn Trên Mọi Nẻo Đường
            </span>
          </h1>

          <p className="mt-4 text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Đào tạo lái xe ô tô hạng B1, B2, C chuyên nghiệp. Cam kết học thật, thi thật, kỹ năng lái xe an toàn và xử lý tình huống thực tế.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <Button size="lg" className="group">
              Xem Các Khóa Học
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Tư vấn miễn phí
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-1">
          <CheckCircle2 className="h-5 w-5 text-blue-500" /> Tỷ lệ đỗ &gt; 95%
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-5 w-5 text-blue-500" /> Xe đời mới, máy lạnh
            </div>
            <div className="flex items-center gap-1">
               <CheckCircle2 className="h-5 w-5 text-blue-500" /> Thời gian linh hoạt
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full max-w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <img 
                    src="https://images.unsplash.com/photo-1518256563637-23423b089c89?q=80&w=2000&auto=format&fit=crop" 
                    alt="Học lái xe an toàn" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <ShieldCheck className="text-amber-500 h-6 w-6" />
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase">Giáo viên kinh nghiệm</p>
                        <p className="text-lg font-bold text-slate-900">15+ Năm</p>
                    </div>
                </div>
            </div>
            {/* Decoration Dots */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dots-pattern opacity-20"></div>
        </div>
      </div>
    </section>
  );
};