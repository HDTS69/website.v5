import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationItem {
  name: string;
  url: string;
}

interface ActionItem extends NavigationItem {
  icon: React.ComponentType<{ className?: string }>;
  isHighlighted?: boolean;
}

const navigationItems: NavigationItem[] = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" }
];

const actionItems: ActionItem[] = [
  { 
    name: "Book Online",
    url: "/book",
    icon: Menu,
    isHighlighted: true
  }
];

export function MobileNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleBookingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    router.push("/book");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {navigationItems.map((item: NavigationItem) => (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.url
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          {actionItems.map((item: ActionItem) => (
            <Link
              key={item.name}
              href={item.url}
              onClick={item.name === "Book Online" ? handleBookingClick : () => setIsOpen(false)}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                item.isHighlighted
                  ? "text-primary hover:text-primary/90"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
} 