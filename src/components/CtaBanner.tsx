export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-orange-500 py-24">
      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
      {/* Glow shapes */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-orange-400 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-orange-600 opacity-40 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tighter text-white sm:text-5xl">
          Ready to illuminate<br />your codebase?
        </h2>
        <p className="mb-10 text-lg text-orange-100">
          Get started in seconds. No config. No setup. Just Beacon.
        </p>
        <a
          href="#"
          className="inline-block rounded-full bg-white px-9 py-3.5 text-sm font-bold text-orange-500 shadow-lg shadow-orange-700/30 transition-all hover:bg-orange-50 hover:shadow-xl"
        >
          Get started free
        </a>
      </div>
    </section>
  );
}
