
import React from 'react';

interface FormInputProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  name: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  name,
}) => {
  const baseInputClasses = 'mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1';
  const normalBorder = 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500';
  const errorBorder = 'border-red-500 focus:border-red-500 focus:ring-red-500';

  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseInputClasses} ${error ? errorBorder : normalBorder}`}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormInput;
