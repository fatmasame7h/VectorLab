/** Page loaders: used for lazy routes and for prefetching so navigation feels instant. */
export const loaders = {
  'point-conversion': () => import('./PointConversion'),
  'point-operations': () => import('./PointOperations'),
  'vector-conversion': () => import('./VectorConversion'),
  'vector-operations': () => import('./VectorOperations'),
  visualizer: () => import('./Visualizer'),
  formulas: () => import('./FormulaLibrary'),
  history: () => import('./History'),
};
export const prefetch = (id: string) => { (loaders as Record<string, () => Promise<unknown>>)[id]?.().catch(() => {}); };
export const prefetchAll = () => Object.values(loaders).forEach((l) => l().catch(() => {}));
