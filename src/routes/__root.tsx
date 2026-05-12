import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Final Industrial Training Report — Hazitz Iklil @ Ezidea Solutions" },
      {
        name: "description",
        content:
          "Final Industrial Training Report (DUT6019) by Hazitz Iklil Bin Hessly Hafiz at Ezidea Solutions Sdn Bhd. Diploma in Information Technology.",
      },
      { property: "og:title", content: "Final Industrial Training Report — Hazitz Iklil @ Ezidea Solutions" },
      { name: "twitter:title", content: "Final Industrial Training Report — Hazitz Iklil @ Ezidea Solutions" },
      { name: "description", content: "A multi-page portfolio website showcasing internship activities and technical projects." },
      { property: "og:description", content: "A multi-page portfolio website showcasing internship activities and technical projects." },
      { name: "twitter:description", content: "A multi-page portfolio website showcasing internship activities and technical projects." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/81099cb9-aa14-4cc5-a61f-74c942a61919/id-preview-3eaf713e--75a19686-d284-4cb8-9b26-ac9f4f4c97d3.lovable.app-1778226309776.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/81099cb9-aa14-4cc5-a61f-74c942a61919/id-preview-3eaf713e--75a19686-d284-4cb8-9b26-ac9f4f4c97d3.lovable.app-1778226309776.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <header className="sticky top-0 z-30 h-14 flex items-center gap-3 border-b bg-background/80 backdrop-blur px-4">
              <SidebarTrigger />
              <div className="h-6 w-px bg-border" />
              <Link to="/" className="font-display font-bold text-sm md:text-base">
                FINAL REPORT · <span className="text-gradient-brand">DUT6019</span>
              </Link>
            </header>
            <main className="flex-1 px-4 md:px-8 py-8 max-w-6xl w-full mx-auto">
              <Outlet />
            </main>
            <footer className="border-t py-6 px-4 md:px-8 text-center text-xs text-muted-foreground">
              © HAZITZ IKLIL BIN HESSLY HAFIZ — 17DDT23F1999 — 2026 Industrial Training Report — Diploma in Information Technology (Digital Technology)
            </footer>
          </div>
        </div>
      </SidebarProvider>
    </QueryClientProvider>
  );
}