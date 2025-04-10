import { NavBar } from "./DesktopNavigation"
import { NavItem, ActionItem } from "@/types/navigation/types"

interface NavigationProps {
  items: NavItem[]
  actionItems?: ActionItem[]
}

export function Navigation({ items, actionItems }: NavigationProps) {
  return (
    <>
      <NavBar items={items} actionItems={actionItems} />
    </>
  )
} 