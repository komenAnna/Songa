import { NavBar } from '@/components'
import './globals.css'
import Footer from '@/components/Elements/Footer'

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
      <body>
        <NavBar />
        {children}
      </body>
      {/* <Footer /> */}
    </html>
  )
}
