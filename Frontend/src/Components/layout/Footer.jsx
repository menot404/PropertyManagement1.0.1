import { Facebook, Twitter, Instagram, Linkedin, Building2, MapPin, Phone, Mail} from "lucide-react";
import { NavLink } from "react-router-dom";

const year = new Date();

const Footer = () => {
    return(
        <>
            <footer className="primary-bg text-white mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-6 h-6 text-primary-400" />
                    <h3 className="text-xl font-bold">ImmoGest BF</h3>
                    </div>
                    <p className="text-gray-400 mb-4">
                    Votre partenaire de confiance pour tous vos besoins immobiliers au Burkina Faso.
                    </p>
                    <div className="flex gap-4">
                    <Facebook className="w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
                    <Instagram className="w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-4">Liens rapides</h4>
                    <ul className="space-y-2 text-gray-400">
                    <li><button className="hover:text-white">À propos</button></li>
                    <li><button className="hover:text-white">Nos services</button></li>
                    <li><button className="hover:text-white">Témoignages</button></li>
                    <li><button className="hover:text-white">Blog</button></li>
                    </ul>
                </div>

                {/* Property Types */}
                <div>
                    <h4 className="font-semibold mb-4">Types de biens</h4>
                    <ul className="space-y-2 text-gray-400">
                    <li><button className="hover:text-white">Appartements</button></li>
                    <li><button className="hover:text-white">Villas</button></li>
                    <li><button className="hover:text-white">Bureaux</button></li>
                    <li><button className="hover:text-white">Terrains</button></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <div className="space-y-3 text-gray-400">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Secteur 4, Avenue Kwame Nkrumah<br />Ouagadougou, Burkina Faso</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+226 57 28 80 06</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>contact@immgest-bf.com</span>
                    </div>
                    </div>
                </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {year.getFullYear()} ImmoGest BF. Tous droits réservés.</p>
                    <NavLink 
                        className='underline'
                        to="/privacy-policy"
                    >
                        Politique de confidentialité
                    </NavLink> 
                    <NavLink 
                        to="/terms"
                        className="ml-2 underline"
                    >
                            Conditions d'utilisation
                    </NavLink> 
                </div>
            </div>
            </footer>
        </>
    )
};

  export default Footer;