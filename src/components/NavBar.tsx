'use client';
import { signOut } from 'next-auth/react';
import { motion } from "framer-motion";

interface NavBarProps {
  onLogoClick?: () => void;
}

export default function NavBar({ onLogoClick }: NavBarProps) {
  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      signOut({ redirect: true, callbackUrl: '/' });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-white/90 backdrop-blur-md z-50 px-6 py-5 border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-2xl tracking-tight text-gray-900 hover:text-gray-700 transition-all duration-300">
          goggle<span className="text-sky-400">.</span>
        </p>
        <div className="flex items-center gap-8">
          <button 
            onClick={handleLogoClick}
            className="px-5 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 hover:text-black transition-all duration-300"
          >
            로그아웃
          </button>
        </div>
      </div>
    </motion.nav>
  );
}