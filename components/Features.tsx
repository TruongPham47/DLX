import React from 'react';
import { CalendarClock, Car, Award, Shield, Wallet, BookOpen, LucideIcon } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: 'Xe Tập Đời Mới',
    description: 'Hệ thống xe tập lái Vios, Accent đời mới, có máy lạnh, trợ lực lái, giúp học viên thoải mái nhất.',
    iconName: 'Zap' // Mapped below
  },
  {
    title: 'Giờ Học Linh Hoạt',
    description: 'Học viên chủ động sắp xếp lịch học, kể cả thứ 7 và Chủ nhật mà không phát sinh thêm chi phí.',
    iconName: 'Shield' // Mapped below
  },
  {
    title: 'Học 1 Kèm 1',
    description: 'Một thầy - một trò - một xe. Giúp thầy theo sát kỹ năng và chỉnh sửa lỗi sai ngay lập tức.',
    iconName: 'Users' // Mapped below
  },
  {
    title: 'Học Phí Trọn Gói',
    description: 'Cam kết không phát sinh chi phí trong quá trình học. Có hỗ trợ chia nhỏ học phí đóng nhiều lần.',
    iconName: 'BarChart' // Mapped below
  },
  {
    title: 'Mẹo Thi Lý Thuyết',
    description: 'Chia sẻ bộ mẹo học lý thuyết 600 câu, mô phỏng 120 tình huống, đảm bảo học nhanh nhớ lâu.',
    iconName: 'Cpu' // Mapped below
  },
  {
    title: 'Bổ Túc Tay Lái',
    description: 'Nhận bổ túc tay lái cho người đã có bằng nhưng chưa tự tin ra đường, đi cao tốc, đi phố đông.',
    iconName: 'Globe' // Mapped below
  }
];

// Mapping to new icons visually
const iconDisplay: Record<string, React.ReactNode> = {
  Zap: <Car className="h-8 w-8 text-blue-600" />,
  Shield: <CalendarClock className="h-8 w-8 text-blue-600" />,
  Users: <Award className="h-8 w-8 text-blue-600" />,
  BarChart: <Wallet className="h-8 w-8 text-blue-600" />,
  Cpu: <BookOpen className="h-8 w-8 text-blue-600" />,
  Globe: <Shield className="h-8 w-8 text-blue-600" />,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Tại sao chọn thầy Tuấn?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Lấy bằng lái xe dễ dàng & an toàn
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Quy trình đào tạo bài bản, tập trung vào kỹ năng thực tế, giúp bạn tự tin cầm lái ngay sau khi nhận bằng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <div 
                key={index}
                className="relative group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl origin-left"></div>
                
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-xl mb-6 shadow-sm border border-slate-100 group-hover:-translate-y-2 transition-transform duration-300">
                  {iconDisplay[feature.iconName]}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};