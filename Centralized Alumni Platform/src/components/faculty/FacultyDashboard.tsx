import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Users, Calendar, Mail, TrendingUp, Award, MessageSquare } from 'lucide-react';

export function FacultyDashboard() {
  const stats = [
    { label: 'Total Alumni', value: 1250, icon: Users, color: 'bg-blue-500', trend: '+12%' },
    { label: 'Active Sessions', value: 8, icon: Calendar, color: 'bg-green-500', trend: '+25%' },
    { label: 'Invitations Sent', value: 45, icon: Mail, color: 'bg-purple-500', trend: '+8%' },
    { label: 'Student Interactions', value: 156, icon: MessageSquare, color: 'bg-orange-500', trend: '+15%' }
  ];

  const recentActivities = [
    { type: 'invitation', description: 'Sent guest lecture invitation to 5 alumni', time: '2 hours ago' },
    { type: 'session', description: 'Created new workshop session on AI/ML', time: '4 hours ago' },
    { type: 'interaction', description: 'New student mentorship request received', time: '6 hours ago' },
    { type: 'response', description: '3 alumni accepted event invitations', time: '1 day ago' }
  ];

  const upcomingSessions = [
    {
      title: 'Industry Trends in Software Engineering',
      speaker: 'Sarah Johnson (2020 Alumni)',
      date: '2024-02-15',
      time: '10:00 AM',
      attendees: 150,
      status: 'confirmed'
    },
    {
      title: 'Career Guidance Workshop',
      speaker: 'Michael Davis (2019 Alumni)',
      date: '2024-02-20',
      time: '2:00 PM',
      attendees: 75,
      status: 'pending'
    }
  ];

  const topAlumni = [
    {
      name: 'Sarah Johnson',
      position: 'Senior Product Manager at Microsoft',
      engagement: 95,
      contributions: 12
    },
    {
      name: 'Raj Patel',
      position: 'Data Scientist at Google',
      engagement: 88,
      contributions: 8
    },
    {
      name: 'Emily Chen',
      position: 'Software Engineer at Apple',
      engagement: 82,
      contributions: 6
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Faculty Dashboard</h1>
        <p className="text-gray-600">Manage alumni relations and track engagement metrics</p>
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
                <div className="flex items-center space-x-2">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    {stat.trend}
                  </Badge>
                </div>
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
                <div key={index} className="flex items-start space-x-3 pb-3 border-b last:border-b-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-gray-900">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{session.title}</h4>
                  <Badge variant={session.status === 'confirmed' ? 'default' : 'secondary'}>
                    {session.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">{session.speaker}</p>
                <p className="text-sm text-gray-500">{session.date} at {session.time}</p>
                <p className="text-xs text-blue-600 mt-2">{session.attendees} expected attendees</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Engaged Alumni */}
        <Card>
          <CardHeader>
            <CardTitle>Top Engaged Alumni</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topAlumni.map((alumni, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{alumni.name}</h4>
                    <p className="text-sm text-gray-600">{alumni.position}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600">{alumni.engagement}% engaged</p>
                  <p className="text-xs text-gray-500">{alumni.contributions} contributions</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
              <h4 className="font-medium text-blue-900">Send Invitation</h4>
              <p className="text-sm text-blue-700">Invite alumni for upcoming events</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
              <h4 className="font-medium text-green-900">Create Session</h4>
              <p className="text-sm text-green-700">Schedule new workshops or lectures</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
              <h4 className="font-medium text-purple-900">View Reports</h4>
              <p className="text-sm text-purple-700">Check engagement analytics</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}