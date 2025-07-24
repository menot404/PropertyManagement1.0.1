import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, User, Home, ChevronDown, ChevronUp, 
  Plus, Trash2, Edit, Check, X, Search, ArrowRight, ChevronRight, 
  ChevronLeft, Filter, Sliders, Phone, Mail, Building2
} from 'lucide-react';

const AppointmentPage = () => {
  // États pour les rendez-vous
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      property: 'Villa moderne avec piscine',
      date: '2023-12-15',
      time: '10:00',
      agent: 'Jean Dupont',
      status: 'confirmé', // confirmé, en attente, annulé
      notes: 'Préparer les documents de la propriété'
    },
    {
      id: 2,
      property: 'Appartement standing centre-ville',
      date: '2023-12-18',
      time: '14:30',
      agent: 'Marie Martin',
      status: 'en attente',
      notes: 'Le client veut voir le parking'
    },
    {
      id: 3,
      property: 'Bureau équipé prêt à emménager',
      date: '2023-12-20',
      time: '11:00',
      agent: 'Thomas Bernard',
      status: 'annulé',
      notes: 'Client a changé d\'avis'
    },
  ]);

  // État pour le formulaire de nouveau rendez-vous
  const [newAppointment, setNewAppointment] = useState({
    property: '',
    date: '',
    time: '',
    notes: ''
  });

  // État pour l'affichage du formulaire
  const [showForm, setShowForm] = useState(false);

  // État pour l'affichage mobile
  const [activeTab, setActiveTab] = useState('list'); // 'list' ou 'form'
  
  // État pour les filtres
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: '',
    agent: ''
  });

  // Propriétés disponibles pour les rendez-vous
  const availableProperties = [
    'Villa moderne avec piscine',
    'Appartement standing centre-ville',
    'Bureau équipé prêt à emménager',
    'Terrain Agricol Disponible',
    'Appartement moderne centre-ville',
    'Bureau spacieux avec vue',
    'Terrain constructible',
    'Commerce en plein centre'
  ];

  // Agents disponibles
  const agents = [
    { id: 1, name: 'Abdoul Kader DIALLO', phone: '+226 70 12 34 56' },
    { id: 2, name: 'Idriss MBA SINON', phone: '+226 70 65 43 21' },
    { id: 3, name: 'Esther BILA', phone: '+226 70 98 76 54' }
  ];

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({
      ...newAppointment,
      [name]: value
    });
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newApp = {
      id: Date.now(), // génération d'un id unique
      ...newAppointment,
      status: 'en attente',
      agent: 'À assigner'
    };
    
    setAppointments([...appointments, newApp]);
    
    // Réinitialiser le formulaire
    setNewAppointment({
      property: '',
      date: '',
      time: '',
      notes: ''
    });
    
    setShowForm(false);
    setActiveTab('list');
  };

  // Suppression d'un rendez-vous
  const handleDelete = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  // Confirmation d'un rendez-vous
  const handleConfirm = (id) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: 'confirmé' } : app
    ));
  };

  // Annulation d'un rendez-vous
  const handleCancel = (id) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: 'annulé' } : app
    ));
  };

  // Filtrage des rendez-vous
  const filteredAppointments = appointments.filter(app => {
    if (filters.status !== 'all' && app.status !== filters.status) return false;
    // Ajouter d'autres conditions de filtrage ici
    return true;
  });

  // Composant de carte de rendez-vous
  const AppointmentCard = ({ appointment }) => (
    <div className={`border rounded-xl p-6 mb-6 ${
      appointment.status === 'confirmé' 
        ? 'border-green-500 bg-green-50' 
        : appointment.status === 'en attente'
          ? 'border-yellow-500 bg-yellow-50'
          : 'border-red-500 bg-red-50'
    }`}>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center mb-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              appointment.status === 'confirmé' 
                ? 'bg-green-100 text-green-800'
                : appointment.status === 'en attente'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
            }`}>
              {appointment.status}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900">
            {appointment.property}
          </h3>
          
          <div className="flex items-center text-gray-600 mt-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span>
              {new Date(appointment.date).toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-2" />
            <span>{appointment.time}</span>
          </div>
          
          <div className="flex items-center text-gray-600 mt-2">
            <User className="h-4 w-4 mr-2" />
            <span>Avec {appointment.agent}</span>
          </div>
          
          {appointment.notes && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                <span className="font-medium">Notes :</span> {appointment.notes}
              </p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col space-y-2">
          {appointment.status === 'en attente' && (
            <>
              <button
                onClick={() => handleConfirm(appointment.id)}
                className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                <Check className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleCancel(appointment.id)}
                className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </>
          )}
          <button
            onClick={() => handleDelete(appointment.id)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Trash2 className="h-5 w-5 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gestion des Rendez-vous
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Planifiez, gérez et suivez vos visites de propriétés
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tabs pour mobile */}
            <div className="md:hidden flex border-b">
              <button
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'list'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('list')}
              >
                Mes Rendez-vous
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === 'form'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('form')}
              >
                Nouveau RDV
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Liste des rendez-vous */}
              <div 
                className={`w-full md:w-2/3 p-6 ${activeTab === 'list' ? 'block' : 'hidden md:block'}`}
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Mes Rendez-vous
                    </h2>
                    <p className="text-gray-600">
                      {filteredAppointments.length} rendez-vous planifiés
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {/* Filtres */}
                    <div className="relative">
                      <select 
                        className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-blue-500"
                        value={filters.status}
                        onChange={(e) => setFilters({...filters, status: e.target.value})}
                      >
                        <option value="all">Tous les statuts</option>
                        <option value="confirmé">Confirmés</option>
                        <option value="en attente">En attente</option>
                        <option value="annulé">Annulés</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                    
                    <button
                      className="md:hidden flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
                      onClick={() => setActiveTab('form')}
                    >
                      <Plus className="h-5 w-5" />
                      <span>Nouveau</span>
                    </button>
                  </div>
                </div>
                
                {/* Liste des rendez-vous */}
                {filteredAppointments.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="bg-gray-100 rounded-full p-4 inline-block">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mt-4">
                      Aucun rendez-vous prévu
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Planifiez votre premier rendez-vous dès maintenant
                    </p>
                    <button 
                      className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
                      onClick={() => {
                        setShowForm(true);
                        setActiveTab('form');
                      }}
                    >
                      Prendre rendez-vous
                    </button>
                  </div>
                ) : (
                  <div>
                    {filteredAppointments.map(appointment => (
                      <AppointmentCard 
                        key={appointment.id} 
                        appointment={appointment} 
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Formulaire de nouveau rendez-vous */}
              <div 
                className={`w-full md:w-1/3 bg-gray-50 p-6 border-l border-gray-200 ${
                  activeTab === 'form' ? 'block' : 'hidden md:block'
                }`}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Planifier un nouveau rendez-vous
                  </h2>
                  <button 
                    className="md:hidden text-gray-500"
                    onClick={() => setActiveTab('list')}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {/* Propriété */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Propriété
                      </label>
                      <div className="relative">
                        <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <select
                          name="property"
                          value={newAppointment.property}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                          required
                        >
                          <option value="">Sélectionnez une propriété</option>
                          {availableProperties.map(prop => (
                            <option key={prop} value={prop}>{prop}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Date et heure */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="date"
                            name="date"
                            value={newAppointment.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Heure
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="time"
                            name="time"
                            value={newAppointment.time}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Notes (optionnel)
                      </label>
                      <textarea
                        name="notes"
                        value={newAppointment.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Informations supplémentaires..."
                      />
                    </div>
                    
                    {/* Agents de contact */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">
                        Agents disponibles
                      </h3>
                      <div className="space-y-3">
                        {agents.map(agent => (
                          <div key={agent.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                            <div>
                              <div className="font-medium text-gray-900">{agent.name}</div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Phone className="h-4 w-4 mr-1" />
                                <span>{agent.phone}</span>
                              </div>
                            </div>
                            <button 
                              type="button"
                              className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
                            >
                              Contacter
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bouton de soumission */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Planifier le rendez-vous
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section d'aide */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'aide avec vos rendez-vous ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour vous accompagner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contact téléphonique
              </h3>
              <p className="text-gray-600 mb-4">
                Appelez-nous pour toute question ou modification
              </p>
              <div className="text-blue-600 font-medium">
                +226 57 28 80 06
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contact par email
              </h3>
              <p className="text-gray-600 mb-4">
                Écrivez-nous et nous vous répondrons rapidement
              </p>
              <div className="text-blue-600 font-medium">
                contact@immogest-bf.com
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Visitez notre agence
              </h3>
              <p className="text-gray-600 mb-4">
                Rencontrez nos agents pour un conseil personnalisé
              </p>
              <div className="text-blue-600 font-medium">
                Ouagadougou, Secteur 15
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;