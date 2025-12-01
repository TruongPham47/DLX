import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GeminiDemo } from './components/GeminiDemo';
import { Footer } from './components/Footer';
import { Star, Check } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-amber-900">
      <Header />
      <main>
        <Hero />
        <Features />
        
        {/* Course Section */}
        <section className="py-20 bg-white" id="courses">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Các Khóa Học Lái Xe</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Chọn khóa học phù hợp với nhu cầu của bạn. Cam kết đầu ra chất lượng.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* B1 Automatic */}
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition-transform">
                        <div className="bg-slate-100 p-6 text-center border-b border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-800">Hạng B1 (Số Tự Động)</h3>
                            <p className="text-slate-500 mt-2 text-sm">Phù hợp nữ giới & gia đình</p>
                        </div>
                        <div className="p-8 flex-1">
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-blue-600">14.000.000đ</span>
                                <span className="text-slate-400 block mt-1">Trọn gói</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> Không phải thi lý thuyết mô phỏng khó
                                </li>
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> Xe tập Vios đời mới, máy lạnh
                                </li>
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> Thời gian học linh động
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-colors">Đăng Ký Tư Vấn</button>
                        </div>
                    </div>

                    {/* B2 Manual - Featured */}
                    <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-500 overflow-hidden flex flex-col relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PHỔ BIẾN NHẤT</div>
                        <div className="bg-blue-600 p-6 text-center text-white">
                            <h3 className="text-2xl font-bold">Hạng B2 (Số Sàn)</h3>
                            <p className="text-blue-100 mt-2 text-sm">Hành nghề lái xe kinh doanh</p>
                        </div>
                        <div className="p-8 flex-1">
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-slate-800">12.500.000đ</span>
                                <span className="text-slate-400 block mt-1">Trọn gói từ A-Z</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0" /> Lái được cả xe số sàn và tự động
                                </li>
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0" /> Học thực hành không giới hạn
                                </li>
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0" /> Được đi đường trường liên tỉnh
                                </li>
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-blue-500 flex-shrink-0" /> Hỗ trợ thi lại lý thuyết
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-colors">Đăng Ký Ngay</button>
                        </div>
                    </div>

                    {/* C Truck */}
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col hover:-translate-y-1 transition-transform">
                        <div className="bg-slate-100 p-6 text-center border-b border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-800">Hạng C (Xe Tải)</h3>
                            <p className="text-slate-500 mt-2 text-sm">Chuyên nghiệp đường dài</p>
                        </div>
                        <div className="p-8 flex-1">
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-blue-600">16.000.000đ</span>
                                <span className="text-slate-400 block mt-1">Trọn gói</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> Lái xe tải &gt; 3.5 tấn
                                </li>
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> Thời gian học 6 tháng
                                </li>
                                <li className="flex items-start gap-3 text-slate-600 text-sm">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" /> Thực hành trên xe tải 5 tấn
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-colors">Đăng Ký Tư Vấn</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-slate-50">
             <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Học viên nói gì về Thầy Tuấn?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex text-amber-400 mb-4"><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/></div>
                        <p className="text-slate-600 mb-4">"Thầy dạy rất có tâm, không quát mắng bao giờ. Mình con gái nhát tay lái mà học xong tự tin đi phố luôn. Cảm ơn thầy nhiều!"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">L</div>
                            <div>
                                <p className="font-bold text-slate-900">Lan Anh</p>
                                <p className="text-xs text-slate-500">Học viên khóa B1 - K23</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex text-amber-400 mb-4"><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/></div>
                        <p className="text-slate-600 mb-4">"Xe tập ngon, máy lạnh mát rượi. Mình học B2 đi đường trường nhiều nên tay lái lên nhanh. Thi sát hạch 1 lần đậu luôn."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">M</div>
                            <div>
                                <p className="font-bold text-slate-900">Minh Đức</p>
                                <p className="text-xs text-slate-500">Học viên khóa B2 - K25</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex text-amber-400 mb-4"><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/><Star className="fill-current h-5 w-5"/></div>
                        <p className="text-slate-600 mb-4">"Công cụ AI tra luật trên web rất hay, mình dùng để ôn thi lý thuyết rất hiệu quả. Thầy hỗ trợ nhiệt tình từ lúc nộp hồ sơ."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">H</div>
                            <div>
                                <p className="font-bold text-slate-900">Hoàng Nam</p>
                                <p className="text-xs text-slate-500">Học viên khóa C - K12</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        <GeminiDemo />
        
        {/* CTA Section */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-800 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                     {/* Abstract shape */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                     
                     <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Đừng để việc chưa có bằng cản trở bạn</h2>
                     <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10">
                        Đăng ký ngay hôm nay để nhận ưu đãi giảm 500k học phí và bộ tài liệu 600 câu hỏi lý thuyết.
                     </p>
                     <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20">
                            Gọi Hotline: 0912 345 678
                        </button>
                        <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                            Chat Zalo Tư Vấn
                        </button>
                     </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;