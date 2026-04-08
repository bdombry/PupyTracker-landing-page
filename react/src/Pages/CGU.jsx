import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Footer from '../components/landing/Footer';

export default function CGU() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const articles = [
    { id: 'article1', title: 'Article 1 – Présentation et acceptation' },
    { id: 'article2', title: 'Article 2 – Accès au Service' },
    { id: 'article3', title: 'Article 3 – Description du Service' },
    { id: 'article4', title: 'Article 4 – Abonnement et conditions financières' },
    { id: 'article5', title: 'Article 5 – Obligations de l\'Utilisateur' },
    { id: 'article6', title: 'Article 6 – Propriété intellectuelle' },
    { id: 'article7', title: 'Article 7 – Responsabilité' },
    { id: 'article8', title: 'Article 8 – Protection des mineurs' },
    { id: 'article9', title: 'Article 9 – Droit applicable et règlement des litiges' },
    { id: 'article10', title: 'Article 10 – Contact et réclamations' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <div className="bg-white border-b border-[#3B82F6]/30 py-4">
        <div className="container mx-auto px-4">
          <a href="#home" className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#3B82F6]/70 transition-colors font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </a>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-[#F5F5F5] to-[#3B82F6]/10 border-b border-[#3B82F6]/30 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B82F6] mb-4">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-[#3B82F6]/70 text-lg max-w-2xl">
              PupyTracker — Version en vigueur au 7 avril 2026
            </p>
            <p className="text-[#3B82F6]/60 text-sm mt-4">
              Dernière mise à jour : 7 avril 2026
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#3B82F6]/20 sticky top-8">
              <h3 className="text-[#3B82F6] font-bold mb-4">Sommaire</h3>
              <ul className="space-y-2">
                {articles.map((article) => (
                  <li key={article.id}>
                    <button
                      onClick={() => scrollToSection(article.id)}
                      className="text-[#3B82F6]/70 hover:text-[#3B82F6] transition-colors text-sm font-medium text-left hover:underline"
                    >
                      {article.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#3B82F6]/20">
              {/* Article 1 */}
              <section id="article1" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 1 – Présentation et acceptation</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>
                    PupyTracker est une application mobile de suivi de l'apprentissage de la propreté pour les chiens (« potty training »), éditée par PupyTracker, société de droit français (ci-après « l'Éditeur »).
                  </p>
                  <p>
                    Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et l'utilisation de l'application PupyTracker ainsi que de tous les services associés (ci-après « le Service »).
                  </p>
                  <p>
                    En téléchargeant, installant ou utilisant PupyTracker, l'utilisateur (ci-après « l'Utilisateur ») reconnaît avoir lu, compris et accepté sans réserve les présentes CGU. Si l'Utilisateur n'accepte pas ces conditions, il doit cesser immédiatement toute utilisation du Service.
                  </p>
                  <p>
                    Ces CGU peuvent être modifiées à tout moment par l'Éditeur. L'Utilisateur sera informé de toute modification substantielle par notification in-app ou par e-mail. L'utilisation continue du Service après notification vaut acceptation des nouvelles CGU.
                  </p>
                </div>
              </section>

              {/* Article 2 */}
              <section id="article2" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 2 – Accès au Service</h2>
                <div className="space-y-6 text-[#3B82F6]/80 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">2.1 Conditions d'accès</h3>
                    <div className="space-y-3 pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        Le Service est accessible à toute personne physique, qu'elle soit majeure ou mineure. L'accès par un mineur est soumis à l'accord préalable et exprès de son représentant légal. L'Éditeur se réserve le droit de demander une preuve de cet accord.
                      </p>
                      <p>
                        En cas d'utilisation par un mineur, le représentant légal accepte les présentes CGU au nom du mineur et en assume la pleine responsabilité.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">2.2 Création de compte</h3>
                    <div className="space-y-3 pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        L'accès à certaines fonctionnalités du Service nécessite la création d'un compte utilisateur. L'utilisateur s'engage à fournir des informations exactes, complètes et à jour lors de l'inscription et à les maintenir à jour.
                      </p>
                      <p>
                        L'Utilisateur est seul responsable de la confidentialité de ses identifiants de connexion et de toute activité réalisée depuis son compte. Toute utilisation frauduleuse doit être immédiatement signalée à l'Éditeur.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">2.3 Disponibilité</h3>
                    <div className="space-y-3 pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        L'Éditeur s'efforce d'assurer la disponibilité du Service 24h/24 et 7j/7, mais ne peut garantir une disponibilité ininterrompue. Des interruptions peuvent survenir pour maintenance, mise à jour ou pour des raisons indépendantes de la volonté de l'Éditeur.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Article 3 */}
              <section id="article3" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 3 – Description du Service</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>PupyTracker propose les fonctionnalités principales suivantes :</p>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li>Suivi et enregistrement des séances de potty training du chien (sorties, accidents, réussites) ;</li>
                    <li>Téléversement de photos et/ou vidéos pour illustrer le suivi ;</li>
                    <li>Accès à des conseils et ressources pédagogiques ;</li>
                    <li>Tableau de bord de progression personnalisé ;</li>
                    <li>Fonctionnalités premium accessibles via abonnement.</li>
                  </ul>
                  <p>
                    L'Éditeur se réserve le droit de modifier, compléter ou supprimer des fonctionnalités à tout moment.
                  </p>
                </div>
              </section>

              {/* Article 4 */}
              <section id="article4" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 4 – Abonnement et conditions financières</h2>
                <div className="space-y-6 text-[#3B82F6]/80 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">4.1 Offres disponibles</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        PupyTracker propose une version gratuite avec des fonctionnalités limitées et une ou plusieurs offres d'abonnement payant (mensuel et/ou annuel) donnant accès à des fonctionnalités avancées. Les tarifs en vigueur sont affichés dans l'application et sur les boutiques d'applications (App Store, Google Play).
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">4.2 Paiement</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        La gestion des abonnements est assurée via RevenueCat, Inc., solution spécialisée dans la gestion des achats in-app. Le paiement effectif est traité par la plateforme de distribution (Apple App Store ou Google Play Store) selon leurs propres conditions. L'Éditeur ne stocke pas directement les données bancaires de l'utilisateur.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">4.3 Renouvellement et résiliation</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        L'abonnement est renouvelé automatiquement à échéance, sauf résiliation par l'utilisateur au moins 24 heures avant la fin de la période en cours, via les paramètres de son compte sur la boutique d'applications concernée.
                      </p>
                      <p className="mt-3">
                        Aucun remboursement ne sera effectué pour la période d'abonnement en cours au moment de la résiliation, sauf disposition légale contraire applicable.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">4.4 Droit de rétractation (utilisateurs UE)</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        Conformément à l'article L.221-18 du Code de la consommation, l'utilisateur consommateur disposant de sa résidence en France ou dans l'Union européenne bénéficie d'un délai de rétractation de 14 jours à compter de la souscription de l'abonnement. Ce droit peut être perdu si l'utilisateur a expressément demandé l'exécution immédiate du Service.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Article 5 */}
              <section id="article5" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 5 – Obligations de l'Utilisateur</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>L'utilisateur s'engage à utiliser le Service de manière licite et conforme aux présentes CGU. Il lui est notamment interdit de :</p>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li>Publier des contenus illicites, diffamatoires, obscènes, violents ou portant atteinte à la dignité humaine ;</li>
                    <li>Téléverser des images ou vidéos montrant de la maltraitance animale ou tout contenu choquant ;</li>
                    <li>Utiliser le Service à des fins commerciales sans autorisation préalable de l'Éditeur ;</li>
                    <li>Tenter de contourner les mesures de sécurité du Service ;</li>
                    <li>Usurper l'identité d'un tiers ;</li>
                    <li>Collecter des données personnelles d'autres utilisateurs sans leur consentement ;</li>
                    <li>Introduire des virus, chevaux de Troie ou tout code malveillant.</li>
                  </ul>
                  <p className="mt-4">
                    L'Éditeur se réserve le droit de suspendre ou supprimer tout compte en cas de violation des présentes CGU, sans préavis ni remboursement.
                  </p>
                </div>
              </section>

              {/* Article 6 */}
              <section id="article6" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 6 – Propriété intellectuelle</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>
                    Tous les éléments constitutifs de PupyTracker (logo, design, textes, code, fonctionnalités, bases de données) sont la propriété exclusive de PupyTracker ou de ses partenaires et sont protégés par le droit de la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, ou exploitation non autorisée de ces éléments est strictement interdite et peut faire l'objet de poursuites judiciaires.
                  </p>
                  <p>
                    L'Utilisateur conserve la propriété des contenus qu'il publie sur le Service (photos, vidéos, données de suivi). En les téléversant, il accorde à l'Éditeur une licence non exclusive, mondiale et gratuite pour héberger et afficher ces contenus dans le cadre du Service.
                  </p>
                </div>
              </section>

              {/* Article 7 */}
              <section id="article7" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 7 – Responsabilité</h2>
                <div className="space-y-6 text-[#3B82F6]/80 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">7.1 Limitation de responsabilité de l'Éditeur</h3>
                    <div className="space-y-3 pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        PupyTracker est un outil d'aide au suivi et ne constitue en aucun cas un avis vétérinaire. Les conseils fournis par le Service sont à titre informatif uniquement. L'Éditeur ne saurait être tenu responsable des résultats obtenus avec l'application ni d'éventuels dommages causés à l'animal.
                      </p>
                      <p>
                        La responsabilité de l'Éditeur ne peut être engagée en cas d'interruption du Service, de perte de données, ou de dommages indirects résultant de l'utilisation de l'application.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">7.2 Force majeure</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        L'Éditeur ne saurait être tenu responsable en cas de force majeure au sens de l'article 1218 du Code civil.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Article 8 */}
              <section id="article8" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 8 – Protection des mineurs</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>Compte tenu de la présence possible de mineurs parmi les Utilisateurs, l'Éditeur s'engage à :</p>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li>Ne pas collecter sciemment de données personnelles auprès d'enfants de moins de 15 ans sans le consentement préalable de leurs parents ou représentants légaux, conformément au RGPD et à la loi Informatique et Libertés ;</li>
                    <li>Proposer un contenu adapté et exempt de publicité ciblée pour les mineurs ;</li>
                    <li>Permettre aux représentants légaux de demander la suppression des données relatives à un mineur.</li>
                  </ul>
                  <p className="mt-4">
                    Si l'Éditeur apprend qu'un mineur a fourni des données personnelles sans le consentement requis, ces données seront supprimées dans les meilleurs délais.
                  </p>
                </div>
              </section>

              {/* Article 9 */}
              <section id="article9" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 9 – Droit applicable et règlement des litiges</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>
                    Les présentes CGU sont régies par le droit français. En cas de litige relatif à leur interprétation ou exécution, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
                  </p>
                  <p>
                    Pour les Utilisateurs résidant dans l'Union européenne, la plateforme de règlement en ligne des litiges de la Commission européenne est accessible à l'adresse : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">https://ec.europa.eu/consumers/odr</a>
                  </p>
                  <p>
                    Pour les Utilisateurs résidant aux États-Unis, tout litige sera soumis à l'arbitrage individuel et non collectif, sauf disposition légale impérative contraire.
                  </p>
                  <p>
                    À défaut de résolution amiable, les tribunaux compétents du ressort du siège social de PupyTracker seront seuls compétents.
                  </p>
                </div>
              </section>

              {/* Article 10 */}
              <section id="article10" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 10 – Contact et réclamations</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>
                    Pour toute question relative aux présentes CGU ou pour exercer vos droits, l'Utilisateur peut contacter l'Éditeur :
                  </p>
                  <div className="bg-[#3B82F6]/5 rounded-lg p-6 space-y-3">
                    <div>
                      <p className="font-semibold text-[#3B82F6] mb-1">Par e-mail :</p>
                      <p><a href="mailto:contact@pupytracker.app" className="text-[#3B82F6] hover:underline">contact@pupytracker.app</a></p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#3B82F6] mb-1">Par courrier :</p>
                      <p>Benjamin Dombry, 76650</p>
                    </div>
                  </div>
                  <p>
                    L'Éditeur s'engage à répondre dans un délai raisonnable et au plus tard dans un délai de 30 jours.
                  </p>
                </div>
              </section>

              {/* Footer note */}
              <div className="mt-16 pt-8 border-t border-[#3B82F6]/20">
                <p className="text-[#3B82F6]/60 text-sm text-center">
                  PupyTracker — CGU version du 7 avril 2026<br />
                  Tous droits réservés
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
