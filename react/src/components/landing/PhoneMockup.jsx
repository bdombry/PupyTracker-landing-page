import React from 'react';
import { motion } from 'framer-motion';

export default function PhoneMockup({ className = '' }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Phone frame */}
      <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-[#FFF9F4] rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="h-8 bg-[#F7C7D9] flex items-center justify-center">
            <span className="text-[#A67C52] text-xs font-medium">9:41</span>
          </div>
          
          {/* App header */}
          <div className="bg-[#F7C7D9] px-4 pb-4 pt-2">
            <h3 className="text-[#A67C52] font-bold text-lg text-center">PupyTracker</h3>
            <p className="text-[#A67C52] text-xs text-center opacity-80">Suivi de Max 🐶</p>
          </div>
          
          {/* Stats cards */}
          <div className="p-4 space-y-3">
            {/* Progress card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#F7C7D9]/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#A67C52] font-semibold text-sm">Propreté</span>
                <span className="text-[#A67C52] font-bold text-lg">87%</span>
              </div>
              <div className="w-full h-3 bg-[#CFEFEA]/50 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#CFEFEA] to-[#BFD9FF] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '87%' }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </div>
            </div>
            
            {/* Today stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#CFEFEA]/30 rounded-xl p-3 text-center">
                <span className="text-2xl">💧</span>
                <p className="text-[#A67C52] font-bold text-lg">4</p>
                <p className="text-[#A67C52] text-[10px]">Pipis</p>
              </div>
              <div className="bg-[#F7C7D9]/30 rounded-xl p-3 text-center">
                <span className="text-2xl">💩</span>
                <p className="text-[#A67C52] font-bold text-lg">2</p>
                <p className="text-[#A67C52] text-[10px]">Cacas</p>
              </div>
              <div className="bg-[#BFD9FF]/30 rounded-xl p-3 text-center">
                <span className="text-2xl">🚶</span>
                <p className="text-[#A67C52] font-bold text-lg">3</p>
                <p className="text-[#A67C52] text-[10px]">Sorties</p>
              </div>
            </div>
            
            {/* Next reminder */}
            <div className="bg-[#BFD9FF]/30 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#BFD9FF] rounded-full flex items-center justify-center">
                <span className="text-xl">⏰</span>
              </div>
              <div>
                <p className="text-[#A67C52] font-semibold text-sm">Prochaine sortie</p>
                <p className="text-[#A67C52] text-xs opacity-70">Dans 45 minutes</p>
              </div>
            </div>
            
            {/* Quick actions */}
            <div className="flex gap-2 mt-2">
              <button className="flex-1 bg-[#F7C7D9] text-[#A67C52] py-3 rounded-xl font-semibold text-sm">
                + Pipi
              </button>
              <button className="flex-1 bg-[#CFEFEA] text-[#A67C52] py-3 rounded-xl font-semibold text-sm">
                + Caca
              </button>
              <button className="flex-1 bg-[#BFD9FF] text-[#A67C52] py-3 rounded-xl font-semibold text-sm">
                + Sortie
              </button>
            </div>
          </div>
          
          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-[#F7C7D9]/30 flex items-center justify-around px-4">
            <div className="text-center">
              <span className="text-xl">🏠</span>
              <p className="text-[8px] text-[#A67C52]">Accueil</p>
            </div>
            <div className="text-center opacity-50">
              <span className="text-xl">📊</span>
              <p className="text-[8px] text-[#A67C52]">Stats</p>
            </div>
            <div className="text-center opacity-50">
              <span className="text-xl">📅</span>
              <p className="text-[8px] text-[#A67C52]">Historique</p>
            </div>
            <div className="text-center opacity-50">
              <span className="text-xl">⚙️</span>
              <p className="text-[8px] text-[#A67C52]">Réglages</p>
            </div>
          </div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full" />
      </div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-12 h-12 bg-[#F7C7D9] rounded-full opacity-60"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#CFEFEA] rounded-full opacity-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
    </motion.div>
  );
}