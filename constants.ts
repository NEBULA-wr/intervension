
import { Caudillo, TimelineEvent, EconomicData } from './types';

export const PROTAGONISTAS: Caudillo[] = [
  {
    id: 'fiallo',
    name: 'Fabio Fiallo',
    country: 'R.D.',
    period: 'Resistencia Intelectual',
    description: 'Poeta y patriota encarcelado por el gobierno militar por sus escritos contra la ocupación. Lideró la Unión Nacional Dominicana.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCvxIBygkL4srEdbFLSguDJ149BgSAKmWSw&s',
    legacy: 'Voz de la protesta cívica y la soberanía moral.',
    tags: ['Intelectual', 'Preso Político', 'UND']
  },
  {
    id: 'arias',
    name: 'Desiderio Arias',
    country: 'R.D.',
    period: 'Caudillo en Armas',
    description: 'Ministro de Guerra cuya rebelión contra Jimenes fue la excusa final para el desembarco. Representaba el regionalismo indomable.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Desiderio.jpg',
    legacy: 'El último gran caudillo de la línea noreste.',
    tags: ['Militar', 'Rebelde', 'Monte Cristi']
  },
  {
    id: 'pepin',
    name: 'Ercilia Pepín',
    country: 'R.D.',
    period: 'Líder Cívica',
    description: 'Educadora santiaguera que organizó protestas masivas y se negó a izar la bandera dominicana a media asta durante la ocupación.',
    imageUrl: 'https://listindiario.com/files/vertical_main_image/files/fp/uploads/2025/12/04/6932130285ef1.r_d.8-210.webp',
    legacy: 'Madre del civismo dominicano moderno.',
    tags: ['Educación', 'Mujeres', 'Santiago']
  },
  {
    id: 'knapp',
    name: 'Almirante Knapp',
    country: 'EE.UU.',
    period: 'Gobierno de Ocupación',
    description: 'Impuso la ley marcial absoluta, disolvió el congreso y censuró toda la prensa dominicana durante los primeros años.',
    imageUrl: 'data:image/jpeg;base64,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',
    legacy: 'Administrador del estado de excepción.',
    tags: ['Naval', 'Control', 'Marines']
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1916 Mayo',
    title: 'Desembarco Inicial',
    description: 'El USS Dolphin llega a Santo Domingo. Los marines ocupan la ciudad "pacíficamente" para asegurar las aduanas.',
    category: 'conflict'
  },
  {
    year: '1916 Julio',
    title: 'Batalla de la Barranquita',
    description: 'Ochenta hombres liderados por Máximo Cabral enfrentan a 800 marines en Mao. Una de las resistencias más heroicas.',
    category: 'conflict'
  },
  {
    year: '1917',
    title: 'Orden Ejecutiva No. 47',
    description: 'Se crea la Guardia Nacional Dominicana para sustituir a las tropas rebeldes. Fue la base militar del trujillato.',
    category: 'politic'
  },
  {
    year: '1918-1920',
    title: 'Danza de los Millones',
    description: 'El precio del azúcar sube a niveles históricos por la WWI. El país vive una falsa prosperidad que termina en crisis.',
    category: 'economic'
  },
  {
    year: '1920 Julio',
    title: 'Ley de Registro de Tierras',
    description: 'Se impone el sistema Torrens para sanear títulos. Facilitó el despojo de tierras comuneras a favor de las azucareras de EE.UU.',
    category: 'economic'
  },
  {
    year: '1922',
    title: 'Inauguración Carretera Duarte',
    description: 'Conexión vial Santo Domingo-Santiago. Gran avance técnico pero con fines de control militar rápido.',
    category: 'social'
  },
  {
    year: '1924',
    title: 'Plan Hughes-Peynado',
    description: 'Las tropas se retiran bajo la supervisión de un gobierno provisional. Fin de la soberanía directa de EE.UU.',
    category: 'politic'
  }
];

export const ECONOMY_STATS: EconomicData[] = [
  { label: 'Precio Azúcar', value: '22.5¢', context: 'Máximo histórico en 1920 (La Danza de los Millones).' },
  { label: 'Expansión Vial', value: '500km', context: 'Nuevas carreteras para transporte de azúcar y tropas.' },
  { label: 'Control Aduanas', value: '100%', context: 'EE.UU. administraba el 100% de los ingresos dominicanos.' },
  { label: 'Despojo Agrario', value: '80%', context: 'Estimado de tierras del este controladas por centrales extranjeros.' }
];
