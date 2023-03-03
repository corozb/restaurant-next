import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PizzaList from '@/components/PizzaList'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Restaurant Site</title>
      </head>
      <body>
        <Navbar />
        <Featured />
        <PizzaList />
        {children}
        <Footer />
      </body>
    </html>
  )
}
