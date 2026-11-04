export interface ToolInfo {
  id: string; path: string; title: string; short: string; description: string; icon: string; group: 'main' | 'additional';
}
export const TOOLS: ToolInfo[] = [
  { id: 'point-conversion', path: '/point-conversion', title: 'Point Conversion', short: 'Point Conversion', icon: 'swap', group: 'main',
    description: 'Convert any point between Cartesian, cylindrical and spherical coordinates.' },
  { id: 'point-operations', path: '/point-operations', title: 'Point Operations', short: 'Point Operations', icon: 'dots', group: 'main',
    description: 'Add or subtract points, distance, midpoint and position vector.' },
  { id: 'vector-conversion', path: '/vector-conversion', title: 'Vector Conversion', short: 'Vector Conversion', icon: 'basis', group: 'main',
    description: 'Convert a vector between coordinate systems at a given point.' },
  { id: 'vector-operations', path: '/vector-operations', title: 'Vector Operations', short: 'Vector Operations', icon: 'arrow', group: 'main',
    description: 'Add, subtract, dot product, cross product, angle and projections.' },
  { id: 'visualizer', path: '/visualizer', title: '3D Visualizer', short: '3D Visualizer', icon: 'cube', group: 'main',
    description: 'Draw points, vectors and surfaces (a coordinate equal to a constant) in all coordinate systems.' },
  { id: 'formulas', path: '/formulas', title: 'Formula Library', short: 'Formulas', icon: 'book', group: 'additional',
    description: 'Searchable formulas with examples and variable definitions.' },
];
