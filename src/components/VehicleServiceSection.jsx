import React from "react";
const VehicleServiceSection = () => {
  return (
   <section id="telecharger"  className="relative w-full py-16 px-4 bg-gray-light overflow-hidden">
  <div className="relative w-full max-w-7xl mx-auto">

    <div className="flex flex-row items-center justify-between gap-6 flex-wrap md:flex-nowrap">

      {/* LEFT CONTENT */}
      <div className="flex-1 min-w-[260px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          Enregistrez le<br />
          <span className="font-bold">service de véhicule</span><br />
          parfait pour votre<br />
          entreprise.
        </h2>

        {/* BUTTONS — hide on small screen */}
        <div className="hidden sm:flex flex-row flex-wrap gap-4">
          <a className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg">
            <img src="/Vector.png" className="w-8 h-8" />
            <div className="ml-3 text-left">
              <div className="text-xs">Télécharger dans</div>
              <div className="text-sm font-semibold">l'App Store</div>
            </div>
          </a>

          <a className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg">
            <img src="/GooglePlay.png" className="w-8 h-8" />
            <div className="ml-3 text-left">
              <div className="text-xs">Disponible sur</div>
              <div className="text-sm font-semibold">Google Play Store</div>
            </div>
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE — bigger image */}
      <div className="flex-1 flex  justify-center">
        <img 
          src="/cars.png"
          className="
            w-full 
            max-w-[1000px]   /* Bigger width */
            h-auto 
            md:max-w-[1300px]  /* Even larger on big screens */
            object-contain
            
          "
          alt="cars"
        />
      </div>

    </div>
  </div>
</section>

  );
};

export default VehicleServiceSection;
