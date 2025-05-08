import React, { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface NavigationItem {
  label: string;
  href?: string;
  dropdownItems?: NavigationItem[];
  subDropdownItems?: NavigationItem[];
}

interface NavItemProps {
  item: NavigationItem;
  isActive: boolean;
  isAnyItemActive: boolean;
  onItemHover: (item: NavigationItem) => void;
  onItemLeave: () => void;
  onDropdownHover: (item: NavigationItem) => void;
  onSubDropdownHover: (item: NavigationItem) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  isAnyItemActive,
  onItemHover,
  onItemLeave,
  onDropdownHover,
  onSubDropdownHover,
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center h-full px-1",
        "group hover:cursor-pointer",
        "before:content-[''] before:absolute before:top-0 before:left-[-8px] before:right-[-8px] before:h-full",
        "after:content-[''] after:absolute after:top-full after:left-[-8px] after:right-[-8px] after:h-2"
      )}
      onMouseEnter={() => onItemHover(item)}
      onMouseLeave={onItemLeave}
    >
      {item.label}
      {item.dropdownItems && (
        <div
          className={cn(
            "absolute top-full left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1",
            "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
            "transition-all duration-200 ease-in-out",
            "z-10",
            "before:content-[''] before:absolute before:top-0 before:right-[-16px] before:w-16 before:h-full"
          )}
          onMouseEnter={() => onDropdownHover(item)}
        >
          {item.dropdownItems.map((dropdownItem: NavigationItem, index: number) => (
            <div
              key={index}
              className={cn(
                "relative px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                "group/item"
              )}
              onMouseEnter={() => {
                if (dropdownItem.subDropdownItems) {
                  onSubDropdownHover(dropdownItem);
                }
              }}
            >
              {dropdownItem.label}
              {dropdownItem.subDropdownItems && (
                <div
                  className={cn(
                    "absolute left-full top-0 w-48 bg-white rounded-md shadow-lg py-1",
                    "opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible",
                    "transition-all duration-200 ease-in-out",
                    "z-20",
                    "ml-2",
                    "before:content-[''] before:absolute before:top-0 before:left-[-10px] before:w-10 before:h-full"
                  )}
                >
                  {dropdownItem.subDropdownItems.map((subItem: NavigationItem, subIndex: number) => (
                    <div
                      key={subIndex}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface DesktopNavigationProps {
  items: NavigationItem[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ items }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isAnyItemActive, setIsAnyItemActive] = useState(false);

  const handleItemHover = useCallback((item: NavigationItem) => {
    if (!isMobile) {
      setActiveItem(item.label);
      setIsAnyItemActive(true);
    }
  }, [isMobile]);

  const handleItemLeave = useCallback(() => {
    if (!isMobile) {
      setActiveItem(null);
      setIsAnyItemActive(false);
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }
  }, [isMobile]);

  const handleDropdownHover = useCallback((item: NavigationItem) => {
    if (!isMobile) {
      setOpenDropdown(item.label);
      setIsAnyItemActive(true);
    }
  }, [isMobile]);

  const handleSubDropdownHover = useCallback((item: NavigationItem) => {
    if (!isMobile) {
      setOpenSubDropdown(item.label);
      setIsAnyItemActive(true);
    }
  }, [isMobile]);

  return (
    <div className="flex items-center h-full">
      {items.map((item, index) => (
        <NavItem
          key={index}
          item={item}
          isActive={activeItem === item.label}
          isAnyItemActive={isAnyItemActive}
          onItemHover={handleItemHover}
          onItemLeave={handleItemLeave}
          onDropdownHover={handleDropdownHover}
          onSubDropdownHover={handleSubDropdownHover}
        />
      ))}
    </div>
  );
};

export default DesktopNavigation; 