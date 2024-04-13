import { games } from "@/data/games";
import { type Game } from "@/interfaces/game";

export default function GetTopGames(): Game[] {
  return games;
}
