
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

      {/* Hero Section - The Declassified File */}
      <section id={Section.HERO} className="relative h-screen flex items-center justify-center overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544212920-0081014e0f17?q=80&w=2000')] bg-cover bg-center grayscale opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block border-2 border-amber-600 px-4 py-1 mb-8 text-amber-500 font-mono tracking-widest text-sm uppercase">
            Top Secret // Case 1916-1924
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none">
            OCUPACIÓN <br/>
            <span className="text-amber-600 underline decoration-stone-800">MILITAR</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 font-serif italic mb-12">
            "Cuando la bota imperial reemplazó al machete del caudillo."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollTo(Section.CONTEXT)} className="bg-amber-600 hover:bg-amber-500 text-stone-950 px-10 py-4 font-black uppercase tracking-widest transition-all">Ver Antecedentes</button>
            <button onClick={() => scrollTo(Section.ECONOMY)} className="border border-stone-600 hover:bg-stone-800 px-10 py-4 font-bold uppercase tracking-widest transition-all">Datos Económicos</button>
          </div>
        </div>
      </section>

      {/* The Antecedents Section */}
      <section id={Section.CONTEXT} className="py-32 px-4 bg-stone-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-10 text-amber-600 border-l-8 border-amber-900 pl-8 uppercase">El Colapso del Estado</h2>
            <div className="space-y-8 text-lg text-stone-300 font-serif leading-relaxed">
              <p>
                La República Dominicana de 1916 era un tablero de ajedrez roto. El presidente <strong>Juan Isidro Jimenes</strong> se encontraba atrapado entre las presiones de EE.UU. por controlar las aduanas y la rebeldía armada de su ministro <strong>Desiderio Arias</strong>.
              </p>
              <p>
                La ocupación no fue solo "por la deuda". EE.UU. buscaba un enclave seguro ante la expansión alemana en el Caribe durante la Primera Guerra Mundial y una plataforma para sus corporaciones azucareras.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-stone-800 p-6 border-t-2 border-amber-600">
                  <h4 className="text-amber-500 font-bold mb-2">Convención 1907</h4>
                  <p className="text-sm">El origen legal de la pérdida de soberanía aduanera.</p>
                </div>
                <div className="bg-stone-800 p-6 border-t-2 border-amber-600">
                  <h4 className="text-amber-500 font-bold mb-2">Desarme Civil</h4>
                  <p className="text-sm">Confiscación de miles de armas a la población local.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-stone-800 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <img 
              src="https://almomento.net/wp-content/uploads/2016/10/Primera-invasion-de-Estados-Unidos-a-RD.jpg" 
              alt="Marines" 
              className="relative grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" 
            />
            <div className="absolute bottom-4 right-4 bg-stone-950 p-4 font-mono text-xs">ARCH-0116: Santo Domingo Harbor</div>
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <section id={Section.TIMELINE} className="py-32 bg-stone-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-white mb-4">CRONOGRAMA TÉCNICO</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <Timeline events={TIMELINE} />
        </div>
      </section>

      {/* Economic Impact - New Section */}
      <section id={Section.ECONOMY} className="py-32 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-bold text-amber-600 mb-8 uppercase">La Danza de los Millones</h2>
              <p className="text-stone-400 mb-8 font-serif">
                Durante 1918-1920, la destrucción de la industria remolachera europea por la WWI causó un boom ficticio en el precio del azúcar dominicano. Se construyeron palacios y mansiones, pero las ganancias no se reinvirtieron en la nación, sino en el consumo suntuario.
              </p>
              <div className="bg-amber-900/20 p-6 rounded-lg border border-amber-900/50">
                <h4 className="font-bold text-amber-500 mb-2">Ley de Registro (1920)</h4>
                <p className="text-sm italic">"El despojo legal". Se legalizaron los terrenos comuneros para que pasaran a manos de los grandes ingenios estadounidenses mediante el sistema de títulos individuales.</p>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {ECONOMY_STATS.map((stat, i) => (
                <div key={i} className="bg-stone-950 p-10 border border-stone-800 hover:border-amber-600 transition-all group">
                  <div className="text-sm font-mono text-amber-600 mb-4 tracking-widest">{stat.label}</div>
                  <div className="text-6xl font-black mb-4 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                  <div className="text-stone-500 text-sm leading-relaxed">{stat.context}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Protagonists of Resistance */}
      <section id={Section.RESISTANCE} className="py-32 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-6xl font-black max-w-xl leading-none">AGENTES DE LA RESISTENCIA</h2>
            <div className="text-stone-500 font-mono text-sm border-l border-stone-800 pl-8">
              "No hubo un solo pueblo que no <br/> levantara su voz o su arma."
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROTAGONISTAS.map(p => (
              <CaudilloCard key={p.id} caudillo={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section id={Section.REFLECTION} className="py-32 bg-stone-100 text-stone-900">
        <div className="max-w-4xl mx-auto px-4">
          <Reflection />
        </div>
      </section>

      <footer className="py-20 bg-stone-950 border-t border-stone-900 text-center px-4">
        <div className="font-mono text-xs text-stone-600 tracking-widest mb-4">DOCUMENTO HISTÓRICO DIGITAL - NO PARA REPRODUCCIÓN COMERCIAL</div>
        <p className="text-stone-400 font-bold">&copy; 2024 Investigación Histórica Dominicana</p>
      </footer>
    </div>
  );
};

export default App;
