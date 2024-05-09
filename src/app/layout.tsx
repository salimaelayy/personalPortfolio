export const metadata = {
  title: 'Salima-El',
  description: 'Mern Stack developer',
  
}

import "@/app/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="focus:scroll-auto scroll-smooth scrollbar-thin scrollbar-track-slate-950  ">
      <body>{children}</body>
    </html>
  )
}
