import { NavBar } from '@/components'
import './globals.css'
import Footer from '@/components/Elements/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastProvider } from './toast.provider';

export const metadata = {
  title: 'Songa',
  description: 'This is an app made to help you get comfortable with premium rides.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ToastProvider>
          <NavBar />
          {children}
        </ToastProvider>
      </body>
      {/* <Footer /> */}
    </html>
  )
}
