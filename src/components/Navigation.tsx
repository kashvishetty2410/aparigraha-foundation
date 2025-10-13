import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    {
      name: "Programs",
      href: "/#programs",
      dropdown: [
        { name: "AurSunao", href: "/aursunao" },
        { name: "Indradhanush", href: "/indradhanush" },
        { name: "Pragya", href: "/pragya" },
      ],
    },
    { name: "Impact", href: "/#impact" },
    { name: "Get Involved", href: "/#get-involved" },
    { name: "News", href: "/#news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Aparigraha Logo"
              className="w-32 h-auto rounded-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className={`nav-link flex items-center space-x-1 ${isScrolled ? 'scrolled' : ''}`}>
                    <span>{item.name}</span>
                    <ChevronDown className={`h-4 w-4 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border border-border/30 shadow-medium">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem
                        key={dropdownItem.name}
                        className="hover:bg-primary hover:text-white transition-colors focus:bg-primary focus:text-white"
                      >
                        <Link
                          to={dropdownItem.href}
                          className="w-full block px-2 py-1"
                        >
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isScrolled ? 'scrolled' : ''}`}>
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/volunteer">
              <Button className="btn-tprimary">Volunteer</Button>
            </Link>
            <Link to="/volunteer">
              <Button className="btn-hero">Donate Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 bg-background/95 backdrop-blur-md">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    type="button"
                    className="nav-link flex items-center space-x-1 w-full py-2"
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === item.name ? null : item.name
                      )
                    }
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4">
                      {item.dropdown.map((dropdownItem) => (
                                                <Link
                                                  key={dropdownItem.name}
                                                  to={dropdownItem.href}
                                                  className="block py-1 text-sm hover:bg-primary hover:text-white transition-colors"
                                                  onClick={() => {
                                                    setIsMobileMenuOpen(false);
                                                    setOpenDropdown(null);
                                                  }}>
                                                  {dropdownItem.name}
                                                </Link>                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link py-2"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border/30">
              <Link to="/volunteer">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Volunteer
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button
                  className="btn-hero"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
