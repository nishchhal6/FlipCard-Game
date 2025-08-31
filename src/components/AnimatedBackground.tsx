import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background with Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Floating Circles */}
        <div className="absolute top-10 left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-white/10 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-1/4 right-4 sm:right-10 lg:right-20 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-yellow-300/15 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 sm:w-28 lg:w-40 h-20 sm:h-28 lg:h-40 bg-pink-400/10 rounded-full animate-float-slow blur-sm"></div>

        {/* Floating Squares */}
        <div className="hidden sm:block absolute top-1/3 left-1/2 w-8 lg:w-12 h-8 lg:h-12 bg-white/8 rotate-45 animate-spin-slow"></div>
        <div className="hidden lg:block absolute top-3/4 right-1/3 w-8 h-8 bg-purple-300/15 rotate-12"></div>
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent"></div>
    </div>
  );
};