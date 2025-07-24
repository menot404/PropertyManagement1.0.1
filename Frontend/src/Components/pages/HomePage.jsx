import React, { useState, useEffect } from 'react';
import { 
  Search, MapPin, Building, Home, Star, Bed, Bath, Car, Maximize, 
  TrendingUp, Users, Award, Shield, ArrowRight, Eye, Heart, Calendar,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    transactionType: '',
    priceRange: ''
  });

  // États pour les interactions
  const [likedProperties, setLikedProperties] = useState(new Set());
  const [viewedProperties, setViewedProperties] = useState(new Set());
  
  // État pour le slider de témoignages
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Types de biens avec statistiques
  const propertyCategories = [
    { 
      id: 'apartment', 
      name: 'Appartements', 
      icon: Building, 
      count: 145,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      id: 'villa', 
      name: 'Villas', 
      icon: Home, 
      count: 89,
      color: 'bg-green-100 text-green-600'
    },
    { 
      id: 'office', 
      name: 'Bureaux', 
      icon: Building, 
      count: 67,
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      id: 'commercial', 
      name: 'Commerces', 
      icon: Building, 
      count: 34,
      color: 'bg-orange-100 text-orange-600'
    },
    { 
      id: 'land', 
      name: 'Terrains', 
      icon: MapPin, 
      count: 123,
      color: 'bg-yellow-100 text-yellow-600'
    },
    { 
      id: 'warehouse', 
      name: 'Entrepôts', 
      icon: Building, 
      count: 28,
      color: 'bg-red-100 text-red-600'
    },
    { 
      id: 'farm', 
      name: 'Fermes', 
      icon: Home, 
      count: 15,
      color: 'bg-indigo-100 text-indigo-600'
    },
    { 
      id: 'all', 
      name: 'Voir tout', 
      icon: ArrowRight, 
      count: 501,
      color: 'bg-gray-100 text-gray-600'
    }
  ];

  // Propriétés en vedette
  const featuredProperties = [
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
      }
  ];

  // Statistiques de l'agence
  const agencyStats = [
    {
      icon: Building,
      value: '500+',
      label: 'Propriétés disponibles',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      value: '2,500+',
      label: 'Clients satisfaits',
      color: 'text-green-600'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Années d\'expérience',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Transactions sécurisées',
      color: 'text-orange-600'
    }
  ];

  // Témoignages clients (plus de témoignages pour le slider)
  const testimonials = [
    {
      id: 1,
      name: 'Dénis KOROGO',
      role: 'Propriétaire',
      message: 'Service exceptionnel ! J\'ai trouvé ma villa de rêve grâce à ImmoGest. L\'équipe m\'a accompagnée tout au long du processus.',
      rating: 5,
      avatar: 'src/assets/imgs/denis.jpg'
    },
    {
      id: 2,
      name: 'Rose Wendy SAWADOGO',
      role: 'Investisseur',
      message: 'Équipe professionnelle et processus transparent. Je recommande vivement ImmoGest pour tous vos projets immobiliers.',
      rating: 5,
      avatar: 'src/assets/imgs/me.jpg'
    },
    {
      id: 3,
      name: 'Pièrre KOROGO',
      role: 'Locataire',
      message: 'Accompagnement personnalisé du début à la fin. Très satisfaite de mon appartement trouvé rapidement !',
      rating: 4,
      avatar: 'src/assets/imgs/pierre.jpg'
    },
    {
      id: 4,
      name: 'Idriss MBA SINON',
      role: 'Propriétaire',
      message: 'Vente de ma propriété réalisée en temps record. Service client au top et négociation excellente.',
      rating: 5,
      avatar: 'src/assets/imgs/idriss.jpg'
    },
    {
      id: 5,
      name: 'Pascaline KOROGO',
      role: 'Investisseur',
      message: 'Conseils avisés pour mes investissements. ImmoGest m\'a aidé à constituer un portefeuille immobilier solide.',
      rating: 5,
      avatar: 'src/assets/imgs/pascaline.jpg'
    },
    {
        id: 6,
        name: 'Alassane Dengtounda',
        role: 'Investisseur',
        message: 'Conseils avisés pour mes investissements. ImmoGest m\'a aidé à constituer un portefeuille immobilier solide.',
        rating: 5,
        avatar: 'src/assets/imgs/sola.jpg'
      }
  ];

  // Fonctions pour gérer les interactions
  const handleLike = (propertyId) => {
    const newLikedProperties = new Set(likedProperties);
    if (newLikedProperties.has(propertyId)) {
      newLikedProperties.delete(propertyId);
    } else {
      newLikedProperties.add(propertyId);
    }
    setLikedProperties(newLikedProperties);
  };

  const handleView = (propertyId) => {
    const newViewedProperties = new Set(viewedProperties);
    newViewedProperties.add(propertyId);
    setViewedProperties(newViewedProperties);
    // Simuler l'ouverture des détails
    alert(`Ouverture des détails de la propriété ${propertyId}`);
  };

  // Auto-slide pour les témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigation manuelle du slider
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            onClick={() => handleView(property.id)}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
          >
            <Eye 
              className={`h-4 w-4 transition-colors ${
                viewedProperties.has(property.id)
                  ? 'text-blue-500'
                  : 'text-gray-600 hover:text-blue-500'
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
      {/* Hero Section avec recherche */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Trouvez votre 
              <span className="text-yellow-400"> propriété idéale</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Plus de 500 propriétés disponibles à la vente et à la location 
              dans tout le Burkina Faso
            </p>
          </div>
          
          {/* Barre de recherche avancée */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Localisation
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Où cherchez-vous ?"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      value={searchFilters.location}
                      onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de bien
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                    value={searchFilters.propertyType}
                    onChange={(e) => setSearchFilters({...searchFilters, propertyType: e.target.value})}
                  >
                    <option value="">Tous les types</option>
                    <option value="apartment">Appartement</option>
                    <option value="villa">Villa</option>
                    <option value="office">Bureau</option>
                    <option value="commercial">Commerce</option>
                    <option value="land">Terrain</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transaction
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                    value={searchFilters.transactionType}
                    onChange={(e) => setSearchFilters({...searchFilters, transactionType: e.target.value})}
                  >
                    <option value="">Vente & Location</option>
                    <option value="vente">Vente</option>
                    <option value="location">Location</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
                    value={searchFilters.priceRange}
                    onChange={(e) => setSearchFilters({...searchFilters, priceRange: e.target.value})}
                  >
                    <option value="">Tous les prix</option>
                    <option value="0-10000000">0 - 10M FCFA</option>
                    <option value="10000000-50000000">10M - 50M FCFA</option>
                    <option value="50000000-100000000">50M - 100M FCFA</option>
                    <option value="100000000+">100M+ FCFA</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto transition-colors shadow-lg">
                  <Search className="h-5 w-5" />
                  <span>Rechercher maintenant</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques de l'agence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {agencyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catégories de biens */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos catégories de biens
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre large gamme de propriétés adaptées à tous vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {propertyCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.count} propriétés
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Propriétés en vedette */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Propriétés en vedette
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez nos meilleures offres sélectionnées pour vous
              </p>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
              <span>Voir toutes les propriétés</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto transition-colors">
              <span>Voir toutes les propriétés</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Témoignages Slider */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Leurs témoignages parlent de notre engagement
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-xl p-8 shadow-lg mx-4">
                      <div className="text-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-6"
                        />
                        
                        <div className="flex justify-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-6 w-6 ${
                                i < testimonial.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        
                        <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                          "{testimonial.message}"
                        </p>
                        
                        <div className="text-center">
                          <div className="font-bold text-xl text-gray-900 mb-1">
                            {testimonial.name}
                          </div>
                          <div className="text-blue-600 font-medium">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 max-w-xs mx-auto">
              <div className="bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-blue-600 h-1 rounded-full transition-all duration-500"
                  style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à trouver votre propriété idéale ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez plus de 2,500 clients satisfaits et trouvez le bien immobilier de vos rêves
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to={"/rende-vous"}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
                <Calendar className="h-5 w-5" />
                <span>Prendre rendez-vous</span>
            </NavLink>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
