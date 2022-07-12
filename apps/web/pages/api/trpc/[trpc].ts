import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@myapp/api";

export default trpcNext.createNextApiHandler({
  router: appRouter,
});
