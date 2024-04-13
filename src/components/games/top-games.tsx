import { Game } from "@/interfaces/game";
import GetTopGames from "@/lib/api/get-top-games";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TopGames() {
  // Simulate fetching top games. For now, we'll just use the static data.
  const topGames: Game[] = GetTopGames();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {topGames.map((game, index) => (
        <Card key={index}>
          <CardHeader>
            <img className="rounded-t-lg w-full object-cover" src={game.cover} alt={game.name} />
          </CardHeader>
          <CardContent className="px-6 py-4">
            <CardTitle className="font-bold text-xl mb-2">{game.name}</CardTitle>
            <CardDescription className="text-base">
              {game.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
