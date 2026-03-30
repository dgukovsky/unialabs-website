const ROOT_HOST = "unialabs.com";
const WWW_HOST = `www.${ROOT_HOST}`;
const INTERNAL_ASSET_REWRITE_HEADER = "x-unia-asset-rewrite";
const CLEAN_ROUTE_MAP = new Map([
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
const HTML_CANONICAL_ROUTE_MAP = new Map([
  ["/index.html", "/"],
  ["/europe.html", "/europe/"],
  ["/ecuador.html", "/ecuador/"],
  ["/serbia.html", "/serbia/"],
  ["/privacy.html", "/privacy/"],
  ["/terms.html", "/terms/"],
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
    const isInternalAssetRewrite = request.headers.get(INTERNAL_ASSET_REWRITE_HEADER) === "1";

    if (url.protocol !== "https:" || url.hostname === WWW_HOST) {
      url.protocol = "https:";
      url.hostname = ROOT_HOST;
      return redirect(url);
    }

    const canonicalPath = HTML_CANONICAL_ROUTE_MAP.get(url.pathname);

    if (canonicalPath && !isInternalAssetRewrite) {
      url.pathname = canonicalPath;
      return redirect(url);
    }

    const rewrittenPath = CLEAN_ROUTE_MAP.get(url.pathname);
    let assetRequest = request;

    if (rewrittenPath) {
      const assetHeaders = new Headers(request.headers);
      assetHeaders.set(INTERNAL_ASSET_REWRITE_HEADER, "1");
      assetRequest = new Request(new URL(rewrittenPath, url), {
        method: request.method,
        headers: assetHeaders,
        redirect: "manual",
      });
    }

    const response = await env.ASSETS.fetch(assetRequest);
    return addSecurityHeaders(response);
  },
};
