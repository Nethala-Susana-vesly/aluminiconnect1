import { 
  LayoutDashboard, 
  User, 
  TrendingUp, 
  Calendar, 
  Network, 
  Users, 
  LogOut,
  Mail,
  Settings,
  BookOpen,
  Award,
  BarChart3,
  UserPlus
} from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  userType: 'alumni' | 'faculty' | 'student';
  activeNav: string;
  onNavClick: (nav: string) => void;
  onLogout: () => void;
}

export function Sidebar({ userType, activeNav, onNavClick, onLogout }: SidebarProps) {
  const getNavigationItems = () => {
    switch (userType) {
      case 'alumni':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'career-updates', label: 'Career Updates', icon: TrendingUp },
          { id: 'sessions', label: 'Sessions & Invitations', icon: Calendar },
          { id: 'networking', label: 'Networking', icon: Network },
          { id: 'referrals', label: 'Referrals', icon: Award },
        ];
      
      case 'faculty':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'alumni-directory', label: 'Alumni Directory', icon: Users },
          { id: 'send-invitations', label: 'Send Invitations', icon: Mail },
          { id: 'create-session', label: 'Create Session', icon: Calendar },
          { id: 'student-interaction', label: 'Student Interaction', icon: UserPlus },
          { id: 'reports', label: 'Reports/Analytics', icon: BarChart3 },
        ];
      
      case 'student':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'alumni-connect', label: 'Alumni Connect', icon: Network },
          { id: 'opportunities', label: 'Opportunities/Referrals', icon: Award },
          { id: 'events', label: 'Events & Sessions', icon: Calendar },
        ];
      
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="font-semibold text-gray-900 capitalize">
          {userType} Portal
        </h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Button
                  variant={activeNav === item.id ? 'secondary' : 'ghost'}
                  className={`w-full justify-start ${
                    activeNav === item.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                  onClick={() => onNavClick(item.id)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
}