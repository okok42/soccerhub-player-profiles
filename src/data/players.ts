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
  },
  {
    id: 7,
    name: "Erling Haaland",
    position: "Forward",
    team: "Manchester City",
    nationality: "Norway",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 211,
      assists: 52,
      appearances: 279,
      passAccuracy: 75
    },
    bio: "A powerhouse striker, Haaland's incredible pace, physicality, and finishing make him one of the world's deadliest goal scorers. After a prolific spell at Borussia Dortmund, he continues to break records at Manchester City."
  },
  {
    id: 8,
    name: "Robert Lewandowski",
    position: "Forward",
    team: "FC Barcelona",
    nationality: "Poland",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 654,
      assists: 151,
      appearances: 865,
      passAccuracy: 82
    },
    bio: "Consistently among the top strikers in the world, Lewandowski is known for his clinical finishing, intelligence, and movement. He dominated the Bundesliga with Bayern Munich before moving to Barcelona to continue his legacy."
  },
  {
    id: 9,
    name: "Luka Modrić",
    position: "Midfielder",
    team: "Real Madrid",
    nationality: "Croatia",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 54,
      assists: 137,
      appearances: 818,
      passAccuracy: 90
    },
    bio: "Winner of the 2018 Ballon d'Or, Modrić is lauded for his control, vision, and range of passing. He has been the heartbeat of Real Madrid's midfield for over a decade, winning multiple Champions League titles."
  },
  {
    id: 10,
    name: "Karim Benzema",
    position: "Forward",
    team: "Al-Ittihad",
    nationality: "France",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 444,
      assists: 186,
      appearances: 886,
      passAccuracy: 82
    },
    bio: "Benzema's technical skills and sharp goal-scoring instincts have made him one of the best strikers of his generation. His leadership helped Real Madrid achieve repeated domestic and European glory."
  },
  {
    id: 11,
    name: "Neymar Jr.",
    position: "Forward",
    team: "Al Hilal",
    nationality: "Brazil",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 295,
      assists: 189,
      appearances: 524,
      passAccuracy: 84
    },
    bio: "One of the most skillful dribblers and creative attackers in football, Neymar dazzles fans with his flair, technique, and artistry on the field. After his time at Barcelona and PSG, he now lights up the Saudi Pro League."
  },
  {
    id: 12,
    name: "Joshua Kimmich",
    position: "Midfielder",
    team: "Bayern Munich",
    nationality: "Germany",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 54,
      assists: 108,
      appearances: 393,
      passAccuracy: 92
    },
    bio: "Kimmich's versatility, intelligence, and passing range make him the fulcrum of Bayern and Germany's midfield. He excels both in defensive and playmaking roles."
  },
  {
    id: 13,
    name: "Thibaut Courtois",
    position: "Goalkeeper",
    team: "Real Madrid",
    nationality: "Belgium",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 0,
      assists: 2,
      appearances: 613,
      cleanSheets: 228,
      savesPercentage: 74
    },
    bio: "A world-class shot-stopper, Courtois has played a key role in Real Madrid's recent successes. Known for his height, reach, and composure, he is regarded as one of the best goalkeepers in the world."
  },
  {
    id: 14,
    name: "Jude Bellingham",
    position: "Midfielder",
    team: "Real Madrid",
    nationality: "England",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 47,
      assists: 38,
      appearances: 200,
      passAccuracy: 88
    },
    bio: "At a young age, Bellingham has already become a leader in midfield for club and country. His dynamic playing style, technical ability, and maturity distinguish him as a generational talent."
  },
  {
    id: 15,
    name: "Trent Alexander-Arnold",
    position: "Defender",
    team: "Liverpool FC",
    nationality: "England",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 18,
      assists: 79,
      appearances: 307,
      cleanSheets: 101,
      tackles: 606,
      interceptions: 480
    },
    bio: "Renowned for his attacking prowess and crossing ability from right-back, Alexander-Arnold has redefined the role at Liverpool, providing goals and assists in abundance."
  },
  {
    id: 16,
    name: "Jan Oblak",
    position: "Goalkeeper",
    team: "Atlético Madrid",
    nationality: "Slovenia",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop",
    stats: {
      goals: 0,
      assists: 0,
      appearances: 521,
      cleanSheets: 231,
      savesPercentage: 76
    },
    bio: "Oblak's consistency and reliability make him a cornerstone of Atlético Madrid's defensive setup. He is widely recognized as one of football's outstanding goalkeepers."
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

export const teams = ["all", ...Array.from(new Set(players.map((p) => p.team))).sort()];
export const nationalities = ["all", ...Array.from(new Set(players.map((p) => p.nationality))).sort()];
