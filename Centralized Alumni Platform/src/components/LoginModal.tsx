import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Users, BookOpen } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userType: 'alumni' | 'faculty' | 'student', email: string) => void;
}

export function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<'alumni' | 'faculty' | 'student'>('alumni');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string, userType: string) => {
    // Email format: 23pa1a12e7@vishnu.edu.in
    const emailRegex = /^\d{2}pa\d{1}[a-z]\d{2}[a-z]\d+@vishnu\.edu\.in$/i;
    
    if (!emailRegex.test(email)) {
      return false;
    }
    
    // Extract college code (should be 'pa')
    const collegeCode = email.substring(2, 4);
    return collegeCode.toLowerCase() === 'pa';
  };

  const handleLogin = () => {
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email, activeTab)) {
      setError('Invalid email format. Please use the format: XXpaXXXXXX@vishnu.edu.in');
      return;
    }

    // Mock login success
    onLoginSuccess(activeTab, email);
    setEmail('');
    setPassword('');
    onClose();
  };

  const loginPanels = [
    {
      type: 'alumni' as const,
      title: 'Alumni Login',
      icon: GraduationCap,
      color: 'from-purple-600 to-purple-700',
      description: 'Connect with your alma mater'
    },
    {
      type: 'faculty' as const,
      title: 'Faculty Login',
      icon: Users,
      color: 'from-blue-600 to-blue-700',
      description: 'Manage alumni relations'
    },
    {
      type: 'student' as const,
      title: 'Student Login',
      icon: BookOpen,
      color: 'from-orange-500 to-orange-600',
      description: 'Access alumni network'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Login to Alumni Portal</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {loginPanels.map((panel) => (
            <Card 
              key={panel.type}
              className={`cursor-pointer transition-all duration-200 ${
                activeTab === panel.type 
                  ? 'ring-2 ring-blue-500 shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => setActiveTab(panel.type)}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${panel.color} flex items-center justify-center mb-2`}>
                  <panel.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{panel.title}</CardTitle>
                <p className="text-sm text-gray-600">{panel.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Login Form */}
        <div className="border-t pt-6 px-6 pb-6">
          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">College Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="XXpaXXXXXX@vishnu.edu.in"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="mt-1"
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}

              <Button 
                onClick={handleLogin}
                className="w-full"
              >
                Login as {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}