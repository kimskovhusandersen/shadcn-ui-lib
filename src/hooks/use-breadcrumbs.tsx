import { useLocation } from "react-router-dom";

type BreadcrumbItem = {
  text: string;
  url: string;
};

const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location = useLocation();

  const createBreadcrumbItems = (pathname: string): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter((x) => x);
    const items = paths.map((path, index) => {
      const url = `/${paths.slice(0, index + 1).join("/")}`;
      const text = path; // Replace this with your logic to convert path to readable text
      return { text, url };
    });

    // Optionally, add 'Home' as the first breadcrumb
    items.unshift({ text: "Home", url: "/" });

    return items;
  };

  return createBreadcrumbItems(location.pathname);
};

export default useBreadcrumbs;
