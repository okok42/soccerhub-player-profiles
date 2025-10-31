
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Player } from "@/types/player";
import { players } from "@/data/players";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PlayerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const playerData = players.find(p => p.id === parseInt(id));
      setPlayer(playerData || null);
      setLoading(false);
    }
  }, [id]);

  const handleSearch = (term: string) => {
    // Handle search (will be implemented in future enhancement)
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header onSearch={handleSearch} />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse">Loading player data...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!player) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header onSearch={handleSearch} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Player Not Found</h2>
            <p className="mb-6">The player you're looking for doesn't exist in our database.</p>
            <a href="/" className="bg-primary text-white px-4 py-2 rounded-md">
              Return to Homepage
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      
      <main className="flex-1 py-12 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={player.image} 
                  alt={`Profile picture of ${player.name}`}
                  className="w-full h-[400px] object-cover object-center" 
                />
              </div>
              
              <div className="md:w-2/3 p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{player.name}</h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-primary text-white px-3 py-1 rounded-md text-sm">
                    {player.position}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Team:</span> {player.team}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Nationality:</span> {player.nationality}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Career Statistics</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md text-center">
                      <div className="text-2xl font-bold text-accent">{player.stats.appearances}</div>
                      <div className="text-sm text-gray-500">Appearances</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md text-center">
                      <div className="text-2xl font-bold text-accent">{player.stats.goals}</div>
                      <div className="text-sm text-gray-500">Goals</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md text-center">
                      <div className="text-2xl font-bold text-accent">{player.stats.assists}</div>
                      <div className="text-sm text-gray-500">Assists</div>
                    </div>
                    {player.position === "Defender" && player.stats.cleanSheets && (
                      <div className="bg-gray-50 p-4 rounded-md text-center">
                        <div className="text-2xl font-bold text-accent">{player.stats.cleanSheets}</div>
                        <div className="text-sm text-gray-500">Clean Sheets</div>
                      </div>
                    )}
                    {player.position === "Goalkeeper" && player.stats.savesPercentage && (
                      <div className="bg-gray-50 p-4 rounded-md text-center">
                        <div className="text-2xl font-bold text-accent">{player.stats.savesPercentage}%</div>
                        <div className="text-sm text-gray-500">Save Rate</div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Biography</h2>
                  <p className="text-gray-700">{player.bio}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="/" 
              className="inline-flex items-center text-accent hover:text-accent-foreground font-medium"
            >
              ← Back to all players
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlayerDetail;
