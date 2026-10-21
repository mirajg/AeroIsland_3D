
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "AeroIsland 3D — Interactive Portfolio",
  description: "Explore AeroIsland 3D — an interactive 3D portfolio featuring dynamic WebGL scenes, seamless rotation controls, and real-time animation. Built with Next.js, Three.js, and React Three Fiber.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
