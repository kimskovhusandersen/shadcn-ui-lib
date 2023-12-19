import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { ProductCard } from "./card.story";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export const categories = ["Totes", "Backpacks", "Travel Bags", "Hip Bags"];

const sortBy = [
  "Most Popular",
  "Best Rating",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

const colorFilters = [
  { name: "color[]", value: "white", label: "White" },
  { name: "color[]", value: "beige", label: "Beige" },
  { name: "color[]", value: "blue", label: "Blue" },
  { name: "color[]", value: "brown", label: "Brown" },
  { name: "color[]", value: "green", label: "Green" },
  { name: "color[]", value: "purple", label: "Purple" },
];

const categoryFilters = [
  { name: "category[]", value: "new-arrivals", label: "New Arrivals" },
  { name: "category[]", value: "sale", label: "Sale" },
  { name: "category[]", value: "travel", label: "Travel" },
  { name: "category[]", value: "organization", label: "Organization" },
  { name: "category[]", value: "accessories", label: "Accessories" },
];

const sizeFilters = [
  { name: "size[]", value: "2l", label: "2L" },
  { name: "size[]", value: "6l", label: "6L" },
  { name: "size[]", value: "12l", label: "12L" },
  { name: "size[]", value: "18l", label: "18L" },
  { name: "size[]", value: "20l", label: "20L" },
  { name: "size[]", value: "40l", label: "40L" },
];

const FiltersMobile = () => {
  return (
    <>
      <Sheet key="right">
        <SheetTrigger>
          <button
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            type="button"
          >
            <span className="sr-only">Filters</span>
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clip-rule="evenodd"
                d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll" side={"right"}>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>

          {/* <!-- Filters --> */}
          <form className="mt-4 border-t border-gray-200">
            <h3 className="sr-only">Categories</h3>
            <ul className="px-2 py-3 font-medium text-gray-900" role="list">
              {categories.map((category) => (
                <li key={category}>
                  <a className="block px-2 py-3" href="#">
                    {category}
                  </a>
                </li>
              ))}
            </ul>

            <Accordion type="single">
              <AccordionItem value="item-1">
                <AccordionTrigger>Color</AccordionTrigger>
                <AccordionContent>
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-4">
                      {colorFilters.map((filter, index) => (
                        <div className="flex items-center">
                          <input
                            checked
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            id={`filter-color-${index}`}
                            key={filter.value}
                            name={filter.name}
                            type="checkbox"
                            value={filter.value}
                          />
                          <label
                            className="ml-3 text-sm text-gray-600"
                            htmlFor={`filter-color-${index}`}
                          >
                            {filter.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Category</AccordionTrigger>
                <AccordionContent>
                  <div className="pt-6" id="filter-section-1">
                    <div className="space-y-4">
                      {categoryFilters.map((filter, index) => (
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            id={`filter-category-${index}`}
                            name={filter.name}
                            type="checkbox"
                            value={filter.value}
                          />
                          <label
                            className="ml-3 text-sm text-gray-600"
                            htmlFor={`filter-category-${index}`}
                          >
                            {filter.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Size</AccordionTrigger>
                <AccordionContent>
                  <div className="pt-6" id="filter-section-2">
                    <div className="space-y-4">
                      {sizeFilters.map((filter, index) => (
                        <div className="flex items-center" key={filter.value}>
                          <input
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            id={`filter-size-${index}`}
                            name={filter.name}
                            type="checkbox"
                            value={filter.value}
                          />
                          <label
                            className="ml-3 text-sm text-gray-600"
                            htmlFor={`filter-size-${index}`}
                          >
                            {filter.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
};

export const Filters = () => {
  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h2>

            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      id="menu-button"
                      type="button"
                    >
                      Sort
                      <svg
                        aria-hidden="true"
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          fill-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    {sortBy.map((item, index, arr) => {
                      const isLast = index === arr.length - 1;
                      return (
                        <>
                          <DropdownMenuItem>
                            {/* <Github className="mr-2 h-4 w-4" /> */}
                            <span>{item}</span>
                          </DropdownMenuItem>
                          {!isLast && <DropdownMenuSeparator />}
                        </>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <button
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                type="button"
              >
                <span className="sr-only">View grid</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    clip-rule="evenodd"
                    d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
              <FiltersMobile />
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 className="sr-only" id="products-heading">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* <!-- Filters --> */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  role="list"
                >
                  {categories.map((category) => (
                    <li key={category}>
                      <a href="#">{category}</a>
                    </li>
                  ))}
                </ul>

                <Accordion type="single">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Color</AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-6" id="filter-section-0">
                        <div className="space-y-4">
                          {colorFilters.map((filter, index) => (
                            <div className="flex items-center">
                              <input
                                checked
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                id={`filter-color-${index}`}
                                key={filter.value}
                                name={filter.name}
                                type="checkbox"
                                value={filter.value}
                              />
                              <label
                                className="ml-3 text-sm text-gray-600"
                                htmlFor={`filter-color-${index}`}
                              >
                                {filter.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-6" id="filter-section-1">
                        <div className="space-y-4">
                          {categoryFilters.map((filter, index) => (
                            <div className="flex items-center">
                              <input
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                id={`filter-category-${index}`}
                                name={filter.name}
                                type="checkbox"
                                value={filter.value}
                              />
                              <label
                                className="ml-3 text-sm text-gray-600"
                                htmlFor={`filter-category-${index}`}
                              >
                                {filter.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Size</AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-6" id="filter-section-2">
                        <div className="space-y-4">
                          {sizeFilters.map((filter, index) => (
                            <div
                              className="flex items-center"
                              key={filter.value}
                            >
                              <input
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                id={`filter-size-${index}`}
                                name={filter.name}
                                type="checkbox"
                                value={filter.value}
                              />
                              <label
                                className="ml-3 text-sm text-gray-600"
                                htmlFor={`filter-size-${index}`}
                              >
                                {filter.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </form>

              <div className="col-span-3">
                {/* <!-- Your content --> */}

                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Black T-Shirts
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                    () => (
                      <div className="group relative">
                        <ProductCard />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
