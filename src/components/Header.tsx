import { motion } from 'motion/react';
import { Plane, Hotel, MapPin, Utensils, Compass, Package, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Flights', icon: Plane },
    { name: 'Hotels', icon: Hotel },
    { name: 'Experiences', icon: Compass },
    { name: 'Packages', icon: Package },
    { name: 'Restaurants', icon: Utensils },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-beige-100/80 backdrop-blur-md border-b border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Compass className="w-8 h-8 text-earth-800" />
            <span className="text-2xl font-bold tracking-tighter text-earth-900">NOMAD'S COMPASS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center gap-2 text-sm font-medium text-earth-800 hover:text-earth-900 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
            <button className="bg-earth-800 text-beige-100 px-6 py-2 rounded-full text-sm font-semibold hover:bg-earth-900 transition-all shadow-lg">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-earth-800 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-beige-100 border-b border-beige-300 px-4 pt-2 pb-6"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center gap-4 py-4 text-lg font-medium text-earth-800 border-b border-beige-200 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </a>
          ))}
          <button className="w-full mt-6 bg-earth-800 text-beige-100 py-4 rounded-xl font-bold">
            Book Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
          alt="Majestic Mountains"
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-beige-200/20 to-beige-200" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-beige-100 font-semibold tracking-widest uppercase mb-4"
        >
          15 Years of Expertise in Europe & SE Asia
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Your Journey, <br />
          <span className="text-beige-200 italic">Expertly Crafted.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center"
        >
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-beige-100 rounded-xl border border-beige-300">
            <MapPin className="text-earth-800 w-5 h-5" />
            <input
              type="text"
              placeholder="Where to next?"
              className="bg-transparent border-none focus:ring-0 w-full text-earth-900 placeholder-earth-800/50 font-medium"
            />
          </div>
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-beige-100 rounded-xl border border-beige-300">
            <Plane className="text-earth-800 w-5 h-5" />
            <select className="bg-transparent border-none focus:ring-0 w-full text-earth-900 font-medium appearance-none">
              <option>Flights + Hotels</option>
              <option>Hotels Only</option>
              <option>Adventures</option>
            </select>
          </div>
          <button className="w-full md:w-auto bg-earth-800 text-white px-10 py-4 rounded-xl font-bold hover:bg-earth-900 transition-all flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            Search
          </button>
        </motion.div>
      </div>
    </section>
  );
}
