import React, { useEffect, useRef } from 'react';
import { YearlyData } from '../types/calculator';

interface ResultsChartProps {
  data: YearlyData[];
}

const ResultsChart: React.FC<ResultsChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || data.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Chart dimensions
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    // Find max value for scaling
    const maxValue = Math.max(...data.map(item => item.value));
    
    // Scale values
    const scaleY = (value: number) => {
      return chartHeight - (value / maxValue) * chartHeight + padding;
    };

    // Draw grid lines
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartHeight / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.stroke();
      
      // Labels for y-axis
      const value = Math.round((1 - i / 4) * maxValue);
      ctx.fillStyle = '#6b7280';
      ctx.font = '10px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(value.toLocaleString(), padding - 5, y + 3);
    }

    // Draw axes
    ctx.strokeStyle = '#9ca3af';
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    // Draw investment area
    ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
    ctx.beginPath();
    ctx.moveTo(padding, scaleY(0));
    
    // X points for each year
    const xPoints = data.map((_, index) => {
      return padding + (index / (data.length - 1)) * chartWidth;
    });

    data.forEach((item, index) => {
      ctx.lineTo(xPoints[index], scaleY(item.investment));
    });
    
    ctx.lineTo(xPoints[data.length - 1], scaleY(0));
    ctx.closePath();
    ctx.fill();

    // Draw investment line
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    data.forEach((item, index) => {
      const x = xPoints[index];
      const y = scaleY(item.investment);
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw value area
    ctx.fillStyle = 'rgba(5, 150, 105, 0.1)';
    ctx.beginPath();
    ctx.moveTo(padding, scaleY(0));
    
    data.forEach((item, index) => {
      ctx.lineTo(xPoints[index], scaleY(item.value));
    });
    
    ctx.lineTo(xPoints[data.length - 1], scaleY(0));
    ctx.closePath();
    ctx.fill();

    // Draw value line
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 2;
    ctx.beginPath();
    data.forEach((item, index) => {
      const x = xPoints[index];
      const y = scaleY(item.value);
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw year labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    
    // Only show some years to avoid overcrowding
    const step = Math.max(1, Math.floor(data.length / 5));
    for (let i = 0; i < data.length; i += step) {
      const x = xPoints[i];
      ctx.fillText(`Y${data[i].year}`, x, canvas.height - padding + 15);
    }

    // Draw legend
    const legendX = canvas.width - padding - 100;
    const legendY = padding + 20;
    
    // Investment legend
    ctx.fillStyle = '#4f46e5';
    ctx.fillRect(legendX, legendY, 15, 5);
    ctx.fillStyle = '#1f2937';
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Investment', legendX + 20, legendY + 5);
    
    // Returns legend
    ctx.fillStyle = '#059669';
    ctx.fillRect(legendX, legendY + 15, 15, 5);
    ctx.fillStyle = '#1f2937';
    ctx.fillText('Growth', legendX + 20, legendY + 20);

  }, [data]);

  return (
    <canvas 
      ref={canvasRef} 
      width="500" 
      height="250" 
      className="w-full h-full"
    ></canvas>
  );
};

export default ResultsChart;