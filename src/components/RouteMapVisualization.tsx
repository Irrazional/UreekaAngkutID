
import React from 'react';

interface Stop {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

interface RouteMapVisualizationProps {
  stops: Stop[];
  routeColor: string;
}

const RouteMapVisualization: React.FC<RouteMapVisualizationProps> = ({ stops, routeColor }) => {
  // Create a simplified map visualization
  const mapWidth = 300;
  const mapHeight = 200;
  
  // Generate dummy coordinates for visualization
  const visualStops = stops.map((stop, index) => {
    const progress = index / Math.max(stops.length - 1, 1);
    // Create a curved path for visual appeal
    const x = 20 + (mapWidth - 40) * progress;
    const y = mapHeight / 2 + Math.sin(progress * Math.PI * 2) * 30;
    
    return {
      ...stop,
      x: Math.max(20, Math.min(mapWidth - 20, x)),
      y: Math.max(20, Math.min(mapHeight - 20, y))
    };
  });

  // Generate path for the route line
  const pathData = visualStops
    .map((stop, index) => `${index === 0 ? 'M' : 'L'} ${stop.x} ${stop.y}`)
    .join(' ');

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <h6 className="font-bold text-gray-900 mb-3 text-sm">ROUTE MAP</h6>
      <div className="relative bg-white border border-gray-200 rounded" style={{ width: mapWidth, height: mapHeight }}>
        <svg width={mapWidth} height={mapHeight} className="absolute inset-0">
          {/* Background grid for map feel */}
          <defs>
            <pattern id="grid" viewBox="0 0 20 20" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Route line */}
          <path
            d={pathData}
            stroke={routeColor}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Start point */}
          {visualStops.length > 0 && (
            <circle
              cx={visualStops[0].x}
              cy={visualStops[0].y}
              r="6"
              fill="#22c55e"
              stroke="white"
              strokeWidth="2"
            />
          )}
          
          {/* End point */}
          {visualStops.length > 1 && (
            <circle
              cx={visualStops[visualStops.length - 1].x}
              cy={visualStops[visualStops.length - 1].y}
              r="6"
              fill="#ef4444"
              stroke="white"
              strokeWidth="2"
            />
          )}
          
          {/* Intermediate stops */}
          {visualStops.slice(1, -1).map((stop, index) => (
            <circle
              key={stop.id}
              cx={stop.x}
              cy={stop.y}
              r="4"
              fill={routeColor}
              stroke="white"
              strokeWidth="2"
            />
          ))}
        </svg>
        
        {/* Legend */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-xs">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Start</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">End</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMapVisualization;
