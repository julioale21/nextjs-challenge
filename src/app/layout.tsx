// app/layout.tsx
'use client'

import { NavBar } from "@/components/navbar/NavBar";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}