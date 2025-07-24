import React, { useState } from 'react';
import { 
  Search, MapPin, Building, Home, Star, Bed, Bath, Car, Maximize,
  ArrowRight, Eye, Heart, ChevronLeft, ChevronRight, Filter, Sliders
} from 'lucide-react';

const PropertiesPage = () => {
  // États pour les filtres
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    transactionType: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
  });
  
  // État pour les propriétés aimées
  const [likedProperties, setLikedProperties] = useState(new Set());
  
  // État pour le panneau de filtres mobiles
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Données des propriétés (avec plus de propriétés que sur la page d'accueil)
  const allProperties = [
    {
      id: 1,
      title: 'Villa moderne avec piscine',
      type: 'Villa',
      price: 95000000,
      priceType: 'vente',
      location: 'Ouaga 2000, Ouagadougou',
      bedrooms: 5,
      bathrooms: 4,
      parking: 3,
      area: 350,
      image: 'src/assets/imgs/properties/villa.jpg',
      isNew: true,
      rating: 4.8,
      views: 1247
    },
    {
      id: 2,
      title: 'Appartement standing centre-ville',
      type: 'Appartement',
      price: 650000,
      priceType: 'location',
      location: 'Zone du Bois, Ouagadougou',
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      area: 120,
      image: 'src/assets/imgs/properties/standing.jpg',
      isNew: false,
      rating: 4.6,
      views: 892
    },
    {
      id: 3,
      title: 'Bureau équipé prêt à emménager',
      type: 'Bureau',
      price: 35000000,
      priceType: 'vente',
      location: 'Kossodo, Ouagadougou',
      bedrooms: 0,
      bathrooms: 3,
      parking: 8,
      area: 200,
      image: 'src/assets/imgs/properties/bureau.jpg',
      isNew: true,
      rating: 4.9,
      views: 634
    },
    {
      id: 4,
      title: 'Terrain Agricol Disponible',
      type: 'Terrain Public',
      price: 105000000,
      priceType: 'location',
      location: 'Nasso, Bobo Dioulasso',
      bedrooms: 0,
      bathrooms: 4,
      parking: 18,
      area: 300000,
      image: 'src/assets/imgs/properties/terrainAgri.jpg',
      isNew: true,
      rating: 5,
      views: 1634
    },
    {
      id: 5,
      title: 'Villa moderne centre-ville',
      type: 'Appartement',
      price: 45000000,
      priceType: 'vente',
      location: 'Secteur 15, Ouagadougou',
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 90,
      image: 'src/assets/imgs/properties/VillaPiscJard.jpg',
      isNew: false,
      rating: 4.5,
      views: 876
    },
    {
      id: 6,
      title: 'Bureau spacieux avec vue',
      type: 'Bureau',
      price: 28000000,
      priceType: 'vente',
      location: 'Zone du Bois, Ouagadougou',
      bedrooms: 0,
      bathrooms: 2,
      parking: 5,
      area: 150,
      image: 'src/assets/imgs/properties/yura-timoshenko-iuJQd6Op77A-unsplash.jpg',
      isNew: true,
      rating: 4.7,
      views: 543
    },
    {
      id: 7,
      title: 'Terrain constructible',
      type: 'Terrain',
      price: 38000000,
      priceType: 'vente',
      location: 'Pissy, Ouagadougou',
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      area: 500,
      image: 'src/assets/imgs/properties/terrainConst.jpg',
      isNew: false,
      rating: 4.3,
      views: 321
    },
    {
      id: 8,
      title: 'Commerce en plein centre',
      type: 'Commerce',
      price: 75000000,
      priceType: 'vente',
      location: 'Centre-ville, Ouagadougou',
      bedrooms: 0,
      bathrooms: 2,
      parking: 2,
      area: 180,
      image: 'src/assets/imgs/properties/Commer.jpg',
      isNew: true,
      rating: 4.9,
      views: 876
    }
  ];

  // Fonction pour gérer les likes
  const handleLike = (propertyId) => {
    const newLikedProperties = new Set(likedProperties);
    if (newLikedProperties.has(propertyId)) {
      newLikedProperties.delete(propertyId);
    } else {
      newLikedProperties.add(propertyId);
    }
    setLikedProperties(newLikedProperties);
  };

  // Composant de carte de propriété (réutilisé de HomePage)
  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {property.isNew && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Nouveau
            </span>
          )}
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            property.priceType === 'vente' 
              ? 'bg-blue-500 text-white' 
              : 'bg-orange-500 text-white'
          }`}>
            {property.priceType === 'vente' ? 'À vendre' : 'À louer'}
          </span>
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button 
            onClick={() => handleLike(property.id)}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${
                likedProperties.has(property.id) 
                  ? 'text-red-500 fill-red-500' 
                  : 'text-gray-600 hover:text-red-500'
              }`} 
            />
          </button>
          <button 
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
          >
            <Eye 
              className={`h-4 w-4 transition-colors ${
                'text-gray-600 hover:text-blue-500'
              }`} 
            />
          </button>
        </div>

        {/* Prix */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/95 backdrop-blur px-3 py-2 rounded-lg">
            <span className="text-xl font-bold text-gray-900">
              {property.price.toLocaleString()} FCFA
            </span>
            {property.priceType === 'location' && (
              <span className="text-sm text-gray-600">/mois</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{property.type}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{property.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex items-center">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          {property.location}
        </p>
        
        {/* Caractéristiques */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            {property.bedrooms > 0 && (
              <span className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                {property.bedrooms}
              </span>
            )}
            <span className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              {property.bathrooms}
            </span>
            <span className="flex items-center">
              <Car className="h-4 w-4 mr-1" />
              {property.parking}
            </span>
            <span className="flex items-center">
              <Maximize className="h-4 w-4 mr-1" />
              {property.area}m²
            </span>
          </div>
        </div>

        {/* Vues et action */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {property.views} vues
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1">
            <span>Détails</span>
            <ArrowRight className="h-4 w-4" />
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
              Nos Propriétés
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Découvrez notre sélection exclusive de biens immobiliers à travers le Burkina Faso
            </p>
          </div>
        </div>
      </section>

      {/* Barre de filtres et résultats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar des filtres (version desktop) */}
            <div className="hidden md:block w-full md:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filtres avancés
                </h3>
                
                {/* Formulaire de filtres */}
                <div className="space-y-6">
                  {/* Localisation */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Localisation
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Ville, quartier..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={filters.location}
                        onChange={(e) => setFilters({...filters, location: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  {/* Type de bien */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de bien
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={filters.propertyType}
                      onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                    >
                      <option value="">Tous les types</option>
                      <option value="apartment">Appartement</option>
                      <option value="villa">Villa</option>
                      <option value="office">Bureau</option>
                      <option value="commercial">Commerce</option>
                      <option value="land">Terrain</option>
                    </select>
                  </div>
                  
                  {/* Transaction */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={filters.transactionType}
                      onChange={(e) => setFilters({...filters, transactionType: e.target.value})}
                    >
                      <option value="">Vente & Location</option>
                      <option value="vente">Vente</option>
                      <option value="location">Location</option>
                    </select>
                  </div>
                  
                  {/* Prix */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget (FCFA)
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={filters.priceRange}
                      onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    >
                      <option value="">Tous les prix</option>
                      <option value="0-10000000">0 - 10M</option>
                      <option value="10000000-50000000">10M - 50M</option>
                      <option value="50000000-100000000">50M - 100M</option>
                      <option value="100000000+">100M+</option>
                    </select>
                  </div>
                  
                  {/* Chambres */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chambres
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={filters.bedrooms}
                      onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                    >
                      <option value="">Toutes</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                  
                  {/* Salles de bain */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Salles de bain
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      value={filters.bathrooms}
                      onChange={(e) => setFilters({...filters, bathrooms: e.target.value})}
                    >
                      <option value="">Toutes</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                    </select>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
                    Appliquer les filtres
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contenu principal */}
            <div className="flex-1">
              {/* Barre de résultats et filtre mobile */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {allProperties.length} propriétés trouvées
                  </h2>
                  <p className="text-gray-600">
                    Filtrez selon vos préférences
                  </p>
                </div>
                
                {/* Bouton filtre mobile */}
                <button 
                  className="md:hidden flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow border border-gray-200"
                  onClick={() => setShowMobileFilters(true)}
                >
                  <Sliders className="h-5 w-5" />
                  <span>Filtres</span>
                </button>
                
                {/* Tri */}
                <div className="hidden md:block">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Trier par: Pertinence</option>
                    <option>Prix: Croissant</option>
                    <option>Prix: Décroissant</option>
                    <option>Plus récent</option>
                  </select>
                </div>
              </div>
              
              {/* Grille des propriétés */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProperties.map(property => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                  />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  {[1, 2, 3, 4, 5].map(page => (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded-full ${
                        page === 1 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panneau de filtres mobile */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-4/5 bg-white p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Filtres</h3>
              <button onClick={() => setShowMobileFilters(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Formulaire de filtres */}
            <div className="space-y-6">
              {/* Localisation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Localisation
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Ville, quartier..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                  />
                </div>
              </div>
              
              {/* Type de bien */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de bien
                </label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filters.propertyType}
                  onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                >
                  <option value="">Tous les types</option>
                  <option value="apartment">Appartement</option>
                  <option value="villa">Villa</option>
                  <option value="office">Bureau</option>
                  <option value="commercial">Commerce</option>
                  <option value="land">Terrain</option>
                </select>
              </div>
              
              {/* Transaction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transaction
                </label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filters.transactionType}
                  onChange={(e) => setFilters({...filters, transactionType: e.target.value})}
                >
                  <option value="">Vente & Location</option>
                  <option value="vente">Vente</option>
                  <option value="location">Location</option>
                </select>
              </div>
              
              {/* Prix */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget (FCFA)
                </label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="">Tous les prix</option>
                  <option value="0-10000000">0 - 10M</option>
                  <option value="10000000-50000000">10M - 50M</option>
                  <option value="50000000-100000000">50M - 100M</option>
                  <option value="100000000+">100M+</option>
                </select>
              </div>
              
              {/* Chambres */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chambres
                </label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filters.bedrooms}
                  onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                >
                  <option value="">Toutes</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              
              {/* Salles de bain */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salles de bain
                </label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filters.bathrooms}
                  onChange={(e) => setFilters({...filters, bathrooms: e.target.value})}
                >
                  <option value="">Toutes</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                </select>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <button 
                className="flex-1 py-3 border border-gray-300 rounded-lg"
                onClick={() => setShowMobileFilters(false)}
              >
                Annuler
              </button>
              <button 
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg"
                onClick={() => setShowMobileFilters(false)}
              >
                Appliquer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertiesPage;