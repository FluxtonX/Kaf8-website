import React from "react";

const VehicleServiceSection = () => {
  return (
    <section 
      id="telecharger" 
      className="relative w-full py-16 px-4 bg-gray-100 overflow-hidden"
    >
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
                <img src="/Vector.png" alt="App Store" className="w-8 h-8" />
                <div className="ml-3 text-left">
                  <div className="text-xs">Télécharger dans</div>
                  <div className="text-sm font-semibold">l'App Store</div>
                </div>
              </a>

              <a className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg">
                <img src="/GooglePlay.png" alt="Google Play" className="w-8 h-8" />
                <div className="ml-3 text-left">
                  <div className="text-xs">Disponible sur</div>
                  <div className="text-sm font-semibold">Google Play Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE — MUCH BIGGER */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img 
              src="/cars.png"
              className="
                w-[500px]
                sm:w-[600px]
                md:w-[700px]
                lg:w-[900px]
                xl:w-[1000px]
                max-w-none
                h-auto 
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