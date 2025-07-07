# Travel Business Portal

A modern travel business portal built with Next.js, React, Firebase, Zustand, and Tailwind CSS. This project allows users to search for flights, explore tour packages, book trips, and manage their travel plans with a clean and responsive UI.

**Live Demo:**  
👉 [https://travel-business-portal-five.vercel.app/](https://travel-business-portal-five.vercel.app/)

## Features

- **Flight Search**: Search and filter flights by location, date, and passenger count.
- **Tour Packages**: Browse curated travel packages with beautiful images and details.
- **Booking System**: Book flights and packages with a step-by-step booking flow.
- **Authentication**: Register and login with Firebase Authentication.
- **State Management**: Uses Zustand for global state (search, booking, user).
- **Responsive Design**: Fully responsive and mobile-friendly.
- **Modern UI**: Built with Tailwind CSS and React components.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Firebase Auth](https://firebase.google.com/docs/auth)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [React DatePicker](https://reactdatepicker.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/travel-business-portal.git
cd travel-business-portal
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable Email/Password authentication.
- Copy your Firebase config and add it to a `.env` file in the root of your project:

```env
# .env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

- In your `/firebase/config.js` use these environment variables:

```js
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
/app                # Next.js app directory (pages, layouts, routes)
  /search           # Flight search and results
  /booking          # Booking flow
  /login, /register # Auth pages
/components         # Reusable React components
/store              # Zustand stores
/db                 # Static data (tour packages, recommendations)
/firebase           # Firebase config
/public             # Static assets
```

## Customization

- Update tour packages and recommendations in `/db/data.js`.
- Customize styles in `tailwind.config.js` or add your own CSS.
- Add more features or integrations as needed!

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Travel Business Portal** © 2025 — Built with ❤️ by Ruhul Amin.
