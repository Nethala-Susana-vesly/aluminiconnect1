import { useState } from 'react';
import { Header } from './Header';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Users, Calendar, Network, Award, TrendingUp, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onAuthSuccess: (userType: 'alumni' | 'faculty' | 'student', email: string) => void;
  onRegistrationSuccess: (userData: any) => void;
}

export function LandingPage({ onAuthSuccess }: LandingPageProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'Alumni-Institution Connection',
      description: 'Centralized system connecting alumni with their alma mater for lifelong engagement.'
    },
    {
      icon: TrendingUp,
      title: 'Career Updates',
      description: 'Alumni regularly update their professional status and career milestones on the platform.'
    },
    {
      icon: Calendar,
      title: 'Event Invitations',
      description: 'Institutions invite alumni for sessions, seminars, and mentorship programs.'
    },
    {
      icon: Award,
      title: 'Mentorship & Referrals',
      description: 'Alumni guide students and provide valuable career referrals and opportunities.'
    },
    {
      icon: Network,
      title: 'Peer Networking',
      description: 'Alumni connect and collaborate with fellow alumni for professional growth.'
    },
    {
      icon: MessageSquare,
      title: 'Student Access',
      description: 'Secure student access with institution-provided emails for networking opportunities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onLoginClick={() => setShowLoginModal(true)}
        onRegisterClick={() => setShowRegisterModal(true)}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Platform for Centralized Alumni Data Management
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Connecting alumni, students, and faculty through a unified platform for mentorship, 
                networking, and continuous engagement.
              </p>
              <div className="flex space-x-4">
                <Button 
                  onClick={() => setShowRegisterModal(true)}
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Get Started
                </Button>
                <Button 
                  onClick={() => setShowLoginModal(true)}
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622016579436-14c1844c99ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBhbHVtbmklMjBuZXR3b3JraW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTg1MzM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alumni networking and collaboration"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features of the Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform offers powerful tools for alumni engagement, 
              career development, and institutional connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Potential Impact & Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-purple-600 mb-4">For Students</h3>
                <p className="text-gray-600">
                  Access to mentorship, career guidance, and referrals from experienced alumni, 
                  creating pathways for professional growth and development.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-orange-500 mb-4">For Alumni</h3>
                <p className="text-gray-600">
                  Stay connected with alma mater, give back to the community, and build 
                  professional networks while maintaining institutional bonds.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">For Institutions</h3>
                <p className="text-gray-600">
                  Strengthen reputation, maintain alumni relations, and create a thriving 
                  ecosystem of continuous engagement and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VIT</span>
                </div>
                <span className="font-bold">Alumni Portal</span>
              </div>
              <p className="text-gray-400">
                Connecting generations of learners for a brighter future.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Alumni Directory</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Vishnu Institute of Technology</p>
                <p>Bhimavaram, West Godavari</p>
                <p>Phone: +91 8816 251333</p>
                <p>Email: info@vishnu.edu.in</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vishnu Institute of Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={(userType, email) => {
          setShowLoginModal(false);
          onAuthSuccess(userType, email);
        }}
      />
      
      <RegisterModal 
        isOpen={showRegisterModal} 
        onClose={() => setShowRegisterModal(false)}
        onRegisterSuccess={(userData) => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </div>
  );
}