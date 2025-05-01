import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { NavItem, DropdownNavItem, SubNavItem } from '@/types/navigation/types';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedBookNowButton } from "@/components/ui/AnimatedBookNowButton";

// Define interfaces for legacy format navigation items
interface LegacyNavigationItem {
  label: string;
  href?: string;
  dropdownItems?: LegacyNavigationItem[];
  icon?: React.ComponentType<any>;
  isHighlighted?: boolean;
}

interface MobileNavigationProps {
  items: NavItem[] | LegacyNavigationItem[];
}

// Type guard to check if using the legacy format
function isLegacyFormat(items: NavItem[] | LegacyNavigationItem[]): items is LegacyNavigationItem[] {
  return items.length > 0 && 'label' in items[0] && !('name' in items[0]);
}

// Adapter function to convert legacy format to NavItem format
function adaptToNavItems(items: LegacyNavigationItem[]): NavItem[] {
  return items.map(item => {
    const navItem: any = {
      name: item.label,
      label: item.label,
      url: item.href || '#',
      icon: item.icon || ChevronRight,
      isHighlighted: item.isHighlighted
    };
    
    if (item.dropdownItems) {
      navItem.dropdownItems = item.dropdownItems.map(dropdownItem => ({
        name: dropdownItem.label,
        label: dropdownItem.label,
        url: dropdownItem.href || '#',
        icon: dropdownItem.icon
      }));
    }
    
    return navItem;
  });
}

// Custom styles for the animated buttons
const customButtonStyles = `
  .book-online-btn .points_wrapper .point {
    background-color: white !important;
  }
  
  .call-now-btn .points_wrapper .point {
    background-color: #00E6CA !important;
  }
  
  .call-now-btn {
    background: white !important;
  }
  
  .call-now-btn .inner {
    color: #00E6CA !important;
  }
  
  .call-now-btn::after {
    background: white !important;
  }
  
  /* Make hero buttons the same width */
  .hero-buttons-container .animated-book-now-button {
    min-width: 180px !important;
    width: 180px !important;
    text-align: center;
    justify-content: center;
    transition: all 0.3s ease !important;
  }
  
  .hero-buttons-container .inner {
    justify-content: center;
    width: 100%;
  }
  
  /* Glow effects on hover */
  .hero-buttons-container .book-online-btn:hover {
    box-shadow: 0 0 25px 4px rgba(0, 230, 202, 0.6) !important;
  }
  
  .hero-buttons-container .call-now-btn:hover {
    box-shadow: 0 0 25px 4px rgba(255, 255, 255, 0.5) !important;
  }
`;

