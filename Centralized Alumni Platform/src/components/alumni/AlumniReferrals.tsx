import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Plus, Briefcase, Users, CheckCircle, Clock, XCircle } from 'lucide-react';

export function AlumniReferrals() {
  const [showAddReferral, setShowAddReferral] = useState(false);
  const [newReferral, setNewReferral] = useState({
    position: '',
    company: '',
    description: '',
    requirements: '',
    location: '',
    experienceLevel: '',
    applicationDeadline: ''
  });

  const referralRequests = [
    {
      id: 1,
      studentName: 'Anita Kumar',
      studentEmail: '21pa1a05b8@vishnu.edu.in',
      position: 'Software Engineer Intern',
      company: 'Tech Solutions Inc.',
      submittedDate: '2024-01-15',
      status: 'pending',
      resume: 'anita_kumar_resume.pdf',
      coverLetter: 'Looking for an internship opportunity in full-stack development.'
    },
    {
      id: 2,
      studentName: 'Rahul Sharma',
      studentEmail: '20pa1a12a7@vishnu.edu.in',
      position: 'Data Analyst',
      company: 'Data Insights Corp',
      submittedDate: '2024-01-18',
      status: 'processing',
      resume: 'rahul_sharma_resume.pdf',
      coverLetter: 'Passionate about data analytics and machine learning.'
    }
  ];

  const myReferrals = [
    {
      id: 1,
      position: 'Software Engineer Intern',
      company: 'Tech Solutions Inc.',
      location: 'Hyderabad',
      postedDate: '2024-01-10',
      applicants: 5,
      status: 'active',
      experienceLevel: 'Entry Level'
    },
    {
      id: 2,
      position: 'Data Analyst',
      company: 'Data Insights Corp',
      location: 'Bangalore',
      postedDate: '2024-01-12',
      applicants: 3,
      status: 'active',
      experienceLevel: 'Entry Level'
    }
  ];

  const referralHistory = [
    {
      id: 3,
      position: 'Frontend Developer',
      company: 'Web Innovations',
      studentName: 'Priya Patel',
      result: 'hired',
      completedDate: '2023-12-20'
    },
    {
      id: 4,
      position: 'Marketing Intern',
      company: 'Brand Builders',
      studentName: 'Amit Gupta',
      result: 'not_selected',
      completedDate: '2023-12-15'
    }
  ];

  const handleAddReferral = () => {
    console.log('Adding new referral:', newReferral);
    setNewReferral({
      position: '',
      company: '',
      description: '',
      requirements: '',
      location: '',
      experienceLevel: '',
      applicationDeadline: ''
    });
    setShowAddReferral(false);
  };

  const handleReferralAction = (requestId: number, action: 'approve' | 'reject') => {
    console.log(`${action} referral request:`, requestId);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
      processing: { color: 'bg-blue-100 text-blue-800', icon: Users },
      approved: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      rejected: { color: 'bg-red-100 text-red-800', icon: XCircle },
      active: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      hired: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      not_selected: { color: 'bg-gray-100 text-gray-800', icon: XCircle }
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <Badge className={config.color}>
        {status.replace('_', ' ').toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Referrals</h1>
          <p className="text-gray-600">Help students with job opportunities and career guidance</p>
        </div>
        <Dialog open={showAddReferral} onOpenChange={setShowAddReferral}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Opportunity
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Job Opportunity</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="position">Position Title</Label>
                  <Input
                    id="position"
                    value={newReferral.position}
                    onChange={(e) => setNewReferral({...newReferral, position: e.target.value})}
                    placeholder="e.g., Software Engineer"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={newReferral.company}
                    onChange={(e) => setNewReferral({...newReferral, company: e.target.value})}
                    placeholder="e.g., Tech Solutions Inc."
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={newReferral.location}
                    onChange={(e) => setNewReferral({...newReferral, location: e.target.value})}
                    placeholder="e.g., Hyderabad"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="experienceLevel">Experience Level</Label>
                  <Select value={newReferral.experienceLevel} onValueChange={(value) => setNewReferral({...newReferral, experienceLevel: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  value={newReferral.description}
                  onChange={(e) => setNewReferral({...newReferral, description: e.target.value})}
                  placeholder="Describe the role and responsibilities..."
                  rows={4}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea
                  id="requirements"
                  value={newReferral.requirements}
                  onChange={(e) => setNewReferral({...newReferral, requirements: e.target.value})}
                  placeholder="List the required skills and qualifications..."
                  rows={3}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="deadline">Application Deadline</Label>
                <Input
                  id="deadline"
                  type="date"
                  value={newReferral.applicationDeadline}
                  onChange={(e) => setNewReferral({...newReferral, applicationDeadline: e.target.value})}
                  className="mt-1"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setShowAddReferral(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddReferral}>
                  Add Opportunity
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="requests" className="space-y-6">
        <TabsList>
          <TabsTrigger value="requests">Referral Requests ({referralRequests.length})</TabsTrigger>
          <TabsTrigger value="opportunities">My Opportunities ({myReferrals.length})</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          {referralRequests.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{request.studentName}</CardTitle>
                    <p className="text-gray-600">{request.studentEmail}</p>
                  </div>
                  {getStatusBadge(request.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Application Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Position:</span> {request.position}
                    </div>
                    <div>
                      <span className="font-medium">Company:</span> {request.company}
                    </div>
                    <div>
                      <span className="font-medium">Submitted:</span> {request.submittedDate}
                    </div>
                    <div>
                      <span className="font-medium">Resume:</span> 
                      <Button variant="link" className="p-0 h-auto ml-2 text-blue-600">
                        {request.resume}
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cover Letter</h4>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded">{request.coverLetter}</p>
                </div>

                {request.status === 'pending' && (
                  <div className="flex justify-end space-x-3">
                    <Button 
                      variant="outline" 
                      onClick={() => handleReferralAction(request.id, 'reject')}
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Decline
                    </Button>
                    <Button onClick={() => handleReferralAction(request.id, 'approve')}>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Provide Referral
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myReferrals.map((referral) => (
              <Card key={referral.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{referral.position}</CardTitle>
                    {getStatusBadge(referral.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{referral.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>📍</span>
                      <span>{referral.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{referral.applicants} applications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>📅</span>
                      <span>Posted on {referral.postedDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          {referralHistory.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.position}</h3>
                    <p className="text-gray-600">{item.company}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Referred: {item.studentName} • Completed: {item.completedDate}
                    </p>
                  </div>
                  {getStatusBadge(item.result)}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Referral Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600">Total Referrals</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-green-600">8</p>
            <p className="text-sm text-gray-600">Successful Hires</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-orange-600">3</p>
            <p className="text-sm text-gray-600">Pending Requests</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-purple-600">67%</p>
            <p className="text-sm text-gray-600">Success Rate</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}