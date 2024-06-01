import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baptiste LECHAT | Portfolio",
  description: "Baptiste LECHAT | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center`}>
        <ThemeProvider
          attribute="class"
          // defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <div className="fixed bottom-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
