import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckCircle, BarChart3, MapPin, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Suivi complet des besoins du chiot",
    description: "Enregistrez chaque pipi, caca et sortie en un tap. L'historique vous aide à comprendre les habitudes de votre compagnon.",
    color: "#3B82F6"
  },
  {
    icon: BarChart3,
    title: "Analyse de la propreté",
    description: "Visualisez le pourcentage de propreté de votre chiot et suivez son évolution jour après jour avec des graphiques clairs.",
    color: "#BFDBFE"
  },
  {
    icon: MapPin,
    title: "Suivi des sorties et balades",
    description: "Notez les lieux de promenade préférés et les moments où votre chiot fait ses besoins dehors plutôt qu'à l'intérieur.",
    color: "#DBEAFE"
  },
  {
    icon: TrendingUp,
    title: "Statistiques motivantes",
    description: "Des données encourageantes pour célébrer chaque progrès. Parce que l'éducation doit rester positive !",
    color: "#3B82F6"
  }
];

export default function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="py-24 bg-gradient-to-b from-[#F5F5F5] to-[#BFDBFE]/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone mockup */}
          <motion.div
            className="relative order-2 lg:order-1 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/PupyTracker_analyticscreen-portrait.png" 
              alt="PupyTracker Analytics Screenshot" 
              className="w-[350px] h-[700px] object-cover"
            />
          </motion.div>
          
          {/* Right - Features list */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-[#3B82F6]/50 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                📱 Fonctionnalités
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-6">
                Tout ce dont vous avez besoin pour éduquer votre chiot
              </h2>
              <p className="text-[#3B82F6]/70 text-lg mb-10">
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
                    <feature.icon className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#3B82F6]/70">
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

