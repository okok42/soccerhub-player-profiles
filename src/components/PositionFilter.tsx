
import { useState } from "react";
import { positions } from "../data/players";

interface PositionFilterProps {
  onFilterChange: (position: string) => void;
}

const PositionFilter = ({ onFilterChange }: PositionFilterProps) => {
  const [activePosition, setActivePosition] = useState("all");

  const handleFilterChange = (position: string) => {
    setActivePosition(position);
    onFilterChange(position);
  };

  return (
    <div className="py-4 px-4 md:px-8 bg-white shadow">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
          {positions.map((position) => (
            <button
              key={position.value}
              onClick={() => handleFilterChange(position.value)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activePosition === position.value
                  ? "bg-accent text-accent-foreground font-medium"
                  : "bg-secondary hover:bg-gray-200"
              }`}
            >
              {position.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositionFilter;
