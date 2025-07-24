import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  ShieldCheck, Lock, User, Building2, 
  ChevronRight, Mail, Phone, Clock, 
  ChevronDown, ChevronUp, ArrowLeft 
} from 'lucide-react';

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = useState({
    dataCollection: true,
    dataUsage: false,
    dataSharing: false,
    dataSecurity: false,
    userRights: false,
    cookies: false
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
              <ShieldCheck className="w-12 h-12 text-blue-800" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
            <p className="text-xl text-blue-200 max-w-3xl">
              Dernière mise à jour: 18 juin 2025 | Comment nous protégeons et utilisons vos informations
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Clock className="w-6 h-6 text-blue-800" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Introduction</h2>
              <p className="text-gray-600">
                Chez IMMOGEST, nous accordons une grande importance à la protection de vos données personnelles. 
                Cette politique explique comment nous collectons, utilisons, partageons et protégeons vos informations 
                lorsque vous utilisez nos services. En utilisant notre plateforme, vous acceptez les pratiques décrites 
                dans cette politique.
              </p>
            </div>
          </div>
        </div>

        {/* Sommaire */}
        <div className="bg-blue-50 rounded-2xl shadow p-6 mb-12 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <ChevronRight className="w-5 h-5 mr-2" />
            Sommaire
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('dataCollection')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                1. Données que nous collectons
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('dataUsage')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                2. Utilisation de vos données
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('dataSharing')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                3. Partage de vos données
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('dataSecurity')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                4. Sécurité des données
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('userRights')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                5. Vos droits
              </button>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
              <button 
                onClick={() => toggleSection('cookies')}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                6. Cookies et technologies similaires
              </button>
            </li>
          </ul>
        </div>

        {/* Contenu de la politique */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('dataCollection')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <User className="w-5 h-5 mr-3 text-blue-700" />
                1. Données que nous collectons
              </h2>
              {openSections.dataCollection ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.dataCollection && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                      Informations que vous nous fournissez
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Nom, prénom et coordonnées</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Adresse email et numéro de téléphone</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Informations de paiement</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Préférences et centres d'intérêt</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-700 mb-3 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                      Informations collectées automatiquement
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Adresse IP et données de navigation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Type d'appareil et système d'exploitation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Historique des interactions avec notre service</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-2"></div>
                        <span>Données de localisation (si autorisé)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  Nous ne collectons pas de données sensibles (origine raciale, opinions politiques, 
                  croyances religieuses, etc.) sans votre consentement explicite. La collecte des données 
                  est limitée à ce qui est nécessaire pour fournir et améliorer nos services.
                </p>
              </div>
            )}
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('dataUsage')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <div className="bg-blue-100 p-1 rounded mr-3">
                  <Mail className="w-5 h-5 text-blue-700" />
                </div>
                2. Utilisation de vos données
              </h2>
              {openSections.dataUsage ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.dataUsage && (
              <div className="p-6">
                <div className="bg-blue-50 rounded-lg p-5 mb-6">
                  <h3 className="font-bold text-blue-800 mb-3">Nous utilisons vos données pour :</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded mr-3 mt-1">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Fournir et maintenir nos services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded mr-3 mt-1">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Personnaliser votre expérience utilisateur</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded mr-3 mt-1">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Communiquer avec vous (support, mises à jour)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded mr-3 mt-1">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Améliorer nos services et développer de nouvelles fonctionnalités</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded mr-3 mt-1">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Prévenir la fraude et assurer la sécurité</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded mr-3 mt-1">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Analyser les tendances d'utilisation</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-600">
                  Toutes les utilisations de vos données sont basées sur des bases légales appropriées, 
                  notamment l'exécution d'un contrat, votre consentement ou nos intérêts légitimes. 
                  Nous ne traiterons jamais vos données à des fins incompatibles avec les objectifs 
                  décrits dans cette politique.
                </p>
              </div>
            )}
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('dataSharing')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <div className="bg-blue-100 p-1 rounded mr-3">
                  <User className="w-5 h-5 text-blue-700" />
                </div>
                3. Partage de vos données
              </h2>
              {openSections.dataSharing ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.dataSharing && (
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations 
                  dans les cas suivants :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="border border-blue-100 rounded-lg p-4 text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building2 className="w-6 h-6 text-blue-800" />
                    </div>
                    <h3 className="font-bold text-gray-700 mb-2">Prestataires de services</h3>
                    <p className="text-sm text-gray-600">
                      Sociétés qui nous aident à fournir nos services (hébergement, paiement, etc.)
                    </p>
                  </div>
                  
                  <div className="border border-blue-100 rounded-lg p-4 text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ShieldCheck className="w-6 h-6 text-blue-800" />
                    </div>
                    <h3 className="font-bold text-gray-700 mb-2">Obligations légales</h3>
                    <p className="text-sm text-gray-600">
                      Lorsque requis par la loi ou pour protéger nos droits et notre sécurité
                    </p>
                  </div>
                  
                  <div className="border border-blue-100 rounded-lg p-4 text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="w-6 h-6 text-blue-800" />
                    </div>
                    <h3 className="font-bold text-gray-700 mb-2">Avec votre consentement</h3>
                    <p className="text-sm text-gray-600">
                      Lorsque vous nous donnez explicitement votre accord
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  Tous nos prestataires sont soumis à des accords de confidentialité stricts et ne sont 
                  autorisés à utiliser vos données que pour fournir les services que nous leur avons demandés.
                </p>
              </div>
            )}
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('dataSecurity')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Lock className="w-5 h-5 mr-3 text-blue-700" />
                4. Sécurité des données
              </h2>
              {openSections.dataSecurity ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.dataSecurity && (
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-700 mb-3">Mesures techniques</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></div>
                        <span>Chiffrement des données en transit et au repos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></div>
                        <span>Contrôles d'accès stricts</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></div>
                        <span>Sauvegardes régulières</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-700 mb-3">Mesures organisationnelles</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></div>
                        <span>Formation du personnel à la protection des données</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></div>
                        <span>Politiques de sécurité strictes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-2"></div>
                        <span>Audits de sécurité réguliers</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <p className="text-yellow-700">
                    Malgré nos mesures de sécurité, aucune transmission de données sur Internet n'est 
                    totalement sécurisée. Nous ne pouvons garantir la sécurité absolue des informations 
                    transmises à notre service.
                  </p>
                </div>
                
                <p className="text-gray-600">
                  En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits 
                  et libertés, nous vous en informerons dans les meilleurs délais, comme l'exige la loi.
                </p>
              </div>
            )}
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('userRights')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-3 text-blue-700" />
                5. Vos droits
              </h2>
              {openSections.userRights ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.userRights && (
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à d'autres 
                  lois applicables, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    { 
                      title: "Droit d'accès", 
                      desc: "Obtenir une copie de vos données personnelles que nous détenons" 
                    },
                    { 
                      title: "Droit de rectification", 
                      desc: "Corriger les données incomplètes ou inexactes" 
                    },
                    { 
                      title: "Droit à l'effacement", 
                      desc: "Demander la suppression de vos données dans certaines circonstances" 
                    },
                    { 
                      title: "Droit à la limitation", 
                      desc: "Restreindre le traitement de vos données dans certains cas" 
                    },
                    { 
                      title: "Droit à la portabilité", 
                      desc: "Recevoir vos données dans un format structuré et lisible" 
                    },
                    { 
                      title: "Droit d'opposition", 
                      desc: "Vous opposer au traitement de vos données personnelles" 
                    }
                  ].map((right, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                      <h3 className="font-bold text-gray-700 mb-2">{right.title}</h3>
                      <p className="text-sm text-gray-600">{right.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-bold text-blue-800 mb-3">Exercer vos droits</h3>
                  <p className="text-gray-600 mb-4">
                    Pour exercer l'un de ces droits, veuillez nous contacter à l'adresse suivante :
                  </p>
                  <div className="flex items-center text-blue-700 mb-2">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>privacy@immogest.com</span>
                  </div>
                  <p className="text-gray-600">
                    Nous répondrons à votre demande dans un délai d'un mois. Veuillez noter que nous pouvons 
                    vous demander une preuve d'identité pour traiter votre demande.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <button 
              className="w-full flex justify-between items-center p-6 bg-blue-50 hover:bg-blue-100 transition"
              onClick={() => toggleSection('cookies')}
            >
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <div className="bg-blue-100 p-1 rounded mr-3">
                  <div className="w-5 h-5 text-blue-700">🍪</div>
                </div>
                6. Cookies et technologies similaires
              </h2>
              {openSections.cookies ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </button>
            
            {openSections.cookies && (
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience, 
                  analyser notre trafic et personnaliser le contenu. Vous pouvez gérer vos préférences via 
                  notre bannière de consentement ou les paramètres de votre navigateur.
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Type</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Finalité</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Exemples</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700 border-b">Essentiels</td>
                        <td className="py-3 px-4 text-sm text-gray-600 border-b">Fonctionnalités de base du site</td>
                        <td className="py-3 px-4 text-sm text-gray-600 border-b">Authentification, panier</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700 border-b">Performance</td>
                        <td className="py-3 px-4 text-sm text-gray-600 border-b">Analyse d'utilisation</td>
                        <td className="py-3 px-4 text-sm text-gray-600 border-b">Google Analytics</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700 border-b">Fonctionnels</td>
                        <td className="py-3 px-4 text-sm text-gray-600 border-b">Personnalisation</td>
                        <td className="py-3 px-4 text-sm text-gray-600 border-b">Préférences de langue</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700 border-b">Publicitaires</td>
                        <td className="py-3 px-4 text-sm text-gray-600 border-b">Publicité ciblée</td>
                        <td className="py-3 px-4 text-sm text-gray-600 border-b">Cookies de réseaux publicitaires</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-600">
                  Vous pouvez refuser les cookies non essentiels via notre bannière de consentement. 
                  Notez que le refus de certains cookies peut affecter certaines fonctionnalités de notre site.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact et mise à jour */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-12 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact</h3>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
                veuillez nous contacter :
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                  <span>privacy@immogest.com</span>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="w-5 h-5 text-blue-700 mr-3 mt-1" />
                  <span>IMMOGEST SAS<br />123 Avenue des Champs-Élysées<br />75008 Paris, France</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mise à jour de la politique</h3>
              <p className="text-gray-600 mb-4">
                Nous pouvons mettre à jour cette politique occasionnellement pour refléter les changements 
                dans nos pratiques ou pour des raisons légales. Nous publierons la version mise à jour sur 
                notre site avec une nouvelle date de "Dernière mise à jour".
              </p>
              <p className="text-gray-600">
                Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la 
                manière dont nous protégeons vos informations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;