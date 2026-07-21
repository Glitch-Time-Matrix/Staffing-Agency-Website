import React from "react";
import { CLIENT_LOGOS, TESTIMONIALS } from "../data";

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20 border-b border-zinc-200/80 bg-[#fafafa] relative overflow-hidden">
      <div className="w-full border-y border-zinc-200 bg-white py-8 mb-20 overflow-hidden select-none shadow-xs">
        <div className="max-w-7xl mx-auto px-6 mb-4 text-left">
          <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
            Trusted Global Placement Network / Partner Enterprises
          </p>
        </div>
        
        <div className="relative flex w-full">
          <div className="animate-marquee flex gap-12 sm:gap-24 items-center">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 text-zinc-700 font-sans font-semibold text-lg sm:text-2xl hover:text-zinc-900 transition-colors">
                <span className="text-zinc-400 font-normal">{logo.symbol}</span>
                <span>{logo.name}</span>
              </div>
            ))}
            {CLIENT_LOGOS.map((logo, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-2 px-4 py-2 text-zinc-700 font-sans font-semibold text-lg sm:text-2xl hover:text-zinc-900 transition-colors">
                <span className="text-zinc-400 font-normal">{logo.symbol}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#fafafa] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#fafafa] to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="font-serif italic font-normal text-3xl sm:text-5xl text-zinc-900 tracking-tight mb-4">
            Hear from our placement network.
          </h2>
          <p className="text-zinc-600 text-sm max-w-xl font-light">
            Read the experiences of leading executives and high-caliber specialists who found their target role or scaled their core teams through our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="cosmos-card group flex flex-col justify-between p-6 rounded-2xl bg-white border border-zinc-200/80 hover:border-zinc-300 transition-all text-left shadow-xs"
            >
              <div className="mb-6">
                <span className="block text-4xl font-serif text-brand-emerald/40 leading-none select-none mb-2">“</span>
                <p className="text-zinc-700 text-sm font-light leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="size-10 rounded-full object-cover border border-zinc-200"
                />
                <div>
                  <h4 className="text-zinc-900 font-semibold text-xs leading-none">
                    {testimonial.name}
                  </h4>
                  <p className="text-zinc-500 text-[11px] font-light mt-1">
                    {testimonial.role} at <span className="text-zinc-800 font-medium">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
