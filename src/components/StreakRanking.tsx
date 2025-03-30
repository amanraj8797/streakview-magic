
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useStreakData } from "@/hooks/use-streak-data";

const StreakRanking = () => {
  const { rankingData } = useStreakData();

  return (
    <div className="pt-3">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium">Top Streaks Leaderboard</h3>
        <select className="text-xs rounded-md border-gray-200 py-1 px-2">
          <option>All Time</option>
          <option>This Month</option>
          <option>This Week</option>
        </select>
      </div>

      <div className="space-y-3">
        {rankingData.topUsers.map((user, index) => {
          // Display current user differently
          const isCurrentUser = user.id === rankingData.currentUser.id;
          
          return (
            <div 
              key={user.id} 
              className={`flex items-center p-3 rounded-lg ${isCurrentUser ? 'bg-purple-50 border border-purple-100' : 'bg-slate-50'}`}
            >
              <div className="w-6 font-medium text-center">
                {index + 1}
              </div>
              
              <Avatar className="w-8 h-8 ml-3">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{user.name}</span>
                  <span className="text-sm font-semibold">{user.streak} days</span>
                </div>
                <div className="flex items-center mt-1">
                  <Progress value={user.progressPercentage} className="h-1.5" />
                  <span className="ml-2 text-xs text-muted-foreground">{user.level}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-3 rounded-lg bg-slate-50">
        <div className="text-sm font-medium mb-1">Your Rank</div>
        <div className="flex items-center">
          <div className="w-6 font-medium text-center">
            {rankingData.currentUser.rank}
          </div>
          
          <Avatar className="w-8 h-8 ml-3">
            <AvatarImage src={rankingData.currentUser.avatar} alt={rankingData.currentUser.name} />
            <AvatarFallback>{rankingData.currentUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          
          <div className="ml-3 flex-1">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{rankingData.currentUser.name}</span>
              <span className="text-sm font-semibold">{rankingData.currentUser.streak} days</span>
            </div>
            <div className="flex items-center mt-1">
              <Progress value={rankingData.currentUser.progressPercentage} className="h-1.5" />
              <span className="ml-2 text-xs text-muted-foreground">{rankingData.currentUser.level}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakRanking;
