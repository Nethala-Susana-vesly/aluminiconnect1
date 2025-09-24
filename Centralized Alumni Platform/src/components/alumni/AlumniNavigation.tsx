import { useState } from 'react';
import { DashboardLayout } from '../DashboardLayout';
import { Sidebar } from '../Sidebar';
import { AlumniDashboard } from './AlumniDashboard';
import { AlumniProfile } from './AlumniProfile';
import { CareerUpdates } from './CareerUpdates';
import { SessionsInvitations } from './SessionsInvitations';
import { AlumniNetworking } from './AlumniNetworking';
import { AlumniReferrals } from './AlumniReferrals';

interface AlumniNavigationProps {
  userEmail: string;
  userName?: string;
  userData?: any;
  onLogout: () => void;
}

export function AlumniNavigation({ userEmail, userName, userData, onLogout }: AlumniNavigationProps) {
  const [activeNav, setActiveNav] = useState('dashboard');

  const renderContent = () => {
    switch (activeNav) {
      case 'dashboard':
        return <AlumniDashboard />;
      case 'profile':
        return <AlumniProfile userEmail={userEmail} userName={userName} userData={userData} />;
      case 'career-updates':
        return <CareerUpdates />;
      case 'sessions':
        return <SessionsInvitations />;
      case 'networking':
        return <AlumniNetworking />;
      case 'referrals':
        return <AlumniReferrals />;
      default:
        return <AlumniDashboard />;
    }
  };

  return (
    <DashboardLayout 
      userType="alumni" 
      userEmail={userEmail} 
      onLogout={onLogout}
    >
      <Sidebar
        userType="alumni"
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