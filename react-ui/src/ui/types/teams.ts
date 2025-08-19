export type TeamsState = {
  left: {
    players: Player[];
    score: number;
  };
  right: {
    players: Player[];
    score: number;
  };
};

export type Player = {
  playerName: string;
  team_name: string;
  country: string;
};