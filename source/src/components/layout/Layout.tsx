import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ToolNav from './ToolNav';
import { prefetchAll } from '../../pages/registry';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  useEffect(() => { const t = setTimeout(prefetchAll, 400); return () => clearTimeout(t); }, []);
  return (
    <div className="flex min-h-full flex-col">
      <div className="sticky top-0 z-40">
        <Header />
        {pathname !== '/' && <ToolNav />}
      </div>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <div key={pathname} className="page-fade"><Outlet /></div>
      </main>
      <Footer />
    </div>
  );
}
