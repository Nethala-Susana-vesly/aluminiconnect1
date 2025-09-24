import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { User, Mail, Phone, Building, GraduationCap } from 'lucide-react';

interface FacultyProfileProps {
  userEmail: string;
  userName?: string;
  userData?: any;
}

export function FacultyProfile({ userEmail, userName, userData }: FacultyProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Dr. Rajesh Kumar',
    email: '23pa1a12e7@vishnu.edu.in',
    phone: '+91 9876543210',
    department: 'Computer Science Engineering',
    designation: 'Associate Professor',
    experience: '8 years',
    qualifications: ['Ph.D in Computer Science', 'M.Tech in Software Engineering'],
    specializations: ['Machine Learning', 'Data Science', 'Software Engineering'],
    bio: 'Experienced faculty member with expertise in machine learning and software engineering. Passionate about mentoring students and research.',
    researchInterests: ['Artificial Intelligence', 'Deep Learning', 'Computer Vision'],
    publications: ['Research Paper on ML Applications', 'Conference Paper on AI Ethics', 'Journal Article on Data Mining']
  });

  // Update profile data when userData is available
  useEffect(() => {
    if (userData) {
      setProfileData(prevData => ({
        ...prevData,
        fullName: userData.fullName || userName || prevData.fullName,
        email: userEmail,
        phone: userData.phoneNumber || prevData.phone,
        department: userData.department || prevData.department,
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
          <h1 className="mb-2">Faculty Profile</h1>
          <p className="text-gray-600">Manage your professional and academic information</p>
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
            <h3 className="mb-2">{profileData.fullName}</h3>
            <p className="text-gray-600 mb-1">{profileData.designation}</p>
            <p className="text-gray-500 mb-4">{profileData.department}</p>
            <Badge className="mb-4">Experience: {profileData.experience}</Badge>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{profileData.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Building className="w-4 h-4" />
                <span>{profileData.department}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Professional Details</CardTitle>
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
                <Label htmlFor="department">Department</Label>
                <Select value={profileData.department} onValueChange={(value) => setProfileData({...profileData, department: value})} disabled={!isEditing}>
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
              <div>
                <Label htmlFor="designation">Designation</Label>
                <Select value={profileData.designation} onValueChange={(value) => setProfileData({...profileData, designation: value})} disabled={!isEditing}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Assistant Professor">Assistant Professor</SelectItem>
                    <SelectItem value="Associate Professor">Associate Professor</SelectItem>
                    <SelectItem value="Professor">Professor</SelectItem>
                    <SelectItem value="Head of Department">Head of Department</SelectItem>
                    <SelectItem value="Dean">Dean</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="experience">Experience</Label>
              <Input
                id="experience"
                value={profileData.experience}
                onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                disabled={!isEditing}
                className="mt-1"
              />
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

        {/* Academic & Research Information */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Academic & Research Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Qualifications</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.qualifications.map((qualification, index) => (
                    <Badge key={index} variant="secondary">{qualification}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label>Specializations</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.specializations.map((specialization, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800">{specialization}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Label>Research Interests</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.researchInterests.map((interest, index) => (
                  <Badge key={index} className="bg-green-100 text-green-800">{interest}</Badge>
                ))}
              </div>
            </div>

            <div>
              <Label>Publications</Label>
              <ul className="mt-2 space-y-2">
                {profileData.publications.map((publication, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-700">{publication}</span>
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