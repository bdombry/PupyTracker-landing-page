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
      <img 
        src="/PupyTracker_homepage-portrait.png" 
        alt="PupyTracker App Screenshot" 
        className="w-[350px] h-[700px] object-cover"
      />
    </motion.div>
  );
}
