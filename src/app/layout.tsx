import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "District Cooling in India — BEE–UNEP Workshop 2026",
  description: "TANDAV — Transforming Architecture for National District-cooling Advancement & Viability. BEE–UNEP Roundtable Workshop, 25 March 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script data-design-ignore="true" dangerouslySetInnerHTML={{ __html: `(function(){if(window===window.parent||window.__DESIGN_NAV_REPORTER__)return;window.__DESIGN_NAV_REPORTER__=true;function report(){try{window.parent.postMessage({type:'IFRAME_URL_CHANGE',payload:{url:location.origin+location.pathname+location.hash}},'*')}catch(e){}}report();var ps=history.pushState,rs=history.replaceState;history.pushState=function(){ps.apply(this,arguments);report()};history.replaceState=function(){rs.apply(this,arguments);report()};window.addEventListener('popstate',report);window.addEventListener('hashchange',report);window.addEventListener('load',report)})();` }} />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
