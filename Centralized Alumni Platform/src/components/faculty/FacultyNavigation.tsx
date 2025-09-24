import { useState } from 'react';
import { DashboardLayout } from '../DashboardLayout';
import { Sidebar } from '../Sidebar';
import { FacultyDashboard } from './FacultyDashboard';
import { AlumniDirectory } from './AlumniDirectory';
import { SendInvitations } from './SendInvitations';
import { CreateSession } from './CreateSession';
import { StudentInteraction } from './StudentInteraction';
import { ReportsAnalytics } from './ReportsAnalytics';

interface FacultyNavigationProps {
  userEmail: string;
  onLogout: () => void;
}

export function FacultyNavigation({ userEmail, onLogout }: FacultyNavigationProps) {
  const [activeNav, setActiveNav] = useState('dashboard');

  const renderContent = () => {
    switch (activeNav) {
      case 'dashboard':
        return <FacultyDashboard />;
      case 'alumni-directory':
        return <AlumniDirectory />;
      case 'send-invitations':
        return <SendInvitations />;
      case 'create-session':
        return <CreateSession />;
      case 'student-interaction':
        return <StudentInteraction />;
      case 'reports':
        return <ReportsAnalytics />;
      default:
        return <FacultyDashboard />;
    }
  };

  return (
    <DashboardLayout 
      userType="faculty" 
      userEmail={userEmail} 
      onLogout={onLogout}
    >
      <Sidebar
        userType="faculty"
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