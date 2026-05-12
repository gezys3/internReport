import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Heart,
  BookOpen,
  Building2,
  CalendarDays,
  FileText,
  ChevronDown,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { weeks } from "@/data/weeks";
import logo from "@/assets/ezidea-logo.png";

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Acknowledgements", url: "/acknowledgements", icon: Heart },
  { title: "Introduction", url: "/introduction", icon: BookOpen },
  { title: "Organization", url: "/organization", icon: Building2 },
];

export function AppSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (p: string) => path === p;
  const weeksOpen = path.startsWith("/weeks");

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3 px-2 py-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-brand p-1.5 shadow-glow flex items-center justify-center">
            <img src={logo} alt="Ezidea" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold text-sidebar-foreground">
              Industrial Training
            </div>
            <div className="text-[11px] text-sidebar-foreground/70">
              Hazitz Iklil · Ezidea
            </div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Report</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <Collapsible defaultOpen={weeksOpen} className="group/coll">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <CalendarDays />
                      <span>Weekly Activities</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/coll:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={path === "/weeks"}>
                          <Link to="/weeks">All weeks</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      {weeks.map((w) => (
                        <SidebarMenuSubItem key={w.number}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={path === `/weeks/${w.number}`}
                          >
                            <Link
                              to="/weeks/$week"
                              params={{ week: String(w.number) }}
                            >
                              Week {w.number}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/technical-report")}
                >
                  <Link to="/technical-report">
                    <FileText />
                    <span>Technical Report</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/conclusion")}
                >
                  <Link to="/conclusions">
                    <FileText />
                    <span>Conclusion</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}