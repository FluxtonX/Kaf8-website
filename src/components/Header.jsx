
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate();

  return (
    <header className="bg-[#E6F0FC] py-4 px-6 lg:px-16">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div 
      className="flex items-center ml-10 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img 
        src="/logo.png"
        alt="Kaf8 Logo" 
        className="h-[75px] w-[75px] rounded-lg object-cover"
      />
    </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-12 text-base font-medium">
          <li>
            <a href="#apropos" className="text-gray-700 hover:text-primary transition-colors">
              À propos
            </a>
          </li>
          <li>
            <a href="#telecharger" className="text-gray-700 hover:text-primary transition-colors">
              Télécharger l'application
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Nous contacter
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#E6F0FC] shadow-lg lg:hidden z-50">
            <ul className="flex flex-col p-6 gap-4">
              <li>
                <a 
                  href="#apropos" 
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À propos
                </a>
              </li>
              <li>
                <a 
                  href="#telecharger" 
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Télécharger l'application
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;