
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-accent py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The World's Greatest
            <span className="block">Football Players</span>
          </h1>
          <p className="text-white text-opacity-90 text-xl mb-8 max-w-2xl">
            Discover in-depth profiles, stats, and career highlights of the most exceptional 
            talents in football history and the rising stars of today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors">
              Explore Players
            </button>
            <button className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors">
              Latest News
            </button>
          </div>
        </div>
      </div>
      
      {/* Abstract Footballs Pattern */}
      <div className="absolute top-0 right-0 w-full h-full z-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-4 border-white"></div>
        <div className="absolute top-60 right-60 w-20 h-20 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-20 left-40 w-32 h-32 rounded-full border-4 border-white"></div>
        <div className="absolute top-40 left-10 w-24 h-24 rounded-full border-4 border-white"></div>
      </div>
    </div>
  );
};

export default HeroSection;
