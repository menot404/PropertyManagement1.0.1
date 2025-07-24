import { useState } from "react";
import {Home, Phone, Calendar, Heart, Building2, User, Mail, Menu, X} from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        { id: 'home', name: 'Accueil', icon: Home, paht: "/" },
        { id: 'properties', name: 'Propriétés', icon: Building2, paht: "/properties" },
        { id: 'favorites', name: 'Favoris', icon: Heart, paht: "/favoris" },
        { id: 'appointments', name: 'Rendez-vous', icon: Calendar, paht: "/rende-vous"},
        { id: 'contact', name: 'Contact', icon: Phone, paht: "/contact" }
    ];
    
    return(
        <>
            <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                {/* Top bar */}
                <div className="flex justify-between items-center py-2 text-sm text-gray-600 border-b">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Phone className="w-6 h-6" />
                            <span className="text-1">+226 57 28 80 06</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Mail className="w-6 h-6" />
                            <span className="text-1">contact@immogest-bf.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 ">
                            <a href="/user"><User className="w-6 h-6 hover:text-blue-800" /></a>
                            <span>|</span>
                            <a href="/login" className="underline text-lg hover:text-blue-900">Login</a>
                        </div>
                    </div>
                </div>

                {/* Main header */}
                <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                    <Building2 className="w-8 h-8 text-blue-900" />
                    <div>
                        <a href="/">
                            <h1 className="text-xl font-bold text-blue-900">ImmoGest BF</h1>
                        </a>
                        <p className="text-xs text-gray-500">Votre partenaire immobilier</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                    {menuItems.map((item) => (
                    <a
                        href={item.paht}
                        key={item.id}
                        className="flex items-center px-3 py-2 gap-2 rounded-lg transition-colors hover:bg-blue-900 hover:text-white"
                    >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                    </a>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                <nav className="md:hidden pb-4 border-t">
                    {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.paht}
                        className={({isActive}) => 
                            `flex items-center gap-3 w-full px-1 py-1 text-gray-600
                            ${isActive? 'bg-blue-200 text-gray-400 rounded-lg':
                            'hover:bg-blue-300 hover:text-gray-600 rounded-lg'}`}
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                    </NavLink>
                    ))}
                </nav>
                )}
            </div>
            </header>
        </>
    )
}
export default Header;