import React from 'react';

interface RangeInputProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const RangeInput: React.FC<RangeInputProps> = ({
  label,
  min,
  max,
  step,
  value,
  onChange,
  prefix,
  suffix,
  className = '',
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`${className}`}>
      <div className="flex justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="text-sm font-medium text-indigo-900">
          {prefix && <span>{prefix}</span>}
          {value.toLocaleString()}
          {suffix && <span>{suffix}</span>}
        </div>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-900"
          style={{
            background: `linear-gradient(to right, #1E3A8A 0%, #1E3A8A ${percentage}%, #E5E7EB ${percentage}%, #E5E7EB 100%)`,
          }}
        />
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>
          {prefix && <span>{prefix}</span>}
          {min.toLocaleString()}
          {suffix && <span>{suffix}</span>}
        </span>
        <span>
          {prefix && <span>{prefix}</span>}
          {max.toLocaleString()}
          {suffix && <span>{suffix}</span>}
        </span>
      </div>
    </div>
  );
};

export default RangeInput;