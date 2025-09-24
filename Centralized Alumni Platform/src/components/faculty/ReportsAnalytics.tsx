import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { BarChart3, TrendingUp, Users, Calendar, Download, Eye } from 'lucide-react';

export function ReportsAnalytics() {
  const engagementData = [
    { month: 'Jan', alumni: 120, students: 450, sessions: 8 },
    { month: 'Feb', alumni: 135, students: 480, sessions: 12 },
    { month: 'Mar', alumni: 142, students: 510, sessions: 15 },
    { month: 'Apr', alumni: 158, students: 530, sessions: 18 },
    { month: 'May', alumni: 165, students: 545, sessions: 20 },
    { month: 'Jun', alumni: 180, students: 580, sessions: 22 }
  ];

  const topMetrics = [
    {
      title: 'Alumni Engagement Rate',
      value: '78%',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Session Success Rate',
      value: '94%',
      change: '+8%',
      trend: 'up',
      icon: Calendar,
      color: 'text-green-600'
    },
    {
      title: 'Student Participation',
      value: '580',
      change: '+15%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Response Rate',
      value: '85%',
      change: '+5%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-orange-600'
    }
  ];

  const alumniByIndustry = [
    { industry: 'Technology', count: 145, percentage: 42 },
    { industry: 'Finance', count: 78, percentage: 23 },
    { industry: 'Consulting', count: 52, percentage: 15 },
    { industry: 'Manufacturing', count: 34, percentage: 10 },
    { industry: 'Healthcare', count: 23, percentage: 7 },
    { industry: 'Others', count: 13, percentage: 3 }
  ];

  const sessionAnalytics = [
    {
      title: 'Machine Learning Workshop',
      date: '2024-01-15',
      attendees: 45,
      satisfaction: 4.8,
      engagement: 92,
      feedback: 'Excellent'
    },
    {
      title: 'Career Guidance Seminar',
      date: '2024-01-20',
      attendees: 78,
      satisfaction: 4.6,
      engagement: 88,
      feedback: 'Very Good'
    },
    {
      title: 'Industry Panel Discussion',
      date: '2024-01-25',
      attendees: 120,
      satisfaction: 4.7,
      engagement: 90,
      feedback: 'Excellent'
    }
  ];

  const geographicalData = [
    { region: 'India', count: 180, percentage: 52 },
    { region: 'USA', count: 95, percentage: 27 },
    { region: 'Europe', count: 45, percentage: 13 },
    { region: 'Middle East', count: 18, percentage: 5 },
    { region: 'Others', count: 7, percentage: 3 }
  ];

  const getSatisfactionColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4.0) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 90) return 'bg-green-100 text-green-800';
    if (engagement >= 80) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">Track engagement outcomes and analyze alumni network performance</p>
        </div>
        <div className="flex space-x-3">
          <Select defaultValue="6months">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">{metric.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gray-100`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alumni by Industry */}
        <Card>
          <CardHeader>
            <CardTitle>Alumni Distribution by Industry</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alumniByIndustry.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-900">{item.industry}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600">{item.count}</span>
                    <Badge variant="secondary">{item.percentage}%</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geographical Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Geographical Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geographicalData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-900">{item.region}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600">{item.count}</span>
                    <Badge variant="secondary">{item.percentage}%</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Engagement Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Engagement Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {engagementData.slice(-3).map((data, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{data.month} 2024</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{data.alumni} Alumni</span>
                      <span>{data.students} Students</span>
                      <span>{data.sessions} Sessions</span>
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Session Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Session Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessionAnalytics.map((session, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{session.title}</h4>
                    <Badge className={getEngagementColor(session.engagement)}>
                      {session.engagement}%
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Date: </span>
                      <span className="text-gray-900">{session.date}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Attendees: </span>
                      <span className="text-gray-900">{session.attendees}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Satisfaction: </span>
                      <span className={getSatisfactionColor(session.satisfaction)}>
                        {session.satisfaction}/5.0
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Feedback: </span>
                      <span className="text-gray-900">{session.feedback}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Engagement Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Month</th>
                  <th className="text-left p-3">Active Alumni</th>
                  <th className="text-left p-3">Student Participation</th>
                  <th className="text-left p-3">Sessions Conducted</th>
                  <th className="text-left p-3">Engagement Rate</th>
                  <th className="text-left p-3">Growth</th>
                </tr>
              </thead>
              <tbody>
                {engagementData.map((data, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{data.month} 2024</td>
                    <td className="p-3">{data.alumni}</td>
                    <td className="p-3">{data.students}</td>
                    <td className="p-3">{data.sessions}</td>
                    <td className="p-3">
                      <Badge className="bg-green-100 text-green-800">
                        {Math.round((data.alumni / 200) * 100)}%
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-green-600">+{index + 5}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}