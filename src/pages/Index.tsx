
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import PositionFilter from "@/components/PositionFilter";
import PlayerGrid from "@/components/PlayerGrid";
import { Player } from "@/types/player";
import { players, getPlayersByPosition } from "@/data/players";

const Index = () => {
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(players);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPosition, setCurrentPosition] = useState("all");

  useEffect(() => {
    applyFilters();
  }, [searchTerm, currentPosition]);

  const applyFilters = () => {
    let result = [...players];
    
    // Apply position filter
    if (currentPosition !== "all") {
      result = getPlayersByPosition(currentPosition);
    }
    
    // Apply search filter
    if (searchTerm.trim() !== "") {
      result = result.filter(
        (player) =>
          player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
          player.nationality.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPlayers(result);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handlePositionFilter = (position: string) => {
    setCurrentPosition(position);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      <HeroSection />
      <PositionFilter onFilterChange={handlePositionFilter} />
      
      <main className="flex-1 py-12 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            {currentPosition === "all" 
              ? "Featured Players" 
              : `${currentPosition}s`}
          </h2>
          
          <PlayerGrid players={filteredPlayers} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
