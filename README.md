
# Reusable React Component

A simple and extensible template for building reusable React components or libraries using TypeScript and Vite.

---

## Features

- **TypeScript** for type safety
- **Vite** for fast development and build tooling
- **Component-centric structure** (`/components` directory)
- Ready for **npm publishing**
- Easily customizable and extendable

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Akshat1124/reusable-react-component.git
cd reusable-react-component
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project

```bash
npm run dev
```
This will start the development server using Vite.

---

## Project Structure

```
/
├── components/      # Place your reusable components here
├── App.tsx         # Example usage of your components
├── index.tsx       # Entry point
├── package.json    # Project metadata & dependencies
├── tsconfig.json   # TypeScript configuration
├── vite.config.ts  # Vite config
├── types.ts        # Custom type definitions
└── README.md
```

---

## Usage

To use your reusable component in another project:

1. Build the component/library:
    ```bash
    npm run build
    ```
2. Publish to npm (optional):
    ```bash
    npm publish
    ```
3. Or, use it locally via `npm link` or direct import.

---

## Customization

- Add your components in the `components/` directory.
- Expose components via the `index.tsx` file for easier imports.

---

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build the project for production
- `npm run preview` — Preview the production build

---

## License

This project is licensed under the MIT License.
