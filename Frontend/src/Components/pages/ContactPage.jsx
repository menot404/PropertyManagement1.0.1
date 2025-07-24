import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, User, MessageSquare, 
  Building, Calendar, CheckCircle, AlertCircle, Facebook, 
  Twitter, Instagram, Linkedin, Car, Home, Users, Award
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    typeContact: 'general',
    message: '',
    newsletter: false
  });

  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Informations de contact
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        'Avenue Kwame Nkrumah',
        'Secteur 4, Ouagadougou',
        'Burkina Faso'
      ],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: [
        '+226 25 30 45 67',
        '+226 70 12 34 56',
        'Urgence: +226 76 98 76 54'
      ],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'contact@immogest.bf',
        'info@immogest.bf',
        'commercial@immogest.bf'
      ],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: [
        'Lun - Ven: 8h00 - 18h00',
        'Samedi: 8h00 - 16h00',
        'Dimanche: Sur rendez-vous'
      ],
      color: 'text-orange-600'
    }
  ];

  // Types de contact
  const contactTypes = [
    { value: 'general', label: 'Demande générale' },
    { value: 'achat', label: 'Achat de propriété' },
    { value: 'vente', label: 'Vendre ma propriété' },
    { value: 'location', label: 'Location' },
    { value: 'estimation', label: 'Estimation gratuite' },
    { value: 'conseil', label: 'Conseil immobilier' },
    { value: 'autre', label: 'Autre' }
  ];

  // Équipe commerciale
  const salesTeam = [
    {
      name: 'Aminata Ouedraogo',
      role: 'Directrice Commerciale',
      phone: '+226 70 12 34 56',
      email: 'aminata@immogest.bf',
      specialties: ['Villas de luxe', 'Propriétés commerciales'],
      image: 'src/assets/imgs/employes/Anima.jpg'
    },
    {
      name: 'Moussa Kaboré',
      role: 'Conseiller Senior',
      phone: '+226 76 45 67 89',
      email: 'moussa@immogest.bf',
      specialties: ['Appartements', 'Investissement locatif'],
      image: 'src/assets/imgs/employes/Moussa.jpg'
    },
    {
      name: 'Fatou Sawadogo',
      role: 'Spécialiste Location',
      phone: '+226 78 90 12 34',
      email: 'fatou@immogest.bf',
      specialties: ['Locations résidentielles', 'Locations meublées'],
      image: 'src/assets/imgs/employes/Fatima.jpg'
    }
  ];

  // Statistiques rapides
  const quickStats = [
    { icon: Building, value: '500+', label: 'Propriétés gérées' },
    { icon: Users, value: '2,500+', label: 'Clients satisfaits' },
    { icon: Award, value: '15+', label: 'Années d\'expérience' },
    { icon: Car, value: '24h/7j', label: 'Service client' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    // Validation simple
    if (!formData.nom || !formData.prenom || !formData.email || !formData.sujet || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulation d'envoi
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: '',
        typeContact: 'general',
        message: '',
        newsletter: false
      });
    } catch (error) {
      setFormStatus(`${error}`);
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Notre équipe d'experts est là pour vous accompagner dans tous vos projets immobiliers
            </p>
            
            {/* Statistiques rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section principale de contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800">
                    Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </span>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-800">
                    Une erreur s'est produite. Veuillez réessayer plus tard.
                  </span>
                </div>
              )}

              <div className="space-y-6">
                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                {/* Email et Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+226 XX XX XX XX"
                    />
                  </div>
                </div>

                {/* Type de contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de demande *
                  </label>
                  <select
                    name="typeContact"
                    required
                    value={formData.typeContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {contactTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sujet */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    name="sujet"
                    required
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Objet de votre message"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                {/* Newsletter */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                    Je souhaite recevoir les actualités et offres spéciales d'ImmoGest
                  </label>
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                  <span>
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </span>
                </button>
              </div>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              {/* Coordonnées */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100`}>
                          <Icon className={`h-6 w-6 ${info.color}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 ml-3">
                          {info.title}
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, name: 'Facebook', color: 'text-blue-600' },
                    { icon: Instagram, name: 'Instagram', color: 'text-pink-600' },
                    { icon: Twitter, name: 'Twitter', color: 'text-sky-500' },
                    { icon: Linkedin, name: 'LinkedIn', color: 'text-blue-700' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <button
                        key={index}
                        className="p-3 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 group"
                      >
                        <Icon className={`h-5 w-5 ${social.color} group-hover:scale-110 transition-transform`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Carte (placeholder) */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Notre localisation
                </h3>
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Carte interactive</p>
                    <p className="text-sm text-gray-500">Avenue Kwame Nkrumah, Ouagadougou</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe commerciale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre équipe commerciale
            </h2>
            <p className="text-xl text-gray-600">
              Des experts dédiés à votre réussite immobilière
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salesTeam.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                
                <div className="space-y-2 mb-4">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Spécialisations :</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Rapide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Quels sont vos frais d'agence ?",
                answer: "Nos frais varient selon le type de transaction. Pour une vente, ils sont généralement de 3% du prix de vente. Pour une location, ils correspondent à un mois de loyer. Contactez-nous pour un devis personnalisé."
              },
              {
                question: "Proposez-vous des visites virtuelles ?",
                answer: "Oui, nous proposons des visites virtuelles 360° pour la plupart de nos propriétés. Vous pouvez également planifier des visites vidéo en direct avec nos conseillers."
              },
              {
                question: "Accompagnez-vous dans les démarches administratives ?",
                answer: "Absolument ! Nous vous accompagnons dans toutes les démarches : recherche de financement, négociation, rédaction des contrats, et suivi jusqu'à la signature définitive."
              },
              {
                question: "Quels sont vos délais de réponse ?",
                answer: "Nous nous engageons à répondre à toute demande dans les 24h ouvrées. Pour les urgences, notre équipe est joignable 7j/7."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            N'attendez plus ! Contactez-nous dès maintenant pour une consultation gratuite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to={"/rende-vous"}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Prendre rendez-vous</span>
            </NavLink>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Appeler maintenant</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
