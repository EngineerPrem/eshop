import './globals.css';
import { Providers } from './providers'; // ✅ Make sure this path is correct

export const metadata = {
  title: 'E-commerce',
  description: 'Buy anything you want',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Providers>{children}</Providers> {/* ✅ Corrected line */}
      </body>
    </html>
  );
}
