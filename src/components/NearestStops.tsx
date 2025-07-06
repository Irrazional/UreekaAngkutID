
import React, { useMemo } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { angkotRoutes } from '@/data/angkotData';

interface Stop {
  id: string;
  name: string;
  lat: number;
  lng: number;
  routeName: string;
  routeColor: string;
}

interface NearestStopsProps {
  userLocation: { lat: number; lng: number } | null;
}

const NearestStops: React.FC<NearestStopsProps> = ({ userLocation }) => {
  const nearestStops = useMemo(() => {
    if (!userLocation) return [];

    const allStops: Stop[] = [];
    angkotRoutes.forEach(route => {
      route.stops.forEach(stop => {
        allStops.push({
          ...stop,
          routeName: route.name,
          routeColor: route.color
        });
      });
    });

    // Calculate distance and sort by nearest
    const stopsWithDistance = allStops.map(stop => {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        stop.lat,
        stop.lng
      );
      return { ...stop, distance };
    });

    return stopsWithDistance
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5); // Get 5 nearest stops
  }, [userLocation]);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Navigation className="h-5 w-5" />
          <span>Halte Terdekat</span>
        </CardTitle>
        <CardDescription>
          {userLocation ? 'Berdasarkan lokasi Anda saat ini' : 'Aktifkan lokasi untuk melihat halte terdekat'}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {!userLocation ? (
          <div className="text-center py-8 text-gray-500">
            <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Lokasi tidak tersedia</p>
          </div>
        ) : (
          <div className="space-y-3">
            {nearestStops.map((stop) => (
              <div key={`${stop.id}-${stop.routeName}`} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div 
                  className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: stop.routeColor }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm truncate">{stop.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {stop.distance.toFixed(1)} km
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600">{stop.routeName}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NearestStops;
