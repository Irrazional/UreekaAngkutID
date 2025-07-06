
import React, { useState } from 'react';
import { MapPin, Bus, Search, Map, Navigation, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import RouteCard from '@/components/RouteCard';
import MapPage from './MapPage';
import { angkotRoutes } from '@/data/angkotData';
import AnimatedRouteBackground from '@/components/AnimatedRouteBackground';
import RouteMapVisualization from '@/components/RouteMapVisualization';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [expandedRoutes, setExpandedRoutes] = useState<Record<string, boolean>>({});

  const filteredRoutes = angkotRoutes.filter(route =>
    route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    route.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleRouteDetails = (routeId: string) => {
    setExpandedRoutes(prev => ({
      ...prev,
      [routeId]: !prev[routeId]
    }));
  };

  if (showMap) {
    return <MapPage onClose={() => setShowMap(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NYC Subway-inspired Header */}
      <header className="bg-white border-b-4 border-blue-600 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Transit-style logo */}
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 text-white rounded-full p-3">
                  <Bus className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                    Angkut.ID
                  </h1>
                  <p className="text-sm text-gray-600 font-medium">TANGERANG TRANSIT</p>
                </div>
              </div>
            </div>
            
            {/* NYC-style map button */}
            <Button 
              onClick={() => setShowMap(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-none font-bold text-sm tracking-wide"
            >
              <Map className="h-4 w-4 mr-2" />
              SYSTEM MAP
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Animated Route Background */}
      <div className="relative bg-amber-50 text-gray-900 py-16 overflow-hidden">
        <AnimatedRouteBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            FIND YOUR ROUTE
          </h2>
          <p className="text-xl mb-8 font-medium opacity-90">
            Real-time angkot tracking for Tangerang City
          </p>
          
          {/* Subway-style search bar */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-none shadow-lg">
              <div className="flex items-center p-4">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <Input
                  type="text"
                  placeholder="Search routes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 text-gray-900 text-lg font-medium bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NYC-style status bar */}
      <div className="bg-green-500 text-white py-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-sm font-bold">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>SERVICE RUNNING</span>
            </div>
            <div className="flex items-center space-x-2">
              <Navigation className="h-4 w-4" />
              <span>LIVE TRACKING ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Routes Section with Subway-inspired Design */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">ROUTE DIRECTORY</h3>
            <div className="h-1 w-24 bg-blue-600"></div>
          </div>

          {/* Routes Grid */}
          <div className="grid gap-6">
            {filteredRoutes.map((route, index) => (
              <Card key={route.id} className="border-l-8 border-l-blue-600 shadow-sm hover:shadow-md transition-shadow bg-white rounded-none">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Route number in subway style */}
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg
                        ${index % 4 === 0 ? 'bg-blue-600' : 
                          index % 4 === 1 ? 'bg-green-500' : 
                          index % 4 === 2 ? 'bg-orange-500' : 'bg-red-500'}
                      `}>
                        {route.name.split(' ')[0]}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{route.name}</h4>
                        <p className="text-gray-600 font-medium">{route.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{route.operatingHours}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{route.stops.length} halte</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status indicator and button */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-bold text-green-600">ACTIVE</span>
                      </div>
                      <Button 
                        variant="outline" 
                        className="rounded-none font-bold flex items-center space-x-2"
                        onClick={() => toggleRouteDetails(route.id)}
                      >
                        <span>VIEW DETAILS</span>
                        {expandedRoutes[route.id] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* Expanded route details */}
                  {expandedRoutes[route.id] && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-bold text-gray-900 mb-3 text-lg">ROUTE INFORMATION</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="font-medium">Fare:</span>
                              <span className="font-bold">Rp {route.fare.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Operating Hours:</span>
                              <span>{route.operatingHours}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Total Stops:</span>
                              <span>{route.stops.length} halte</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-3 text-lg">STOPS</h5>
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {route.stops.map((stop, stopIndex) => (
                              <div key={stop.id} className="flex items-center space-x-3 text-sm">
                                <div className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                  {stopIndex + 1}
                                </div>
                                <span className="font-medium">{stop.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <RouteMapVisualization 
                            stops={route.stops} 
                            routeColor={
                              index % 4 === 0 ? '#2563eb' : 
                              index % 4 === 1 ? '#22c55e' : 
                              index % 4 === 2 ? '#f97316' : '#ef4444'
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer with subway colors */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold">ANGKUT.ID</h4>
              <p className="text-gray-400">Tangerang Public Transit Information</p>
            </div>
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-blue-600"></div>
              <div className="w-4 h-4 bg-green-500"></div>
              <div className="w-4 h-4 bg-orange-500"></div>
              <div className="w-4 h-4 bg-red-500"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
