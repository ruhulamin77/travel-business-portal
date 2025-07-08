import Footer from '@/components/common/Footer';
import './globals.css';
import 'react-datepicker/dist/react-datepicker.css';

import Header from '@/components/common/Header';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { ToastContainer } from 'react-toastify';
import AuthInitProvider from '@/components/auth/AuthInitProvider';

export const metadata = {
  title: 'Travel Business Portal',
  description: 'A travel agency website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <AuthInitProvider>
          <ReactQueryProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-1 flex">{children}</div>
              <Footer />
            </div>
            <ToastContainer />
          </ReactQueryProvider>
        </AuthInitProvider>
      </body>
    </html>
  );
}
