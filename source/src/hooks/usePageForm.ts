import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/** Inputs survive navigation between tools (kept in memory for the session). */
const memory = new Map<string, unknown>();

/** Form state; restored from the history page (router state) or from the last visit. */
export function usePageForm<T extends object>(initial: () => T) {
  const loc = useLocation();
  const key = loc.pathname;
  const restore = (loc.state as { restore?: T } | null)?.restore;
  const [form, setForm] = useState<T>(() => restore ?? (memory.get(key) as T | undefined) ?? initial());
  useEffect(() => { memory.set(key, form); }, [key, form]);
  const set = useCallback((p: Partial<T>) => setForm((f) => ({ ...f, ...p })), []);
  return { form, setForm, set, restored: !!restore };
}
