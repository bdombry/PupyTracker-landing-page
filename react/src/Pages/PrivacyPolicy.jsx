import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Footer from '../components/landing/Footer';

export default function PrivacyPolicy() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const articles = [
    { id: 'article1', title: 'Article 1 – Responsable du traitement' },
    { id: 'article2', title: 'Article 2 – Données collectées' },
    { id: 'article3', title: 'Article 3 – Finalités du traitement' },
    { id: 'article4', title: 'Article 4 – Durée de conservation' },
    { id: 'article5', title: 'Article 5 – Destinataires des données' },
    { id: 'article6', title: 'Article 6 – Sécurité des données' },
    { id: 'article7', title: 'Article 7 – Vos droits' },
    { id: 'article8', title: 'Article 8 – Cookies et technologies' },
    { id: 'article9', title: 'Article 9 – Modifications de la politique' },
    { id: 'article10', title: 'Article 10 – Contact' },
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
              Politique de Confidentialité
            </h1>
            <p className="text-[#3B82F6]/70 text-lg max-w-2xl">
              PupyTracker — Version en vigueur au 7 avril 2026
            </p>
            <p className="text-[#3B82F6]/60 text-sm mt-4">
              La protection de vos données personnelles est notre priorité
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
              {/* Introduction */}
              <section className="mb-12">
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p className="text-lg font-semibold text-[#3B82F6]">
                    Introduction
                  </p>
                  <p>
                    La protection de vos données personnelles est une priorité pour la société Benjamin Dombry (ci-après « nous » ou « l'Éditeur »). La présente Politique de Confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos données personnelles dans le cadre de l'utilisation de l'application PupyTracker (ci-après « le Service »).
                  </p>
                  <p>
                    Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD – Règlement UE 2016/679), à la loi Informatique et Libertés, et aux lois applicables dans les pays où le Service est disponible, notamment le California Consumer Privacy Act (CCPA) pour les utilisateurs résidant en Californie.
                  </p>
                </div>
              </section>

              {/* Article 1 */}
              <section id="article1" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 1 – Responsable du traitement</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>
                    Le responsable du traitement des données personnelles collectées via PupyTracker est :
                  </p>
                  <div className="bg-[#3B82F6]/5 rounded-lg p-6 space-y-2">
                    <p className="font-semibold text-[#3B82F6]">Benjamin Dombry</p>
                    <p>Siège social : 76650</p>
                    <p>E-mail : <a href="mailto:contact@pupytracker.app" className="text-[#3B82F6] hover:underline">contact@pupytracker.app</a></p>
                  </div>
                  <p>
                    Si vous avez des questions relatives à vos données personnelles, vous pouvez nous contacter à l'adresse e-mail indiquée ci-dessus.
                  </p>
                </div>
              </section>

              {/* Article 2 */}
              <section id="article2" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 2 – Données collectées</h2>
                <div className="space-y-6 text-[#3B82F6]/80 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">2.1 Données fournies directement par l'Utilisateur</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p className="mb-3">Lors de l'inscription et de l'utilisation du Service, nous collectons les données suivantes :</p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Données d'identité : nom, prénom ou pseudo ;</li>
                        <li>Données de contact : adresse e-mail ;</li>
                        <li>Données démographiques : âge ou date de naissance ;</li>
                        <li>Données de paiement : informations de facturation traitées via les boutiques d'applications (App Store / Google Play) – nous ne stockons pas les numéros de carte bancaire directement ;</li>
                        <li>Contenus générés : photos, vidéos et données de suivi relatives à votre chien (séances de sortie, accidents, réussites).</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">2.2 Données collectées automatiquement</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p className="mb-3">Lors de l'utilisation du Service, nous collectons automatiquement :</p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Données de localisation GPS (si l'autorisation est accordée par l'Utilisateur), utilisées pour contextualiser les sorties de l'animal ;</li>
                        <li>Données techniques : identifiant de l'appareil, système d'exploitation, version de l'application, données de connexion, adresse IP ;</li>
                        <li>Données d'usage : fonctionnalités utilisées, fréquence d'utilisation, durée des sessions.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">2.3 Données relatives aux mineurs</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        Conformément au RGPD (article 8) et à la loi Informatique et Libertés, le traitement de données personnelles d'un enfant de moins de 15 ans (ou de moins de 16 ans selon les États membres de l'UE) nécessite le consentement du titulaire de la responsabilité parentale. Nous nous engageons à ne pas collecter sciemment de données d'enfants sans ce consentement préalable.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Article 3 */}
              <section id="article3" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 3 – Finalités du traitement et bases légales</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>Nous traitons vos données personnelles pour les finalités suivantes :</p>
                  <ul className="space-y-3 pl-6 list-disc">
                    <li><strong className="text-[#3B82F6]">Fourniture du Service :</strong> gestion de votre compte, accès aux fonctionnalités, suivi du potty training — Base légale : exécution du contrat ;</li>
                    <li><strong className="text-[#3B82F6]">Gestion des abonnements et facturation</strong> — Base légale : exécution du contrat ;</li>
                    <li><strong className="text-[#3B82F6]">Personnalisation de l'expérience utilisateur</strong> et suggestions de progression — Base légale : intérêt légitime ;</li>
                    <li><strong className="text-[#3B82F6]">Localisation GPS</strong> pour le suivi des sorties — Base légale : consentement ;</li>
                    <li><strong className="text-[#3B82F6]">Communications</strong> relatives au Service (notifications, mises à jour) — Base légale : intérêt légitime / consentement ;</li>
                    <li><strong className="text-[#3B82F6]">Amélioration du Service</strong> et statistiques d'usage anonymisées — Base légale : intérêt légitime ;</li>
                    <li><strong className="text-[#3B82F6]">Conformité légale</strong> et réponse aux demandes des autorités — Base légale : obligation légale.</li>
                  </ul>
                </div>
              </section>

              {/* Article 4 */}
              <section id="article4" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 4 – Durée de conservation des données</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>Nous conservons vos données personnelles pour les durées suivantes :</p>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li>Données de compte : pendant toute la durée d'utilisation du Service, puis 3 ans après la dernière activité ;</li>
                    <li>Données de paiement et facturation : 10 ans à compter de la transaction ;</li>
                    <li>Données de localisation GPS : 12 mois glissants, puis suppression automatique ;</li>
                    <li>Photos et vidéos : jusqu'à suppression par l'Utilisateur ;</li>
                    <li>Données de navigation et logs techniques : 12 mois maximum ;</li>
                    <li>Données des mineurs : mêmes durées, avec suppression immédiate sur demande du représentant légal.</li>
                  </ul>
                  <p className="mt-4">
                    À l'issue de ces délais, vos données sont supprimées ou anonymisées de manière irréversible.
                  </p>
                </div>
              </section>

              {/* Article 5 */}
              <section id="article5" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 5 – Destinataires des données</h2>
                <div className="space-y-6 text-[#3B82F6]/80 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">5.1 Partage avec des tiers</h3>
                    <div className="space-y-3 pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        Nous ne vendons jamais vos données personnelles à des tiers. Vos données peuvent être communiquées aux catégories de destinataires suivantes :
                      </p>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-[#3B82F6]">Sous-traitants :</p>
                          <ul className="space-y-2 pl-5 list-disc mt-2">
                            <li><strong>Supabase, Inc.</strong> (États-Unis) — Hébergement de la base de données et infrastructure backend. Politique : <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">supabase.com/privacy</a></li>
                            <li><strong>RevenueCat, Inc.</strong> (États-Unis) — Gestion des abonnements in-app. Politique : <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">revenuecat.com/privacy</a></li>
                            <li><strong>Apple (App Store) et Google (Google Play)</strong> — Traitement des paiements</li>
                          </ul>
                        </div>
                        <p>
                          <strong className="text-[#3B82F6]">Autorités compétentes :</strong> sur réquisition judiciaire ou obligation légale.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">5.2 Transferts hors Union européenne</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        Supabase et RevenueCat sont des sociétés américaines. Les transferts de données vers ces prestataires sont encadrés par les Clauses Contractuelles Types (CCT) approuvées par la Commission européenne, conformément au RGPD. Vous pouvez obtenir plus d'informations en nous contactant à l'adresse <a href="mailto:contact@pupytracker.app" className="text-[#3B82F6] hover:underline">contact@pupytracker.app</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Article 6 */}
              <section id="article6" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 6 – Sécurité des données</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li>Chiffrement des données en transit (TLS/HTTPS) et au repos ;</li>
                    <li>Contrôle d'accès strict aux données internes ;</li>
                    <li>Surveillance et journalisation des accès ;</li>
                    <li>Procédures de gestion des incidents de sécurité.</li>
                  </ul>
                  <p className="mt-4">
                    En cas de violation de données, nous notifierons l'autorité compétente (CNIL) dans les 72 heures, et vous en informerons si le risque est élevé.
                  </p>
                </div>
              </section>

              {/* Article 7 */}
              <section id="article7" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 7 – Vos droits</h2>
                <div className="space-y-6 text-[#3B82F6]/80 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">7.1 Droits applicables (RGPD – utilisateurs UE)</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li><strong>Droit d'accès :</strong> obtenir une copie de vos données ;</li>
                        <li><strong>Droit de rectification :</strong> corriger des données inexactes ;</li>
                        <li><strong>Droit à l'effacement :</strong> demander la suppression ;</li>
                        <li><strong>Droit à la limitation du traitement</strong> ;</li>
                        <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré ;</li>
                        <li><strong>Droit d'opposition :</strong> s'opposer à certains traitements ;</li>
                        <li><strong>Droit de retrait du consentement</strong> : à tout moment.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">7.2 Droits spécifiques – Californie (CCPA)</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p>
                        Les résidents californiens disposent de droits supplémentaires : droit de savoir, droit de suppression, droit d'opt-out de la vente (nous ne vendons pas vos données), et droit à la non-discrimination.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3B82F6] mb-3">7.3 Exercice de vos droits</h3>
                    <div className="pl-4 border-l-4 border-[#3B82F6]/30">
                      <p className="mb-3">
                        Pour exercer vos droits, contactez-nous à l'adresse <a href="mailto:contact@pupytracker.app" className="text-[#3B82F6] hover:underline">contact@pupytracker.app</a>. Nous répondrons dans un délai d'un mois (pouvant être prolongé à trois mois). Une pièce d'identité pourra être demandée.
                      </p>
                      <p>
                        Vous avez également le droit d'introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">www.cnil.fr</a>) pour la France, ou auprès de l'autorité de protection des données de votre pays.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Article 8 */}
              <section id="article8" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 8 – Cookies et technologies similaires</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>
                    PupyTracker est une application mobile. Elle n'utilise pas de cookies au sens traditionnel. Cependant, elle peut utiliser des identifiants de suivi propres aux appareils mobiles (IDFA sur iOS, GAID sur Android) à des fins d'analyse d'usage, sous réserve de votre consentement.
                  </p>
                  <p>Vous pouvez désactiver ces identifiants dans les paramètres de votre appareil :</p>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li><strong>iOS :</strong> Réglages &gt; Confidentialité et sécurité &gt; Suivi ;</li>
                    <li><strong>Android :</strong> Paramètres &gt; Confidentialité &gt; Annonces.</li>
                  </ul>
                </div>
              </section>

              {/* Article 9 */}
              <section id="article9" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 9 – Modifications de la Politique de Confidentialité</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>
                    Nous nous réservons le droit de modifier la présente Politique de Confidentialité pour nous conformer à l'évolution de la réglementation. En cas de modification substantielle, vous serez informé par notification in-app ou par e-mail au moins 30 jours avant l'entrée en vigueur des nouvelles dispositions.
                  </p>
                  <p>
                    La version en vigueur est toujours disponible dans l'application, dans la section « Confidentialité ».
                  </p>
                </div>
              </section>

              {/* Article 10 */}
              <section id="article10" className="mb-12 scroll-mt-8 border-t border-[#3B82F6]/20 pt-12">
                <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Article 10 – Contact</h2>
                <div className="space-y-4 text-[#3B82F6]/80 leading-relaxed">
                  <p>
                    Pour toute question relative à la présente Politique de Confidentialité ou au traitement de vos données personnelles, vous pouvez contacter :
                  </p>
                  <div className="bg-[#3B82F6]/5 rounded-lg p-6 space-y-3">
                    <div>
                      <p className="font-semibold text-[#3B82F6] mb-1">E-mail :</p>
                      <p><a href="mailto:contact@pupytracker.app" className="text-[#3B82F6] hover:underline">contact@pupytracker.app</a></p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#3B82F6] mb-1">Courrier :</p>
                      <p>Benjamin Dombry – Service Protection des Données, 76650</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer note */}
              <div className="mt-16 pt-8 border-t border-[#3B82F6]/20">
                <p className="text-[#3B82F6]/60 text-sm text-center">
                  Benjamin Dombry — PupyTracker — Politique de confidentialité version du 7 avril 2026<br />
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
