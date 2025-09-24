import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Search, MapPin, Briefcase, Users, MessageCircle } from 'lucide-react';

export function AlumniNetworking() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const connections = [
    {
      id: 1,
      name: 'Sarah Johnson',
      graduationYear: '2020',
      position: 'Senior Product Manager',
      company: 'Microsoft',
      location: 'Seattle, USA',
      skills: ['Product Management', 'Strategy', 'Leadership'],
      connection: 'connected',
      mutualConnections: 8
    },
    {
      id: 2,
      name: 'Raj Patel',
      graduationYear: '2019',
      position: 'Data Scientist',
      company: 'Google',
      location: 'Bangalore, India',
      skills: ['Machine Learning', 'Python', 'Data Analysis'],
      connection: 'pending',
      mutualConnections: 5
    },
    {
      id: 3,
      name: 'Emily Chen',
      graduationYear: '2021',
      position: 'Software Engineer',
      company: 'Apple',
      location: 'Cupertino, USA',
      skills: ['iOS Development', 'Swift', 'Mobile Apps'],
      connection: 'connected',
      mutualConnections: 12
    }
  ];

  const suggestedConnections = [
    {
      id: 4,
      name: 'Alex Rodriguez',
      graduationYear: '2018',
      position: 'DevOps Engineer',
      company: 'Amazon',
      location: 'Berlin, Germany',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      connection: 'suggested',
      mutualConnections: 3,
      reason: 'Similar skills and interests'
    },
    {
      id: 5,
      name: 'Priya Sharma',
      graduationYear: '2022',
      position: 'UX Designer',
      company: 'Spotify',
      location: 'Stockholm, Sweden',
      skills: ['UI/UX Design', 'Figma', 'User Research'],
      connection: 'suggested',
      mutualConnections: 7,
      reason: 'Same graduation batch'
    }
  ];

  const networkingEvents = [
    {
      id: 1,
      title: 'Alumni Tech Meetup',
      date: '2024-02-20',
      location: 'Bangalore',
      attendees: 45,
      type: 'in-person'
    },
    {
      id: 2,
      title: 'Virtual Career Fair',
      date: '2024-02-25',
      location: 'Online',
      attendees: 150,
      type: 'virtual'
    }
  ];

  const handleConnect = (alumniId: number) => {
    console.log('Sending connection request to:', alumniId);
  };

  const getConnectionStatus = (status: string) => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-green-100 text-green-800">Connected</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Alumni Networking</h1>
        <p className="text-gray-600">Connect and collaborate with fellow alumni</p>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search alumni by name, company, or skills..."
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
                <SelectItem value="year">Graduation Year</SelectItem>
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="location">Location</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Connections */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Connections ({connections.filter(c => c.connection === 'connected').length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {connections.map((alumni) => (
                <div key={alumni.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
                      {getConnectionStatus(alumni.connection)}
                    </div>
                    
                    <p className="text-gray-700 mb-1">{alumni.position} at {alumni.company}</p>
                    <p className="text-sm text-gray-500 mb-2">Class of {alumni.graduationYear}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{alumni.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{alumni.mutualConnections} mutual</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {alumni.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      {alumni.connection === 'connected' ? (
                        <Button size="sm" variant="outline">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      ) : (
                        <Button size="sm" onClick={() => handleConnect(alumni.id)}>
                          Connect
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Suggested Connections */}
          <Card>
            <CardHeader>
              <CardTitle>Suggested Connections</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {suggestedConnections.map((alumni) => (
                <div key={alumni.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">{alumni.name}</h3>
                    <p className="text-gray-700 mb-1">{alumni.position} at {alumni.company}</p>
                    <p className="text-sm text-gray-500 mb-2">Class of {alumni.graduationYear}</p>
                    <p className="text-xs text-blue-600 mb-3">{alumni.reason}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {alumni.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button size="sm" onClick={() => handleConnect(alumni.id)}>
                      Connect
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Network Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Network Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">45</p>
                <p className="text-sm text-gray-600">Total Connections</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">8</p>
                <p className="text-sm text-gray-600">New This Month</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">156</p>
                <p className="text-sm text-gray-600">Profile Views</p>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Networking Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {networkingEvents.map((event) => (
                <div key={event.id} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <p className="text-sm text-gray-500">{event.attendees} attendees</p>
                  <Badge variant="outline" className="mt-2">
                    {event.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}