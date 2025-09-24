import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Calendar, Clock, MapPin, Users, CheckCircle, XCircle } from 'lucide-react';

export function SessionsInvitations() {
  const [invitations, setInvitations] = useState([
    {
      id: 1,
      title: 'Guest Lecture: Software Engineering Trends',
      type: 'lecture',
      date: '2024-02-15',
      time: '10:00 AM - 12:00 PM',
      location: 'Auditorium A, VIT Campus',
      organizer: 'Dr. Sarah Johnson',
      department: 'Computer Science',
      description: 'Share insights about current trends in software engineering and career opportunities.',
      audience: 'Final year students',
      status: 'pending',
      expectedAttendees: 150
    },
    {
      id: 2,
      title: 'Career Guidance Workshop',
      type: 'workshop',
      date: '2024-02-20',
      time: '2:00 PM - 4:00 PM',
      location: 'Conference Room B',
      organizer: 'Prof. Michael Davis',
      department: 'Career Development',
      description: 'Conduct a workshop on resume building and interview preparation.',
      audience: 'All students',
      status: 'accepted',
      expectedAttendees: 50
    },
    {
      id: 3,
      title: 'Industry Panel Discussion',
      type: 'panel',
      date: '2024-02-25',
      time: '11:00 AM - 1:00 PM',
      location: 'Main Auditorium',
      organizer: 'Alumni Relations Team',
      department: 'Alumni Affairs',
      description: 'Participate in a panel discussion about industry challenges and opportunities.',
      audience: 'All years',
      status: 'pending',
      expectedAttendees: 200
    }
  ]);

  const pastSessions = [
    {
      id: 4,
      title: 'Tech Entrepreneurship Seminar',
      date: '2024-01-15',
      status: 'completed',
      attendees: 120,
      feedback: 4.8
    },
    {
      id: 5,
      title: 'AI/ML Career Opportunities',
      date: '2024-01-10',
      status: 'completed',
      attendees: 95,
      feedback: 4.6
    }
  ];

  const handleInvitationResponse = (id: number, response: 'accept' | 'decline') => {
    setInvitations(invitations.map(inv => 
      inv.id === id ? { ...inv, status: response === 'accept' ? 'accepted' : 'declined' } : inv
    ));
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'declined': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sessions & Invitations</h1>
        <p className="text-gray-600">Manage your speaking engagements and event invitations</p>
      </div>

      <Tabs defaultValue="invitations" className="space-y-6">
        <TabsList>
          <TabsTrigger value="invitations">Pending Invitations</TabsTrigger>
          <TabsTrigger value="accepted">Accepted Sessions</TabsTrigger>
          <TabsTrigger value="history">Past Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="invitations" className="space-y-4">
          {invitations.filter(inv => inv.status === 'pending').map((invitation) => (
            <Card key={invitation.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{invitation.title}</CardTitle>
                    <p className="text-gray-600 mt-1">Organized by {invitation.organizer}</p>
                  </div>
                  <Badge className={getStatusBadgeColor(invitation.status)}>
                    {invitation.status.charAt(0).toUpperCase() + invitation.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{invitation.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{invitation.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{invitation.location}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Session Details</h4>
                  <p className="text-gray-700 mb-2">{invitation.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span><strong>Target Audience:</strong> {invitation.audience}</span>
                    <span><strong>Expected Attendees:</strong> {invitation.expectedAttendees}</span>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button 
                    variant="outline" 
                    onClick={() => handleInvitationResponse(invitation.id, 'decline')}
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Decline
                  </Button>
                  <Button onClick={() => handleInvitationResponse(invitation.id, 'accept')}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Accept
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4">
          {invitations.filter(inv => inv.status === 'accepted').map((invitation) => (
            <Card key={invitation.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{invitation.title}</CardTitle>
                    <p className="text-gray-600 mt-1">Organized by {invitation.organizer}</p>
                  </div>
                  <Badge className={getStatusBadgeColor(invitation.status)}>
                    Accepted
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{invitation.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{invitation.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{invitation.location}</span>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800">{invitation.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          {pastSessions.map((session) => (
            <Card key={session.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                    <p className="text-gray-600">{session.date}</p>
                  </div>
                  <Badge className={getStatusBadgeColor(session.status)}>
                    Completed
                  </Badge>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{session.attendees} attendees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">★</span>
                    <span>{session.feedback}/5.0 feedback rating</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}