import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "À quel âge un chiot devient-il propre ?",
    answer: "La plupart des chiots deviennent propres entre 4 et 6 mois. Cependant, cela peut varier selon la race, le tempérament et la constance de l'éducation. Certains chiots peuvent mettre jusqu'à 12 mois pour être complètement fiables. L'important est de rester patient et positif tout au long de l'apprentissage."
  },
  {
    question: "Comment réduire les accidents dans la maison ?",
    answer: "Pour réduire les accidents : sortez votre chiot très régulièrement (toutes les 2-3 heures), surveillez-le attentivement à l'intérieur, apprenez à reconnaître les signaux qu'il veut sortir, et utilisez une application comme PupyTracker pour identifier les moments à risque. Ne le laissez jamais sans surveillance trop longtemps."
  },
  {
    question: "Combien de sorties par jour pour un chiot ?",
    answer: "Un chiot a besoin de 6 à 8 sorties par jour minimum, voire plus pour les plus jeunes. Prévoyez une sortie après chaque repas, après chaque sieste, après les séances de jeu, au réveil le matin et avant le coucher. Avec l'âge, le nombre de sorties peut diminuer progressivement."
  },
  {
    question: "Quels signaux montrent que le chiot veut sortir ?",
    answer: "Les signaux courants incluent : renifler le sol de manière intense, tourner en rond, s'éloigner du groupe ou de son espace de jeu, se diriger vers la porte, gémir ou aboyer, s'agiter soudainement, ou interrompre une activité. Apprenez à observer votre chiot pour anticiper ses besoins."
  },
  {
    question: "Faut-il punir un chiot qui fait à l'intérieur ?",
    answer: "Non, jamais ! Punir un chiot pour un accident est contre-productif. Il ne comprend pas pourquoi il est grondé et cela peut créer de la peur ou du stress, aggravant le problème. Nettoyez simplement l'accident et continuez l'éducation positive en récompensant les bons comportements."
  },
  {
    question: "Mon chiot régresse, est-ce normal ?",
    answer: "Oui, les régressions sont normales et fréquentes dans l'apprentissage de la propreté. Elles peuvent être dues à un changement d'environnement, du stress, une maladie ou simplement une phase de développement. Restez patient, revenez aux bases et consultez un vétérinaire si les accidents persistent."
  },
  {
    question: "Comment PupyTracker m'aide-t-il ?",
    answer: "PupyTracker vous permet de suivre tous les besoins de votre chiot (pipis, cacas, sorties), d'identifier ses habitudes et ses heures critiques grâce aux statistiques, de recevoir des rappels personnalisés pour les sorties, et de visualiser ses progrès pour rester motivé. C'est votre assistant quotidien pour une éducation réussie."
  },
  {
    question: "L'application fonctionne-t-elle pour plusieurs chiots ?",
    answer: "Oui ! PupyTracker permet de gérer plusieurs profils de chiots. Chaque compagnon a son propre suivi, ses propres statistiques et ses propres rappels personnalisés. Idéal pour les familles avec plusieurs chiots ou les éleveurs."
  },
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer: "Avec une routine constante et l'aide de PupyTracker, la plupart des utilisateurs observent des améliorations significatives en 2 à 4 semaines. Le pourcentage de propreté augmente progressivement, et les accidents deviennent de plus en plus rares. Chaque chiot est unique, soyez patient !"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <section id="faq" className="py-24 bg-[#FFF9F4]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#CFEFEA]/50 text-[#A67C52] px-4 py-2 rounded-full text-sm font-medium mb-4">
            ❓ FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#A67C52] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-[#A67C52]/70 text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur l'éducation à la propreté et PupyTracker
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-[#F7C7D9]/30 overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FFF9F4]/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[#A67C52] font-semibold pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#A67C52]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-[#A67C52]/80 leading-relaxed border-t border-[#F7C7D9]/20 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}