import { cn } from "../lib/utils";

type LinkItem = {
  children: React.ReactNode;
  className?: string;
  href: string;
  label: string;
};

type MainNavProps = React.HTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  links: LinkItem[];
};

export function MainNav({ className, links, ...props }: MainNavProps) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links?.map((link) => (
        <a className={link.className} href={link.href} key={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
