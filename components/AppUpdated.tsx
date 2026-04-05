
import React from 'react';
import { Icons } from './Icons';

const AppUpdated: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="relative bg-gray-900 p-8 rounded-full border border-gold/30 shadow-2xl">
          <Icons.Sync size={64} className="text-gold animate-spin-slow" />
        </div>
      </div>

      <h1 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase italic">
        App <span className="text-gold">Updated</span>
      </h1>
      
      <p className="text-gray-400 max-w-md leading-relaxed mb-8 font-medium">
        This app has been updated to a newer version. 
        Click the button below to join <span className="text-gold font-bold">chix9ja</span> and continue your journey.
      </p>

      <div className="space-y-4 w-full max-w-xs">
        <a 
          href="https://chix9ja.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-gold hover:bg-gold/90 text-black font-black py-4 rounded-2xl flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-lg shadow-gold/20"
        >
          <span className="uppercase tracking-widest">Join chix9ja</span>
          <Icons.ArrowRight size={20} />
        </a>
      </div>

      <div className="mt-12 flex items-center space-x-2 text-gray-600">
        <Icons.Sync size={16} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Earnix9ja Infrastructure Team</span>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AppUpdated;
