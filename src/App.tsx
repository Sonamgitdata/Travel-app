import { Navbar, Hero } from './components/Header';
import { TravelCard, SectionHeader } from './components/TravelCard';
import { TravelAgentChat } from './components/TravelAgentChat';
import { DESTINATIONS, HOTELS, EXPERIENCES } from './constants';
import { motion } from 'motion/react';
import { Shield, Globe, Award, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-beige-200">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* Featured Destinations */}
        <section id="destinations">
          <SectionHeader 
            subtitle="Curated Collections" 
            title="Popular Destinations" 
            linkText="View all destinations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest) => (
              <TravelCard key={dest.id} item={dest} type="destination" />
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-earth-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-beige-200/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-beige-300 font-bold tracking-widest uppercase mb-4 block">Our Legacy</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Crafting Memories Since <span className="text-beige-300 italic">2011.</span>
              </h2>
              <p className="text-beige-100/70 text-lg mb-12 max-w-lg">
                With over 15 years on the ground in Europe and South East Asia, we don't just book trips—we design life-changing experiences tailored to your unique rhythm.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <span className="text-4xl font-black text-beige-200">15k+</span>
                  <p className="text-sm text-beige-100/50 font-bold uppercase tracking-wider">Happy Travelers</p>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl font-black text-beige-200">450+</span>
                  <p className="text-sm text-beige-100/50 font-bold uppercase tracking-wider">Local Partners</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: 'Secure Booking', desc: 'Verified partners and secure payments.' },
                { icon: Globe, title: 'Local Insights', desc: 'Hidden gems only locals know about.' },
                { icon: Award, title: 'Premium Quality', desc: 'Hand-picked hotels and experiences.' },
                { icon: Heart, title: '24/7 Support', desc: 'We are with you every step of the way.' },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10"
                >
                  <feature.icon className="w-10 h-10 text-beige-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-beige-100/50 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotels Section */}
        <section id="hotels">
          <SectionHeader 
            subtitle="Luxury & Comfort" 
            title="Hand-Picked Stays" 
            linkText="Explore all hotels"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOTELS.map((hotel) => (
              <TravelCard key={hotel.id} item={hotel} type="hotel" />
            ))}
          </div>
        </section>

        {/* Experiences Section */}
        <section id="experiences">
          <SectionHeader 
            subtitle="Unforgettable Moments" 
            title="Local Experiences" 
            linkText="Browse all activities"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => (
              <TravelCard key={exp.id} item={exp} type="experience" />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-beige-300 rounded-[3rem] p-12 md:p-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-earth-900 mb-6">Get Travel Inspiration</h2>
            <p className="text-earth-800/60 mb-10">Join 50,000+ travelers and get the latest deals and local guides directly in your inbox.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-8 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-earth-800 text-earth-900"
              />
              <button className="bg-earth-800 text-white px-10 py-4 rounded-2xl font-bold hover:bg-earth-900 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-beige-100 border-t border-beige-300 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-8 h-8 text-earth-800" />
                <span className="text-2xl font-bold tracking-tighter text-earth-900 uppercase">Nomad's Compass</span>
              </div>
              <p className="text-earth-800/60 max-w-sm mb-8">
                Your premier travel partner for exploring the wonders of Europe and the vibrant cultures of South East Asia.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-earth-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 text-earth-800/60 font-medium">
                <li><a href="#" className="hover:text-earth-900 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-earth-900 transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-earth-900 transition-colors">Travel Blog</a></li>
                <li><a href="#" className="hover:text-earth-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-earth-900 mb-6 uppercase tracking-widest text-sm">Support</h4>
              <ul className="space-y-4 text-earth-800/60 font-medium">
                <li><a href="#" className="hover:text-earth-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-earth-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-earth-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-earth-900 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-beige-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-earth-800/40 text-sm">© 2026 Nomad's Compass. All rights reserved.</p>
            <div className="flex gap-6">
              {/* Social Icons Placeholder */}
              <div className="w-5 h-5 bg-earth-800/10 rounded-full" />
              <div className="w-5 h-5 bg-earth-800/10 rounded-full" />
              <div className="w-5 h-5 bg-earth-800/10 rounded-full" />
            </div>
          </div>
        </div>
      </footer>

      <TravelAgentChat />
    </div>
  );
}
