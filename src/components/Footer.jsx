import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <a 
            href="#" 
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            Mentions légales & CGU
          </a>
          <a 
            href="#" 
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            Politique de confidentialité
          </a>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2023 Kaf8. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;