import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'NextUI',
  description: 'Test NextUI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
