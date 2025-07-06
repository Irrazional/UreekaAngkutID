
import React from 'react';
import { X, Navigation, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MapPageProps {
  onClose: () => void;
}

const MapPage = ({ onClose }: MapPageProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-100">
      {/* NYC-style header */}
      <div className="bg-white border-b-4 border-blue-600 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">SYSTEM MAP</h1>
            <div className="flex items-center space-x-2 text-green-600">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-bold">LIVE</span>
            </div>
          </div>
          <Button 
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white rounded-none font-bold px-6"
          >
            <X className="h-4 w-4 mr-2" />
            CLOSE
          </Button>
        </div>
      </div>

      {/* Map container */}
      <div className="relative h-[calc(100vh-80px)]">
        <iframe
          src="https://api.maptiler.com/maps/basic-v2/?key=sQvSAzewMUCezs9LRq9C#13/-6.1783/106.6319"
          className="w-full h-full border-0"
          title="Tangerang Transit Map"
          loading="lazy"
        />

        {/* NYC-style legend */}
        <div className="absolute bottom-6 left-6 bg-white border-4 border-gray-900 p-4 shadow-lg max-w-xs">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">LEGEND</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              <span className="font-medium text-gray-900">Blue Line Routes</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <span className="font-medium text-gray-900">Green Line Routes</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              <span className="font-medium text-gray-900">Orange Line Routes</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <span className="font-medium text-gray-900">Red Line Routes</span>
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 font-bold">
          <div className="flex items-center space-x-2">
            <Navigation className="h-4 w-4" />
            <span>TRACKING ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
