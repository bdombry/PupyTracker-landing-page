import React from 'react';
import { motion } from 'framer-motion';
import PuppyMascot from './PuppyMascot';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF9F4] to-[#F7C7D9]/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative bg-gradient-to-br from-[#F7C7D9]/40 via-[#CFEFEA]/40 to-[#BFD9FF]/40 rounded-[3rem] p-8 md:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F7C7D9] rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#BFD9FF] rounded-full opacity-20 blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#A67C52] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Téléchargez PupyTracker et commencez dès aujourd'hui une éducation positive et efficace
              </motion.h2>
              
              <motion.p
                className="text-lg text-[#A67C52]/80 mb-8 max-w-xl mx-auto lg:mx-0"
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
                  href="#"
                  className="flex items-center justify-center gap-3 bg-[#A67C52] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-[#A67C52]/30 hover:shadow-xl hover:shadow-[#A67C52]/40 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </motion.a>
                
                <motion.a
                  href="#"
                  className="flex items-center justify-center gap-3 bg-white border-2 border-[#A67C52] text-[#A67C52] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#A67C52]/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
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
                  <span className="text-[#A67C52] font-medium">100% gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-[#A67C52] font-medium">Données sécurisées</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💚</span>
                  <span className="text-[#A67C52] font-medium">Sans publicité</span>
                </div>
              </motion.div>
            </div>
            
            {/* Mascot */}
            <motion.div
              className="flex-shrink-0"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <PuppyMascot size="xl" expression="excited" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}