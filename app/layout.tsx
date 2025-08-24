import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RoutePreloader from './components/RoutePreloader'
import PerformanceMonitor from './components/PerformanceMonitor'
import { AnimationProvider } from './components/AnimationContext'
import SmoothScroll from './components/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Jawad Asghar - Designer / Developer',
  description: 'Portfolio of Jawad Asghar, a designer and developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>
          <SmoothScroll>
            <RoutePreloader />
            <PerformanceMonitor />
            {children}
          </SmoothScroll>
        </AnimationProvider>
      </body>
    </html>
  )
}
