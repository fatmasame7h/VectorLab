import { NavLink } from 'react-router-dom';
import { TOOLS } from '../../types/tools';
import { prefetch } from '../../pages/registry';

/** One-click access to every tool from every page. */
export default function ToolNav() {
  return (
    <nav aria-label="Tools" className="border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
        {TOOLS.map((t) => (
          <NavLink key={t.id} to={t.path} onMouseEnter={() => prefetch(t.id)} onFocus={() => prefetch(t.id)} onTouchStart={() => prefetch(t.id)}
            className={({ isActive }) => `whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${isActive ? 'bg-accent text-accent-ink' : 'text-muted hover:bg-accent/10 hover:text-ink'}`}>
            {t.short}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
