
import React, { useState } from 'react';
import { MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Stop {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

interface Route {
  id: string;
  name: string;
  description: string;
  color: string;
  fare: number;
  operatingHours: string;
  stops: Stop[];
}

interface RouteCardProps {
  route: Route;
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: route.color }}
            />
            <div>
              <CardTitle className="text-lg">{route.name}</CardTitle>
              <CardDescription>{route.description}</CardDescription>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="secondary">Rp {route.fare.toLocaleString()}</Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{route.operatingHours}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{route.stops.length} halte</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1"
          >
            <span>Detail</span>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>

        {isExpanded && (
          <div className="mt-4 border-t pt-4">
            <h4 className="font-medium mb-2">Halte yang Dilalui:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {route.stops.map((stop, index) => (
                <div key={stop.id} className="flex items-center space-x-2 text-sm">
                  <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {index + 1}
                  </span>
                  <span>{stop.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RouteCard;
