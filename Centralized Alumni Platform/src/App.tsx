import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { AlumniNavigation } from './components/alumni/AlumniNavigation';
import { FacultyNavigation } from './components/faculty/FacultyNavigation';
import { StudentNavigation } from './components/student/StudentNavigation';

interface User {
  type: 'alumni' | 'faculty' | 'student';
  email: string;
  fullName?: string;
  userData?: any;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<any[]>([]);

  const handleAuthSuccess = (userType: 'alumni' | 'faculty' | 'student', email: string) => {
    // Find registered user data if exists
    const userData = registeredUsers.find(u => u.email === email && u.userType === userType);
    setUser({ 
      type: userType, 
      email,
      fullName: userData?.fullName || email.split('@')[0],
      userData
    });
  };

  const handleRegistrationSuccess = (userData: any) => {
    setRegisteredUsers(prev => [...prev, userData]);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // If user is not logged in, show landing page
  if (!user) {
    return <LandingPage onAuthSuccess={handleAuthSuccess} onRegistrationSuccess={handleRegistrationSuccess} />;
  }

  // Show appropriate dashboard based on user type
  switch (user.type) {
    case 'alumni':
      return <AlumniNavigation userEmail={user.email} userName={user.fullName} userData={user.userData} onLogout={handleLogout} />;
    case 'faculty':
      return <FacultyNavigation userEmail={user.email} userName={user.fullName} userData={user.userData} onLogout={handleLogout} />;
    case 'student':
      return <StudentNavigation userEmail={user.email} userName={user.fullName} userData={user.userData} onLogout={handleLogout} />;
    default:
      return <LandingPage onAuthSuccess={handleAuthSuccess} onRegistrationSuccess={handleRegistrationSuccess} />;
  }
}