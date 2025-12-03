import React from 'react';

const Guarantees = () => {
  const guarantees = [
    {
      title: "Sécurité",
      description: "La sécurité reste la priorité chez Kaf8 et est liée à la recherche de valeurs essentielles dont l'honnêteté, la fiabilité et le respect."
    },
    {
      title: "Ponctualité",
      description: "La ponctualité est une règle d'or. Néanmoins, avec l'accord mutuel entre les différentes parties, le service peut être différé."
    },
    {
      title: "Assurance",
      description: "Kaf8, c'est l'assurance d'avoir 24h/24 un service rapide, de qualité avec des prestataires qui ont le souci du détail et à qui vous pouvez attribuer une note après chaque prestation"
    }
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Nos garanties
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {guarantee.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center p-6 bg-gray-light rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {guarantee.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;