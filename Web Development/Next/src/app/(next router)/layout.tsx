export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
import './style.css'
export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children} {modal}</body>
    </html>
  )
}
