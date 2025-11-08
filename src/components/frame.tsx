import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';

interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Frame: React.FC<FrameProps> = ({ children, ...props }) => {
  const [checkedItems, setCheckedItems] = React.useState<Record<string, boolean>>({});

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" {...props}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Task Management</h1>
          <Button variant="outline">Sign Out</Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md hidden md:block">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  Tasks
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Task List</h2>
              
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Checkbox 
                      id={`task-${item}`}
                      checked={checkedItems[`task-${item}`] || false}
                      onCheckedChange={() => handleCheckboxChange(`task-${item}`)}
                    />
                    <label 
                      htmlFor={`task-${item}`} 
                      className={`flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        checkedItems[`task-${item}`] ? 'line-through text-gray-500' : ''
                      }`}
                    >
                      Task {item} description goes here
                    </label>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Completed Tasks</h3>
                <Button variant="outline">Clear All</Button>
              </div>
              
              <ScrollArea className="h-40 mt-4">
                <div className="space-y-2">
                  {[6, 7, 8].map((item) => (
                    <div key={item} className="flex items-center space-x-3 p-2 border rounded">
                      <Checkbox 
                        id={`completed-task-${item}`}
                        defaultChecked
                        disabled
                      />
                      <label 
                        htmlFor={`completed-task-${item}`} 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 line-through text-gray-500"
                      >
                        Completed task {item}
                      </label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
            
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};