import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Search, MapPin, Briefcase, Calendar, Mail, Phone, ExternalLink } from 'lucide-react';

export function AlumniDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const alumniData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: '16pa1a05e7@vishnu.edu.in',
      graduationYear: '2020',
      branch: 'Computer Science Engineering',
      position: 'Senior Product Manager',
      company: 'Microsoft',
      location: 'Seattle, USA',
      phone: '+1-555-0123',
      skills: ['Product Management', 'Strategy', 'Leadership', 'Agile'],
      experience: '4 years',
      engagement: 95,
      lastActive: '2024-01-20',
      linkedin: 'linkedin.com/in/sarahjohnson'
    },
    {
      id: 2,
      name: 'Raj Patel',
      email: '15pa1a12a7@vishnu.edu.in',
      graduationYear: '2019',
      branch: 'Computer Science Engineering',
      position: 'Data Scientist',
      company: 'Google',
      location: 'Bangalore, India',
      phone: '+91-9876543210',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Analysis'],
      experience: '5 years',
      engagement: 88,
      lastActive: '2024-01-18',
      linkedin: 'linkedin.com/in/rajpatel'
    },
    {
      id: 3,
      name: 'Emily Chen',
      email: '17pa1a08b3@vishnu.edu.in',
      graduationYear: '2021',
      branch: 'Electronics Engineering',
      position: 'Software Engineer',
      company: 'Apple',
      location: 'Cupertino, USA',
      phone: '+1-555-0456',
      skills: ['iOS Development', 'Swift', 'Mobile Apps', 'UI/UX'],
      experience: '3 years',
      engagement: 82,
      lastActive: '2024-01-15',
      linkedin: 'linkedin.com/in/emilychen'
    },
    {
      id: 4,
      name: 'Arjun Reddy',
      email: '18pa1a04c9@vishnu.edu.in',
      graduationYear: '2022',
      branch: 'Mechanical Engineering',
      position: 'Design Engineer',
      company: 'Tesla',
      location: 'Fremont, USA',
      phone: '+1-555-0789',
      skills: ['CAD Design', 'SolidWorks', 'Product Design', 'Manufacturing'],
      experience: '2 years',
      engagement: 76,
      lastActive: '2024-01-22',
      linkedin: 'linkedin.com/in/arjunreddy'
    }
  ];

  const branches = ['All Branches', 'Computer Science Engineering', 'Electronics Engineering', 'Mechanical Engineering', 'Civil Engineering'];
  const graduationYears = ['All Years', '2018', '2019', '2020', '2021', '2022', '2023'];
  const companies = ['All Companies', 'Microsoft', 'Google', 'Apple', 'Tesla', 'Amazon', 'Meta'];

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumni.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  const handleContactAlumni = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 90) return 'bg-green-100 text-green-800';
    if (engagement >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Alumni Directory</h1>
        <p className="text-gray-600">Browse and connect with alumni by profession, skills, and location</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by name, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by branch" />
              </SelectTrigger>
              <SelectContent>
                {branches.map((branch) => (
                  <SelectItem key={branch} value={branch.toLowerCase().replace(/\s+/g, '-')}>
                    {branch}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Graduation year" />
              </SelectTrigger>
              <SelectContent>
                {graduationYears.map((year) => (
                  <SelectItem key={year} value={year.toLowerCase().replace(/\s+/g, '-')}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="year">Graduation Year</SelectItem>
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="engagement">Engagement</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAlumni.map((alumni) => (
          <Card key={alumni.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{alumni.name}</CardTitle>
                    <p className="text-sm text-gray-500">Class of {alumni.graduationYear}</p>
                  </div>
                </div>
                <Badge className={getEngagementColor(alumni.engagement)}>
                  {alumni.engagement}% engaged
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-gray-900">{alumni.position}</span>
                </div>
                <p className="text-gray-600 ml-6">{alumni.company}</p>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{alumni.location}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{alumni.branch}</span>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Skills</p>
                <div className="flex flex-wrap gap-1">
                  {alumni.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {alumni.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{alumni.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Experience: {alumni.experience}</span>
                <span>Active: {alumni.lastActive}</span>
              </div>

              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  onClick={() => handleContactAlumni(alumni.email)}
                  className="flex-1"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Directory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-blue-600">{alumniData.length}</p>
            <p className="text-sm text-gray-600">Total Alumni</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-green-600">
              {alumniData.filter(a => a.engagement >= 80).length}
            </p>
            <p className="text-sm text-gray-600">Highly Engaged</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-purple-600">
              {new Set(alumniData.map(a => a.company)).size}
            </p>
            <p className="text-sm text-gray-600">Companies</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-orange-600">
              {new Set(alumniData.map(a => a.location.split(',')[1]?.trim())).size}
            </p>
            <p className="text-sm text-gray-600">Countries</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}