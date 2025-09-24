import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, MessageSquare, Users, Award, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export function StudentInteraction() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const mentorshipRequests = [
    {
      id: 1,
      studentName: 'Anita Kumar',
      studentEmail: '21pa1a05b8@vishnu.edu.in',
      year: '3rd Year',
      branch: 'Computer Science',
      requestType: 'career-guidance',
      subject: 'Career Path in Data Science',
      message: 'I am interested in pursuing a career in data science. Could you help me understand the roadmap and skills required?',
      submittedDate: '2024-01-20',
      status: 'pending',
      priority: 'high'
    },
    {
      id: 2,
      studentName: 'Rahul Sharma',
      studentEmail: '20pa1a12a7@vishnu.edu.in',
      year: '4th Year',
      branch: 'Computer Science',
      requestType: 'project-guidance',
      subject: 'Final Year Project Mentorship',
      message: 'I am working on a machine learning project for my final year. I would appreciate guidance on implementation and best practices.',
      submittedDate: '2024-01-18',
      status: 'in-progress',
      priority: 'medium'
    },
    {
      id: 3,
      studentName: 'Priya Patel',
      studentEmail: '22pa1a08c3@vishnu.edu.in',
      year: '2nd Year',
      branch: 'Electronics',
      requestType: 'skill-development',
      subject: 'Programming Skills Development',
      message: 'I want to improve my programming skills. What courses and resources would you recommend?',
      submittedDate: '2024-01-15',
      status: 'resolved',
      priority: 'low'
    }
  ];

  const studentQueries = [
    {
      id: 1,
      studentName: 'Amit Gupta',
      question: 'What are the current industry trends in web development?',
      category: 'Industry Trends',
      timestamp: '2024-01-22 10:30 AM',
      responses: 3,
      status: 'answered'
    },
    {
      id: 2,
      studentName: 'Sneha Reddy',
      question: 'How to prepare for technical interviews at top tech companies?',
      category: 'Career Advice',
      timestamp: '2024-01-21 3:45 PM',
      responses: 5,
      status: 'answered'
    },
    {
      id: 3,
      studentName: 'Karthik Rao',
      question: 'Best practices for mobile app development?',
      category: 'Technical',
      timestamp: '2024-01-20 11:15 AM',
      responses: 0,
      status: 'unanswered'
    }
  ];

  const interactionStats = [
    {
      label: 'Total Requests',
      value: mentorshipRequests.length,
      icon: MessageSquare,
      color: 'bg-blue-500',
      trend: '+12%'
    },
    {
      label: 'Active Mentorships',
      value: mentorshipRequests.filter(r => r.status === 'in-progress').length,
      icon: Users,
      color: 'bg-green-500',
      trend: '+25%'
    },
    {
      label: 'Resolved Cases',
      value: mentorshipRequests.filter(r => r.status === 'resolved').length,
      icon: CheckCircle,
      color: 'bg-purple-500',
      trend: '+8%'
    },
    {
      label: 'Pending Actions',
      value: mentorshipRequests.filter(r => r.status === 'pending').length,
      icon: Clock,
      color: 'bg-orange-500',
      trend: '-5%'
    }
  ];

  const handleRequestAction = (requestId: number, action: 'accept' | 'decline') => {
    console.log(`${action} request:`, requestId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'answered': return 'bg-green-100 text-green-800';
      case 'unanswered': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRequestTypeIcon = (type: string) => {
    switch (type) {
      case 'career-guidance': return '🎯';
      case 'project-guidance': return '📝';
      case 'skill-development': return '💡';
      default: return '❓';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Interaction</h1>
        <p className="text-gray-600">Monitor student participation, requests, and provide guidance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interactionStats.map((stat, index) => (
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

      <Tabs defaultValue="mentorship" className="space-y-6">
        <TabsList>
          <TabsTrigger value="mentorship">Mentorship Requests</TabsTrigger>
          <TabsTrigger value="queries">Student Queries</TabsTrigger>
          <TabsTrigger value="engagement">Engagement Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="mentorship" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search by student name or subject..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Requests</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Mentorship Requests */}
          <div className="space-y-4">
            {mentorshipRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                          {request.studentName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{request.studentName}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>{request.year} • {request.branch}</span>
                          <span>•</span>
                          <span>{request.studentEmail}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getPriorityColor(request.priority)}>
                        {request.priority} priority
                      </Badge>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{getRequestTypeIcon(request.requestType)}</span>
                      <h4 className="font-medium text-gray-900">{request.subject}</h4>
                    </div>
                    <p className="text-gray-700">{request.message}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span>Submitted on: {request.submittedDate}</span>
                    </div>
                    {request.status === 'pending' && (
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleRequestAction(request.id, 'decline')}
                        >
                          Decline
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleRequestAction(request.id, 'accept')}
                        >
                          Accept & Start Mentoring
                        </Button>
                      </div>
                    )}
                    {request.status === 'in-progress' && (
                      <Button size="sm" variant="outline">
                        View Progress
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="queries" className="space-y-4">
          {studentQueries.map((query) => (
            <Card key={query.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{query.question}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>Asked by {query.studentName}</span>
                      <span>•</span>
                      <span>{query.timestamp}</span>
                      <span>•</span>
                      <Badge variant="outline">{query.category}</Badge>
                    </div>
                  </div>
                  <Badge className={getStatusColor(query.status)}>
                    {query.status}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MessageSquare className="w-4 h-4" />
                    <span>{query.responses} responses</span>
                  </div>
                  <Button size="sm" variant="outline">
                    {query.status === 'answered' ? 'View Responses' : 'Answer Question'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-sm text-gray-600">Total Students Reached</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">89</p>
                <p className="text-sm text-gray-600">Active Conversations</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">4.8</p>
                <p className="text-sm text-gray-600">Average Satisfaction</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Student Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 mb-2">"The mentorship program has been incredibly helpful for my career planning."</p>
                <p className="text-sm text-green-600">- Anita Kumar, 3rd Year CSE</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 mb-2">"Great guidance on project implementation and industry best practices."</p>
                <p className="text-sm text-blue-600">- Rahul Sharma, 4th Year CSE</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-purple-800 mb-2">"The career advice sessions helped me choose the right specialization."</p>
                <p className="text-sm text-purple-600">- Priya Patel, 2nd Year ECE</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}