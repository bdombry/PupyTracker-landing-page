import React from 'react';
// eslint-disable-next-line no-unused-vars
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
        <div className="w-full h-full bg-[#F5F5F5] rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="h-8 bg-[#3B82F6] flex items-center justify-center">
            <span className="text-white text-xs font-medium">9:41</span>
          </div>
          
          {/* App header */}
          <div className="bg-[#3B82F6] px-4 pb-4 pt-2">
            <h3 className="text-white font-bold text-lg text-center">PupyTracker</h3>
            <p className="text-white text-xs text-center opacity-80">Suivi de Max 🐶</p>
          </div>
          
          {/* Stats cards */}
          <div className="p-4 space-y-3">
            {/* Progress card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#3B82F6]/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#3B82F6] font-semibold text-sm">Propreté</span>
                <span className="text-[#3B82F6] font-bold text-lg">87%</span>
              </div>
              <div className="w-full h-3 bg-[#BFDBFE]/50 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#BFDBFE] to-[#DBEAFE] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '87%' }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </div>
            </div>
            
            {/* Today stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#BFDBFE]/30 rounded-xl p-3 text-center">
                <span className="text-2xl">💧</span>
                <p className="text-[#3B82F6] font-bold text-lg">4</p>
                <p className="text-[#3B82F6] text-[10px]">Pipis</p>
              </div>
              <div className="bg-[#3B82F6]/30 rounded-xl p-3 text-center">
                <span className="text-2xl">💩</span>
                <p className="text-white font-bold text-lg">2</p>
                <p className="text-white text-[10px]">Cacas</p>
              </div>
              <div className="bg-[#DBEAFE]/30 rounded-xl p-3 text-center">
                <span className="text-2xl">🚶</span>
                <p className="text-[#3B82F6] font-bold text-lg">3</p>
                <p className="text-[#3B82F6] text-[10px]">Sorties</p>
              </div>
            </div>
            
            {/* Next reminder */}
            <div className="bg-[#DBEAFE]/30 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                <span className="text-xl">⏰</span>
              </div>
              <div>
                <p className="text-[#3B82F6] font-semibold text-sm">Prochaine sortie</p>
                <p className="text-[#3B82F6] text-xs opacity-70">Dans 45 minutes</p>
              </div>
            </div>
            
            {/* Quick actions */}
            <div className="flex gap-2 mt-2">
              <button className="flex-1 bg-[#3B82F6] text-white py-3 rounded-xl font-semibold text-sm">
                + Pipi
              </button>
              <button className="flex-1 bg-[#BFDBFE] text-[#3B82F6] py-3 rounded-xl font-semibold text-sm">
                + Caca
              </button>
              <button className="flex-1 bg-[#DBEAFE] text-[#3B82F6] py-3 rounded-xl font-semibold text-sm">
                + Sortie
              </button>
            </div>
          </div>
          
          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-[#3B82F6]/30 flex items-center justify-around px-4">
            <div className="text-center">
              <span className="text-xl">🏠</span>
              <p className="text-[8px] text-[#3B82F6]">Accueil</p>
            </div>
            <div className="text-center opacity-50">
              <span className="text-xl">📊</span>
              <p className="text-[8px] text-[#3B82F6]">Stats</p>
            </div>
            <div className="text-center opacity-50">
              <span className="text-xl">📅</span>
              <p className="text-[8px] text-[#3B82F6]">Historique</p>
            </div>
            <div className="text-center opacity-50">
              <span className="text-xl">⚙️</span>
              <p className="text-[8px] text-[#3B82F6]">Réglages</p>
            </div>
          </div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full" />
      </div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-12 h-12 bg-[#3B82F6] rounded-full opacity-60"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#BFDBFE] rounded-full opacity-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
    </motion.div>
  );
}
