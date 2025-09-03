
import React from 'react';

// Defines the structure for a column in the Table component
export interface ColumnDef<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  // Optional custom render function for a cell
  cell?: (item: T) => React.ReactNode;
}

// Defines the mock user data structure for the demo
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Editor';
  status: 'Active' | 'Inactive';
}
