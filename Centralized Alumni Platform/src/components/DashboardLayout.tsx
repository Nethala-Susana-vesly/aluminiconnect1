import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  userType: 'alumni' | 'faculty' | 'student';
  userEmail: string;
  onLogout: () => void;
  children: React.ReactNode;
}

export function DashboardLayout({ userType, userEmail, onLogout, children }: DashboardLayoutProps) {
  const getUserName = (email: string) => {
    // Extract name from email or use a default
    return email.split('@')[0];
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header 
        showAuthButtons={false}
        userName={getUserName(userEmail)}
        onLogoutClick={onLogout}
      />
      
      <div className="flex-1 flex overflow-hidden">
        {children}
      </div>
    </div>
  );
}