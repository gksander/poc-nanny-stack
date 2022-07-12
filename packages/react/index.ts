import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "@myapp/api";

export const trpc = createReactQueryHooks<AppRouter>();
