import React from 'react';
import { Car, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Thầy Tuấn Dạy Lái</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Trung tâm đào tạo lái xe hàng đầu. Chúng tôi cam kết chất lượng đào tạo, vững tay lái, an toàn trên mọi nẻo đường.
            </p>
            <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Sân tập Sài Đồng, Long Biên, Hà Nội</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0912 345 678</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> tuandaotaolaixe@gmail.com</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Khóa Học</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Học lái xe hạng B1</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Học lái xe hạng B2</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Học lái xe hạng C</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bổ túc tay lái</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Học Viên Cần Biết</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Quy trình thi sát hạch</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mẹo thi lý thuyết 600 câu</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hồ sơ đăng ký</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Học phí & Ưu đãi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Kết Nối</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Fanpage Facebook</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Kênh Youtube Dạy Lái</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Group Học Viên</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Thầy Tuấn Dạy Lái Xe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};