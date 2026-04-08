import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PuppyMascot from './PuppyMascot';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F5F5F5] to-[#3B82F6]/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative bg-gradient-to-br from-[#3B82F6]/40 via-[#BFDBFE]/40 to-[#DBEAFE]/40 rounded-[3rem] p-8 md:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6] rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DBEAFE] rounded-full opacity-20 blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3B82F6] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Téléchargez PupyTracker et commencez dès aujourd'hui une éducation positive et efficace
              </motion.h2>
              
              <motion.p
                className="text-lg text-[#3B82F6]/80 mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Rejoignez des milliers de maîtres heureux qui ont transformé l'apprentissage de la propreté en une expérience joyeuse et gratifiante. 🐶
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href="https://apps.apple.com/app/id6759367833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#3B82F6] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/40 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </motion.a>
              </motion.div>
              
              {/* Trust elements */}
              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="text-[#3B82F6] font-medium">100% gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-[#3B82F6] font-medium">Données sécurisées</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💚</span>
                  <span className="text-[#3B82F6] font-medium">Sans publicité</span>
                </div>
              </motion.div>
            </div>
            
            {/* Mascot */}
            <motion.div
              className="flex-shrink-0"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <PuppyMascot size="xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
