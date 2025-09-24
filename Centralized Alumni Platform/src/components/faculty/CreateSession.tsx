import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Calendar, Clock, MapPin, Users, Video, Plus } from 'lucide-react';

export function CreateSession() {
  const [sessionForm, setSessionForm] = useState({
    title: '',
    type: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    mode: '',
    targetAudience: '',
    maxAttendees: '',
    requirements: '',
    objectives: '',
    materials: ''
  });

  const [createdSessions, setCreatedSessions] = useState([
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      type: 'workshop',
      date: '2024-02-15',
      time: '10:00 AM - 12:00 PM',
      location: 'Lab 301',
      mode: 'in-person',
      registrations: 25,
      maxAttendees: 30,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Career Guidance Seminar',
      type: 'seminar',
      date: '2024-02-20',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual',
      mode: 'online',
      registrations: 45,
      maxAttendees: 50,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Industry Best Practices',
      type: 'lecture',
      date: '2024-01-10',
      time: '11:00 AM - 1:00 PM',
      location: 'Auditorium A',
      mode: 'in-person',
      registrations: 120,
      maxAttendees: 150,
      status: 'completed'
    }
  ]);

  const sessionTypes = [
    { value: 'workshop', label: 'Workshop', description: 'Hands-on interactive session' },
    { value: 'seminar', label: 'Seminar', description: 'Presentation with Q&A' },
    { value: 'lecture', label: 'Lecture', description: 'Academic lecture format' },
    { value: 'panel', label: 'Panel Discussion', description: 'Multiple speakers discussion' },
    { value: 'networking', label: 'Networking', description: 'Informal networking event' }
  ];

  const handleCreateSession = () => {
    const newSession = {
      id: createdSessions.length + 1,
      title: sessionForm.title,
      type: sessionForm.type,
      date: sessionForm.date,
      time: `${sessionForm.startTime} - ${sessionForm.endTime}`,
      location: sessionForm.mode === 'online' ? 'Virtual' : sessionForm.location,
      mode: sessionForm.mode,
      registrations: 0,
      maxAttendees: parseInt(sessionForm.maxAttendees),
      status: 'upcoming'
    };

    setCreatedSessions([newSession, ...createdSessions]);
    
    // Reset form
    setSessionForm({
      title: '',
      type: '',
      description: '',
      date: '',
      startTime: '',
      endTime: '',
      location: '',
      mode: '',
      targetAudience: '',
      maxAttendees: '',
      requirements: '',
      objectives: '',
      materials: ''
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getModeIcon = (mode: string) => {
    return mode === 'online' ? Video : MapPin;
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Session</h1>
        <p className="text-gray-600">Plan and schedule events, workshops, or guest lectures</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Session Creation Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>New Session Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Session Title</Label>
              <Input
                id="title"
                value={sessionForm.title}
                onChange={(e) => setSessionForm({...sessionForm, title: e.target.value})}
                placeholder="e.g., Introduction to Machine Learning"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="type">Session Type</Label>
              <Select value={sessionForm.type} onValueChange={(value) => setSessionForm({...sessionForm, type: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select session type" />
                </SelectTrigger>
                <SelectContent>
                  {sessionTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div>
                        <div className="font-medium">{type.label}</div>
                        <div className="text-sm text-gray-500">{type.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={sessionForm.description}
                onChange={(e) => setSessionForm({...sessionForm, description: e.target.value})}
                placeholder="Describe the session content, goals, and what attendees will learn..."
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
                  value={sessionForm.date}
                  onChange={(e) => setSessionForm({...sessionForm, date: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  id="startTime"
                  type="time"
                  value={sessionForm.startTime}
                  onChange={(e) => setSessionForm({...sessionForm, startTime: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="endTime">End Time</Label>
                <Input
                  id="endTime"
                  type="time"
                  value={sessionForm.endTime}
                  onChange={(e) => setSessionForm({...sessionForm, endTime: e.target.value})}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mode">Session Mode</Label>
                <Select value={sessionForm.mode} onValueChange={(value) => setSessionForm({...sessionForm, mode: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-person">In-Person</SelectItem>
                    <SelectItem value="online">Online/Virtual</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="maxAttendees">Maximum Attendees</Label>
                <Input
                  id="maxAttendees"
                  type="number"
                  value={sessionForm.maxAttendees}
                  onChange={(e) => setSessionForm({...sessionForm, maxAttendees: e.target.value})}
                  placeholder="e.g., 50"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={sessionForm.location}
                onChange={(e) => setSessionForm({...sessionForm, location: e.target.value})}
                placeholder={sessionForm.mode === 'online' ? 'Zoom/Teams link' : 'e.g., Auditorium A, Lab 301'}
                className="mt-1"
                disabled={sessionForm.mode === 'online'}
              />
            </div>

            <div>
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Select value={sessionForm.targetAudience} onValueChange={(value) => setSessionForm({...sessionForm, targetAudience: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select target audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-year">First Year Students</SelectItem>
                  <SelectItem value="second-year">Second Year Students</SelectItem>
                  <SelectItem value="third-year">Third Year Students</SelectItem>
                  <SelectItem value="final-year">Final Year Students</SelectItem>
                  <SelectItem value="all-students">All Students</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="all">All (Students + Faculty)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="objectives">Learning Objectives</Label>
              <Textarea
                id="objectives"
                value={sessionForm.objectives}
                onChange={(e) => setSessionForm({...sessionForm, objectives: e.target.value})}
                placeholder="List the key learning objectives and takeaways..."
                rows={3}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="requirements">Prerequisites/Requirements</Label>
              <Textarea
                id="requirements"
                value={sessionForm.requirements}
                onChange={(e) => setSessionForm({...sessionForm, requirements: e.target.value})}
                placeholder="Any prerequisites or requirements for attendees..."
                rows={2}
                className="mt-1"
              />
            </div>

            <Button onClick={handleCreateSession} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Create Session
            </Button>
          </CardContent>
        </Card>

        {/* Session Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Session Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">{createdSessions.filter(s => s.status === 'upcoming').length}</p>
              <p className="text-sm text-blue-700">Upcoming Sessions</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">
                {createdSessions.reduce((acc, session) => acc + session.registrations, 0)}
              </p>
              <p className="text-sm text-green-700">Total Registrations</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">{createdSessions.filter(s => s.status === 'completed').length}</p>
              <p className="text-sm text-purple-700">Completed Sessions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Created Sessions List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {createdSessions.map((session) => {
              const ModeIcon = getModeIcon(session.mode);
              return (
                <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{session.title}</h3>
                      <Badge className={getStatusColor(session.status)}>
                        {session.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ModeIcon className="w-4 h-4" />
                        <span>{session.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{session.registrations}/{session.maxAttendees} registered</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}