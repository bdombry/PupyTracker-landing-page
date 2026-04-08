import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function PuppyMascot({ size = 'md', className = '' }) {
  const sizes = {
    sm: 80,
    md: 120,
    lg: 180,
    xl: 240
  };
  
  const s = sizes[size] || sizes.md;
  
  return (
    <motion.img
      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693396e34a68925d84954ff8/05d4dea7b_Persil_PupyTracker_mascotte.png"
      alt="PupyTracker Mascotte"
      width={s}
      height={s}
      className={`object-contain ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
}


