import Navigation from "../components/navigation"
import "../styles/global.css";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
