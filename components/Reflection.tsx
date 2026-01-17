
import React from 'react';

const Reflection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 md:p-16 border-t-[12px] border-amber-600">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3 border-r border-stone-200 pr-8">
          <h2 className="text-4xl font-black text-stone-950 uppercase tracking-tighter mb-4 leading-none">
            LEGADO Y <br/><span className="text-amber-600">ADVERTENCIA</span>
          </h2>
          <div className="text-sm font-mono text-stone-500">CODEX 1916-1924</div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-8 text-stone-800 font-serif leading-relaxed text-lg">
          <p>
            La ocupación no solo fue un intervalo de pérdida de soberanía; fue el laboratorio donde se cocinó la **tiranía de Rafael L. Trujillo**. Al crear la Guardia Nacional Dominicana para sustituir a los ejércitos caudillistas, EE.UU. centralizó por primera vez el monopolio de la fuerza.
          </p>

          <blockquote className="border-l-4 border-stone-900 pl-6 italic text-stone-600 py-2">
            "La modernización de la infraestructura no compensa la amputación del alma nacional y la destrucción de la democracia incipiente."
          </blockquote>

          <div className="grid sm:grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="font-bold text-stone-950 mb-2 uppercase text-sm tracking-widest">El Desastre Agrario</h4>
              <p className="text-sm text-stone-600">
                La formalización de los títulos de tierra fue el mayor despojo en la historia nacional, convirtiendo a campesinos libres en peones de ingenios extranjeros.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-stone-950 mb-2 uppercase text-sm tracking-widest">La semilla del dictador</h4>
              <p className="text-sm text-stone-600">
                Trujillo ascendió rápidamente en la Guardia Nacional creada por los marines, aprendiendo sus métodos de disciplina y control absoluto.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-stone-950 text-amber-500 rounded-sm">
            <h4 className="font-bold uppercase text-sm mb-2">Conclusión</h4>
            <p className="text-stone-300">
              La intervención de 1916 nos enseña que el orden impuesto por botas extranjeras siempre lleva el germen de una represión futura más profunda. La soberanía no es solo una bandera, es el derecho a cometer nuestros propios errores y sanar nuestras propias heridas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
