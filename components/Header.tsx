import React, { useState, useEffect } from 'react';
import { Menu, X, CarFront } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './Button';

const navItems: NavItem[] = [
  { label: 'Khóa học', href: '#courses' },
  { label: 'Ưu điểm', href: '#features' },
  { label: 'Hỏi đáp Luật', href: '#demo' },
  { label: 'Liên hệ', href: '#footer' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/30">
                <CarFront className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">
              Thầy Tuấn <span className="text-blue-600">Dạy Lái</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size="sm" variant="secondary">Đăng Ký Học Ngay</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-base font-medium text-slate-600 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button fullWidth variant="secondary" onClick={() => setIsMobileMenuOpen(false)}>Đăng Ký Học Ngay</Button>
          </div>
        </div>
      )}
    </header>
  );
};