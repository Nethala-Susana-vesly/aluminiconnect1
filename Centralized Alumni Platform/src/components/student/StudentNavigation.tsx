import { useState } from 'react';
import { DashboardLayout } from '../DashboardLayout';
import { Sidebar } from '../Sidebar';
import { StudentDashboard } from './StudentDashboard';
import { StudentProfile } from './StudentProfile';
import { AlumniConnect } from './AlumniConnect';
import { OpportunitiesReferrals } from './OpportunitiesReferrals';
import { EventsSessions } from './EventsSessions';

interface StudentNavigationProps {
  userEmail: string;
  userName?: string;
  userData?: any;
  onLogout: () => void;
}

export function StudentNavigation({ userEmail, userName, userData, onLogout }: StudentNavigationProps) {
  const [activeNav, setActiveNav] = useState('dashboard');

  const renderContent = () => {
    switch (activeNav) {
      case 'dashboard':
        return <StudentDashboard />;
      case 'profile':
        return <StudentProfile userEmail={userEmail} userName={userName} userData={userData} />;
      case 'alumni-connect':
        return <AlumniConnect />;
      case 'opportunities':
        return <OpportunitiesReferrals />;
      case 'events':
        return <EventsSessions />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <DashboardLayout 
      userType="student" 
      userEmail={userEmail} 
      onLogout={onLogout}
    >
      <Sidebar
        userType="student"
        activeNav={activeNav}
        onNavClick={setActiveNav}
        onLogout={onLogout}
      />
      <main className="flex-1 overflow-y-auto bg-gray-50">
        {renderContent()}
      </main>
    </DashboardLayout>
  );
}