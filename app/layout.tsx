"use client";
import { Toaster } from "@/components/ui/sonner"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from "../app/components/Provider"
import './globals.css'
import { Suspense } from "react";
import NavbarComponent from "../app/components/Navbar";
import { SidebarMenu } from "../app/components/Sidebar";
import {useState,useEffect} from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Login Page',
//   description: 'Login Page Description',
//   icons: {
//     icon: './favicon.ico',
//   },
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  const [getMobileView, setMobileView] = useState(false);

  const [getAnimation, setAnimation] = useState(false);



    useEffect(() => {
        const handleResize = () => {
            // if (window.innerWidth >=768) {
               
            //     setMobileView(false)
            // } else {
          
            //     setMobileView(true)
            // }
                  
        if (window.innerWidth >= 1024) {
          // Desktop view
          setMobileView(false);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
          // Tablet view (e.g., iPad, iPad Air, Surface)
          setMobileView(false); // Or set another state for tablet view if needed
      } else {
          // Mobile view
          setMobileView(true);
      }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


  return (
    
    <html lang="en">
   <body className={`${inter.className} bg-[#F5F5F4] `}>
   <div className="fixed w-full z-10">
      <Button variant="default" className="w-full flex items-center rounded-none p-2">
        <Link href='https://docs.google.com/forms/d/e/1FAIpQLScA0G4g4rMX272GmQeGnzuPMZvAmShf2-MJ4Lh4YeRG3e9SfA/viewform'>Welcome to the Polymath beta ⚒️ Join the waitlist!</Link>
      </Button>
    </div>
   <div className="pt-9">
     <NavbarComponent />
      <div className="flex">
        <div className="hidden sm:block fixed h-full bg-white z-10">
           <SidebarMenu 
              mobile={getMobileView} 
              setAnimation={setAnimation} 
              setMobileView={setMobileView} 
           />
        </div>
        <main className={`w-full p-0 h-screen transition-margin duration-300 ${getMobileView === false ? (getAnimation ? 'ml-64' : 'ml-0') : (getAnimation ? 'ml-0' : 'ml-0')}`}>
           {children}
         </main>
     </div>
     </div> 
</body>

    </html>
  )
}
