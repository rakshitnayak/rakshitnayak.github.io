export function verifyApiSecret(request) {
  const secret = process.env.CONFIG_API_SECRET;

  if (!secret) {
    return {
      ok: false,
      status: 503,
      error: "CONFIG_API_SECRET is not set on the server",
    };
  }

  const authHeader = request.headers.get("authorization");
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  if (!token || token !== secret) {
    return { ok: false, status: 401, error: "Unauthorized" };
  }

  return { ok: true };
}
