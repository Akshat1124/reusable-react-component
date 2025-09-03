# React Reusable Component Library

A modern, well-structured collection of reusable React components built with TypeScript and Tailwind CSS. This library provides clean, accessible, and highly customizable components for building modern web applications.

## 🚀 Features

- **TypeScript Support** - Fully typed components with comprehensive interfaces
- **Accessible Design** - Built with accessibility best practices
- **Dark Mode Ready** - Components support both light and dark themes
- **Responsive** - Mobile-first responsive design
- **Zero Dependencies** - Pure React components with no external dependencies
- **Modern Styling** - Clean, modern design with Tailwind CSS

## 🛠️ Project Setup

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Akshat1124/reusable-react-component.git
   cd reusable-react-component
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📦 Dependencies

### Production Dependencies
- **react** (^19.1.1) - React library for building user interfaces
- **react-dom** (^19.1.1) - React DOM renderer

### Development Dependencies
- **@types/node** (^22.14.0) - TypeScript definitions for Node.js
- **typescript** (~5.8.2) - TypeScript language support
- **vite** (^6.2.0) - Fast build tool and development server

## 🧩 Components

### Button Component

A versatile button component with multiple variants and states.

**Features:**
- Multiple variants: primary, secondary, outline, danger
- Disabled state support
- Custom click handlers
- TypeScript interface

**Usage:**
```jsx
import Button from './components/Button';

// Basic usage
<Button label="Click me" onClick={() => console.log('Clicked!')} />

// Different variants
<Button label="Primary" variant="primary" />
<Button label="Secondary" variant="secondary" />
<Button label="Outline" variant="outline" />
<Button label="Danger" variant="danger" />

// Disabled state
<Button label="Disabled" variant="primary" disabled />
```

**Props:**
```typescript
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  className?: string;
}
```

### FormInput Component

A form input component with validation and error handling.

**Features:**
- Built-in validation display
- Error state management
- Dark mode support
- Accessible labels and IDs

**Usage:**
```jsx
import FormInput from './components/FormInput';

const [email, setEmail] = useState('');
const [error, setError] = useState('');

<FormInput
  label="Email Address"
  name="email"
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={error}
/>
```

**Props:**
```typescript
interface FormInputProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  name: string;
}
```

### Modal Component

An accessible modal component with smooth animations.

**Features:**
- Escape key handling
- Backdrop click to close
- Body scroll lock
- Smooth fade-in animation
- Accessible ARIA attributes

**Usage:**
```jsx
import Modal from './components/Modal';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  <p>Modal content goes here...</p>
</Modal>
```

**Props:**
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
```

### Table Component

A generic, sortable data table component.

**Features:**
- Generic TypeScript support
- Column sorting
- Row click handlers
- Responsive design
- Custom cell renderers

**Usage:**
```jsx
import Table from './components/Table';
import type { ColumnDef } from './types';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: ColumnDef<User>[] = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { 
    key: 'role', 
    header: 'Role', 
    sortable: true,
    cell: (user) => <span className="font-bold">{user.role}</span>
  },
];

const data: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  // ... more data
];

<Table 
  columns={columns} 
  data={data} 
  onRowClick={(user) => console.log(user)} 
/>
```

**Props:**
```typescript
interface TableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

interface ColumnDef<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  cell?: (item: T) => React.ReactNode;
}
```

## 🎨 Styling

This library uses Tailwind CSS for styling. The components are designed to work seamlessly with Tailwind's utility classes and support both light and dark themes out of the box.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Demo

Visit the live demo to see all components in action and interact with their features.
