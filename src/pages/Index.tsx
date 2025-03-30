
import StreakTracker from "@/components/StreakTracker";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">StreakView Magic</h1>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Track your daily learning progress and maintain your streak. Click "View" to see detailed statistics and your position on the leaderboard.
        </p>
        
        <div className="flex justify-center">
          <StreakTracker />
        </div>
      </div>
    </div>
  );
};

export default Index;
