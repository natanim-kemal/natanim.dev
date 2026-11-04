import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">404</p>
      <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
        This page isn&apos;t here.
      </h1>
      <p className="max-w-sm text-balance text-muted-foreground">
        The link may be old, but the work is still down the hall.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground mt-2 inline-flex h-9 items-center rounded-lg px-3.5 text-sm font-medium transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </main>
  );
}
