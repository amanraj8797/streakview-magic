
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Eye } from "lucide-react";
import StreakCalendar from "./StreakCalendar";
import StreakGraphs from "./StreakGraphs";
import StreakRanking from "./StreakRanking";
import { useStreakData } from "@/hooks/use-streak-data";

const StreakTracker = () => {
  const { currentStreak, nextMilestone } = useStreakData();
  const [open, setOpen] = useState(false);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Current Streak</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-primary">{currentStreak}</span>
              <span className="ml-2 text-sm text-muted-foreground">Days</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Next reward in {nextMilestone.daysRemaining} days
            </p>
          </div>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <Eye size={16} /> View
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Your Learning Streak</DialogTitle>
              </DialogHeader>
              
              <div className="mt-2">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm text-muted-foreground">Current Streak</h3>
                    <p className="text-2xl font-bold">{currentStreak} Days</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground">Ranking</h3>
                    <p className="text-2xl font-bold">#42</p>
                  </div>
                </div>
                
                <Tabs defaultValue="calendar">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="calendar">Calendar</TabsTrigger>
                    <TabsTrigger value="graphs">Graphs</TabsTrigger>
                    <TabsTrigger value="ranking">Ranking</TabsTrigger>
                  </TabsList>
                  <TabsContent value="calendar" className="p-1">
                    <StreakCalendar />
                  </TabsContent>
                  <TabsContent value="graphs" className="p-1">
                    <StreakGraphs />
                  </TabsContent>
                  <TabsContent value="ranking" className="p-1">
                    <StreakRanking />
                  </TabsContent>
                </Tabs>
                
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Upcoming Rewards</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-md bg-slate-50">
                      <div className="flex items-center">
                        <div className="bg-purple-100 p-2 rounded-md">
                          <div className="w-5 h-5 text-purple-500">🏆</div>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">20 Days Streak</p>
                          <p className="text-xs text-muted-foreground">{nextMilestone.daysRemaining} days remaining</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-green-600">+200 Coins</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-md bg-slate-50">
                      <div className="flex items-center">
                        <div className="bg-purple-100 p-2 rounded-md">
                          <div className="w-5 h-5 text-purple-500">🏆</div>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">30 Days Streak</p>
                          <p className="text-xs text-muted-foreground">15 days remaining</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-green-600">+500 Coins</span>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakTracker;
