import { motion } from 'motion/react';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Experience, Hotel, Destination } from '@/src/constants';

interface CardProps {
  item: Destination | Hotel | Experience;
  type: 'destination' | 'hotel' | 'experience';
}

export function TravelCard({ item, type }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-beige-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={('name' in item ? item.name : 'title' in item ? item.title : '')}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-earth-800">
          {item.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-earth-900">
            {'name' in item ? item.name : 'title' in item ? item.title : ''}
          </h3>
          {'rating' in item && (
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold">{item.rating}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 text-earth-800/70 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{('location' in item ? item.location : 'region' in item ? item.region : '')}</span>
        </div>

        {'description' in item && (
          <p className="text-earth-800/80 text-sm line-clamp-2 mb-6">
            {item.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-beige-100">
          <div>
            <span className="text-xs text-earth-800/50 block uppercase font-bold tracking-wider">
              {type === 'hotel' ? 'Starting from' : 'Starting from'}
            </span>
            <span className="text-xl font-black text-earth-900">
              ${'pricePerNight' in item ? item.pricePerNight : 'price' in item ? item.price : '499'}
              <span className="text-sm font-normal text-earth-800/60 ml-1">
                {type === 'hotel' ? '/night' : '/person'}
              </span>
            </span>
          </div>
          <button className="p-3 bg-beige-100 rounded-2xl text-earth-800 group-hover:bg-earth-800 group-hover:text-white transition-all">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function SectionHeader({ title, subtitle, linkText }: { title: string; subtitle: string; linkText?: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
      <div>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-earth-800/60 font-bold tracking-widest uppercase text-sm block mb-2"
        >
          {subtitle}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-earth-900"
        >
          {title}
        </motion.h2>
      </div>
      {linkText && (
        <a href="#" className="flex items-center gap-2 font-bold text-earth-800 hover:text-earth-900 transition-colors group">
          {linkText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
}
