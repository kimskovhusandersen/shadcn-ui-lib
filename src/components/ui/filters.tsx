export const Filters = () => {
  return (
    <div className="bg-white">
      <div>
        {/* <!--
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    --> */}
        <div
          aria-modal="true"
          className="relative z-40 lg:hidden"
          role="dialog"
        >
          {/* <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>

          <div className="fixed inset-0 z-40 flex">
            {/* <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  type="button"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* <!-- Filters --> */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul className="px-2 py-3 font-medium text-gray-900" role="list">
                  <li>
                    <a className="block px-2 py-3" href="#">
                      Totes
                    </a>
                  </li>
                  <li>
                    <a className="block px-2 py-3" href="#">
                      Backpacks
                    </a>
                  </li>
                  <li>
                    <a className="block px-2 py-3" href="#">
                      Travel Bags
                    </a>
                  </li>
                  <li>
                    <a className="block px-2 py-3" href="#">
                      Hip Bags
                    </a>
                  </li>
                  <li>
                    <a className="block px-2 py-3" href="#">
                      Laptop Sleeves
                    </a>
                  </li>
                </ul>

                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button
                      aria-controls="filter-section-mobile-0"
                      aria-expanded="false"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      type="button"
                    >
                      <span className="font-medium text-gray-900">Color</span>
                      <span className="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div className="pt-6" id="filter-section-mobile-0">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-color-0"
                          name="color[]"
                          type="checkbox"
                          value="white"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-color-0"
                        >
                          White
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-color-1"
                          name="color[]"
                          type="checkbox"
                          value="beige"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-color-1"
                        >
                          Beige
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-color-2"
                          name="color[]"
                          type="checkbox"
                          value="blue"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-color-2"
                        >
                          Blue
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-color-3"
                          name="color[]"
                          type="checkbox"
                          value="brown"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-color-3"
                        >
                          Brown
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-color-4"
                          name="color[]"
                          type="checkbox"
                          value="green"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-color-4"
                        >
                          Green
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-color-5"
                          name="color[]"
                          type="checkbox"
                          value="purple"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-color-5"
                        >
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button
                      aria-controls="filter-section-mobile-1"
                      aria-expanded="false"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      type="button"
                    >
                      <span className="font-medium text-gray-900">
                        Category
                      </span>
                      <span className="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div className="pt-6" id="filter-section-mobile-1">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-category-0"
                          name="category[]"
                          type="checkbox"
                          value="new-arrivals"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-category-0"
                        >
                          New Arrivals
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-category-1"
                          name="category[]"
                          type="checkbox"
                          value="sale"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-category-1"
                        >
                          Sale
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-category-2"
                          name="category[]"
                          type="checkbox"
                          value="travel"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-category-2"
                        >
                          Travel
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-category-3"
                          name="category[]"
                          type="checkbox"
                          value="organization"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-category-3"
                        >
                          Organization
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-category-4"
                          name="category[]"
                          type="checkbox"
                          value="accessories"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-category-4"
                        >
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button
                      aria-controls="filter-section-mobile-2"
                      aria-expanded="false"
                      className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      type="button"
                    >
                      <span className="font-medium text-gray-900">Size</span>
                      <span className="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div className="pt-6" id="filter-section-mobile-2">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-size-0"
                          name="size[]"
                          type="checkbox"
                          value="2l"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-size-0"
                        >
                          2L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-size-1"
                          name="size[]"
                          type="checkbox"
                          value="6l"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-size-1"
                        >
                          6L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-size-2"
                          name="size[]"
                          type="checkbox"
                          value="12l"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-size-2"
                        >
                          12L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-size-3"
                          name="size[]"
                          type="checkbox"
                          value="18l"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-size-3"
                        >
                          18L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-size-4"
                          name="size[]"
                          type="checkbox"
                          value="20l"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-size-4"
                        >
                          20L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-mobile-size-5"
                          name="size[]"
                          type="checkbox"
                          value="40l"
                        />
                        <label
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                          htmlFor="filter-mobile-size-5"
                        >
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div>
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
                </div>

                {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                <div
                  aria-labelledby="menu-button"
                  aria-orientation="vertical"
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    {/* <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                --> */}
                    <a
                      className="block px-4 py-2 text-sm font-medium text-gray-900"
                      href="#"
                      id="menu-item-0"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Most Popular
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-500"
                      href="#"
                      id="menu-item-1"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Best Rating
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-500"
                      href="#"
                      id="menu-item-2"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Newest
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-500"
                      href="#"
                      id="menu-item-3"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Price: Low to High
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-gray-500"
                      href="#"
                      id="menu-item-4"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Price: High to Low
                    </a>
                  </div>
                </div>
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
                  <li>
                    <a href="#">Totes</a>
                  </li>
                  <li>
                    <a href="#">Backpacks</a>
                  </li>
                  <li>
                    <a href="#">Travel Bags</a>
                  </li>
                  <li>
                    <a href="#">Hip Bags</a>
                  </li>
                  <li>
                    <a href="#">Laptop Sleeves</a>
                  </li>
                </ul>

                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button
                      aria-controls="filter-section-0"
                      aria-expanded="false"
                      className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      type="button"
                    >
                      <span className="font-medium text-gray-900">Color</span>
                      <span className="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-color-0"
                          name="color[]"
                          type="checkbox"
                          value="white"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-color-0"
                        >
                          White
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-color-1"
                          name="color[]"
                          type="checkbox"
                          value="beige"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-color-1"
                        >
                          Beige
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-color-2"
                          name="color[]"
                          type="checkbox"
                          value="blue"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-color-2"
                        >
                          Blue
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-color-3"
                          name="color[]"
                          type="checkbox"
                          value="brown"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-color-3"
                        >
                          Brown
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-color-4"
                          name="color[]"
                          type="checkbox"
                          value="green"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-color-4"
                        >
                          Green
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-color-5"
                          name="color[]"
                          type="checkbox"
                          value="purple"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-color-5"
                        >
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button
                      aria-controls="filter-section-1"
                      aria-expanded="false"
                      className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      type="button"
                    >
                      <span className="font-medium text-gray-900">
                        Category
                      </span>
                      <span className="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div className="pt-6" id="filter-section-1">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-category-0"
                          name="category[]"
                          type="checkbox"
                          value="new-arrivals"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-category-0"
                        >
                          New Arrivals
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-category-1"
                          name="category[]"
                          type="checkbox"
                          value="sale"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-category-1"
                        >
                          Sale
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-category-2"
                          name="category[]"
                          type="checkbox"
                          value="travel"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-category-2"
                        >
                          Travel
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-category-3"
                          name="category[]"
                          type="checkbox"
                          value="organization"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-category-3"
                        >
                          Organization
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-category-4"
                          name="category[]"
                          type="checkbox"
                          value="accessories"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-category-4"
                        >
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button
                      aria-controls="filter-section-2"
                      aria-expanded="false"
                      className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                      type="button"
                    >
                      <span className="font-medium text-gray-900">Size</span>
                      <span className="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div className="pt-6" id="filter-section-2">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-size-0"
                          name="size[]"
                          type="checkbox"
                          value="2l"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-size-0"
                        >
                          2L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-size-1"
                          name="size[]"
                          type="checkbox"
                          value="6l"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-size-1"
                        >
                          6L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-size-2"
                          name="size[]"
                          type="checkbox"
                          value="12l"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-size-2"
                        >
                          12L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-size-3"
                          name="size[]"
                          type="checkbox"
                          value="18l"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-size-3"
                        >
                          18L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-size-4"
                          name="size[]"
                          type="checkbox"
                          value="20l"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-size-4"
                        >
                          20L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          id="filter-size-5"
                          name="size[]"
                          type="checkbox"
                          value="40l"
                        />
                        <label
                          className="ml-3 text-sm text-gray-600"
                          htmlFor="filter-size-5"
                        >
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {/* <!-- Product grid --> */}
              <div className="lg:col-span-3">{/* <!-- Your content --> */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
