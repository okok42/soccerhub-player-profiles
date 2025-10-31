
import { teams, nationalities } from "@/data/players";

interface TeamNationalityFilterProps {
  onTeamChange: (team: string) => void;
  onNationalityChange: (nationality: string) => void;
}

const TeamNationalityFilter = ({ onTeamChange, onNationalityChange }: TeamNationalityFilterProps) => {
  return (
    <div className="py-4 px-4 md:px-8 bg-white border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Team</label>
          <select
            className="w-full border rounded-md px-3 py-2 bg-white"
            onChange={(e) => onTeamChange(e.target.value)}
            defaultValue="all"
          >
            {teams.map((team) => (
              <option key={team} value={team}>
                {team === "all" ? "All Teams" : team}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Nationality</label>
          <select
            className="w-full border rounded-md px-3 py-2 bg-white"
            onChange={(e) => onNationalityChange(e.target.value)}
            defaultValue="all"
          >
            {nationalities.map((nation) => (
              <option key={nation} value={nation}>
                {nation === "all" ? "All Nationalities" : nation}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TeamNationalityFilter;


