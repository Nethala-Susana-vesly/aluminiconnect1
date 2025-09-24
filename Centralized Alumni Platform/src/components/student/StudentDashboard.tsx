import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Users, Calendar, Award, TrendingUp, MessageSquare, BookOpen } from 'lucide-react';

export function StudentDashboard() {
  const stats = [
    { label: 'Alumni Connections', value: 12, icon: Users, color: 'bg-blue-500', trend: '+3 this month' },
    { label: 'Events Attended', value: 5, icon: Calendar, color: 'bg-green-500', trend: '+2 this month' },
    { label: 'Opportunities', value: 8, icon: Award, color: 'bg-purple-500', trend: '+4 new' },
    { label: 'Skill Progress', value: 75, icon: TrendingUp, color: 'bg-orange-500', trend: '+15% improved' }
  ];

  const recentActivities = [
    { type: 'connection', description: 'Connected with Sarah Johnson (Microsoft)', time: '2 hours ago', icon: Users },
    { type: 'opportunity', description: 'New internship opportunity at Google', time: '4 hours ago', icon: Award },
    { type: 'event', description: 'Registered for AI/ML Workshop', time: '1 day ago', icon: Calendar },
    { type: 'message', description: 'Received career guidance from Raj Patel', time: '2 days ago', icon: MessageSquare }
  ];

  const upcomingEvents = [
    {
      title: 'Industry Trends in Software Engineering',
      speaker: 'Sarah Johnson',
      date: '2024-02-15',
      time: '10:00 AM',
      type: 'Workshop',
      status: 'registered'
    },
    {
      title: 'Career Guidance Session',
      speaker: 'Michael Davis',
      date: '2024-02-20',
      time: '2:00 PM',
      type: 'Seminar',
      status: 'available'
    }
  ];

  const recommendedConnections = [
    {
      name: 'Alex Rodriguez',
      position: 'DevOps Engineer at Amazon',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      reason: 'Similar technical interests'
    },
    {
      name: 'Priya Sharma',
      position: 'UX Designer at Spotify',
      skills: ['UI/UX', 'Figma', 'Design Systems'],
      reason: 'Alumni from your branch'
    }
  ];

  const learningProgress = [
    { skill: 'React Development', progress: 85, level: 'Advanced' },
    { skill: 'Data Structures', progress: 70, level: 'Intermediate' },
    { skill: 'Machine Learning', progress: 45, level: 'Beginner' },
    { skill: 'System Design', progress: 60, level: 'Intermediate' }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
        <p className="text-gray-600">Welcome back! Explore opportunities and connect with alumni.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-6">
              <div className={`p-3 rounded-full ${stat.color} mr-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}{stat.label === 'Skill Progress' && '%'}</p>
                <p className="text-xs text-green-600">{stat.trend}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-50 rounded-full">
                    <activity.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <Badge variant={event.status === 'registered' ? 'default' : 'secondary'}>
                    {event.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">Speaker: {event.speaker}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                  {event.status === 'available' && (
                    <Button size="sm">Register</Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommended Connections */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Alumni</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendedConnections.map((alumni, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                    {alumni.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900">{alumni.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{alumni.position}</p>
                  <p className="text-xs text-blue-600 mb-2">{alumni.reason}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {alumni.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" className="w-full">Connect</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {learningProgress.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">{item.skill}</span>
                  <Badge variant="outline" className="text-xs">{item.level}</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(item.progress)}`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.progress}% complete</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-medium text-blue-900">Find Alumni</h4>
              <p className="text-sm text-blue-700">Connect with alumni in your field</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors text-center">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-medium text-green-900">Browse Events</h4>
              <p className="text-sm text-green-700">Join workshops and sessions</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors text-center">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-medium text-purple-900">View Opportunities</h4>
              <p className="text-sm text-purple-700">Explore job and internship openings</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors text-center">
              <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h4 className="font-medium text-orange-900">Update Profile</h4>
              <p className="text-sm text-orange-700">Keep your information current</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}