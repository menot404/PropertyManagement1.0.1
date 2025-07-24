import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  FileText, ClipboardCheck, User, CreditCard, 
  Shield, AlertCircle, ChevronDown, ChevronUp,
  ChevronRight, ChevronLeft, ArrowLeft, BookOpen,
  HelpCircle, Mail, Phone, Building2, Globe
} from 'lucide-react';

const TermsOfService = () => {
  const [openSections, setOpenSections] = useState({
    acceptance: true,
    account: false,
    payments: false,
    content: false,
    liability: false,
    termination: false,
    modifications: false,
    governingLaw: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Building2 className="w-10 h-10 mr-3 text-white" />
              <h1 className="text-2xl font-bold">IMMOGEST</h1>
            </div>
            <NavLink to="/" className="flex items-center text-blue-200 hover:text-white transition">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour à l'accueil
            </NavLink>
          </div>
          
          <div className="flex flex-col items-center text-center py-6">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <FileText className="w-12 h-12 text-blue-800" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
            <p className="text-xl text-blue-200 max-w-3xl">
              Dernière mise à jour: 18 juin 2025 | Règles et conditions régissant l'utilisation de nos services
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <BookOpen className="w-6 h-6 text-blue-800" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Introduction</h2>
              <p className="text-gray-600">
                Bienvenue sur IMMOGEST, votre plateforme immobilière complète. Ces Conditions Générales d'Utilisation (CGU) 
                régissent votre accès et votre utilisation des services fournis par IMMOGEST SAS. En accédant ou en utilisant 
                notre plateforme, vous acceptez d'être lié par ces CGU. Si vous n'acceptez pas toutes ces conditions, 
                veuillez ne pas utiliser nos services.
              </p>
            </div>
          </div>
        </div>

        {/* Sommaire */}
        <div className="bg-blue-50 rounded-2xl shadow p-6 mb-12 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <ChevronRight className="w-5 h-5 mr-2" />
            Table des matières
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('acceptance')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                1. Acceptation des conditions
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('account')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                2. Compte utilisateur
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('payments')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                3. Paiements et abonnements
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('content')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                4. Contenu et propriété intellectuelle
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('liability')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                5. Limitations de responsabilité
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('termination')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                6. Résiliation
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('modifications')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                7. Modifications des CGU
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('governingLaw')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                8. Droit applicable et juridiction
              </button>
            </li>
          </ul>
        </div>

        {/* Contenu des CGU */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('acceptance')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <ClipboardCheck className="w-5 h-5 mr-3 text-blue-700" />
                1. Acceptation des conditions
              </h2>
              {openSections.acceptance ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.acceptance && (
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Portée des CGU</h3>
                  <p className="text-gray-600">
                    Les présentes Conditions Générales d'Utilisation s'appliquent à tous les services fournis par 
                    IMMOGEST SAS, y compris mais sans s'y limiter :
                  </p>
                  <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-600">
                    <li>La plateforme web IMMOGEST et ses fonctionnalités</li>
                    <li>Les applications mobiles associées</li>
                    <li>Les services complémentaires proposés</li>
                    <li>Toute interaction avec notre support client</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-bold text-blue-800 mb-3">Acceptation obligatoire</h3>
                  <p className="text-gray-600">
                    En créant un compte ou en utilisant nos services, vous déclarez avoir lu, compris et accepté 
                    sans réserve l'intégralité de ces CGU. Si vous utilisez nos services au nom d'une entreprise 
                    ou d'une organisation, vous déclarez avoir l'autorité nécessaire pour lier cette entité à ces CGU.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('account')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <User className="w-5 h-5 mr-3 text-blue-700" />
                2. Compte utilisateur
              </h2>
              {openSections.account ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.account && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                      Création de compte
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Vous devez être âgé d'au moins 18 ans</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Fournir des informations exactes et à jour</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Protéger vos identifiants de connexion</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Un seul compte par personne physique</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                      Responsabilités du compte
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Vous êtes responsable de toutes les activités sur votre compte</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Signalez immédiatement tout accès non autorisé</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Nous nous réservons le droit de suspendre les comptes suspects</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Conservez une copie de vos transactions importantes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('payments')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <CreditCard className="w-5 h-5 mr-3 text-blue-700" />
                3. Paiements et abonnements
              </h2>
              {openSections.payments ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.payments && (
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Frais de service</h3>
                  <p className="text-gray-600">
                    L'accès à certaines fonctionnalités premium d'IMMOGEST nécessite un abonnement payant. 
                    Les tarifs applicables sont indiqués sur notre plateforme au moment de la souscription.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="border border-blue-100 rounded-lg p-4">
                    <h3 className="font-bold text-gray-700 mb-2 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                      Facturation
                    </h3>
                    <p className="text-sm text-gray-600">
                      Les paiements sont facturés d'avance et récurrents selon le cycle choisi (mensuel, annuel).
                    </p>
                  </div>
                  
                  <div className="border border-blue-100 rounded-lg p-4">
                    <h3 className="font-bold text-gray-700 mb-2 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                      Renouvellement
                    </h3>
                    <p className="text-sm text-gray-600">
                      Les abonnements se renouvellent automatiquement à la fin de chaque période.
                    </p>
                  </div>
                  
                  <div className="border border-blue-100 rounded-lg p-4">
                    <h3 className="font-bold text-gray-700 mb-2 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                      Résiliation
                    </h3>
                    <p className="text-sm text-gray-600">
                      Vous pouvez résilier à tout moment, sans frais, pour la prochaine période.
                    </p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-700 mr-3 mt-0.5" />
                    <p className="text-yellow-700">
                      Aucun remboursement n'est possible pour les périodes déjà écoulées. 
                      Les frais de résiliation anticipée peuvent s'appliquer pour certains contrats professionnels.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('content')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Shield className="w-5 h-5 mr-3 text-blue-700" />
                4. Contenu et propriété intellectuelle
              </h2>
              {openSections.content ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.content && (
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Droits d'IMMOGEST</h3>
                  <p className="text-gray-600">
                    Tous les éléments de la plateforme IMMOGEST (design, texte, graphiques, logos, logiciels) 
                    sont la propriété exclusive d'IMMOGEST SAS ou de ses concédants de licence et sont protégés 
                    par les lois sur la propriété intellectuelle.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Licence d'utilisation</h3>
                  <p className="text-gray-600">
                    IMMOGEST vous accorde une licence limitée, non exclusive, non transférable et révocable 
                    pour accéder et utiliser nos services conformément à ces CGU. Cette licence ne vous accorde 
                    aucun droit de propriété sur nos services ou leur contenu.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Contenu utilisateur</h3>
                  <p className="text-gray-600">
                    En publiant du contenu sur notre plateforme, vous nous accordez une licence mondiale, 
                    non exclusive, libre de redevances, avec droit de sous-licence, pour utiliser, copier, 
                    modifier, créer des œuvres dérivées, distribuer et afficher ce contenu dans le cadre de 
                    l'exploitation de nos services.
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-700 mr-3 mt-0.5" />
                    <p className="text-red-700">
                      Vous vous engagez à ne pas publier de contenu illégal, diffamatoire, frauduleux ou 
                      portant atteinte aux droits de tiers. IMMOGEST se réserve le droit de supprimer tout 
                      contenu non conforme sans préavis.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('liability')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <AlertCircle className="w-5 h-5 mr-3 text-blue-700" />
                5. Limitations de responsabilité
              </h2>
              {openSections.liability ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.liability && (
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Utilisation du service</h3>
                  <p className="text-gray-600">
                    Vous utilisez notre service à vos propres risques. Nos services sont fournis "tels quels" 
                    et "selon disponibilité". Dans toute la mesure permise par la loi, IMMOGEST décline 
                    toutes garanties, expresses ou implicites, y compris les garanties de qualité marchande, 
                    d'adéquation à un usage particulier et de non-contrefaçon.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3">Limitation de responsabilité</h3>
                    <p className="text-gray-600">
                      En aucun cas IMMOGEST ne sera responsable des dommages directs, indirects, accessoires, 
                      spéciaux, consécutifs ou exemplaires résultant de l'utilisation ou de l'impossibilité 
                      d'utiliser nos services.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3">Information immobilière</h3>
                    <p className="text-gray-600">
                      IMMOGEST ne garantit pas l'exactitude, l'exhaustivité ou la fiabilité des informations 
                      immobilières fournies sur la plateforme. Vous devez vérifier indépendamment toute 
                      information avant de prendre des décisions.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-bold text-blue-800 mb-3">Responsabilité maximale</h3>
                  <p className="text-gray-600">
                    Dans la mesure permise par la loi, la responsabilité totale d'IMMOGEST envers vous pour 
                    toute réclamation au titre des présentes CGU, quel qu'en soit le fondement, est limitée 
                    au montant que vous avez payé pour utiliser le service concerné au cours des six derniers 
                    mois.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('termination')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <div className="bg-blue-100 p-1 rounded mr-3">
                  <div className="w-5 h-5 text-blue-700">✖</div>
                </div>
                6. Résiliation
              </h2>
              {openSections.termination ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.termination && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3">Par l'utilisateur</h3>
                    <p className="text-gray-600 mb-4">
                      Vous pouvez résilier votre compte à tout moment via les paramètres de votre compte ou 
                      en nous contactant à support@immogest.com.
                    </p>
                    <p className="text-gray-600">
                      La résiliation prend effet immédiatement, sauf pour les abonnements payants qui 
                      continueront jusqu'à la fin de la période de facturation en cours.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3">Par IMMOGEST</h3>
                    <p className="text-gray-600 mb-4">
                      Nous pouvons suspendre ou résilier votre accès à nos services à tout moment, sans préavis, 
                      pour quelque raison que ce soit, notamment en cas de violation de ces CGU.
                    </p>
                    <p className="text-gray-600">
                      En cas de résiliation pour faute grave, aucun remboursement ne sera accordé.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-5">
                  <h3 className="font-bold text-gray-800 mb-3">Effets de la résiliation</h3>
                  <p className="text-gray-600">
                    Après résiliation, votre droit d'utiliser nos services cessera immédiatement. 
                    Les dispositions qui, par leur nature, doivent survivre à la résiliation, 
                    notamment celles relatives à la propriété intellectuelle, aux limitations de responsabilité 
                    et à la loi applicable, resteront en vigueur.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('modifications')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <div className="bg-blue-100 p-1 rounded mr-3">
                  <div className="w-5 h-5 text-blue-700">🔄</div>
                </div>
                7. Modifications des CGU
              </h2>
              {openSections.modifications ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.modifications && (
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Droit de modification</h3>
                  <p className="text-gray-600">
                    Nous nous réservons le droit de modifier ces CGU à tout moment. Si nous apportons des 
                    changements matériels, nous vous en informerons par e-mail (adresse associée à votre compte) 
                    ou via une notification sur notre plateforme, au moins 30 jours avant l'entrée en vigueur 
                    des modifications.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-bold text-blue-800 mb-3">Acceptation continue</h3>
                  <p className="text-gray-600">
                    Votre utilisation continue de nos services après l'entrée en vigueur des modifications 
                    constitue votre acceptation des nouvelles CGU. Si vous n'acceptez pas les modifications, 
                    vous devez cesser d'utiliser nos services avant la date d'entrée en vigueur des modifications.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('governingLaw')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Globe className="w-5 h-5 mr-3 text-blue-700" />
                8. Droit applicable et juridiction
              </h2>
              {openSections.governingLaw ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.governingLaw && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3">Loi applicable</h3>
                    <p className="text-gray-600">
                      Les présentes CGU et votre utilisation de nos services sont régies et interprétées 
                      conformément aux lois françaises, sans égard à ses principes de conflits de lois.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3">Règlement des litiges</h3>
                    <p className="text-gray-600">
                      Tout litige découlant des présentes CGU ou lié à celles-ci sera soumis à la compétence 
                      exclusive des tribunaux de Paris, France.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Résolution amiable</h3>
                  <p className="text-gray-600">
                    Avant d'engager toute procédure judiciaire, les parties s'engagent à tenter de résoudre 
                    tout litige à l'amiable par voie de négociation ou de médiation.
                  </p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <div className="flex items-start">
                    <HelpCircle className="w-5 h-5 text-green-700 mr-3 mt-0.5" />
                    <p className="text-green-700">
                      Pour toute question relative à ces CGU ou à nos services, vous pouvez contacter notre 
                      service client à l'adresse support@immogest.com. Nous nous engageons à répondre 
                      dans les meilleurs délais.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact et acceptation */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-12 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Acceptation des CGU</h3>
              <p className="text-gray-600 mb-6">
                En utilisant nos services, vous déclarez avoir lu, compris et accepté l'intégralité 
                des présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, 
                veuillez ne pas utiliser nos services.
              </p>
              
              <div className="flex items-center text-gray-600">
                <ClipboardCheck className="w-5 h-5 mr-3 text-green-600" />
                <span>Date d'acceptation: 18 juin 2025</span>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact</h3>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant ces Conditions Générales d'Utilisation, 
                veuillez nous contacter :
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                  <span>legal@immogest.com</span>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                  <span>+33 1 23 45 67 90</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                  <span>IMMOGEST SAS<br />123 Avenue des Champs-Élysées<br />75008 Paris, France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;