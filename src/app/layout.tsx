import type { Metadata } from "next";
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { McMurtryTheme } from "./theme"

export const metadata: Metadata = {
  title: "McMurtry College",
  description: "Burt and Deedee McMurtry College at Rice University in Houston, Texas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={McMurtryTheme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
