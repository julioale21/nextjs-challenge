// app/layout.tsx
'use client'

import { NavBar } from "@/components/navbar/NavBar";
import { Providers } from "./providers";
import { Footer } from "@/components/footer";
import { Stack } from "@chakra-ui/react";

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
          <Stack paddingTop={[100, 150]} minH={["calc(100vh - 100px)", "100vh"]}>
            {children}
          </Stack>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}