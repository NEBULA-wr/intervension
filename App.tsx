import React, { useState, useEffect } from 'react';
import { Section } from './types';
import { PROTAGONISTAS, TIMELINE, ECONOMY_STATS } from './constants';
import CaudilloCard from './components/CaudilloCard';
import Timeline from './components/Timeline';
import Reflection from './components/Reflection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen selection:bg-amber-600 selection:text-white">
      <div className="fixed inset-0 opacity-10 pointer-events-none bg-[url('https://i.pinimg.com/1200x/3a/cb/fb/3acbfb3f58b533728effe2f2e863e54d.jpg')] z-50"></div>

      {/* Military Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4">
        {Object.values(Section).map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border ${
              activeSection === s ? 'bg-amber-600 scale-150 border-amber-400' : 'bg-stone-700 border-stone-600 hover:bg-stone-500'
            }`}
            title={s}
          />
        ))}
      </nav>

      {/* Hero Section */}
      <section id={Section.HERO} className="relative h-screen flex items-center justify-center overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544212920-0081014e0f17?q=80&w=2000')] bg-cover bg-center grayscale opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block border-2 border-amber-600 px-4 py-1 mb-8 text-amber-500 font-mono tracking-widest text-sm uppercase">
            Top Secret // Case 1916-1924
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none uppercase">
            OCUPACIÓN <br/>
            <span className="text-amber-600 underline decoration-stone-800">MILITAR</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 font-serif italic mb-12">
            "El ocaso del machete y el amanecer de la bota extranjera."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollTo(Section.CONTEXT)} className="bg-amber-600 hover:bg-amber-500 text-stone-950 px-10 py-4 font-black uppercase tracking-widest transition-all">Ver Antecedentes</button>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section id={Section.CONTEXT} className="py-32 px-4 bg-stone-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-10 text-amber-600 border-l-8 border-amber-900 pl-8 uppercase">El Colapso del Estado</h2>
            <div className="space-y-8 text-lg text-stone-300 font-serif leading-relaxed">
              <p>
                La intervención no fue un evento aislado. Fue la culminación de décadas de inestabilidad política y el deseo de EE.UU. de asegurar el Caribe como su "mare nostrum" privado.
              </p>
              <div className="bg-stone-800 p-8 border-l-4 border-amber-600">
                <h4 className="text-amber-500 font-bold mb-2 uppercase text-sm">Causa Inmediata:</h4>
                <p className="text-sm">La rebelión de Desiderio Arias contra el presidente Juan Isidro Jimenes, lo que dio el pretexto de "incapacidad de autogobierno".</p>
              </div>
            </div>
          </div>
          <img src="https://almomento.net/wp-content/uploads/2016/10/Primera-invasion-de-Estados-Unidos-a-RD.jpg" className="grayscale rounded shadow-2xl" alt="Contexto histórico" />
        </div>
      </section>

      {/* Timeline Section */}
      <section id={Section.TIMELINE} className="py-32 bg-stone-950">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-24 uppercase">Expediente Cronológico</h2>
          <Timeline events={TIMELINE} />
        </div>
      </section>

      {/* Economy Section */}
      <section id={Section.ECONOMY} className="py-32 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-16 text-center uppercase tracking-widest text-amber-600">Impacto Económico</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {ECONOMY_STATS.map((stat, i) => (
              <div key={i} className="bg-stone-950 p-8 border border-stone-800 hover:border-amber-600 transition-all">
                <div className="text-amber-600 font-mono text-xs mb-4">{stat.label}</div>
                <div className="text-5xl font-black mb-4">{stat.value}</div>
                <div className="text-stone-500 text-xs">{stat.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resistance Section */}
      <section id={Section.RESISTANCE} className="py-32 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black mb-20 text-center uppercase tracking-tighter">Figuras de la Resistencia</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {PROTAGONISTAS.map(p => (
              <CaudilloCard key={p.id} caudillo={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section id={Section.REFLECTION} className="py-32 bg-stone-50 text-stone-950">
        <div className="max-w-4xl mx-auto px-4">
          <Reflection />
        </div>
      </section>

      <footer className="py-20 bg-stone-950 border-t border-stone-800 text-center">
        <p className="text-stone-600 font-mono text-xs mb-2 tracking-[0.5em]">FIN DEL ARCHIVO // 1924</p>
        <p className="text-stone-400 font-bold">&copy; 2024 Investigación Histórica Dominicana</p>
      </footer>
    </div>
  );
};

export default App;