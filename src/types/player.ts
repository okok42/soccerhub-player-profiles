
export interface Player {
  id: number;
  name: string;
  position: string;
  team: string;
  nationality: string;
  image: string;
  stats: {
    goals: number;
    assists: number;
    appearances: number;
    cleanSheets?: number;
    tackles?: number;
    interceptions?: number;
    passAccuracy?: number;
    savesPercentage?: number;
  };
  bio: string;
}
