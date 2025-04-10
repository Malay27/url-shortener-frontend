# URL Shortening Service Frontend

This is the **frontend** for the **URL Shortening Service**, built with **React**, **TypeScript**, and **Vite**. The application allows users to shorten long URLs into concise, shareable links. It communicates with a backend service to generate and retrieve shortened URLs.

---

## Features

- Paste long URLs and generate shortened links.
- Copy shortened links to the clipboard with a single click.
- Responsive and user-friendly UI.
- Error handling for invalid URLs or backend issues.
- Built with **React**, **TypeScript**, and **Material-UI** for a modern and clean design.

---

## Tech Stack

- **Frontend**: React, TypeScript, Material-UI
- **Build Tool**: Vite
- **Styling**: Material-UI with custom styles
- **State Management**: React Hooks
- **Notifications**: React-Toastify
- **Clipboard Functionality**: Custom Copy-to-Clipboard component

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Malay27/url-shortener-frontend.git
cd url-shortening-service-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Replace `http://localhost:5000` with the URL of your backend service.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx       # Header component with logo
│   ├── UrlShortenForm.tsx # Form for submitting URLs
│   ├── UrlResult.tsx    # Displays the shortened URL
│   └── CopyToClipboard.tsx # Clipboard functionality
├── pages/               # Page components
│   └── HomePage.tsx     # Main page of the app
├── services/            # API service for backend communication
│   └── urlService.ts    # Axios service for shortening URLs
├── styles/              # Custom Material-UI styles
├── App.tsx              # Main app component
├── main.tsx             # Entry point for the app
└── index.css            # Global styles
```

---

## Usage

1. Open the app in your browser.
2. Paste a long URL into the input field.
3. Click the "Shorten URL" button.
4. Copy the generated shortened URL or open it in a new tab.

---

## Deployment

To build the app for production:

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` folder. You can deploy these files to any static hosting service (e.g., Netlify, Vercel, or AWS S3).

---

## Environment Variables

| Variable          | Description                          | Example                  |
|--------------------|--------------------------------------|--------------------------|
| `VITE_BACKEND_URL` | The base URL of the backend service. | `http://localhost:5000` |

---

## Known Issues

- Ensure the backend service is running and accessible at the URL specified in `VITE_BACKEND_URL`.
- If the shortened URL is not displayed, check the browser console for errors.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Material-UI](https://mui.com/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/)