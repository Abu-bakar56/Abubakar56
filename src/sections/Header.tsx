// import Link from "next/link";

// export const Header = () => {
//   return (
//     <div className="flex justify-center items-center fixed top-3 w-full z-10">
//       <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
//         <Link href="#hero" className="nav-item">Home</Link>
//         <Link href="#about" className="nav-item">About</Link>
//         <Link href="#projects" className="nav-item">Projects</Link>
//         <Link href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</Link>
//       </nav>
//     </div>
//   );
// };

"use client";  // Make sure this is at the top of the file

import { useEffect, useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  
  useEffect(() => {
    // This ensures we are on the client side, and window is available
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        const hash = window.location.hash;
        setActiveLink(hash);
      };

      window.addEventListener("hashchange", handleHashChange);
      
      // Initial check
      handleHashChange();

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  // Compare the current window hash to the link's hash
  const isActive = (route: string) => {
    return activeLink === route ? "nav-item-active" : "nav-item";
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/" className={`${isActive("/")} nav-item`}>Home</Link>
        <Link href="/#about" className={`${isActive("#about")} nav-item`}>About</Link>
        <Link href="/#projects" className={`${isActive("#projects")} nav-item`}>Projects</Link>
        <Link href="/contact" className={`${isActive("/contact")} nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900`}>Contact</Link>
      </nav>
    </div>
  );
  
  
};
