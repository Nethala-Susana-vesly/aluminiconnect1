import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

export function AlumniDashboard() {
  const recentActivities = [
    { type: 'invitation', title: 'Guest Lecture Invitation', date: '2024-01-15', status: 'pending' },
    { type: 'connection', title: 'New Alumni Connection', date: '2024-01-14', status: 'completed' },
    { type: 'referral', title: 'Job Referral Request', date: '2024-01-13', status: 'completed' },
    { type: 'update', title: 'Profile Updated', date: '2024-01-12', status: 'completed' }
  ];

  const stats = [
    { label: 'Network Connections', value: 45, icon: Users, color: 'bg-blue-500' },
    { label: 'Referrals Given', value: 8, icon: Award, color: 'bg-green-500' },
    { label: 'Events Attended', value: 12, icon: Calendar, color: 'bg-purple-500' },
    { label: 'Profile Views', value: 156, icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Alumni Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening in your network.</p>
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
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                  <div>
                    <h4 className="font-medium text-gray-900">{activity.title}</h4>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                  <Badge variant={activity.status === 'pending' ? 'secondary' : 'default'}>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
              <h4 className="font-medium text-blue-900">Update Career Status</h4>
              <p className="text-sm text-blue-700">Share your latest professional achievements</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
              <h4 className="font-medium text-green-900">Connect with Alumni</h4>
              <p className="text-sm text-green-700">Expand your professional network</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
              <h4 className="font-medium text-purple-900">Refer a Student</h4>
              <p className="text-sm text-purple-700">Help students with job opportunities</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}