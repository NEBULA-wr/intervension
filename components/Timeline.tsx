
import React from 'react';
import { TimelineEvent } from '../types';

interface Props {
  events: TimelineEvent[];
}

const Timeline: React.FC<Props> = ({ events }) => {
  return (
    <div className="relative font-mono">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-stone-800 md:-translate-x-1/2"></div>
      
      <div className="space-y-24">
        {events.map((event, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* The Dot (Marker) */}
            <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 bg-stone-950 z-20 -translate-x-1/2 md:-translate-x-1/2 ${
              event.category === 'conflict' ? 'border-rose-600 shadow-[0_0_10px_rgba(225,29,72,0.5)]' : 
              event.category === 'economic' ? 'border-amber-600 shadow-[0_0_10px_rgba(217,119,6,0.5)]' : 'border-stone-400'
            }`}></div>
            
            {/* Content Card */}
            <div className="ml-12 md:ml-0 md:w-[42%] group">
              <div className="bg-stone-900/50 p-8 border border-stone-800 hover:border-amber-600/50 transition-all duration-500 rounded-sm">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-amber-500 font-black text-lg tracking-tighter">
                    [{event.year}]
                  </span>
                  <div className={`px-2 py-1 text-[10px] font-bold uppercase ${
                    event.category === 'conflict' ? 'text-rose-500 bg-rose-500/10' : 
                    event.category === 'economic' ? 'text-amber-500 bg-amber-500/10' : 'text-stone-500 bg-stone-500/10'
                  }`}>
                    {event.category}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {event.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed font-serif">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:w-[42%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
