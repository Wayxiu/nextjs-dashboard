import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { AlertProvider } from "@/app/ui/controls/alertContext";
import { Toaster } from "@/components/ui/toaster"
export const metadata: Metadata = {
    title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>       
        <AlertProvider>
          {children}
        </AlertProvider>
        <Toaster/>
      </body>
    </html>
  );
}
