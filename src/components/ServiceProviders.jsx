import React from 'react';
import cutton from "../../public/cutton.PNG";
import cycle from "../../public/cycle.PNG";
import delever from "../../public/delever.PNG";
import room from "../../public/room.PNG";

const ServiceProviders = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
          Des dizaines de prestations<br />
          disponibles tous les jours<br />
          dans votre région
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 max-h-[600px]">
          {/* First Column - 2 images stacked */}
          <div className="grid grid-rows-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-full">
              <img 
                src={cutton}
                alt="Delivery person with package" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-full">
              <img 
                src={delever} 
                alt="Delivery van" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Column - 1 tall image (2 row span) */}
          <div className="rounded-2xl overflow-hidden row-span-1">
            <img 
              src={cycle}
              alt="Bicycle delivery" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third Column - 1 tall image (2 row span) */}
          <div className="rounded-2xl overflow-hidden row-span-1">
            <img 
              src={room} 
              alt="Delivery person at door" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="grid lg:hidden grid-cols-2 gap-4">
          {/* Top Left */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={cutton}
              alt="Delivery person with package" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right - Tall (2 row span) */}
          <div className="rounded-2xl overflow-hidden row-span-2">
            <img 
              src={cycle}
              alt="Bicycle delivery" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Left */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={delever}
              alt="Delivery van" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Full Width */}
          <div className="rounded-2xl overflow-hidden col-span-2">
            <img 
              src={room}
              alt="Delivery person at door" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;