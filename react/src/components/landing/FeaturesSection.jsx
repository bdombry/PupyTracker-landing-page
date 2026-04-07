import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart3, MapPin, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Suivi complet des besoins du chiot",
    description: "Enregistrez chaque pipi, caca et sortie en un tap. L'historique vous aide à comprendre les habitudes de votre compagnon.",
    color: "#F7C7D9"
  },
  {
    icon: BarChart3,
    title: "Analyse de la propreté",
    description: "Visualisez le pourcentage de propreté de votre chiot et suivez son évolution jour après jour avec des graphiques clairs.",
    color: "#CFEFEA"
  },
  {
    icon: MapPin,
    title: "Suivi des sorties et balades",
    description: "Notez les lieux de promenade préférés et les moments où votre chiot fait ses besoins dehors plutôt qu'à l'intérieur.",
    color: "#BFD9FF"
  },
  {
    icon: TrendingUp,
    title: "Statistiques motivantes",
    description: "Des données encourageantes pour célébrer chaque progrès. Parce que l'éducation doit rester positive !",
    color: "#F7C7D9"
  }
];

export default function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="py-24 bg-gradient-to-b from-[#FFF9F4] to-[#CFEFEA]/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone mockup */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-fit">
              {/* Phone */}
              <div className="relative w-[260px] h-[520px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl mx-auto">
                <div className="w-full h-full bg-[#FFF9F4] rounded-[2rem] overflow-hidden">
                  {/* App screen - Stats view */}
                  <div className="h-8 bg-[#CFEFEA] flex items-center justify-center">
                    <span className="text-[#A67C52] text-xs font-medium">9:41</span>
                  </div>
                  
                  <div className="bg-[#CFEFEA] px-4 pb-4 pt-2">
                    <h4 className="text-[#A67C52] font-bold text-center">Statistiques</h4>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {/* Weekly chart placeholder */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <p className="text-[#A67C52] font-semibold text-sm mb-3">Cette semaine</p>
                      <div className="flex items-end justify-between h-24 px-2">
                        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <div 
                              className="w-6 bg-gradient-to-t from-[#F7C7D9] to-[#BFD9FF] rounded-t-lg"
                              style={{ height: `${30 + Math.random() * 50}px` }}
                            />
                            <span className="text-[8px] text-[#A67C52]/60">{day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats summary */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#F7C7D9]/30 rounded-xl p-3">
                        <p className="text-[#A67C52] font-bold text-xl">23</p>
                        <p className="text-[#A67C52]/70 text-[10px]">Sorties réussies</p>
                      </div>
                      <div className="bg-[#CFEFEA]/30 rounded-xl p-3">
                        <p className="text-[#A67C52] font-bold text-xl">3</p>
                        <p className="text-[#A67C52]/70 text-[10px]">Accidents</p>
                      </div>
                    </div>
                    
                    {/* Achievement */}
                    <div className="bg-gradient-to-r from-[#BFD9FF]/30 to-[#F7C7D9]/30 rounded-2xl p-4 flex items-center gap-3">
                      <span className="text-3xl">🏆</span>
                      <div>
                        <p className="text-[#A67C52] font-semibold text-sm">Semaine record !</p>
                        <p className="text-[#A67C52]/70 text-xs">88% de propreté</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full" />
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-[#F7C7D9] rounded-full opacity-30 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#BFD9FF] rounded-full opacity-30 blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
          
          {/* Right - Features list */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-[#F7C7D9]/50 text-[#A67C52] px-4 py-2 rounded-full text-sm font-medium mb-4">
                📱 Fonctionnalités
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#A67C52] mb-6">
                Tout ce dont vous avez besoin pour éduquer votre chiot
              </h2>
              <p className="text-[#A67C52]/70 text-lg mb-10">
                Une application complète pour suivre les progrès de votre compagnon et l'aider à devenir propre rapidement.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}50` }}
                  >
                    <feature.icon className="w-6 h-6 text-[#A67C52]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#A67C52] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#A67C52]/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}