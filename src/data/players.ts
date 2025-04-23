
import { Player } from "../types/player";

export const players: Player[] = [
  {
    id: 1,
    name: "Lionel Messi",
    position: "Forward",
    team: "Inter Miami CF",
    nationality: "Argentina",
    image: "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 721,
      assists: 337,
      appearances: 853,
      passAccuracy: 83
    },
    bio: "Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d'Or awards. After spending his entire professional career with Barcelona, where he won numerous trophies, he moved to PSG and later to Inter Miami in MLS, continuing to showcase his exceptional skills and goal-scoring ability."
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    position: "Forward",
    team: "Al Nassr FC",
    nationality: "Portugal",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 838,
      assists: 234,
      appearances: 1168,
      passAccuracy: 80
    },
    bio: "A five-time Ballon d'Or winner, Ronaldo has established himself as one of football's greatest goal-scorers. Known for his physical prowess, speed, and finishing ability, he has broken countless records at clubs like Manchester United, Real Madrid, and Juventus before moving to Al Nassr, continuing to demonstrate remarkable longevity at the highest level."
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    position: "Forward",
    team: "Real Madrid",
    nationality: "France",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=500&auto=format&fit=crop", 
    stats: {
      goals: 279,
      assists: 132,
      appearances: 398,
      passAccuracy: 77
    },
    bio: "Considered one of the best players in the world, Mbappé is known for his exceptional speed, dribbling, and finishing. After rising to prominence at Monaco and establishing himself as a superstar at PSG, he moved to Real Madrid where he continues to showcase his world-class talent and goal-scoring ability on the biggest stage."
  },
  {
    id: 4,
    name: "Virgil van Dijk",
    position: "Defender",
    team: "Liverpool FC",
    nationality: "Netherlands",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 52,
      assists: 18,
      appearances: 468,
      cleanSheets: 157,
      tackles: 892,
      interceptions: 746
    },
    bio: "Recognized as one of the world's best defenders, Van Dijk transformed Liverpool's defense after joining in 2018. His commanding presence, aerial ability, and composed defensive skills have been crucial to Liverpool's success, including their Premier League and Champions League triumphs. His leadership qualities make him a vital part of both club and country."
  },
  {
    id: 5,
    name: "Kevin De Bruyne",
    position: "Midfielder",
    team: "Manchester City",
    nationality: "Belgium",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 123,
      assists: 238,
      appearances: 562,
      passAccuracy: 89
    },
    bio: "Widely regarded as one of the best midfielders in the world, De Bruyne is known for his exceptional passing, vision, and playmaking abilities. His technical skills and creativity have been instrumental in Manchester City's domestic dominance under Pep Guardiola, with his precise crosses and through balls creating countless scoring opportunities."
  },
  {
    id: 6,
    name: "Alisson Becker",
    position: "Goalkeeper",
    team: "Liverpool FC",
    nationality: "Brazil",
    image: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 0,
      assists: 4,
      appearances: 347,
      cleanSheets: 154,
      savesPercentage: 72
    },
    bio: "Considered one of the world's premier goalkeepers, Alisson combines exceptional reflexes with outstanding distribution skills. Since joining Liverpool, he has transformed their defensive solidity, playing a crucial role in their Champions League and Premier League victories. His ability to make spectacular saves in critical moments has earned him widespread recognition."
  }
];

export const getPlayersByPosition = (position: string): Player[] => {
  return players.filter(player => player.position === position);
};

export const positions = [
  { value: "all", label: "All Players" },
  { value: "Forward", label: "Forwards" },
  { value: "Midfielder", label: "Midfielders" },
  { value: "Defender", label: "Defenders" },
  { value: "Goalkeeper", label: "Goalkeepers" }
];
