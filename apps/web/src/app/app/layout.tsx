"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Nav from "@/components/nav";
import { useState } from "react";
import { Calendar, CalendarClock } from "lucide-react";
import { Detail } from "@/components/detail";

const links = [
  {
    title: "Today",
    href: "/app/today",
    icon: Calendar,
  },
  {
    title: "Week",
    href: "/app/week",
    icon: CalendarClock,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full items-stretch"
    >
      <ResizablePanel
        defaultSize={15}
        collapsedSize={4}
        collapsible={true}
        minSize={15}
        maxSize={20}
        onCollapse={() => setIsCollapsed(true)}
        onResize={() => setIsCollapsed(false)}
      >
        <Nav isCollapsed={isCollapsed} links={links} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={32} minSize={30}>
        {children}
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={48} minSize={30}>
        <Detail />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
