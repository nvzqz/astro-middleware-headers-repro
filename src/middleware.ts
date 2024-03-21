import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = ({ request }, next) => {
  request.headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  return next();
};
