
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const result = await ai.models.generateContent({
        model,
        contents: query,
        config: {
          systemInstruction: `Eres un experto historiador especializado en el caudillismo latinoamericano del siglo XX. 
          Responde de manera profesional, educativa y objetiva. Utiliza un tono académico pero accesible. 
          Si se te pregunta por un caudillo específico, menciona su país, época y legado principal. 
          Limita tus respuestas a un máximo de 3 párrafos cortos.`
        }
      });

      setResponse(result.text || "Lo siento, no pude procesar esa consulta histórica.");
    } catch (error) {
      console.error(error);
      setResponse("Hubo un error al conectar con el archivo histórico digital.");
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Diferencia entre Perón y Vargas",
    "Impacto del caudillismo en la economía",
    "Relación entre caudillos y militares",
    "El legado de Porfirio Díaz en el siglo XX"
  ];

  return (
    <div className="space-y-6">
      <form onSubmit={handleAsk} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej: ¿Cuál fue el legado de Trujillo en el Caribe?"
          className="w-full px-6 py-4 bg-stone-100 border-2 border-transparent focus:border-amber-600 focus:bg-white rounded-xl outline-none transition-all pr-32"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-2 bottom-2 px-6 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 disabled:opacity-50 transition-colors"
        >
          {loading ? 'Consultando...' : 'Preguntar'}
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => setQuery(s)}
            className="text-xs px-3 py-1 bg-stone-100 hover:bg-amber-100 text-stone-500 hover:text-amber-700 rounded-full transition-colors border border-stone-200"
          >
            {s}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
        </div>
      )}

      {response && (
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl animate-fade-in">
          <div className="prose prose-stone max-w-none text-stone-700 whitespace-pre-line leading-relaxed">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
