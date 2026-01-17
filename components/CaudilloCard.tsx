
import React from 'react';
import { Caudillo } from '../types';

interface Props {
  caudillo: Caudillo;
}

const CaudilloCard: React.FC<Props> = ({ caudillo }) => {
  return (
    <div className="group relative bg-stone-800 rounded-2xl overflow-hidden shadow-xl transition-all hover:-translate-y-2 hover:shadow-amber-900/20 border border-stone-700">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={caudillo.imageUrl} 
          alt={caudillo.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-2 py-1 bg-amber-600 text-[10px] font-bold uppercase rounded mb-2 tracking-tighter">
          {caudillo.country}
        </span>
        <h3 className="text-xl font-bold mb-1">{caudillo.name}</h3>
        <p className="text-amber-400 text-xs font-semibold mb-4">{caudillo.period}</p>
        
        <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
          <p className="text-sm text-stone-300 mb-4 line-clamp-3">
            {caudillo.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {caudillo.tags.map(tag => (
              <span key={tag} className="text-[9px] px-2 py-1 bg-stone-700 rounded-full text-stone-400 border border-stone-600">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaudilloCard;
