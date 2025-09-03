
import React from 'react';

interface SortIconProps {
  direction?: 'ascending' | 'descending' | null;
}

const SortIcon: React.FC<SortIconProps> = ({ direction }) => {
  if (direction === 'ascending') {
    return (
      <svg className="w-4 h-4 inline-block ml-1 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    );
  }
  if (direction === 'descending') {
    return (
      <svg className="w-4 h-4 inline-block ml-1 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 inline-block ml-1 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
    </svg>
  );
};

export default SortIcon;
