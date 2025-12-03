import React from 'react';
import phoneApp from "../../public/phone2.PNG";

const Features = () => {
  return (
   <section className="bg-white py-16 px-6 lg:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 text-center">
      Ce que nous vous permettrons de faire
    </h2>

    <p className="text-base lg:text-lg text-gray-600 mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
      Avec la vocation Européenne de Kaf8, la recherche de prestataires du transport et de la livraison n'aura jamais été aussi aisée.
    </p>

    {/* Grid layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-8 items-center">

      {/* Feature 1 - left column, row 1 */}
      <div className="lg:col-start-1 lg:row-start-1 text-left">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
          Trouver des préstataires pour vos courses
        </h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
          La librairie de prestataires dans ta région partout en Europe te permet aujourd'hui d'avoir le choix de contacter directement un prestataire de service ou de faire une annonce correspondant à ton besoin
        </p>
      </div>

      {/* Feature 2 - left column, row 2 */}
      <div className="lg:col-start-1 lg:row-start-2 text-left">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
          Devenir préstataire
        </h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
          Tu es un particulier ayant un moyen de transport et qui a envie de se faire un complément de revenu ? Tu représentes une entreprise qui veut gagner en visibilité ?
        </p>
      </div>

      {/* Phone Image - center column, spans 2 rows */}
      <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center">
        <img
          src={phoneApp}
          alt="Kaf8 App Interface"
          className="w-64 lg:w-80 xl:w-96 h-auto drop-shadow-2xl"
        />
      </div>

      {/* Feature 3 - right column, row 1 */}
      <div className="lg:col-start-3 lg:row-start-1 lg:row-span-2 text-left">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
          Suivre vos livraisons Internationales
        </h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
          Tu es un transporteur international ? Enregistre donc tes clients dans notre système. Grâce à notre fonction de tracking ils pourront désormais suivre le statut en temps réel de leur colis à l'international et ceci jusqu'à destination
        </p>
      </div>

    </div>
  </div>
</section>

  );
};

export default Features;