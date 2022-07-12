# Nanny Stack (PoC)

Inspired by [zART stack](https://github.com/trpc/zart), a PoC of a stack so (type) safe, it's like having a nanny.

Uses:

- [tRPC](https://trpc.io/) as a fully type-safe data layer.
  - Uses [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/) under the hood for client-side data fetching.
- [Next.js](https://nextjs.org/) for rendering web application as well as serving the tRPC server endpoint.
- [Expo](https://expo.dev/) for building native mobile application with React Native (consumes the tRPC endpoint from web app).
- [TailwindCSS](https://tailwindcss.com/) for styling.
  - Along with [NativeWind](https://www.nativewind.dev/) for Tailwind-like styling for the Expo (React Native) app.

## So what's the big deal?

- tRPC is dope, and provides type-safe end-to-end. Can define fully type-safe remote procedures, and then access them (in a type-safe manner) on the client.
- NextJS provides a best-in-class experience for building React web apps with optimizations and SSR support.
  - NextJS also provides an easy mechanism for serving the tRPC endpoint, meaning no additional server is needed for the "backend".
- React Native/Expo provides a familiar development experience for React developers, and the type-safe tRPC endpoints can be leveraged in the mobile app.
- TailwindCSS is a great CSS library. With NativeWind, we can share theming config between web and mobile and use a _very_ similar set of styling utilities across both platforms.
