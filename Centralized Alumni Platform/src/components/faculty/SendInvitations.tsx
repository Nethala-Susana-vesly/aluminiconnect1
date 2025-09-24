import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Mail, Users, Send, Calendar, Clock, MapPin } from 'lucide-react';

export function SendInvitations() {
  const [invitationType, setInvitationType] = useState('');
  const [selectedAlumni, setSelectedAlumni] = useState<number[]>([]);
  const [invitationForm, setInvitationForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    duration: '',
    targetAudience: '',
    requirements: '',
    benefits: ''
  });

  const alumniList = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Product Manager',
      company: 'Microsoft',
      expertise: ['Product Management', 'Strategy', 'Leadership'],
      availability: 'high',
      previousSessions: 3
    },
    {
      id: 2,
      name: 'Raj Patel',
      position: 'Data Scientist',
      company: 'Google',
      expertise: ['Machine Learning', 'AI', 'Python'],
      availability: 'medium',
      previousSessions: 2
    },
    {
      id: 3,
      name: 'Emily Chen',
      position: 'Software Engineer',
      company: 'Apple',
      expertise: ['iOS Development', 'Swift', 'Mobile Apps'],
      availability: 'high',
      previousSessions: 1
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      position: 'DevOps Engineer',
      company: 'Amazon',
      expertise: ['AWS', 'Docker', 'Kubernetes'],
      availability: 'low',
      previousSessions: 0
    }
  ];

  const invitationTemplates = [
    {
      id: 'guest-lecture',
      title: 'Guest Lecture',
      description: 'Invite alumni to deliver a guest lecture to students',
      template: 'We would like to invite you to deliver a guest lecture on your area of expertise.'
    },
    {
      id: 'workshop',
      title: 'Workshop/Seminar',
      description: 'Conduct hands-on workshops or seminars',
      template: 'We invite you to conduct an interactive workshop for our students.'
    },
    {
      id: 'panel-discussion',
      title: 'Panel Discussion',
      description: 'Participate in panel discussions with other alumni',
      template: 'Join us for a panel discussion with fellow alumni on industry trends.'
    },
    {
      id: 'mentorship',
      title: 'Mentorship Program',
      description: 'Ongoing mentorship opportunities for students',
      template: 'We invite you to participate in our student mentorship program.'
    },
    {
      id: 'career-fair',
      title: 'Career Fair',
      description: 'Participate in career guidance and job opportunities',
      template: 'Join our career fair to share opportunities and guide students.'
    }
  ];

  const sentInvitations = [
    {
      id: 1,
      title: 'AI/ML Workshop',
      recipients: ['Raj Patel', 'Sarah Johnson'],
      sentDate: '2024-01-20',
      status: 'pending',
      responses: { accepted: 1, pending: 1, declined: 0 }
    },
    {
      id: 2,
      title: 'Career Guidance Session',
      recipients: ['Emily Chen', 'Alex Rodriguez'],
      sentDate: '2024-01-18',
      status: 'completed',
      responses: { accepted: 2, pending: 0, declined: 0 }
    }
  ];

  const handleAlumniSelection = (alumniId: number) => {
    setSelectedAlumni(prev => 
      prev.includes(alumniId) 
        ? prev.filter(id => id !== alumniId)
        : [...prev, alumniId]
    );
  };

  const handleSendInvitation = () => {
    console.log('Sending invitation to:', selectedAlumni);
    console.log('Invitation details:', invitationForm);
    // Reset form after sending
    setInvitationForm({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      duration: '',
      targetAudience: '',
      requirements: '',
      benefits: ''
    });
    setSelectedAlumni([]);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Send Invitations</h1>
        <p className="text-gray-600">Invite alumni for sessions, events, and mentorship programs</p>
      </div>

      <Tabs defaultValue="compose" className="space-y-6">
        <TabsList>
          <TabsTrigger value="compose">Compose Invitation</TabsTrigger>
          <TabsTrigger value="sent">Sent Invitations</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="compose" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Invitation Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Create Invitation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="invitationType">Invitation Type</Label>
                  <Select value={invitationType} onValueChange={setInvitationType}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select invitation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {invitationTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="title">Event Title</Label>
                  <Input
                    id="title"
                    value={invitationForm.title}
                    onChange={(e) => setInvitationForm({...invitationForm, title: e.target.value})}
                    placeholder="e.g., Industry Trends in AI/ML"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Event Description</Label>
                  <Textarea
                    id="description"
                    value={invitationForm.description}
                    onChange={(e) => setInvitationForm({...invitationForm, description: e.target.value})}
                    placeholder="Describe the event, its objectives, and what's expected from the alumni..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={invitationForm.date}
                      onChange={(e) => setInvitationForm({...invitationForm, date: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={invitationForm.time}
                      onChange={(e) => setInvitationForm({...invitationForm, time: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Select value={invitationForm.duration} onValueChange={(value) => setInvitationForm({...invitationForm, duration: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1hour">1 Hour</SelectItem>
                        <SelectItem value="2hours">2 Hours</SelectItem>
                        <SelectItem value="halfday">Half Day</SelectItem>
                        <SelectItem value="fullday">Full Day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={invitationForm.location}
                    onChange={(e) => setInvitationForm({...invitationForm, location: e.target.value})}
                    placeholder="e.g., Main Auditorium, VIT Campus or Virtual (Zoom)"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Input
                    id="targetAudience"
                    value={invitationForm.targetAudience}
                    onChange={(e) => setInvitationForm({...invitationForm, targetAudience: e.target.value})}
                    placeholder="e.g., Final year students, All years, Faculty"
                    className="mt-1"
                  />
                </div>

                <Button onClick={handleSendInvitation} className="w-full" disabled={selectedAlumni.length === 0}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Invitation to {selectedAlumni.length} Alumni
                </Button>
              </CardContent>
            </Card>

            {/* Alumni Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Alumni</CardTitle>
                <p className="text-sm text-gray-600">{selectedAlumni.length} selected</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {alumniList.map((alumni) => (
                  <div key={alumni.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <Checkbox
                      checked={selectedAlumni.includes(alumni.id)}
                      onCheckedChange={() => handleAlumniSelection(alumni.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs">
                            {alumni.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{alumni.name}</h4>
                          <p className="text-xs text-gray-600">{alumni.position}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{alumni.company}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {alumni.expertise.slice(0, 2).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <Badge className={getAvailabilityColor(alumni.availability)}>
                          {alumni.availability} availability
                        </Badge>
                        <span className="text-gray-500">{alumni.previousSessions} sessions</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          {sentInvitations.map((invitation) => (
            <Card key={invitation.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{invitation.title}</h3>
                    <p className="text-gray-600">Sent to: {invitation.recipients.join(', ')}</p>
                    <p className="text-sm text-gray-500">Sent on: {invitation.sentDate}</p>
                  </div>
                  <Badge variant={invitation.status === 'completed' ? 'default' : 'secondary'}>
                    {invitation.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-lg font-bold text-green-600">{invitation.responses.accepted}</p>
                    <p className="text-sm text-green-700">Accepted</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <p className="text-lg font-bold text-yellow-600">{invitation.responses.pending}</p>
                    <p className="text-sm text-yellow-700">Pending</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-lg font-bold text-red-600">{invitation.responses.declined}</p>
                    <p className="text-sm text-red-700">Declined</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {invitationTemplates.map((template) => (
              <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{template.template}</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setInvitationType(template.id)}
                    className="w-full"
                  >
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}