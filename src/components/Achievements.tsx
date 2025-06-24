import React from 'react';
import { Trophy, Award, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "6th Rank in KEAM 2021",
      description: "Secured 6th position among ~100,000 students in Kerala Engineering Architecture Medical entrance examination",
      icon: <Trophy className="text-yellow-600" size={32} />,
      year: "2021",
      category: "Academic Excellence",
      stats: "Top 0.006%"
    },
    {
      title: "99 Percentile in JEE Main 2021",
      description: "Achieved 99 percentile among ~1 million candidates in Joint Entrance Examination Main",
      icon: <Star className="text-blue-600" size={32} />,
      year: "2021",
      category: "Competitive Exam",
      stats: "Top 1%"
    },
    {
      title: "2nd Rank - Maths Talent Search Exam",
      description: "Secured 2nd position in Kerala State Mathematics Talent Search Examination",
      icon: <Award className="text-green-600" size={32} />,
      year: "2017",
      category: "Mathematics",
      stats: "State Level"
    },
    {
      title: "3rd Rank - Maths Talent Search Exam",
      description: "Achieved 3rd position in Kerala State Mathematics Talent Search Examination",
      icon: <Award className="text-purple-600" size={32} />,
      year: "2016",
      category: "Mathematics",
      stats: "State Level"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic Excellence':
        return 'bg-yellow-100 text-yellow-800';
      case 'Competitive Exam':
        return 'bg-blue-100 text-blue-800';
      case 'Mathematics':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Scholastic Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Recognition of academic excellence and competitive achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-200 hover:scale-105"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-slate-50 to-white rounded-lg border border-slate-200 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(achievement.category)}`}>
                        {achievement.category}
                      </span>
                      <span className="text-slate-500 font-medium">{achievement.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <Target className="text-blue-600" size={16} />
                      <span className="text-blue-600 font-semibold text-sm">{achievement.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Achievement Summary
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-slate-600 font-medium">JEE Main Percentile</div>
              <div className="text-sm text-slate-500">Among 1M+ candidates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">6th</div>
              <div className="text-slate-600 font-medium">KEAM Rank</div>
              <div className="text-sm text-slate-500">Among 100K+ students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-slate-600 font-medium">State Level Awards</div>
              <div className="text-sm text-slate-500">Mathematics Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;