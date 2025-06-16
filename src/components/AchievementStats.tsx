
import { Rocket, Star, Shield, Globe, LucideIcon } from 'lucide-react';

interface Achievement {
  number: string;
  label: string;
  icon: LucideIcon;
}

const AchievementStats = () => {
  const achievements: Achievement[] = [
    { number: "5+", label: "Projects Delivered", icon: Rocket },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Expert Support", icon: Shield },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/30 fade-in-up" style={{animationDelay: '0.6s'}}>
      {achievements.map((achievement, index) => (
        <div key={index} className="text-center group cursor-pointer">
          <div className="mb-1 sm:mb-2 group-hover:scale-125 transition-transform duration-300">
            <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-violet-400 mb-1 sm:mb-2" />
          </div>
          <div className="text-lg sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 group-hover:scale-110 transition-transform duration-300">
            {achievement.number}
          </div>
          <div className="text-xs sm:text-sm opacity-75 font-medium">{achievement.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AchievementStats;
