import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from './ui/alert-dialog';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterSuccess: (userData: any) => void;
}

export function RegisterModal({ isOpen, onClose, onRegisterSuccess }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
    btechStartYear: '',
    btechEndYear: '',
    phoneNumber: '',
    // Student specific fields
    currentSem: '',
    cgpa: '',
    branch: '',
    // Alumni specific fields
    currentOccupation: '',
    location: '',
    graduatedYear: '',
    skills: '',
    bio: '',
    // Faculty specific fields
    department: ''
  });
  const [error, setError] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^\d{2}pa\d{1}[a-z]\d{2}[a-z]\d+@vishnu\.edu\.in$/i;
    if (!emailRegex.test(email)) {
      return false;
    }
    const collegeCode = email.substring(2, 4);
    return collegeCode.toLowerCase() === 'pa';
  };

  const handleRegister = () => {
    setError('');

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword || !formData.userType || !formData.phoneNumber) {
      setError('Please fill in all required fields');
      return;
    }

    // User type specific validation
    if (formData.userType === 'student') {
      if (!formData.currentSem || !formData.cgpa || !formData.branch) {
        setError('Please fill in all student-specific fields');
        return;
      }
    } else if (formData.userType === 'alumni') {
      if (!formData.currentOccupation || !formData.location || !formData.graduatedYear || !formData.skills || !formData.bio) {
        setError('Please fill in all alumni-specific fields');
        return;
      }
    } else if (formData.userType === 'faculty') {
      if (!formData.department) {
        setError('Please fill in department field');
        return;
      }
    }

    if (!validateEmail(formData.email)) {
      setError('Invalid email format. Please use the format: XXpaXXXXXX@vishnu.edu.in');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Show success dialog
    setShowSuccessDialog(true);
  };

  const handleSuccessConfirm = () => {
    setShowSuccessDialog(false);
    // Pass user data to parent component
    onRegisterSuccess(formData);
    const resetForm = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: '',
      btechStartYear: '',
      btechEndYear: '',
      phoneNumber: '',
      currentSem: '',
      cgpa: '',
      branch: '',
      currentOccupation: '',
      location: '',
      graduatedYear: '',
      skills: '',
      bio: '',
      department: ''
    };
    setFormData(resetForm);
    onClose();
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);
  
  // Generate end years based on start year (4 years from start year)
  const getEndYears = () => {
    if (!formData.btechStartYear) return [];
    const startYear = parseInt(formData.btechStartYear);
    return Array.from({ length: 4 }, (_, i) => startYear + i + 1);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Register for Alumni Portal</DialogTitle>
          </DialogHeader>
          
          <div className="p-6 space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your full name"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">College Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="XXpaXXXXXX@vishnu.edu.in"
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter password"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm password"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="userType">User Type *</Label>
              <Select value={formData.userType} onValueChange={(value) => setFormData({ ...formData, userType: value })}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="alumni">Alumni</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number *</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="Enter your phone number"
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="btechStartYear">B.Tech Start Year</Label>
                <Select value={formData.btechStartYear} onValueChange={(value) => setFormData({ ...formData, btechStartYear: value, btechEndYear: '' })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="btechEndYear">B.Tech End Year</Label>
                <Select 
                  value={formData.btechEndYear} 
                  onValueChange={(value) => setFormData({ ...formData, btechEndYear: value })}
                  disabled={!formData.btechStartYear}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder={formData.btechStartYear ? "Select year" : "Select start year first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {getEndYears().map((year) => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Student-specific fields */}
            {formData.userType === 'student' && (
              <div className="space-y-4 border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-900">Student Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentSem">Current Semester *</Label>
                    <Select value={formData.currentSem} onValueChange={(value) => setFormData({ ...formData, currentSem: value })}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8].map((sem) => (
                          <SelectItem key={sem} value={sem.toString()}>Semester {sem}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="cgpa">CGPA *</Label>
                    <Input
                      id="cgpa"
                      type="number"
                      step="0.01"
                      min="0"
                      max="10"
                      value={formData.cgpa}
                      onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
                      placeholder="Enter your CGPA"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="branch">Branch *</Label>
                  <Select value={formData.branch} onValueChange={(value) => setFormData({ ...formData, branch: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">Computer Science Engineering</SelectItem>
                      <SelectItem value="ece">Electronics and Communication Engineering</SelectItem>
                      <SelectItem value="eee">Electrical and Electronics Engineering</SelectItem>
                      <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                      <SelectItem value="civil">Civil Engineering</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Alumni-specific fields */}
            {formData.userType === 'alumni' && (
              <div className="space-y-4 border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-900">Alumni Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentOccupation">Current Occupation *</Label>
                    <Input
                      id="currentOccupation"
                      value={formData.currentOccupation}
                      onChange={(e) => setFormData({ ...formData, currentOccupation: e.target.value })}
                      placeholder="Enter your current occupation"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Enter your location"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="graduatedYear">Graduated Year *</Label>
                  <Select value={formData.graduatedYear} onValueChange={(value) => setFormData({ ...formData, graduatedYear: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select graduation year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="skills">Skills *</Label>
                  <Input
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="Enter your skills (comma separated)"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="bio">Bio *</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="Tell us about yourself"
                    rows={3}
                    className="mt-1"
                  />
                </div>
              </div>
            )}

            {/* Faculty-specific fields */}
            {formData.userType === 'faculty' && (
              <div className="space-y-4 border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-900">Faculty Information</h3>
                <div>
                  <Label htmlFor="department">Department *</Label>
                  <Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">Computer Science Engineering</SelectItem>
                      <SelectItem value="ece">Electronics and Communication Engineering</SelectItem>
                      <SelectItem value="eee">Electrical and Electronics Engineering</SelectItem>
                      <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                      <SelectItem value="civil">Civil Engineering</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            <Button onClick={handleRegister} className="w-full">
              Register
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Registration Successful!</AlertDialogTitle>
            <AlertDialogDescription>
              Your account has been created successfully. You can now login to access the alumni portal.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleSuccessConfirm}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}