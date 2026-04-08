import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marie L.",
    avatar: "👩‍🦰",
    role: "Maman de Luna, 4 mois",
    rating: 5,
    text: "Une application indispensable pour comprendre mon chiot ! En 3 semaines, Luna a fait d'énormes progrès. Les rappels sont vraiment utiles.",
    color: "bg-[#3B82F6]/20"
  },
  {
    name: "Sophie D.",
    avatar: "👩",
    role: "Maman de Max, 3 mois",
    rating: 5,
    text: "Je recommande à 100% ! L'interface est super mignonne et intuitive. Mon chiot est passé de 50% à 90% de propreté en un mois.",
    color: "bg-[#3B82F6]/20"
  },
  {
    name: "Camille R.",
    avatar: "👩‍🦱",
    role: "Maman de Oscar, 5 mois",
    rating: 5,
    text: "Les statistiques m'ont aidée à identifier les heures critiques. Maintenant je sais exactement quand sortir Oscar. Plus d'accidents !",
    color: "bg-[#DBEAFE]/20"
  },
  {
    name: "Julie M.",
    avatar: "👱‍♀️",
    role: "Maman de Nala, 3 mois",
    rating: 5,
    text: "Design adorable et fonctionnalités au top. C'est devenu un réflexe d'enregistrer chaque sortie. Nala progresse à vue d'œil !",
    color: "bg-[#3B82F6]/20"
  },
  {
    name: "Emma B.",
    avatar: "👩‍🔧",
    role: "Maman de Charlie, 4 mois",
    rating: 5,
    text: "Enfin une app pensée pour les maîtres de chiots ! Les notifications intelligentes changent vraiment la donne. Merci PupyTracker !",
    color: "bg-[#BFDBFE]/20"
  },
  {
    name: "Léa T.",
    avatar: "👩‍🎤",
    role: "Maman de Cookie, 2 mois",
    rating: 5,
    text: "Mon vétérinaire m'a recommandé cette app et je ne regrette pas ! Cookie a compris très vite grâce au suivi régulier.",
    color: "bg-[#DBEAFE]/20"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#DBEAFE]/50 text-[#3B82F6] px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B82F6] mb-4">
            Ils ont adopté PupyTracker
          </h2>
          <p className="text-[#3B82F6]/70 text-lg max-w-2xl mx-auto">
            Découvrez ce que pensent les maîtres qui utilisent notre application au quotidien
          </p>
          
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-[#3B82F6] font-bold text-xl">4.9/5</span>
            <span className="text-[#3B82F6]/60">• +2 500 avis</span>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`${testimonial.color} rounded-3xl p-6 border border-[#3B82F6]/10`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-[#3B82F6] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-[#3B82F6] font-semibold">{testimonial.name}</p>
                  <p className="text-[#3B82F6]/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
