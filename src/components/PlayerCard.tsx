
import { Player } from "../types/player";
import { Card } from "@/components/ui/card";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const getStatDisplay = () => {
    switch (player.position) {
      case "Forward":
        return (
          <>
            <div className="stat">
              <span className="value">{player.stats.goals}</span>
              <span className="label">Goals</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.assists}</span>
              <span className="label">Assists</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.appearances}</span>
              <span className="label">Apps</span>
            </div>
          </>
        );
      case "Midfielder":
        return (
          <>
            <div className="stat">
              <span className="value">{player.stats.assists}</span>
              <span className="label">Assists</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.goals}</span>
              <span className="label">Goals</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.passAccuracy}%</span>
              <span className="label">Pass %</span>
            </div>
          </>
        );
      case "Defender":
        return (
          <>
            <div className="stat">
              <span className="value">{player.stats.cleanSheets}</span>
              <span className="label">Clean Sheets</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.tackles}</span>
              <span className="label">Tackles</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.interceptions}</span>
              <span className="label">Intercept.</span>
            </div>
          </>
        );
      case "Goalkeeper":
        return (
          <>
            <div className="stat">
              <span className="value">{player.stats.cleanSheets}</span>
              <span className="label">Clean Sheets</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.savesPercentage}%</span>
              <span className="label">Save %</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.appearances}</span>
              <span className="label">Apps</span>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="stat">
              <span className="value">{player.stats.goals}</span>
              <span className="label">Goals</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.assists}</span>
              <span className="label">Assists</span>
            </div>
            <div className="stat">
              <span className="value">{player.stats.appearances}</span>
              <span className="label">Apps</span>
            </div>
          </>
        );
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={player.image}
          alt={`Profile picture of ${player.name}`}
          className="block w-full h-full object-cover object-center transition-transform hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">{player.name}</h2>
        
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <div className="flex items-center">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md">
              {player.position}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Team:</span> {player.team}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Nationality:</span> {player.nationality}
          </div>
        </div>
        
        <div className="stats grid grid-cols-3 gap-2 mb-4 text-center">
          {getStatDisplay()}
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700 text-sm line-clamp-4">{player.bio}</p>
        </div>
      </div>
      
      <div className="px-5 pb-5 pt-3 border-t">
        <a 
          href={`/player/${player.id}`}
          className="text-accent hover:text-accent-foreground font-medium text-sm inline-block"
          onClick={() => {
            console.log("[SoccerHub] Read more clicked:", {
              playerId: player.id,
              playerName: player.name,
            });
          }}
        >
          Read more →
        </a>
      </div>
    </Card>
  );
};

export default PlayerCard;
