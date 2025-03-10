import React from 'react';

const MobifoneSubscriber = () => {
  const syntaxCards = [
    {
      title: "SYNTAX",
      subtitle: "SERVICE REGISTRATION",
      command: "DK OF90 SEND",
      send: "999"
    },
    {
      title: "SYNTAX CANCELLATION OF",
      subtitle: "SERVICE REGISTRATION",
      command: "HUY OF90 SEND",
      send: "999"
    },
    {
      title: "SYNTAX SEARCH",
      subtitle: "THE PACKAGE IS IN USE",
      command: "KT ALL SEND",
      send: "999"
    }
  ];

  return (
      <div className="mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#800000]">
          YOU ARE A MOBIFONE SUBSCRIBER
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {syntaxCards.map((card, index) => (
            <div key={index} className="bg-gray-100  rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <p className="text-md font-bold text-black uppercase">{card.title}</p>
                <p className="text-md font-bold text-red-700 uppercase">{card.subtitle}</p>
              </div>
              
              <div className="border border-red-700 rounded-full py-2 px-4 flex items-center justify-center mx-auto w-fit">
                <span className="text-red-700 font-bold text-sm">{card.command}</span>
                <span className="text-black font-bold text-sm ml-1">{card.send}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default MobifoneSubscriber;