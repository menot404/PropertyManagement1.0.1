import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Mail, Phone, MapPin, Calendar, Heart, Eye, 
  Settings, Lock, CreditCard, Bell, LogOut, Edit, 
  Star, Check, X, ArrowRight, ChevronRight, Building2,
  Shield, Info, HelpCircle, Plus, Search, Frown
} from 'lucide-react';

const UserDashboard = () => {
  // État pour les informations utilisateur avec photo de profil
  const [user, setUser] = useState({
    name: 'Idriss MBA SINON',
    email: 'moi@gmial.com',
    phone: '+226 55 45 49 46',
    address: 'Ouagadougou, Secteur 15',
    memberSince: '2022-05-15',
    avatar: '',  // Utilisation de l'import d'image
    notifications: true,
    verified: true
  });

  // État pour les propriétés favorites avec images
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'Villa moderne avec piscine',
      type: 'Villa',
      price: 95000000,
      priceType: 'vente',
      location: 'Ouaga 2000, Ouagadougou',
      image: './src/assets/imgs/properties/VillaAvecPis.jpg',  // Utilisation de l'import d'image
      addedDate: '2023-11-15'
    },
    {
      id: 2,
      title: 'Appartement standing centre-ville',
      type: 'Appartement',
      price: 650000,
      priceType: 'location',
      location: 'Zone du Bois, Ouagadougou',
      image: './src/assets/imgs/properties/standing.jpg',  // Utilisation de l'import d'image
      addedDate: '2023-11-10'
    }
  ]);

  // État pour les rendez-vous
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      property: 'Villa moderne avec piscine',
      date: '2023-12-15',
      time: '10:00',
      agent: 'Abdoul Kader DIALLO',
      status: 'confirmé'
    },
    {
      id: 2,
      property: 'Bureau équipé prêt à emménager',
      date: '2023-12-20',
      time: '11:00',
      agent: 'Bernard SAWADOGO',
      status: 'en attente'
    }
  ]);
  const navigate = useNavigate();
  // État pour l'historique d'activité
  const [activityHistory, setActivityHistory] = useState([
    {
      id: 1,
      action: 'Connexion',
      date: '2023-12-01 08:45',
      device: 'iPhone 13 Pro'
    },
    {
      id: 2,
      action: 'Modification du profil',
      date: '2023-11-28 14:20',
      device: 'MacBook Pro'
    },
    {
      id: 3,
      action: 'Ajout aux favoris',
      date: '2023-11-15 16:30',
      property: 'Villa moderne avec piscine'
    }
  ]);

  // État pour l'édition du profil
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  // Onglets du tableau de bord
  const [activeTab, setActiveTab] = useState('overview');

  // États pour la gestion des rendez-vous
  const [appointmentFilter, setAppointmentFilter] = useState('all');
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    property: '',
    date: '',
    time: '',
    agent: ''
  });

  // Gestion de l'édition
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  const handleSaveProfile = () => {
    setUser(editData);
    setIsEditing(false);
  };

  // Suppression d'un favori
  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  // Annulation d'un rendez-vous
  const handleCancelAppointment = (id) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: 'annulé' } : app
    ));
  };

  // Confirmation d'un rendez-vous
  const handleConfirmAppointment = (id) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: 'confirmé' } : app
    ));
  };

  // Ajout d'un nouveau rendez-vous
  const handleAddAppointment = () => {
    const newAppt = {
      id: appointments.length + 1,
      ...newAppointment,
      status: 'en attente'
    };
    setAppointments([...appointments, newAppt]);
    setShowAppointmentModal(false);
    setNewAppointment({ property: '', date: '', time: '', agent: '' });
    
    // Ajouter à l'historique d'activité
    setActivityHistory([
      {
        id: activityHistory.length + 1,
        action: 'Rendez-vous créé',
        date: new Date().toLocaleString('fr-FR'),
        property: newAppointment.property
      },
      ...activityHistory
    ]);
  };

  // Filtrage des rendez-vous
  const filteredAppointments = appointmentFilter === 'all' 
    ? appointments 
    : appointments.filter(app => 
        appointmentFilter === 'cancelled' 
          ? app.status === 'annulé' 
          : app.status === appointmentFilter
      );

  // Composant de carte de propriété
  const PropertyCard = ({ property }) => (
    <div className="border border-rose-100 rounded-xl p-4 hover:shadow-md transition-all duration-300 bg-white">
      <div className="flex">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="ml-4 flex-1">
          <h3 className="font-bold text-gray-900 line-clamp-1">{property.title}</h3>
          <p className="text-sm text-gray-600 flex items-center mt-1">
            <MapPin className="h-4 w-4 mr-1 text-rose-500" />
            {property.location}
          </p>
          <div className="mt-2">
            <span className="text-lg font-bold text-gray-900">
              {property.price.toLocaleString()} FCFA
            </span>
            {property.priceType === 'location' && (
              <span className="text-sm text-gray-600">/mois</span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Ajouté le {new Date(property.addedDate).toLocaleDateString('fr-FR')}
        </span>
        <button 
          onClick={() => handleRemoveFavorite(property.id)}
          className="text-rose-600 hover:text-rose-800 font-medium text-sm"
        >
          Supprimer
        </button>
      </div>
    </div>
  );

  // Composant de carte de rendez-vous
  const AppointmentCard = ({ appointment }) => (
    <div className="border border-rose-100 rounded-xl p-4 hover:shadow-md transition-all duration-300 bg-white">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-gray-900">{appointment.property}</h3>
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${
              appointment.status === 'confirmé' 
                ? 'bg-green-100 text-green-800'
                : appointment.status === 'en attente'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-rose-100 text-rose-800'
            }`}>
              {appointment.status}
            </span>
          </div>
          
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-rose-500" />
              <span>
                {new Date(appointment.date).toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'long' 
                })}
              </span>
              <span className="mx-2">•</span>
              <span>{appointment.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <User className="h-4 w-4 mr-2 text-rose-500" />
              <span>{appointment.agent}</span>
            </div>
          </div>
        </div>
        
        <div className="ml-4 flex flex-col space-y-2">
          {appointment.status === 'en attente' && (
            <>
              <button 
                onClick={() => handleConfirmAppointment(appointment.id)}
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg"
              >
                Confirmer
              </button>
              <button 
                onClick={() => handleCancelAppointment(appointment.id)}
                className="text-sm bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded-lg"
              >
                Annuler
              </button>
            </>
          )}
          {appointment.status === 'confirmé' && (
            <button 
              onClick={() => handleCancelAppointment(appointment.id)}
              className="text-sm bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded-lg"
            >
              Annuler
            </button>
          )}
          {appointment.status === 'annulé' && (
            <span className="text-xs text-gray-500 italic">Action non disponible</span>
          )}
        </div>
      </div>
    </div>
  );

  // Composant de carte d'activité
  const ActivityCard = ({ activity }) => (
    <div className="border-b border-rose-50 py-4 group hover:bg-rose-50 transition-colors duration-200 px-2 rounded">
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-gray-900 group-hover:text-rose-700">{activity.action}</h3>
          {activity.property && (
            <p className="text-sm text-gray-600 mt-1">{activity.property}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">{activity.date}</p>
          {activity.device && (
            <p className="text-xs text-gray-500 mt-1">{activity.device}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-white"
                />
                {user.verified && (
                  <div className="absolute bottom-0 right-0 bg-rose-400 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-rose-100 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {user.email}
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <button 
                onClick={() => {
                  setIsEditing(true);
                  setEditData({ ...user });
                }}
                className="bg-white text-rose-600 px-6 py-2 rounded-lg font-medium flex items-center hover:bg-rose-50 transition-colors"
              >
                <Edit className="h-4 w-4 mr-2" />
                Modifier le profil
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar de navigation */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24 border border-rose-100">
              <nav className="space-y-1">
                <button 
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'overview' 
                      ? 'bg-rose-50 text-rose-600 font-medium border border-rose-200' 
                      : 'text-gray-600 hover:bg-rose-50'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  <User className="h-5 w-5 mr-3" />
                  Aperçu du profil
                </button>
                
                <button 
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'favorites' 
                      ? 'bg-rose-50 text-rose-600 font-medium border border-rose-200' 
                      : 'text-gray-600 hover:bg-rose-50'
                  }`}
                  onClick={() => setActiveTab('favorites')}
                >
                  <Heart className="h-5 w-5 mr-3" />
                  Favoris
                </button>
                
                <button 
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'appointments' 
                      ? 'bg-rose-50 text-rose-600 font-medium border border-rose-200' 
                      : 'text-gray-600 hover:bg-rose-50'
                  }`}
                  onClick={() => setActiveTab('appointments')}
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  Rendez-vous
                </button>
                
                <button 
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'activity' 
                      ? 'bg-rose-50 text-rose-600 font-medium border border-rose-200' 
                      : 'text-gray-600 hover:bg-rose-50'
                  }`}
                  onClick={() => setActiveTab('activity')}
                >
                  <Eye className="h-5 w-5 mr-3" />
                  Activité récente
                </button>
                
                <button 
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-rose-50 text-rose-600 font-medium border border-rose-200' 
                      : 'text-gray-600 hover:bg-rose-50'
                  }`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  Paramètres du compte
                </button>
                <button 
                    className="w-full flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-rose-50 transition-colors"
                    onClick={() => {
                      localStorage.removeItem('authToken');
                      localStorage.removeItem('userData');
                      navigate('/login');
                    }}
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    Déconnexion
                </button>
                            
              </nav>
              
              <div className="mt-6 pt-6 border-t border-rose-100">
                <h3 className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-3">
                  Statistiques
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Propriétés vues</span>
                    <span className="font-medium">42</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Favoris</span>
                    <span className="font-medium">{favorites.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rendez-vous</span>
                    <span className="font-medium">{appointments.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Membre depuis</span>
                    <span className="font-medium">
                      {new Date(user.memberSince).toLocaleDateString('fr-FR', { 
                        year: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contenu du tableau de bord */}
          <div className="flex-1">
            {/* Aperçu du profil */}
            {activeTab === 'overview' && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-rose-100">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Aperçu du profil</h2>
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="text-rose-600 hover:text-rose-800 flex items-center"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Modifier
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-rose-100 rounded-lg p-5 bg-white">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Informations personnelles</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0" />
                          <span>{user.name}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0" />
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0" />
                          <span>{user.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0" />
                          <span>{user.address}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-rose-100 rounded-lg p-5 bg-white">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Derniers favoris</h3>
                      <div className="space-y-4">
                        {favorites.slice(0, 2).map(fav => (
                          <div key={fav.id} className="flex items-center group">
                            <img 
                              src={fav.image} 
                              alt={fav.title} 
                              className="w-12 h-12 rounded-md object-cover"
                            />
                            <div className="ml-3">
                              <h4 className="font-medium text-gray-900 line-clamp-1 group-hover:text-rose-600">{fav.title}</h4>
                              <p className="text-sm text-gray-600">{fav.location}</p>
                            </div>
                          </div>
                        ))}
                        {favorites.length === 0 && (
                          <p className="text-gray-500">Aucun favori pour le moment</p>
                        )}
                        <button 
                          className="text-rose-600 hover:text-rose-800 flex items-center"
                          onClick={() => setActiveTab('favorites')}
                        >
                          Voir tous mes favoris
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="border border-rose-100 rounded-lg p-5 bg-white">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Prochains rendez-vous</h3>
                      <div className="space-y-4">
                        {appointments.filter(a => a.status !== 'annulé').slice(0, 2).map(app => (
                          <div key={app.id} className="flex items-center justify-between group">
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-rose-600">{app.property}</h4>
                              <p className="text-sm text-gray-600">
                                {new Date(app.date).toLocaleDateString('fr-FR')} à {app.time}
                              </p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              app.status === 'confirmé' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {app.status}
                            </span>
                          </div>
                        ))}
                        {appointments.filter(a => a.status !== 'annulé').length === 0 && (
                          <p className="text-gray-500">Aucun rendez-vous à venir</p>
                        )}
                        <button 
                          className="text-rose-600 hover:text-rose-800 flex items-center"
                          onClick={() => setActiveTab('appointments')}
                        >
                          Voir tous mes rendez-vous
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="border border-rose-100 rounded-lg p-5 bg-white">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Sécurité du compte</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Statut du compte</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-rose-100 text-rose-800 text-xs">
                            <Check className="h-3 w-3 mr-1" />
                            Vérifié
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Mot de passe</span>
                          <button className="text-rose-600 hover:text-rose-800 text-sm">
                            Modifier
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Authentification à 2 facteurs</span>
                          <button className="text-rose-600 hover:text-rose-800 text-sm">
                            Activer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Favoris */}
            {activeTab === 'favorites' && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-rose-100">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Mes propriétés favorites</h2>
                    <div className="flex items-center">
                      <span className="text-rose-600 font-medium mr-4">{favorites.length} propriétés</span>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Rechercher..."
                          className="pl-10 pr-4 py-2 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
                        />
                        <Search className="h-4 w-4 text-rose-400 absolute left-3 top-2.5" />
                      </div>
                    </div>
                  </div>
                  
                  {favorites.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {favorites.map(property => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-rose-100 rounded-full p-4 inline-block">
                        <Heart className="h-12 w-12 text-rose-500" />
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mt-4">
                        Aucune propriété favorite
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Ajoutez des propriétés à vos favoris pour les retrouver facilement
                      </p>
                      <button 
                        className="mt-6 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        onClick={() => {/* Rediriger vers les propriétés */}}
                      >
                        Parcourir les propriétés
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Rendez-vous */}
            {activeTab === 'appointments' && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-rose-100">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                    <h2 className="text-xl font-bold text-gray-900">Mes rendez-vous</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex space-x-1 bg-rose-50 p-1 rounded-lg">
                        {['all', 'confirmed', 'pending', 'cancelled'].map((filter) => (
                          <button
                            key={filter}
                            className={`px-3 py-1.5 rounded-md text-sm capitalize ${
                              appointmentFilter === filter
                                ? 'bg-white text-rose-600 shadow-sm'
                                : 'text-gray-600 hover:text-rose-600'
                            }`}
                            onClick={() => setAppointmentFilter(filter)}
                          >
                            {filter === 'all' ? 'Tous' : 
                             filter === 'confirmed' ? 'Confirmés' : 
                             filter === 'pending' ? 'En attente' : 'Annulés'}
                          </button>
                        ))}
                      </div>
                      <button 
                        className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors"
                        onClick={() => setShowAppointmentModal(true)}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Nouveau rendez-vous
                      </button>
                    </div>
                  </div>
                  
                  {filteredAppointments.length > 0 ? (
                    <div className="space-y-4">
                      {filteredAppointments.map(appointment => (
                        <AppointmentCard key={appointment.id} appointment={appointment} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-rose-100 rounded-full p-4 inline-block">
                        <Frown className="h-12 w-12 text-rose-500" />
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mt-4">
                        Aucun rendez-vous trouvé
                      </h3>
                      <p className="text-gray-600 mt-2">
                        {appointmentFilter === 'all'
                          ? "Vous n'avez aucun rendez-vous planifié"
                          : `Aucun rendez-vous ${appointmentFilter === 'confirmed' 
                              ? 'confirmé' 
                              : appointmentFilter === 'pending' 
                                ? 'en attente' 
                                : 'annulé'}`}
                      </p>
                      <button 
                        className="mt-6 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        onClick={() => setShowAppointmentModal(true)}
                      >
                        Prendre rendez-vous
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Activité récente */}
            {activeTab === 'activity' && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-rose-100">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Activité récente</h2>
                  
                  <div className="border border-rose-100 rounded-lg overflow-hidden">
                    {activityHistory.length > 0 ? (
                      <div className="divide-y divide-rose-50">
                        {activityHistory.map(activity => (
                          <ActivityCard key={activity.id} activity={activity} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="bg-rose-100 rounded-full p-4 inline-block">
                          <Eye className="h-12 w-12 text-rose-500" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                          Aucune activité récente
                        </h3>
                        <p className="text-gray-600 mt-2">
                          Votre activité sur la plateforme apparaîtra ici
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Paramètres du compte */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-rose-100">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Paramètres du compte</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Section informations personnelles */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Informations personnelles</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nom complet
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                            value={user.name}
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Adresse email
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                            value={user.email}
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                            value={user.phone}
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Adresse
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                            value={user.address}
                            readOnly
                          />
                        </div>
                        <button 
                          className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                          onClick={() => setIsEditing(true)}
                        >
                          Modifier les informations
                        </button>
                      </div>
                    </div>
                    
                    {/* Section sécurité */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Sécurité du compte</h3>
                      <div className="space-y-4">
                        <div className="border border-rose-100 rounded-lg p-4 bg-white">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Lock className="h-5 w-5 text-rose-500 mr-3" />
                              <span>Mot de passe</span>
                            </div>
                            <button className="text-rose-600 hover:text-rose-800">
                              Modifier
                            </button>
                          </div>
                        </div>
                        
                        <div className="border border-rose-100 rounded-lg p-4 bg-white">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Shield className="h-5 w-5 text-rose-500 mr-3" />
                              <span>Authentification à 2 facteurs</span>
                            </div>
                            <button className="text-rose-600 hover:text-rose-800">
                              Activer
                            </button>
                          </div>
                        </div>
                        
                        <div className="border border-rose-100 rounded-lg p-4 bg-white">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Bell className="h-5 w-5 text-rose-500 mr-3" />
                              <span>Notifications</span>
                            </div>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                              <input 
                                type="checkbox" 
                                checked={user.notifications}
                                onChange={() => setUser({...user, notifications: !user.notifications})}
                                className="sr-only"
                                id="notifications-toggle"
                              />
                              <label 
                                htmlFor="notifications-toggle" 
                                className={`block h-6 w-10 rounded-full cursor-pointer transition-colors ${
                                  user.notifications ? 'bg-rose-500' : 'bg-gray-300'
                                }`}
                              >
                                <span className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                                  user.notifications ? 'transform translate-x-4' : ''
                                }`}></span>
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-rose-100 rounded-lg p-4 bg-white">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <CreditCard className="h-5 w-5 text-rose-500 mr-3" />
                              <span>Moyens de paiement</span>
                            </div>
                            <button className="text-rose-600 hover:text-rose-800">
                              Gérer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Section préférences */}
                  <div className="mt-8 pt-8 border-t border-rose-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Préférences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border border-rose-100 rounded-lg p-4 bg-white">
                        <div className="flex items-center mb-2">
                          <Building2 className="h-5 w-5 text-rose-500 mr-2" />
                          <span>Type de propriété préféré</span>
                        </div>
                        <p className="text-gray-600 text-sm">Villas et Appartements</p>
                      </div>
                      <div className="border border-rose-100 rounded-lg p-4 bg-white">
                        <div className="flex items-center mb-2">
                          <MapPin className="h-5 w-5 text-rose-500 mr-2" />
                          <span>Localisation préférée</span>
                        </div>
                        <p className="text-gray-600 text-sm">Ouagadougou Centre</p>
                      </div>
                      <div className="border border-rose-100 rounded-lg p-4 bg-white">
                        <div className="flex items-center mb-2">
                          <CreditCard className="h-5 w-5 text-rose-500 mr-2" />
                          <span>Budget préféré</span>
                        </div>
                        <p className="text-gray-600 text-sm">50M - 100M FCFA</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Section assistance */}
                  <div className="mt-8 pt-8 border-t border-rose-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Assistance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button className="border border-rose-100 rounded-lg p-4 text-left hover:bg-rose-50 transition-colors bg-white">
                        <div className="flex items-center mb-2">
                          <HelpCircle className="h-5 w-5 text-rose-500 mr-2" />
                          <span>Centre d'aide</span>
                        </div>
                        <p className="text-gray-600 text-sm">Trouvez des réponses à vos questions</p>
                      </button>
                      <button className="border border-rose-100 rounded-lg p-4 text-left hover:bg-rose-50 transition-colors bg-white">
                        <div className="flex items-center mb-2">
                          <Mail className="h-5 w-5 text-rose-500 mr-2" />
                          <span>Nous contacter</span>
                        </div>
                        <p className="text-gray-600 text-sm">Envoyez-nous un message</p>
                      </button>
                      <button className="border border-rose-100 rounded-lg p-4 text-left hover:bg-rose-50 transition-colors bg-white">
                        <div className="flex items-center mb-2">
                          <Info className="h-5 w-5 text-rose-500 mr-2" />
                          <span>À propos de nous</span>
                        </div>
                        <p className="text-gray-600 text-sm">Découvrez notre entreprise</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Modal d'édition du profil */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md border border-rose-100">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Modifier le profil</h2>
                <button onClick={() => setIsEditing(false)}>
                  <X className="h-6 w-6 text-rose-500" />
                </button>
              </div>
              
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-rose-100"
                  />
                  <button className="absolute bottom-0 right-0 bg-rose-500 text-white rounded-full p-2 hover:bg-rose-600">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="text-lg font-medium">{user.name}</h3>
              </div>
              
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleEditChange}
                      className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleEditChange}
                      className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={editData.phone}
                      onChange={handleEditChange}
                      className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={editData.address}
                      onChange={handleEditChange}
                      className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end space-x-3">
                  <button 
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsEditing(false)}
                  >
                    Annuler
                  </button>
                  <button 
                    type="button"
                    className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition-colors"
                    onClick={handleSaveProfile}
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal pour nouveau rendez-vous */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md border border-rose-100">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Nouveau rendez-vous</h2>
                <button onClick={() => setShowAppointmentModal(false)}>
                  <X className="h-6 w-6 text-rose-500" />
                </button>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                handleAddAppointment();
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Propriété
                    </label>
                    <select
                      value={newAppointment.property}
                      onChange={(e) => setNewAppointment({...newAppointment, property: e.target.value})}
                      className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                      required
                    >
                      <option value="">Sélectionnez une propriété</option>
                      <option value="Villa moderne avec piscine">Villa moderne avec piscine</option>
                      <option value="Appartement standing centre-ville">Appartement standing centre-ville</option>
                      <option value="Bureau équipé prêt à emménager">Bureau équipé prêt à emménager</option>
                      <option value="Maison traditionnelle avec jardin">Maison traditionnelle avec jardin</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        value={newAppointment.date}
                        onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                        className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Heure
                      </label>
                      <input
                        type="time"
                        value={newAppointment.time}
                        onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                        className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Agent immobilier
                    </label>
                    <select
                      value={newAppointment.agent}
                      onChange={(e) => setNewAppointment({...newAppointment, agent: e.target.value})}
                      className="w-full px-4 py-2 border border-rose-200 rounded-lg focus:ring-rose-300 focus:border-rose-300"
                      required
                    >
                      <option value="">Sélectionnez un agent</option>
                      <option value="Jean Dupont">Jean Dupont</option>
                      <option value="Thomas Bernard">Thomas Bernard</option>
                      <option value="Marie Dubois">Marie Dubois</option>
                      <option value="Sophie Martin">Sophie Martin</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end space-x-3">
                  <button 
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    onClick={() => setShowAppointmentModal(false)}
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Planifier le rendez-vous
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;