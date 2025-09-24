import { useState } from 'react';
import { Button } from './ui/button';
import vishnu_logo from 'figma:asset/d6ee15225c3b42175d78a8a1bb51c614a5e6b83c.png';

interface HeaderProps {
  showAuthButtons?: boolean;
  userName?: string;
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
  onLogoutClick?: () => void;
}

export function Header({ 
  showAuthButtons = true, 
  userName, 
  onLoginClick, 
  onRegisterClick, 
  onLogoutClick 
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img 
              src={vishnu_logo} 
              alt="Vishnu Institute of Technology Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">VISHNU INSTITUTE OF TECHNOLOGY</h1>
              <p className="text-sm text-gray-600">Alumni Management System</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {userName ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {userName}</span>
              <Button onClick={onLogoutClick} variant="outline">
                Logout
              </Button>
            </div>
          ) : showAuthButtons ? (
            <div className="flex space-x-3">
              <Button onClick={onLoginClick} variant="outline">
                Login
              </Button>
              <Button onClick={onRegisterClick}>
                Register
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}