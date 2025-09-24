import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { User, Mail, Phone, BookOpen, Target, Award } from 'lucide-react';

interface StudentProfileProps {
  userEmail: string;
  userName?: string;
  userData?: any;
}

export function StudentProfile({ userEmail, userName, userData }: StudentProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Anita Kumar',
    email: '21pa1a05b8@vishnu.edu.in',
    phone: '+91 9876543210',
    year: '3rd Year',
    branch: 'Computer Science Engineering',
    rollNumber: '21PA1A05B8',
    cgpa: '8.5',
    interests: ['Machine Learning', 'Web Development', 'Data Science'],
    skills: ['Python', 'Java', 'React', 'SQL'],
    projects: ['E-commerce Website', 'Weather Prediction ML Model'],
    careerGoals: 'Software Engineer at a top tech company',
    bio: 'Passionate computer science student with keen interest in AI/ML and full-stack development. Looking forward to contributing to innovative projects.',
    achievements: ['Winner - College Hackathon 2023', 'Published research paper on ML', 'Internship at Tech Startup']
  });

  // Update profile data when userData is available
  useEffect(() => {
    if (userData) {
      setProfileData(prevData => ({
        ...prevData,
        fullName: userData.fullName || userName || prevData.fullName,
        email: userEmail,
        phone: userData.phoneNumber || prevData.phone,
        year: userData.currentSemester ? `${userData.currentSemester}` : prevData.year,
        branch: userData.branch || prevData.branch,
        cgpa: userData.cgpa ? userData.cgpa.toString() : prevData.cgpa,
        rollNumber: userEmail.split('@')[0].toUpperCase() || prevData.rollNumber,
      }));
    } else if (userName) {
      setProfileData(prevData => ({
        ...prevData,
        fullName: userName,
        email: userEmail,
        rollNumber: userEmail.split('@')[0].toUpperCase() || prevData.rollNumber,
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Profile</h1>
          <p className="text-gray-600">Manage your academic and personal information</p>
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
            <p className="text-gray-600 mb-1">{profileData.year}</p>
            <p className="text-gray-500 mb-4">{profileData.branch}</p>
            <Badge className="mb-4">CGPA: {profileData.cgpa}</Badge>
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
                <BookOpen className="w-4 h-4" />
                <span>{profileData.rollNumber}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic & Personal Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Academic & Personal Details</CardTitle>
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
                <Label htmlFor="year">Current Semester</Label>
                <Select value={profileData.year} onValueChange={(value) => setProfileData({...profileData, year: value})} disabled={!isEditing}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Semester">1st Semester</SelectItem>
                    <SelectItem value="2nd Semester">2nd Semester</SelectItem>
                    <SelectItem value="3rd Semester">3rd Semester</SelectItem>
                    <SelectItem value="4th Semester">4th Semester</SelectItem>
                    <SelectItem value="5th Semester">5th Semester</SelectItem>
                    <SelectItem value="6th Semester">6th Semester</SelectItem>
                    <SelectItem value="7th Semester">7th Semester</SelectItem>
                    <SelectItem value="8th Semester">8th Semester</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="cgpa">CGPA</Label>
                <Input
                  id="cgpa"
                  value={profileData.cgpa}
                  onChange={(e) => setProfileData({...profileData, cgpa: e.target.value})}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
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

            <div>
              <Label htmlFor="careerGoals">Career Goals</Label>
              <Input
                id="careerGoals"
                value={profileData.careerGoals}
                onChange={(e) => setProfileData({...profileData, careerGoals: e.target.value})}
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

        {/* Skills & Interests */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Skills, Interests & Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Technical Skills</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label>Interests</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.interests.map((interest, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800">{interest}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Label>Projects</Label>
              <ul className="mt-2 space-y-2">
                {profileData.projects.map((project, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{project}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Label>Achievements</Label>
              <ul className="mt-2 space-y-2">
                {profileData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-500" />
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