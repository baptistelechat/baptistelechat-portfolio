import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} flex justify-center p-4`}>
        <ThemeProvider
          attribute="class"
          // defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <div className="fixed bottom-4 right-4 z-50">
              {/* <ThemeToggle /> */}
              <AnimatedThemeToggler />
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
