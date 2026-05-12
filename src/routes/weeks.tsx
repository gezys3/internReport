import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/weeks")({
  component: () => (
    <div className="w-full">
      {/* This Outlet is where weeks.$week.tsx or weeks.index.tsx will render */}
      <Outlet />
    </div>
  ),
});