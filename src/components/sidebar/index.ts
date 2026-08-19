import SidebarRoot from "./SidebarRoot"
import SidebarItem from "./SidebarItem"
import SidebarGroup from "./SidebarGroup"
import SidebarTrigger from "./SidebarTrigger"
import SidebarContent from "./SidebarContent"
import Toggle from "./Toggle"
export type { SidebarClassNameProps } from './types'

type SidebarComponentType = typeof SidebarRoot & {
    Item: typeof SidebarItem;
    Group: typeof SidebarGroup;
    Trigger: typeof SidebarTrigger;
    Content: typeof SidebarContent;
    Toggle: typeof Toggle
};

export const Sidebar = SidebarRoot as SidebarComponentType;

Sidebar.Item = SidebarItem;
Sidebar.Group = SidebarGroup;
Sidebar.Trigger = SidebarTrigger;
Sidebar.Content = SidebarContent;
Sidebar.Toggle = Toggle;