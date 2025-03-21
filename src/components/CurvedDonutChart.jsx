import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

ChartJS.register(ArcElement, Tooltip, Legend);

const ConvexConcaveOnTopOfSingleBlueSlice = () => {
  // Access customerData and loading state from Redux store
  const { customerData, period, loading } = useSelector((state) => state.analytics);

  // If loading is true or customerData is undefined, show a loading message or fallback UI
  if (loading || !customerData) {
    return <div>Loading...</div>; // Replace with a spinner or other loading UI
  }

  // Default data if customerData is unavailable or not structured properly
  const newCustomerCount = customerData.newCustomers?.count || 0;
  const repeatCustomerCount = customerData.repeatCustomers?.count || 0;

  // If both new and repeat customer counts are 0, show a 50-50 distribution
  const data = (newCustomerCount === 0 && repeatCustomerCount === 0) 
    ? [50, 50] 
    : [newCustomerCount, repeatCustomerCount];

  // Swapped colors for top pie chart
  const topPieBackgroundColor = [ '#302691','#FF6316']; // Red for repeat customers, blue for new customers

  const chartData = {
    datasets: [
      {
        data: data,
        backgroundColor: topPieBackgroundColor, // Swap colors for the top pie chart
        borderWidth: 0,
        cutout: '65%',
      },
    ],
  };

  // Conditional bottom donut color
  const bottomDonutColor =(repeatCustomerCount === 0 && newCustomerCount===0 )?'#FF6316': repeatCustomerCount === 0 ? '#302691'  :'#FF6316'; // Blue if repeat count is 0, orange otherwise

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
        borderColor: 'transparent',
        hoverOffset: 4,
        borderRadius: (ctx) => {
          const index = ctx.index;
          return index === 0 ? 40 : -40; // Convex for new customer, concave for repeat
        },
      },
    },
    rotation: -Math.PI / 2,
    cutoutPercentage: 70,
  };

  return (
    <div
      className="items-center"
      style={{
        position: 'relative',
        width: '150%',
        minWidth: '145px',
        height: '160px',
        justifyContent: 'center',
      }}
    >
      {/* Bottom Donut with conditional color */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <Doughnut
          data={{
            datasets: [
              {
                data: [100], // Only one slice
                backgroundColor: [bottomDonutColor], // Conditional color based on repeat customer count
                borderWidth: 0,
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
            rotation: -Math.PI / 2,
            cutoutPercentage: 70,
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
          zIndex: 2,
        }}
      >
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ConvexConcaveOnTopOfSingleBlueSlice;
