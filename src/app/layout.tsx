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
    <html lang="en" className=" focus:scroll-auto scroll-smooth scrollbar-thin scrollbar-track-slate-950  ">
      <body className="sm:px-6  px-4 lg:px-8 bg-secondary container mx-auto">{children}</body>
    </html>
  )
}
