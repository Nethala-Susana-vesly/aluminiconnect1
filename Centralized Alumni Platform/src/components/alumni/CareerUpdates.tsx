import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Plus, Briefcase, TrendingUp, Award, Calendar } from 'lucide-react';

export function CareerUpdates() {
  const [showAddUpdate, setShowAddUpdate] = useState(false);
  const [newUpdate, setNewUpdate] = useState({
    type: '',
    title: '',
    company: '',
    description: '',
    date: '',
    achievement: ''
  });

  const careerUpdates = [
    {
      id: 1,
      type: 'job_change',
      title: 'Senior Software Engineer',
      company: 'Tech Innovators Ltd.',
      date: '2024-01-15',
      description: 'Promoted to Senior Software Engineer role, leading a team of 5 developers.',
      achievement: 'Leading cross-functional team'
    },
    {
      id: 2,
      type: 'achievement',
      title: 'AWS Certified Solutions Architect',
      company: 'Amazon Web Services',
      date: '2023-12-10',
      description: 'Successfully obtained AWS Solutions Architect Professional certification.',
      achievement: 'Professional certification'
    },
    {
      id: 3,
      type: 'promotion',
      title: 'Team Lead Promotion',
      company: 'Tech Solutions Inc.',
      date: '2023-10-05',
      description: 'Promoted from Software Engineer to Team Lead position.',
      achievement: 'Leadership role'
    },
    {
      id: 4,
      type: 'project',
      title: 'E-commerce Platform Launch',
      company: 'Tech Solutions Inc.',
      date: '2023-08-20',
      description: 'Successfully launched a new e-commerce platform serving 10,000+ users.',
      achievement: 'Major project delivery'
    }
  ];

  const updateTypes = [
    { value: 'job_change', label: 'Job Change', icon: Briefcase },
    { value: 'promotion', label: 'Promotion', icon: TrendingUp },
    { value: 'achievement', label: 'Achievement', icon: Award },
    { value: 'project', label: 'Project', icon: Calendar }
  ];

  const getUpdateIcon = (type: string) => {
    const updateType = updateTypes.find(t => t.value === type);
    return updateType ? updateType.icon : Briefcase;
  };

  const getUpdateBadgeColor = (type: string) => {
    const colors = {
      job_change: 'bg-blue-100 text-blue-800',
      promotion: 'bg-green-100 text-green-800',
      achievement: 'bg-purple-100 text-purple-800',
      project: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const handleAddUpdate = () => {
    // Here you would typically save to database
    console.log('Adding update:', newUpdate);
    setNewUpdate({
      type: '',
      title: '',
      company: '',
      description: '',
      date: '',
      achievement: ''
    });
    setShowAddUpdate(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Career Updates</h1>
          <p className="text-gray-600">Track and share your professional milestones</p>
        </div>
        <Dialog open={showAddUpdate} onOpenChange={setShowAddUpdate}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Update
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Career Update</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 p-6">
              <div>
                <Label htmlFor="type">Update Type</Label>
                <Select value={newUpdate.type} onValueChange={(value) => setNewUpdate({...newUpdate, type: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select update type" />
                  </SelectTrigger>
                  <SelectContent>
                    {updateTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title/Position</Label>
                  <Input
                    id="title"
                    value={newUpdate.title}
                    onChange={(e) => setNewUpdate({...newUpdate, title: e.target.value})}
                    placeholder="e.g., Senior Software Engineer"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={newUpdate.company}
                    onChange={(e) => setNewUpdate({...newUpdate, company: e.target.value})}
                    placeholder="e.g., Tech Solutions Inc."
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={newUpdate.date}
                  onChange={(e) => setNewUpdate({...newUpdate, date: e.target.value})}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newUpdate.description}
                  onChange={(e) => setNewUpdate({...newUpdate, description: e.target.value})}
                  placeholder="Describe your achievement or role details..."
                  rows={4}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="achievement">Key Achievement</Label>
                <Input
                  id="achievement"
                  value={newUpdate.achievement}
                  onChange={(e) => setNewUpdate({...newUpdate, achievement: e.target.value})}
                  placeholder="e.g., Led team of 10 developers"
                  className="mt-1"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setShowAddUpdate(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddUpdate}>
                  Add Update
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Career Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Career Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {careerUpdates.map((update, index) => {
              const Icon = getUpdateIcon(update.type);
              return (
                <div key={update.id} className="relative">
                  {index !== careerUpdates.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                        <Badge className={getUpdateBadgeColor(update.type)}>
                          {updateTypes.find(t => t.value === update.type)?.label}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-700 font-medium mb-1">{update.company}</p>
                      <p className="text-sm text-gray-500 mb-2">{update.date}</p>
                      <p className="text-gray-600 mb-2">{update.description}</p>
                      
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-700 font-medium">{update.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Career Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Briefcase className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">4</p>
            <p className="text-sm text-gray-600">Career Updates</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">2</p>
            <p className="text-sm text-gray-600">Promotions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">3</p>
            <p className="text-sm text-gray-600">Achievements</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}