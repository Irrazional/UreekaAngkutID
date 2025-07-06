
import React from 'react';

const AnimatedRouteBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Route 1 - Main Blue Route (like Google Maps primary route) */}
        <path
          d="M100,200 L200,150 L400,180 L600,120 L800,160 L1000,140"
          stroke="#1976d2"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,1000;20,980;0,1000"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
        
        {/* Start point for Route 1 */}
        <circle
          cx="100"
          cy="200"
          r="12"
          fill="#1976d2"
          opacity="0.9"
        >
          <animate
            attributeName="r"
            values="12;16;12"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* End point for Route 1 */}
        <circle
          cx="1000"
          cy="140"
          r="12"
          fill="#1976d2"
          opacity="0.9"
        >
          <animate
            attributeName="r"
            values="12;16;12"
            dur="2s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>

        {/* Route 2 - Alternative Green Route */}
        <path
          d="M150,300 L300,280 L500,320 L700,290 L900,310 L1100,280"
          stroke="#0f9d58"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,1000;15,985;0,1000"
            dur="4s"
            repeatCount="indefinite"
            begin="1s"
          />
        </path>
        
        {/* Start point for Route 2 */}
        <circle
          cx="150"
          cy="300"
          r="10"
          fill="#0f9d58"
          opacity="0.8"
        >
          <animate
            attributeName="r"
            values="10;14;10"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>
        
        {/* End point for Route 2 */}
        <circle
          cx="1100"
          cy="280"
          r="10"
          fill="#0f9d58"
          opacity="0.8"
        >
          <animate
            attributeName="r"
            values="10;14;10"
            dur="2.5s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </circle>

        {/* Route 3 - Short Orange Route */}
        <path
          d="M200,100 L350,80 L500,100 L650,85"
          stroke="#ff9800"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,500;12,488;0,500"
            dur="3.5s"
            repeatCount="indefinite"
            begin="2s"
          />
        </path>
        
        {/* Start point for Route 3 */}
        <circle
          cx="200"
          cy="100"
          r="9"
          fill="#ff9800"
          opacity="0.7"
        >
          <animate
            attributeName="r"
            values="9;13;9"
            dur="2.2s"
            repeatCount="indefinite"
            begin="2s"
          />
        </circle>
        
        {/* End point for Route 3 */}
        <circle
          cx="650"
          cy="85"
          r="9"
          fill="#ff9800"
          opacity="0.7"
        >
          <animate
            attributeName="r"
            values="9;13;9"
            dur="2.2s"
            repeatCount="indefinite"
            begin="3s"
          />
        </circle>

        {/* Route 4 - Purple Curved Route */}
        <path
          d="M50,120 Q250,60 450,120 T850,100"
          stroke="#9c27b0"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,800;10,790;0,800"
            dur="5s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </path>
        
        {/* Start point for Route 4 */}
        <circle
          cx="50"
          cy="120"
          r="8"
          fill="#9c27b0"
          opacity="0.6"
        >
          <animate
            attributeName="r"
            values="8;12;8"
            dur="2.8s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </circle>
        
        {/* End point for Route 4 */}
        <circle
          cx="850"
          cy="100"
          r="8"
          fill="#9c27b0"
          opacity="0.6"
        >
          <animate
            attributeName="r"
            values="8;12;8"
            dur="2.8s"
            repeatCount="indefinite"
            begin="2.5s"
          />
        </circle>

        {/* Animated moving dots along routes */}
        <circle r="4" fill="#1976d2" opacity="0.8">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M100,200 L200,150 L400,180 L600,120 L800,160 L1000,140"
          />
        </circle>
        
        <circle r="3" fill="#0f9d58" opacity="0.7">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M150,300 L300,280 L500,320 L700,290 L900,310 L1100,280"
            begin="2s"
          />
        </circle>
        
        <circle r="3" fill="#ff9800" opacity="0.6">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M200,100 L350,80 L500,100 L650,85"
            begin="4s"
          />
        </circle>
      </svg>
    </div>
  );
};

export default AnimatedRouteBackground;
