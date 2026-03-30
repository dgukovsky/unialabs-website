const ROOT_HOST = "unialabs.com";
const WWW_HOST = `www.${ROOT_HOST}`;
const CANONICAL_REDIRECT_MAP = new Map([
  ["/index.html", "/"],
  ["/europe", "/europe.html"],
  ["/europe/", "/europe.html"],
  ["/ecuador", "/ecuador.html"],
  ["/ecuador/", "/ecuador.html"],
  ["/serbia", "/serbia.html"],
  ["/serbia/", "/serbia.html"],
  ["/privacy", "/privacy.html"],
  ["/privacy/", "/privacy.html"],
  ["/terms", "/terms.html"],
  ["/terms/", "/terms.html"],
]);

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
};

const redirect = (url, status = 301) => Response.redirect(url.toString(), status);

const addSecurityHeaders = (response) => {
  const headers = new Headers(response.headers);
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => headers.set(key, value));
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.protocol !== "https:" || url.hostname === WWW_HOST) {
      url.protocol = "https:";
      url.hostname = ROOT_HOST;
      return redirect(url);
    }

    const canonicalPath = CANONICAL_REDIRECT_MAP.get(url.pathname);

    if (canonicalPath) {
      url.pathname = canonicalPath;
      return redirect(url);
    }

    const response = await env.ASSETS.fetch(request);
    return addSecurityHeaders(response);
  },
};
