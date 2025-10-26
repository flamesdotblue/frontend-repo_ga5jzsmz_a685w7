import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#050508] text-white">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(100%_60%_at_50%_0%,rgba(34,197,94,0.08),transparent),radial-gradient(80%_50%_at_100%_100%,rgba(34,211,238,0.08),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
