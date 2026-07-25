const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  if (path === "/") return base + "/";
  return base + path;
}
