import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 page",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <html>
      <body>
        <main>
          <h1>Page not found</h1>
        </main>
      </body>
    </html>
  );
}
