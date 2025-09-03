
import React, { useState, useMemo } from 'react';
import Button from './components/Button';
import FormInput from './components/FormInput';
import Modal from './components/Modal';
import Table from './components/Table';
import type { ColumnDef, User } from './types';

// Mock data for the table component
const mockUsers: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', status: 'Inactive' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'User', status: 'Active' },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'User', status: 'Inactive' },
];

const App: React.FC = () => {
  // State for the Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // State for the Form
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    // Clear error on change
    setFormErrors(prevState => ({ ...prevState, [name]: '' }));
  };

  const validateForm = (): boolean => {
    let errors = { email: '', password: '' };
    let isValid = true;

    if (!formState.email) {
      errors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Email address is invalid.';
      isValid = false;
    }

    if (!formState.password) {
      errors.password = 'Password is required.';
      isValid = false;
    } else if (formState.password.length < 8) {
      errors.password = 'Password must be at least 8 characters.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Form Submitted!\nEmail: ${formState.email}`);
      // Reset form
      setFormState({ email: '', password: '' });
      setFormErrors({ email: '', password: '' });
    }
  };

  const handleRowClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  
  // Define columns for the Table
  const columns: ColumnDef<User>[] = useMemo(() => [
    { key: 'id', header: 'ID', sortable: true },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'role', header: 'Role', sortable: true },
    { 
      key: 'status', 
      header: 'Status', 
      sortable: true,
      cell: (user) => (
        <span className={`px-2 py-1 font-semibold leading-tight rounded-full text-xs ${
          user.status === 'Active' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {user.status}
        </span>
      )
    },
  ], []);

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 p-4 sm:p-6 lg:p-8">
      <main className="max-w-7xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Reusable Component Library
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A showcase of clean, reusable, and well-structured React components.
          </p>
        </header>

        {/* Button Component Showcase */}
        <section className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Button Component</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button label="Primary" variant="primary" onClick={() => alert('Primary Clicked')} />
            <Button label="Secondary" variant="secondary" />
            <Button label="Outline" variant="outline" />
            <Button label="Danger" variant="danger" />
            <Button label="Disabled" variant="primary" disabled />
          </div>
        </section>

        {/* Form and Modal Showcase */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Form & Validation</h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formState.email}
                onChange={handleInputChange}
                error={formErrors.email}
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formState.password}
                onChange={handleInputChange}
                error={formErrors.password}
              />
              <div className="flex items-center justify-between">
                <Button label="Open Modal" variant="secondary" onClick={() => setIsModalOpen(true)} />
                <Button label="Sign In" type="submit" variant="primary" />
              </div>
            </form>
          </div>
           <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Modal Showcase</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">Click the "Open Modal" button in the form or click a table row to see it in action.</p>
                <Button label="Launch Demo Modal" variant="outline" onClick={() => { setSelectedUser(null); setIsModalOpen(true); }} />
            </div>
           </div>
        </section>

        {/* Table Component Showcase */}
        <section className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Sortable Table / Data Grid</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">Click on a column header to sort. Click on a row to view details in a modal.</p>
          <Table<User> columns={columns} data={mockUsers} onRowClick={handleRowClick} />
        </section>

      </main>

      {/* Modal instance */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedUser ? "User Details" : "Demo Modal"}
      >
        {selectedUser ? (
          <div className="space-y-2">
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
          </div>
        ) : (
          <p>This is a reusable modal component. You can put any content you want inside here. It supports closing via the 'X' button, the escape key, or by clicking the background overlay.</p>
        )}
        <div className="mt-6 flex justify-end">
           <Button label="Close" variant="primary" onClick={() => setIsModalOpen(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default App;
