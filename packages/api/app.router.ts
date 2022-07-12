import * as trpc from "@trpc/server";

export const appRouter = trpc.router().query("getDogs", {
  resolve: () => {
    return <Dog[]>[
      { name: "Remy", goodBoy: true },
      { name: "Rogue", goodBoy: false },
    ];
  },
});

type Dog = { name: string; goodBoy?: boolean };

export type AppRouter = typeof appRouter;
