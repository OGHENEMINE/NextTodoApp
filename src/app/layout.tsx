import './globals.css'
import { TodoProvider } from "@/context/todoContext";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List App',
  description: 'A todo list applicated made with nextJs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-50 container mx-auto p-8`}>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  )
}
