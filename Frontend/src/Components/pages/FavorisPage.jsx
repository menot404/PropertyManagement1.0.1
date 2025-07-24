import React, { useState } from 'react';
import { 
  Heart, MapPin, Building, Home, Star, Bed, Bath, Car, Maximize, 
  ArrowRight, Eye, Filter, Grid, List, Share2, Trash2, Search,
  SortAsc, Calendar, Phone, Mail, X, Plus, Tag
} from 'lucide-react';

const FavorisPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperties, setSelectedProperties] = useState([]);
  //const [showCompareModal, setShowCompareModal] = useState(false);

  // Propriétés favorites avec données étendues
  const [favoriteProperties, setFavoriteProperties] = useState([
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
      image: 'src/assets/imgs/properties/VillaAvecPis.jpg',
      isNew: true,
      rating: 4.8,
      views: 1247,
      addedToFavorite: '2024-12-15',
      agent: {
        name: 'Marie Kaboré',
        phone: '+226 70 12 34 56',
        email: 'marie.kabore@immogest.bf'
      },
      features: ['Piscine', 'Jardin', 'Garage', 'Climatisation', 'Sécurité 24h'],
      description: 'Magnifique villa moderne située dans le prestigieux quartier d\'Ouaga 2000.',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300']
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
      image: 'src/assets/imgs/properties/AppartStan.jpg',
      isNew: false,
      rating: 4.6,
      views: 892,
      addedToFavorite: '2024-12-10',
      agent: {
        name: 'Jean Ouedraogo',
        phone: '+226 70 98 76 54',
        email: 'jean.ouedraogo@immogest.bf'
      },
      features: ['Climatisation', 'Ascenseur', 'Balcon', 'Parking sécurisé'],
      description: 'Appartement haut standing avec vue panoramique sur la ville.',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300']
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
      views: 634,
      addedToFavorite: '2024-12-08',
      agent: {
        name: 'Fatimata Sawadogo',
        phone: '+226 70 11 22 33',
        email: 'fatimata.sawadogo@immogest.bf'
      },
      features: ['Climatisation', 'Internet fibre', 'Salle de réunion', 'Réception'],
      description: 'Bureau moderne entièrement équipé dans zone commerciale dynamique.',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300']
    },
    {
      id: 4,
      title: 'Terrain constructible bien situé',
      type: 'Terrain',
      price: 15000000,
      priceType: 'vente',
      location: 'Saaba, Ouagadougou',
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      area: 500,
      image: 'src/assets/imgs/properties/terrain.jpg',
      isNew: false,
      rating: 4.3,
      views: 456,
      addedToFavorite: '2024-12-05',
      agent: {
        name: 'Ibrahim Traoré',
        phone: '+226 70 44 55 66',
        email: 'ibrahim.traore@immogest.bf'
      },
      features: ['Titre foncier', 'Accès route', 'Eau', 'Électricité'],
      description: 'Terrain résidentiel avec tous les équipements de base disponibles.',
      images: ['/api/placeholder/400/300']
    },
    {
      id: 5,
      title: 'Duplex familial avec jardin',
      type: 'Duplex',
      price: 850000,
      priceType: 'location',
      location: 'Ouaga 2000, Ouagadougou',
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      area: 180,
      image: 'src/assets/imgs/properties/Duplex.jpg',
      isNew: false,
      rating: 4.7,
      views: 723,
      addedToFavorite: '2024-12-01',
      agent: {
        name: 'Aminata Compaoré',
        phone: '+226 70 77 88 99',
        email: 'aminata.compaore@immogest.bf'
      },
      features: ['Jardin', 'Terrasse', 'Garage', 'Buanderie'],
      description: 'Spacieux duplex idéal pour une famille avec grand jardin privé.',
      images: ['/api/placeholder/400/300', '/api/placeholder/400/300']
    }
  ]);

  // Filtres et tri
  const filteredProperties = favoriteProperties
    .filter(property => {
      if (filterType !== 'all' && property.type.toLowerCase() !== filterType) return false;
      if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !property.location.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'recent':
          return new Date(b.addedToFavorite) - new Date(a.addedToFavorite);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const removeFavorite = (propertyId) => {
    setFavoriteProperties(prev => prev.filter(p => p.id !== propertyId));
    setSelectedProperties(prev => prev.filter(id => id !== propertyId));
  };

  const togglePropertySelection = (propertyId) => {
    setSelectedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const removeSelected = () => {
    setFavoriteProperties(prev => prev.filter(p => !selectedProperties.includes(p.id)));
    setSelectedProperties([]);
  };

  const PropertyCard = ({ property, isSelected }) => (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${isSelected ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Sélection */}
        <div className="absolute top-3 left-3">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => togglePropertySelection(property.id)}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
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
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button 
            onClick={() => removeFavorite(property.id)}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
            <Share2 className="h-4 w-4 text-gray-600" />
          </button>
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
            <Eye className="h-4 w-4 text-gray-600" />
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
        
        <p className="text-gray-600 text-sm mb-3 flex items-center">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          {property.location}
        </p>

        {/* Date d'ajout aux favoris */}
        <p className="text-xs text-gray-500 mb-3">
          Ajouté le {new Date(property.addedToFavorite).toLocaleDateString('fr-FR')}
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
            {property.bathrooms > 0 && (
              <span className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                {property.bathrooms}
              </span>
            )}
            {property.parking > 0 && (
              <span className="flex items-center">
                <Car className="h-4 w-4 mr-1" />
                {property.parking}
              </span>
            )}
            <span className="flex items-center">
              <Maximize className="h-4 w-4 mr-1" />
              {property.area}m²
            </span>
          </div>
        </div>

        {/* Agent contact */}
        <div className="border-t pt-3 mb-4">
          <p className="text-sm font-medium text-gray-900 mb-1">{property.agent.name}</p>
          <div className="flex items-center space-x-3 text-xs text-gray-600">
            <a href={`tel:${property.agent.phone}`} className="flex items-center hover:text-blue-600">
              <Phone className="h-3 w-3 mr-1" />
              {property.agent.phone}
            </a>
            <a href={`mailto:${property.agent.email}`} className="flex items-center hover:text-blue-600">
              <Mail className="h-3 w-3 mr-1" />
              Contact
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1">
            <span>Détails</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Contacter
          </button>
        </div>
      </div>
    </div>
  );

  const PropertyListItem = ({ property, isSelected }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${isSelected ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="flex gap-6">
        {/* Image */}
        <div className="relative w-48 h-32 flex-shrink-0">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-2 left-2">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => togglePropertySelection(property.id)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>
          {property.isNew && (
            <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
              Nouveau
            </span>
          )}
        </div>

        {/* Contenu */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-sm font-medium text-blue-600">{property.type}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{property.title}</h3>
              <p className="text-gray-600 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                {property.price.toLocaleString()} FCFA
                {property.priceType === 'location' && <span className="text-lg text-gray-600">/mois</span>}
              </div>
              <div className="flex items-center justify-end mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="text-sm text-gray-600">{property.rating}</span>
              </div>
            </div>
          </div>

          {/* Caractéristiques */}
          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
            {property.bedrooms > 0 && (
              <span className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                {property.bedrooms} chambres
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                {property.bathrooms} salles de bain
              </span>
            )}
            {property.parking > 0 && (
              <span className="flex items-center">
                <Car className="h-4 w-4 mr-1" />
                {property.parking} parking
              </span>
            )}
            <span className="flex items-center">
              <Maximize className="h-4 w-4 mr-1" />
              {property.area}m²
            </span>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-3">
            {property.features.slice(0, 4).map((feature, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {feature}
              </span>
            ))}
            {property.features.length > 4 && (
              <span className="text-xs text-gray-500">+{property.features.length - 4} autres</span>
            )}
          </div>

          {/* Agent et actions */}
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className="text-gray-600">Agent: </span>
              <span className="font-medium text-gray-900">{property.agent.name}</span>
              <span className="text-xs text-gray-500 ml-2">
                Ajouté le {new Date(property.addedToFavorite).toLocaleDateString('fr-FR')}
              </span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => removeFavorite(property.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Voir détails
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mes Favoris</h1>
              <p className="text-gray-600 mt-1">
                {favoriteProperties.length} propriété{favoriteProperties.length > 1 ? 's' : ''} sauvegardée{favoriteProperties.length > 1 ? 's' : ''}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {selectedProperties.length > 0 && (
                <>
                  <span className="text-sm text-gray-600">
                    {selectedProperties.length} sélectionnée{selectedProperties.length > 1 ? 's' : ''}
                  </span>
                  <button
                    onClick={removeSelected}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Supprimer</span>
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Comparer
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filtres et contrôles */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans mes favoris..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filtres */}
            <div className="flex items-center space-x-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tous les types</option>
                <option value="villa">Villas</option>
                <option value="appartement">Appartements</option>
                <option value="bureau">Bureaux</option>
                <option value="terrain">Terrains</option>
                <option value="duplex">Duplex</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="recent">Plus récents</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="rating">Mieux notés</option>
              </select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {favoriteProperties.length === 0 ? 'Aucun favori pour le moment' : 'Aucun résultat trouvé'}
            </h3>
            <p className="text-gray-600 mb-6">
              {favoriteProperties.length === 0 
                ? 'Parcourez nos propriétés et ajoutez vos coups de cœur à vos favoris'
                : 'Essayez de modifier vos critères de recherche'
              }
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Découvrir les propriétés
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
          }>
            {filteredProperties.map(property => (
              viewMode === 'grid' ? (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                  isSelected={selectedProperties.includes(property.id)}
                />
              ) : (
                <PropertyListItem 
                  key={property.id} 
                  property={property} 
                  isSelected={selectedProperties.includes(property.id)}
                />
              )
            ))}
          </div>
        )}
      </div>

      {/* Actions flottantes */}
      {selectedProperties.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 border">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700">
              {selectedProperties.length} sélectionnée{selectedProperties.length > 1 ? 's' : ''}
            </span>
            <button
              onClick={() => setSelectedProperties([])}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              onClick={removeSelected}
              className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
            >
              Supprimer
            </button>
            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Comparer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavorisPage;
