import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PuppyMascot from './PuppyMascot';
import PhoneMockup from './PhoneMockup';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F5F5] to-[#3B82F6]/10 overflow-hidden pt-20 md:pt-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block bg-[#3B82F6]/50 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🐾 L'app pour l'éducation de votre chiot
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B82F6] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transformez l'apprentissage de la propreté en jeu d'enfant
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg md:text-xl text-[#3B82F6]/70 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              PupyTracker vous aide à suivre les habitudes de votre chiot, 
              établir une routine efficace et réussir l'apprentissage avec bienveillance. 🐶
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
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
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span className="text-[#3B82F6] font-medium">Pour tous les chiots</span>
              </div>

            </motion.div>
          </motion.div>

          {/* Right side - Visuals */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background decorative elements */}
            <div className="absolute w-96 h-96 bg-[#3B82F6] rounded-full opacity-20 blur-3xl" />
            <div className="absolute w-80 h-80 bg-[#3B82F6] rounded-full opacity-20 blur-3xl right-0 top-0" />
            
            {/* Phone mockup with floating animation */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <PhoneMockup />
            </motion.div>

            {/* Floating Puppy */}
            <motion.div
              className="absolute bottom-10 left-10 z-20"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <PuppyMascot size="lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