const MobileNavigation: React.FC<MobileNavigationProps> = ({ items }: MobileNavigationProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  
  // Convert items to NavItem format if they're in legacy format
  const adaptedItems = isLegacyFormat(items) ? adaptToNavItems(items) : items;

  // Close menu on screen resize if switching to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset expanded items when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedItems({});
    }
  }, [isOpen]);

  if (!isMobile) {
    return null; // Don't render on desktop
  }

  const toggleMenu = (): void => setIsOpen(!isOpen);

  const toggleExpandItem = (itemKey: string): void => {
    setExpandedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const renderNavLinks = (navItems: NavItem[] | DropdownNavItem[], level = 0): React.ReactNode[] => {
    return navItems.map((item, index) => {
      const itemKey = `${item.name}-${level}-${index}`;
      const hasChildren = ('dropdownItems' in item && !!item.dropdownItems?.length) || 
                         ('subItems' in item && !!item.subItems?.length);
      const isExpanded = expandedItems[itemKey];
      
      return (
        <div key={itemKey} className="py-1">
          <div className="flex items-center">
            {!hasChildren && item.url ? (
              <Link 
                href={item.url}
                className={cn(
                  "block w-full py-3 text-base font-medium transition-colors",
                  "text-white hover:text-[#00E6CA] active:text-[#00E6CA]",
                  level === 0 ? "border-b border-zinc-800" : "",
                  'isHighlighted' in item && item.isHighlighted && "text-[#00E6CA] font-semibold"
                )}
                onClick={() => setIsOpen(false)}
                style={{ paddingLeft: `${16 + level * 16}px` }}
              >
                <span className="flex items-center">
                  {'icon' in item && item.icon && <item.icon className="mr-2 h-5 w-5" />}
                  {item.name}
                </span>
              </Link>
            ) : (
              <button
                onClick={() => {
                  if (hasChildren) {
                    toggleExpandItem(itemKey);
                  } else if (item.url) {
                    window.location.href = item.url;
                    setIsOpen(false);
                  }
                }}
                className={cn(
                  "flex w-full items-center justify-between py-3 text-base font-semibold transition-colors",
                  "text-white hover:text-[#00E6CA] active:text-[#00E6CA]",
                  level === 0 ? "border-b border-zinc-800" : "",
                  isExpanded ? "text-[#00E6CA]" : "",
                  'isHighlighted' in item && item.isHighlighted && "text-[#00E6CA]"
                )}
                style={{ paddingLeft: `${16 + level * 16}px` }}
              >
                <span className="flex items-center">
                  {'icon' in item && item.icon && <item.icon className="mr-2 h-5 w-5" />}
                  {item.name}
                </span>
                {hasChildren && (
                  <ChevronRight 
                    className={cn(
                      "h-4 w-4 mr-4 transition-transform duration-200",
                      isExpanded ? "rotate-90 text-[#00E6CA]" : ""
                    )} 
                  />
                )}
              </button>
            )}
          </div>
          
          {hasChildren && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {'dropdownItems' in item && item.dropdownItems && item.dropdownItems.length > 0 && (
                    <div className={cn("border-l border-zinc-700 ml-6")}>
                      {renderNavLinks(item.dropdownItems, level + 1)}
                    </div>
                  )}
                  {'subItems' in item && item.subItems && item.subItems.length > 0 && (
                    <div className={cn("border-l border-zinc-700 ml-6")}>
                      {item.subItems.map((subItem, subIndex) => (
                        <div key={`${subItem.name}-${level + 2}-${subIndex}`} className="py-1">
                          <Link
                            href={subItem.url}
                            className={cn(
                              "block py-2 text-md text-gray-300 hover:text-[#00E6CA] transition-colors",
                            )}
                            onClick={() => setIsOpen(false)}
                            style={{ paddingLeft: `${16 + (level + 2) * 16}px` }}
                          >
                            {subItem.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {/* Inject global styles needed for animated buttons */}
      <style jsx global>{customButtonStyles}</style>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Button
            variant="default"
            className="h-14 w-14 rounded-full shadow-lg p-0 bg-[#00E6CA] hover:bg-[#00E6CA]/90 text-white"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            style={{ 
              position: 'fixed',
              bottom: 'max(env(safe-area-inset-bottom, 16px) + 8px, 24px)',
              right: 'max(env(safe-area-inset-right, 16px) + 8px, 24px)'
            }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              paddingTop: 'env(safe-area-inset-top, 0)',
              paddingBottom: 'env(safe-area-inset-bottom, 0)',
              paddingLeft: 'env(safe-area-inset-left, 0)',
              paddingRight: 'env(safe-area-inset-right, 0)'
            }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-[72px] right-0 h-[calc(100%-72px)] w-full max-w-md bg-black shadow-xl overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <motion.nav 
                className="h-full overflow-y-auto pb-safe"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="py-4">
                  {renderNavLinks(adaptedItems)}
                </div>
                
                {/* Contact Info */}
                <div className="px-6 pt-6 pb-4 mt-2 border-t border-zinc-800">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Contact Us</h3>
                  <a href="tel:1300136336" className="flex items-center py-2 text-[#00E6CA] font-bold text-lg">
                    <Phone className="h-5 w-5 mr-2" />
                    1300 136 336
                  </a>
                  <div className="text-sm text-gray-400 mt-2">
                    <p>Available 24/7 for emergency service</p>
                  </div>
                </div>
                
                {/* Hero Section Buttons */}
                <div className="px-6 pb-16 flex justify-center gap-4 hero-buttons-container mt-4">
                  <AnimatedBookNowButton 
                    href="tel:1300136336" 
                    className="call-now-btn bg-white text-[#00E6CA]"
                  >
                    Call Now
                  </AnimatedBookNowButton>
                  
                  <AnimatedBookNowButton 
                    href="/book" 
                    className="book-online-btn bg-[#00E6CA] text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Online
                  </AnimatedBookNowButton>
                </div>
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation; 