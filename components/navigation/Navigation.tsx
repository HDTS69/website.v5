import { NavBar } from './DesktopNavigation'
import { NavItem, ActionItem } from '@/src/types/navigation/types'

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
