import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Bell } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Comprenez ses besoins",
    description: "Analysez les habitudes de votre chiot pour mieux anticiper ses envies et créer une routine adaptée.",
    color: "bg-[#F7C7D9]",
    iconBg: "bg-[#F7C7D9]/30"
  },
  {
    icon: Home,
    title: "Réduisez les accidents",
    description: "Grâce au suivi précis, identifiez les moments à risque et évitez les petits accidents dans la maison.",
    color: "bg-[#CFEFEA]",
    iconBg: "bg-[#CFEFEA]/30"
  },
  {
    icon: Bell,
    title: "Rappels intelligents",
    description: "Recevez des notifications personnalisées basées sur le rythme naturel de votre chiot.",
    color: "bg-[#BFD9FF]",
    iconBg: "bg-[#BFD9FF]/30"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-[#FFF9F4]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#CFEFEA]/50 text-[#A67C52] px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ Pourquoi PupyTracker ?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#A67C52] mb-4">
            Une éducation positive et efficace
          </h2>
          <p className="text-[#A67C52]/70 text-lg max-w-2xl mx-auto">
            Découvrez comment notre application vous accompagne au quotidien dans l'apprentissage de la propreté
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-[#A67C52]/5 hover:shadow-xl hover:shadow-[#A67C52]/10 transition-all duration-300 h-full border border-[#F7C7D9]/20">
                {/* Icon */}
                <div className={`w-16 h-16 ${benefit.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-8 h-8 text-[#A67C52]" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#A67C52] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#A67C52]/70 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-20 h-20 ${benefit.color} rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}