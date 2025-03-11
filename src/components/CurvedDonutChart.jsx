import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ConvexConcaveOnTopOfSingleBlueSlice = () => {
  const data = {
    datasets: [
      {
        data: [50, 50], // Two equal slices
        backgroundColor: ['#FF6316', '#302691'], // Red for convex, blue for concave
        borderWidth: 0, // Remove borders between slices
        cutout: '65%', // Make it a ring
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Remove default border
        borderColor: 'transparent', // Ensure borders are transparent
        hoverOffset: 4,
        // Custom logic for styling each slice
        borderRadius: (ctx) => {
          const index = ctx.index;
          
          // Convex slice (larger slice) - outward curve
          if (index === 0) {
            return 40; // Convex slice will have a larger radius
          } else {
            // Concave slice (smaller slice) - inward curve
            return -40; // Make concave slice slightly smaller
          }
        },
      },
    },
    rotation: -Math.PI / 2, // Start slice from top
    cutoutPercentage: 70, // Control inner radius
  };

  return (
    <div className='items-center ' style={{ position: 'relative', width: '150%', minWidth:'145px', height: '160px', justifyContent:'center' }}>
      {/* Bottom Donut with blue slice */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          zIndex: 1, // Ensure the blue donut is on the bottom
        }}
      >
        <Doughnut
          data={{
            datasets: [
              {
                data: [100], // Only one slice
                backgroundColor: ['#302691'], // Blue color for bottom donut
                borderWidth: 0, // No border
                cutout: '65%', // Make it a ring
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              tooltip: {
                enabled: true,
              },
            },
            rotation: -Math.PI / 2, // Start slice from top
            cutoutPercentage: 70, // Control inner radius
          }}
        />
      </div>

      {/* Top Donut with convex-concave effect */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          zIndex: 2, // Ensure the convex-concave donut is on top
        }}
      >
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ConvexConcaveOnTopOfSingleBlueSlice;
