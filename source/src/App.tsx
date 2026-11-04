import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { loaders } from './pages/registry';

const PointConversion = lazy(loaders['point-conversion']);
const PointOperations = lazy(loaders['point-operations']);
const VectorConversion = lazy(loaders['vector-conversion']);
const VectorOperations = lazy(loaders['vector-operations']);
const Visualizer = lazy(loaders.visualizer);
const FormulaLibrary = lazy(loaders.formulas);
const History = lazy(loaders.history);

export default function App() {
  return (
    <Suspense fallback={<p className="p-8 text-center text-muted">Loading…</p>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/point-conversion" element={<PointConversion />} />
          <Route path="/point-operations" element={<PointOperations />} />
          <Route path="/vector-conversion" element={<VectorConversion />} />
          <Route path="/vector-operations" element={<VectorOperations />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/formulas" element={<FormulaLibrary />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
