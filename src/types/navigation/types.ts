import { LucideIcon } from "lucide-react"

export interface SubNavItem {
  name: string
  url: string
}

export interface DropdownNavItem {
  label: string
  name: string
  url: string
  subItems?: SubNavItem[]
}

export interface NavItem {
  label: string
  name: string
  url: string
  icon: LucideIcon
  dropdownItems?: DropdownNavItem[]
  isHighlighted?: boolean
  onClick?: (e: React.MouseEvent) => void
}

// ActionItem is the same as NavItem but explicitly named for semantic clarity
export type ActionItem = NavItem;

export interface BaseNavigationProps {
  items: NavItem[]
  actionItems?: NavItem[]
  className?: string
} 