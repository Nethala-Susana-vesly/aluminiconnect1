import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { User, Briefcase, MapPin, Phone, Mail, LinkedinIcon } from 'lucide-react';

interface AlumniProfileProps {
  userEmail: string;
  userName?: string;
  userData?: any;
}

export function AlumniProfile({ userEmail, userName, userData }: AlumniProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: '19pa1a05e7@vishnu.edu.in',
    phone: '+91 9876543210',
    currentPosition: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    location: 'Hyderabad, India',
    graduationYear: '2023',
    branch: 'Computer Science Engineering',
    linkedin: 'linkedin.com/in/johndoe',
    bio: 'Passionate software engineer with expertise in full-stack development. Love mentoring students and contributing to open-source projects.',
    skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB'],
    achievements: ['Employee of the Year 2023', 'Led team of 5 developers', 'Published 3 research papers']
  });

  // Update profile data when userData is available
  useEffect(() => {
    if (userData) {
      setProfileData(prevData => ({
        ...prevData,
        fullName: userData.fullName || userName || prevData.fullName,
        email: userEmail,
        phone: userData.phoneNumber || prevData.phone,
        currentPosition: userData.currentOccupation || prevData.currentPosition,
        location: userData.location || prevData.location,
        graduationYear: userData.graduatedYear ? userData.graduatedYear.toString() : prevData.graduationYear,
        bio: userData.bio || prevData.bio,
        skills: userData.skills && userData.skills.length > 0 ? userData.skills : prevData.skills,
      }));
    } else if (userName) {
      setProfileData(prevData => ({
        ...prevData,
        fullName: userName,
        email: userEmail,
      }));
    }
  }, [userData, userName, userEmail]);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to database
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Alumni Profile</h1>
          <p className="text-gray-600">Manage your personal and professional information</p>
        </div>
        <Button onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{profileData.fullName}</h3>
            <p className="text-gray-600 mb-1">{profileData.currentPosition}</p>
            <p className="text-gray-500 mb-4">{profileData.company}</p>
            <Badge className="mb-4">Class of {profileData.graduationYear}</Badge>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{profileData.phone}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal & Professional Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal & Professional Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={profileData.fullName}
                  onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="position">Current Position</Label>
                <Input
                  id="position"
                  value={profileData.currentPosition}
                  onChange={(e) => setProfileData({...profileData, currentPosition: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={profileData.company}
                  onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profileData.location}
                  onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  value={profileData.linkedin}
                  onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input
                  id="graduationYear"
                  value={profileData.graduationYear}
                  onChange={(e) => setProfileData({...profileData, graduationYear: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="branch">Branch</Label>
                <Select value={profileData.branch} onValueChange={(value) => setProfileData({...profileData, branch: value})} disabled={!isEditing}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Science Engineering">Computer Science Engineering</SelectItem>
                    <SelectItem value="Electronics and Communication Engineering">Electronics and Communication Engineering</SelectItem>
                    <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                    <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                    <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                    <SelectItem value="Information Technology">Information Technology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                disabled={!isEditing}
                rows={4}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Skills & Achievements */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Skills & Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label>Skills</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <Label>Achievements</Label>
              <ul className="mt-2 space-y-2">
                {profileData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}