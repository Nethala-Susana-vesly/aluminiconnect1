import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Search, MapPin, Briefcase, MessageSquare, UserPlus } from 'lucide-react';

export function AlumniConnect() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const alumniList = [
    {
      id: 1,
      name: 'Sarah Johnson',
      graduationYear: '2020',
      position: 'Senior Product Manager',
      company: 'Microsoft',
      location: 'Seattle, USA',
      skills: ['Product Management', 'Strategy', 'Leadership'],
      availability: 'Available for mentorship',
      responseRate: 95,
      sessions: 12
    },
    {
      id: 2,
      name: 'Raj Patel',
      graduationYear: '2019',
      position: 'Data Scientist',
      company: 'Google',
      location: 'Bangalore, India',
      skills: ['Machine Learning', 'Python', 'Data Analysis'],
      availability: 'Limited availability',
      responseRate: 88,
      sessions: 8
    },
    {
      id: 3,
      name: 'Emily Chen',
      graduationYear: '2021',
      position: 'Software Engineer',
      company: 'Apple',
      location: 'Cupertino, USA',
      skills: ['iOS Development', 'Swift', 'Mobile Apps'],
      availability: 'Available for mentorship',
      responseRate: 92,
      sessions: 15
    },
    {
      id: 4,
      name: 'Arjun Reddy',
      graduationYear: '2022',
      position: 'Design Engineer',
      company: 'Tesla',
      location: 'Fremont, USA',
      skills: ['CAD Design', 'Product Design', 'Manufacturing'],
      availability: 'Busy',
      responseRate: 75,
      sessions: 5
    }
  ];

  const myConnections = [
    {
      name: 'Sarah Johnson',
      company: 'Microsoft',
      lastMessage: 'Great question about product roadmaps!',
      lastActive: '2 hours ago',
      status: 'active'
    },
    {
      name: 'Emily Chen',
      company: 'Apple',
      lastMessage: 'I\'ll share some iOS resources with you.',
      lastActive: '1 day ago',
      status: 'active'
    }
  ];

  const handleConnect = (alumniId: number) => {
    console.log('Sending connection request to:', alumniId);
  };

  const handleMessage = (alumniName: string) => {
    console.log('Opening chat with:', alumniName);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available for mentorship': return 'bg-green-100 text-green-800';
      case 'Limited availability': return 'bg-yellow-100 text-yellow-800';
      case 'Busy': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Alumni Connect</h1>
        <p className="text-gray-600">Search and interact with alumni from your institution</p>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by name, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Alumni</SelectItem>
                <SelectItem value="available">Available for Mentorship</SelectItem>
                <SelectItem value="company">By Company</SelectItem>
                <SelectItem value="year">By Graduation Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alumni Directory */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Browse Alumni</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alumniList.map((alumni) => (
              <div key={alumni.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
                      <Badge className={getAvailabilityColor(alumni.availability)}>
                        {alumni.availability.split(' ')[0]}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{alumni.position} at {alumni.company}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{alumni.location}</span>
                      <span>•</span>
                      <span>Class of {alumni.graduationYear}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {alumni.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span>{alumni.responseRate}% response rate • {alumni.sessions} sessions</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleMessage(alumni.name)}>
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" onClick={() => handleConnect(alumni.id)}>
                          <UserPlus className="w-4 h-4 mr-1" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* My Connections & Quick Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Connections</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {myConnections.map((connection, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm">
                        {connection.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{connection.name}</h4>
                      <p className="text-xs text-gray-600">{connection.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{connection.lastMessage}</p>
                  <p className="text-xs text-gray-500">{connection.lastActive}</p>
                </div>
              ))}
              <Button className="w-full" variant="outline">View All</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connection Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{myConnections.length}</p>
                <p className="text-sm text-gray-600">Active Connections</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">5</p>
                <p className="text-sm text-gray-600">Mentorship Sessions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">3</p>
                <p className="text-sm text-gray-600">Career Guidance</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips for Connecting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-blue-800">Be specific about what guidance you're seeking</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-green-800">Show genuine interest in their career journey</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-purple-800">Follow up with updates on your progress</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}