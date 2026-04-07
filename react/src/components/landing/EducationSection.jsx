import React from 'react';
import { motion } from 'framer-motion';
import PuppyMascot from './PuppyMascot';

export default function EducationSection() {
  return (
    <section id="conseils" className="py-24 bg-gradient-to-b from-[#CFEFEA]/30 to-[#FFF9F4]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#F7C7D9]/50 text-[#A67C52] px-4 py-2 rounded-full text-sm font-medium mb-4">
              📚 Guide pratique
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#A67C52] mb-4">
              Comment apprendre la propreté à votre chiot ?
            </h2>
            <p className="text-[#A67C52]/70 text-lg">
              Nos conseils d'experts pour une éducation réussie et bienveillante
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg shadow-[#A67C52]/5 border border-[#F7C7D9]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative mascot */}
            <div className="float-right ml-6 mb-4 hidden md:block">
              <PuppyMascot size="md" expression="happy" />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-[#A67C52]/80 leading-relaxed mb-6">
                <strong className="text-[#A67C52]">Éduquer un chiot à la propreté</strong> est une étape essentielle qui demande patience, constance et bienveillance. Chaque chiot apprend à son propre rythme, et il est important de ne jamais le punir pour un accident. Voici les principes fondamentaux pour réussir l'apprentissage de la propreté.
              </p>
              
              <h3 className="text-xl font-bold text-[#A67C52] mt-8 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#F7C7D9]/50 rounded-full flex items-center justify-center text-sm">1</span>
                Établir une routine régulière
              </h3>
              <p className="text-[#A67C52]/80 leading-relaxed mb-6">
                Les chiots ont besoin de sortir fréquemment : après chaque repas, après une sieste, après une séance de jeu, et au moins toutes les 2 à 3 heures. En créant une routine prévisible, votre chiot comprendra rapidement les moments dédiés aux sorties. L'application PupyTracker vous aide justement à suivre ces moments et à établir un rythme adapté au suivi pipi caca de votre compagnon.
              </p>
              
              <h3 className="text-xl font-bold text-[#A67C52] mt-8 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#CFEFEA]/50 rounded-full flex items-center justify-center text-sm">2</span>
                Récompenser les bons comportements
              </h3>
              <p className="text-[#A67C52]/80 leading-relaxed mb-6">
                Lorsque votre chiot fait ses besoins dehors, félicitez-le immédiatement avec enthousiasme et offrez-lui une petite friandise. Cette <strong className="text-[#A67C52]">éducation positive</strong> renforce le comportement souhaité. Évitez absolument de le gronder pour les accidents – cela ne ferait que créer de la confusion et du stress.
              </p>
              
              <h3 className="text-xl font-bold text-[#A67C52] mt-8 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#BFD9FF]/50 rounded-full flex items-center justify-center text-sm">3</span>
                Surveiller les signaux d'alerte
              </h3>
              <p className="text-[#A67C52]/80 leading-relaxed mb-6">
                Apprenez à reconnaître les signes qui indiquent que votre chiot a envie de faire ses besoins : renifler le sol intensément, tourner en rond, s'éloigner du groupe, se diriger vers la porte. En agissant rapidement, vous éviterez les accidents et renforcerez l'apprentissage.
              </p>
              
              <h3 className="text-xl font-bold text-[#A67C52] mt-8 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#F7C7D9]/50 rounded-full flex items-center justify-center text-sm">4</span>
                Gérer les accidents avec calme
              </h3>
              <p className="text-[#A67C52]/80 leading-relaxed mb-6">
                Les accidents font partie de l'apprentissage et sont tout à fait normaux. Si vous surprenez votre chiot en train de faire à l'intérieur, interrompez-le doucement et emmenez-le rapidement dehors. Nettoyez ensuite avec un produit enzymatique pour éliminer les odeurs. <strong className="text-[#A67C52]">Conseils éducation chiot</strong> : ne punissez jamais après coup, votre chiot ne ferait pas le lien.
              </p>
              
              <h3 className="text-xl font-bold text-[#A67C52] mt-8 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#CFEFEA]/50 rounded-full flex items-center justify-center text-sm">5</span>
                Adapter selon l'âge
              </h3>
              <p className="text-[#A67C52]/80 leading-relaxed">
                Un chiot de 2 mois ne peut pas se retenir plus de 2 heures, tandis qu'à 4 mois, il peut tenir environ 4 heures. Soyez réaliste dans vos attentes et adaptez la fréquence des sorties à l'âge de votre compagnon. Généralement, un chiot devient complètement propre entre 4 et 6 mois, parfois un peu plus tard pour certaines races.
              </p>
            </div>
            
            {/* CTA in article */}
            <div className="mt-10 p-6 bg-gradient-to-r from-[#F7C7D9]/30 to-[#BFD9FF]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-[#A67C52] font-semibold">
                  Envie de suivre les progrès de votre chiot ?
                </p>
                <p className="text-[#A67C52]/70 text-sm">
                  Téléchargez PupyTracker et commencez dès aujourd'hui
                </p>
              </div>
              <motion.a
                href="#"
                className="bg-[#A67C52] text-white px-6 py-3 rounded-xl font-semibold whitespace-nowrap hover:bg-[#8B6744] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Télécharger l'app
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}