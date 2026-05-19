/** True when `pathname` is the current route for a primary nav `href`. */
export function isNavRouteActive(pathname: string, href: string): boolean {
  if (href === "/work") {
    return pathname === "/work" || pathname.startsWith("/work/");
  }
  if (href === "/about") {
    return pathname === "/about" || pathname.startsWith("/about/");
  }
  return pathname === href;
}
