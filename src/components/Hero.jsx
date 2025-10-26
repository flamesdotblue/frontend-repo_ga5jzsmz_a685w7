import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/t7ourXf4CdN9XTF3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient beams overlay to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_10%_10%,rgba(34,197,94,0.25),transparent),radial-gradient(40%_30%_at_90%_20%,rgba(34,211,238,0.2),transparent),radial-gradient(25%_25%_at_50%_80%,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Fresh • Fast • Futuristic
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Your Cosmic Supermarket
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-white/80 text-base sm:text-lg">
          Welcome to Bean Nation — a next‑gen grocery experience with planet‑fresh
          produce, pantry essentials, and daily deals that orbit around you.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#shop"
            className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold px-5 py-3 shadow-lg shadow-emerald-500/30 hover:brightness-110 transition"
          >
            Shop Now
          </a>
          <a
            href="#deals"
            className="rounded-xl bg-white/10 border border-white/10 text-white font-medium px-5 py-3 hover:bg-white/15 transition"
          >
            Today’s Deals
          </a>
        </div>
      </div>
    </section>
  );
}
