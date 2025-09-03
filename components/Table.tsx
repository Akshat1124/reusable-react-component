
import React, { useState, useMemo } from 'react';
import type { ColumnDef } from '../types';
import SortIcon from './icons/SortIcon';

interface TableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

type SortConfig<T> = {
  key: keyof T | string;
  direction: 'ascending' | 'descending';
} | null;

const Table = <T extends { id: any },>({ columns, data, onRowClick }: TableProps<T>): React.ReactElement => {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>(null);

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof T];
        const bValue = b[sortConfig.key as keyof T];
        
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key: keyof T | string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              {columns.map((column) => (
                <th key={String(column.key)} className="px-4 py-3">
                  {column.sortable ? (
                    <button
                      type="button"
                      onClick={() => requestSort(column.key)}
                      className="flex items-center focus:outline-none group"
                    >
                      {column.header}
                      <SortIcon direction={sortConfig?.key === column.key ? sortConfig.direction : null} />
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {sortedData.map((item) => (
              <tr
                key={item.id}
                className={`text-gray-700 dark:text-gray-400 ${onRowClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900' : ''}`}
                onClick={() => onRowClick?.(item)}
              >
                {columns.map((column) => (
                  <td key={`${item.id}-${String(column.key)}`} className="px-4 py-3 text-sm">
                    {column.cell ? column.cell(item) : (item[column.key as keyof T] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
