"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // Workaround for Next.js 16 / React 19: rendering <script> inside a React
  // component triggers a console warning. Setting scriptProps only on the
  // client silences it without affecting SSR theme-flash prevention.
  // See: https://github.com/pacocoursey/next-themes/issues/387
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : ({ type: "application/json" } as const);

  return (
    <NextThemesProvider scriptProps={scriptProps} {...props}>
      {children}
    </NextThemesProvider>
  );
}
