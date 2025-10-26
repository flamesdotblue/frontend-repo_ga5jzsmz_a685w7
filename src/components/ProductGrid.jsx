import { Leaf, Beer, Milk, Candy } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Avocados",
    price: 3.99,
    tag: "Fresh Produce",
    icon: Leaf,
    color: "from-emerald-400 to-lime-300",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Artisan Sourdough",
    price: 5.49,
    tag: "Bakery",
    icon: Candy,
    color: "from-orange-300 to-rose-300",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Oat Milk Barista",
    price: 2.99,
    tag: "Dairy & Alternatives",
    icon: Milk,
    color: "from-cyan-300 to-sky-400",
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Craft Brew 6‑Pack",
    price: 10.99,
    tag: "Beverages",
    icon: Beer,
    color: "from-amber-300 to-yellow-400",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop",
  },
];

function ProductCard({ product }) {
  const Icon = product.icon;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${product.color} text-black text-xs font-semibold px-3 py-1`}
          >
            <Icon className="h-4 w-4" /> {product.tag}
          </span>
        </div>
        <h3 className="mt-3 text-white text-lg font-semibold">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-white/80">${product.price.toFixed(2)}</p>
          <button className="rounded-lg bg-white/10 border border-white/10 text-white px-3 py-1.5 text-sm hover:bg-white/15 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Picks</h2>
          <p className="text-white/70 mt-1">Hand‑selected favorites to jump‑start your basket.</p>
        </div>
        <a
          href="#"
          className="rounded-xl bg-white/10 border border-white/10 text-white font-medium px-4 py-2 hover:bg-white/15 transition"
        >
          Browse All
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
