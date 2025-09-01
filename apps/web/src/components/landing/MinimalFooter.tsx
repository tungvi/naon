import naonLogo from "figma:asset/d7886344b9dbaec547c36142d85a44ed64355f09.png";

import { Separator } from "../ui/separator";

const links = [
  { name: "Privacy", href: "#" },
  { name: "Terms", href: "#" },
  { name: "Security", href: "#" },
  { name: "Contact", href: "#" }
];

export function MinimalFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={naonLogo} 
              alt="naon Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-3xl font-normal text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>naon</span>
          </div>
          
          {/* Links */}
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-muted-foreground">
          © 2025 naon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}