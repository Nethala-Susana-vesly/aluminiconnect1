import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Briefcase, MapPin, Clock, Users, ExternalLink, Send } from 'lucide-react';

export function OpportunitiesReferrals() {
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);

  const jobOpportunities = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Tech Solutions Inc.',
      location: 'Hyderabad',
      type: 'Internship',
      duration: '6 months',
      postedBy: 'Sarah Johnson',
      postedDate: '2024-01-20',
      applicants: 15,
      description: 'Work on full-stack development projects using React and Node.js',
      requirements: ['React.js', 'Node.js', 'JavaScript', 'Git'],
      stipend: '₹25,000/month'
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'Data Insights Corp',
      location: 'Bangalore',
      type: 'Full-time',
      duration: 'Permanent',
      postedBy: 'Raj Patel',
      postedDate: '2024-01-18',
      applicants: 8,
      description: 'Analyze large datasets and create meaningful insights for business decisions',
      requirements: ['Python', 'SQL', 'Excel', 'Statistics'],
      salary: '₹6-8 LPA'
    },
    {
      id: 3,
      title: 'UI/UX Designer Intern',
      company: 'Design Studio',
      location: 'Remote',
      type: 'Internship',
      duration: '4 months',
      postedBy: 'Emily Chen',
      postedDate: '2024-01-15',
      applicants: 12,
      description: 'Create user interfaces and improve user experience for mobile applications',
      requirements: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      stipend: '₹20,000/month'
    }
  ];

  const myApplications = [
    {
      id: 1,
      position: 'Frontend Developer Intern',
      company: 'WebTech Solutions',
      appliedDate: '2024-01-10',
      status: 'under_review',
      referredBy: 'Alex Rodriguez'
    },
    {
      id: 2,
      position: 'Marketing Intern',
      company: 'Brand Builders',
      appliedDate: '2024-01-08',
      status: 'shortlisted',
      referredBy: 'Priya Sharma'
    },
    {
      id: 3,
      position: 'Data Science Intern',
      company: 'Analytics Pro',
      appliedDate: '2024-01-05',
      status: 'rejected',
      referredBy: 'Raj Patel'
    }
  ];

  const handleApply = (jobId: number) => {
    setAppliedJobs(prev => [...prev, jobId]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'under_review': return 'bg-yellow-100 text-yellow-800';
      case 'shortlisted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'selected': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-100 text-blue-800';
      case 'Full-time': return 'bg-green-100 text-green-800';
      case 'Part-time': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Opportunities & Referrals</h1>
        <p className="text-gray-600">View job and internship referrals from alumni</p>
      </div>

      <Tabs defaultValue="opportunities" className="space-y-6">
        <TabsList>
          <TabsTrigger value="opportunities">Available Opportunities</TabsTrigger>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
        </TabsList>

        <TabsContent value="opportunities" className="space-y-4">
          <div className="grid grid-cols-1 gap-6">
            {jobOpportunities.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Briefcase className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700 font-medium">{job.company}</span>
                      </div>
                    </div>
                    <Badge className={getTypeColor(job.type)}>
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{job.applicants} applicants</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Job Description</h4>
                    <p className="text-gray-700 mb-3">{job.description}</p>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-900">Required Skills: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {job.requirements.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">
                        {job.type === 'Internship' ? job.stipend : job.salary}
                      </span>
                      <span className="text-sm text-gray-500">
                        Referred by {job.postedBy}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span>Posted on: {job.postedDate}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => handleApply(job.id)}
                        disabled={appliedJobs.includes(job.id)}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {appliedJobs.includes(job.id) ? 'Applied' : 'Apply Now'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          {myApplications.map((application) => (
            <Card key={application.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{application.position}</h3>
                    <p className="text-gray-600">{application.company}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Applied on: {application.appliedDate} • Referred by {application.referredBy}
                    </p>
                  </div>
                  <Badge className={getStatusColor(application.status)}>
                    {application.status.replace('_', ' ').toUpperCase()}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    Status updates will be sent to your email
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <Card>
            <CardContent className="p-12 text-center">
              <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Saved Jobs</h3>
              <p className="text-gray-600">Jobs you save will appear here for quick access.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-blue-600">{jobOpportunities.length}</p>
            <p className="text-sm text-gray-600">Available Opportunities</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-green-600">{myApplications.length}</p>
            <p className="text-sm text-gray-600">Applications Sent</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-purple-600">
              {myApplications.filter(app => app.status === 'shortlisted').length}
            </p>
            <p className="text-sm text-gray-600">Shortlisted</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-orange-600">0</p>
            <p className="text-sm text-gray-600">Saved Jobs</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}