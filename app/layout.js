// app/layout.js (Server Component)
export const metadata = {
  title: "My Next App",
  description: "A simple Next.js app with page transitions",
};

import "./globals.css";
import { ScrollDirectionProvider } from "./ScrollDirectionContext";
import ClientWrapper from "./ClientWrapper";
import BackgroundStars from "./componenets/BackgroundStars";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Render the background stars once */}
        <BackgroundStars />
        <ScrollDirectionProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </ScrollDirectionProvider>
      </body>
    </html>
  );
}
