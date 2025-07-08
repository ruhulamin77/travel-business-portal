import React from 'react';
import Header from '../common/Header';
import SearchPad from './SearchPad';

export default function HeroSection() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-32 relative bg-[url('/hero-banner.jpg')] bg-cover bg-center h-[450px] md:h-[500px] lg:h-[550px] ">
      <div className="container text-center  text-white space-y-5 md:space-y-10 pt-5 md:pt-10 lg:pt-12">
        <h1 className="font-semibold text-3xl md:text-5xl lg:text-6xl">
          Explore The World Around You
        </h1>

        <p className="max-w-2xl text-center md:text-2xl mx-auto bg-black/30 rounded p-3 md:p-5">
          Take a break from stress of everyday life, plan trips and explore your
          favorite destinations.
        </p>
      </div>
      {/* Flight Search Form */}
      <SearchPad />
    </section>
  );
}
