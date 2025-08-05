import React, { useState } from "react";
import Sidebar from "./Sidebar";
import NavbarIcons from "./NavbarIcons";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col md:flex-row">
      <Sidebar onOpenMenu={() => setMenuOpen(true)} />
      <main className="flex-1 relative px-3 py-4 md:ml-[360px] md:px-16">
        <NavbarIcons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {children}
      </main>
    </div>
  );
}
