type BreadcrumbItem = {
  isCurrentPage?: boolean;
  text: string;
  url: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        role="list"
      >
        {items.map((item, index) => (
          <li className="flex items-center" key={index}>
            <a
              aria-current={item.isCurrentPage ? "page" : undefined}
              className={`mr-2 text-sm font-medium ${
                item.isCurrentPage
                  ? "text-gray-500 hover:text-gray-600"
                  : "text-gray-900"
              }`}
              href={item.url}
            >
              {item.text}
            </a>
            {index < items.length - 1 && (
              <svg
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
                fill="currentColor"
                height="20"
                viewBox="0 0 16 20"
                width="16"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
