'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send, X } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const field =
  'w-full rounded-lg border bg-background px-3 py-2 font-sans text-sm outline-none ring-ring transition-all placeholder:text-muted-foreground/60 focus:ring-2';
const label = 'font-mono text-[10px] tracking-widest text-muted-foreground uppercase';

// staggered entrance for the form rows
const step = (ms: number) => ({
  animationDelay: `${ms}ms`,
});

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const onOpen = () => {
      setStatus('idle');
      setError('');
      setOpen(true);
    };
    window.addEventListener('natanim:contact', onOpen);
    return () => window.removeEventListener('natanim:contact', onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setOpen(false), 2200);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to send message.');
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact Natanim"
      className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center"
    >
      <button
        type="button"
        aria-label="Close contact form"
        onClick={() => setOpen(false)}
        className="animate-in fade-in bg-foreground/30 absolute inset-0 duration-200 backdrop-blur-sm"
      />

      <div className="animate-in fade-in zoom-in-95 slide-in-from-bottom-4 bg-background relative w-full max-w-md rounded-2xl border p-6 shadow-2xl duration-300 sm:p-7">
        <div className="animate-in fade-in slide-in-from-right-2 flex items-start justify-between duration-300">
          <div>
            <h2 className="text-lg font-bold tracking-tight">Send me a message</h2>
            <p className="text-muted-foreground mt-1 text-xs">
              It lands straight in my Telegram, no spam inbox.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-foreground -mr-1 rounded-md p-1 transition-colors hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="animate-in zoom-in-105 fade-in flex flex-col items-center gap-3 py-10 duration-300">
            <CheckCircle2 className="text-signal size-10" />
            <p className="text-sm font-semibold">Message sent</p>
            <p className="text-muted-foreground text-xs">I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5 flex flex-col gap-4">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300" style={step(60)}>
              <label htmlFor="contact-name" className={label}>
                Name
              </label>
              <input
                id="contact-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={`${field} mt-1.5`}
              />
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300" style={step(120)}>
              <label htmlFor="contact-email" className={label}>
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className={`${field} mt-1.5`}
              />
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300" style={step(180)}>
              <label htmlFor="contact-message" className={label}>
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the project, role, or idea..."
                className={`${field} resize-none mt-1.5`}
              />
            </div>

            {status === 'error' && (
              <div className="animate-in fade-in bg-red-500/10 text-red-600 dark:text-red-400 flex items-center gap-2 rounded-lg border border-red-500/30 px-3 py-2 text-xs duration-200">
                <AlertCircle className="size-3.5 shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-primary text-primary-foreground inline-flex h-10 items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all hover:opacity-90 disabled:opacity-60"
            >
              {status === 'sending' ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <>
                  <Send className="size-4" />
                  Send message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
