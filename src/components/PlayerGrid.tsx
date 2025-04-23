
import { Player } from "../types/player";
import PlayerCard from "./PlayerCard";

interface PlayerGridProps {
  players: Player[];
}

const PlayerGrid = ({ players }: PlayerGridProps) => {
  if (players.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-500">No players found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayerGrid;
