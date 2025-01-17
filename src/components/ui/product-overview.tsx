import useBreadcrumbs from "@/hooks/use-breadcrumbs";
import { Breadcrumbs } from "./breadcrumbs";

export const ProductOverview = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className="bg-white">
      <div className="pt-6">
        <Breadcrumbs items={breadcrumbs} />

        {/* <!-- Image gallery --> */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              alt="Two each of gray, white, and black shirts laying flat."
              className="h-full w-full object-cover object-center"
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt="Model wearing plain black basic tee."
                className="h-full w-full object-cover object-center"
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt="Model wearing plain gray basic tee."
                className="h-full w-full object-cover object-center"
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt="Model wearing plain white basic tee."
              className="h-full w-full object-cover object-center"
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
            />
          </div>
        </div>

        {/* <!-- Product info --> */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Basic Tee 6-Pack
            </h1>
          </div>

          {/* <!-- Options --> */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">$192</p>

            {/* <!-- Reviews --> */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  href="#"
                >
                  117 reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* <!-- Colors --> */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <fieldset className="mt-4">
                  <legend className="sr-only">Choose a color</legend>
                  <div className="flex items-center space-x-3">
                    {/* <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                --> */}
                    <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                      <input
                        aria-labelledby="color-choice-0-label"
                        className="sr-only"
                        name="color-choice"
                        type="radio"
                        value="White"
                      />
                      <span className="sr-only" id="color-choice-0-label">
                        White
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"
                      ></span>
                    </label>
                    {/* <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                --> */}
                    <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                      <input
                        aria-labelledby="color-choice-1-label"
                        className="sr-only"
                        name="color-choice"
                        type="radio"
                        value="Gray"
                      />
                      <span className="sr-only" id="color-choice-1-label">
                        Gray
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"
                      ></span>
                    </label>
                    {/* <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                --> */}
                    <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
                      <input
                        aria-labelledby="color-choice-2-label"
                        className="sr-only"
                        name="color-choice"
                        type="radio"
                        value="Black"
                      />
                      <span className="sr-only" id="color-choice-2-label">
                        Black
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
                      ></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              {/* <!-- Sizes --> */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    href="#"
                  >
                    Size guide
                  </a>
                </div>

                <fieldset className="mt-4">
                  <legend className="sr-only">Choose a size</legend>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                    <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        aria-labelledby="size-choice-0-label"
                        className="sr-only"
                        disabled
                        name="size-choice"
                        type="radio"
                        value="XXS"
                      />
                      <span id="size-choice-0-label">XXS</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                          viewBox="0 0 100 100"
                        >
                          <line
                            vector-effect="non-scaling-stroke"
                            x1="0"
                            x2="100"
                            y1="100"
                            y2="0"
                          />
                        </svg>
                      </span>
                    </label>
                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        aria-labelledby="size-choice-1-label"
                        className="sr-only"
                        name="size-choice"
                        type="radio"
                        value="XS"
                      />
                      <span id="size-choice-1-label">XS</span>
                      {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md"
                      ></span>
                    </label>
                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        aria-labelledby="size-choice-2-label"
                        className="sr-only"
                        name="size-choice"
                        type="radio"
                        value="S"
                      />
                      <span id="size-choice-2-label">S</span>
                      {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md"
                      ></span>
                    </label>
                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        aria-labelledby="size-choice-3-label"
                        className="sr-only"
                        name="size-choice"
                        type="radio"
                        value="M"
                      />
                      <span id="size-choice-3-label">M</span>
                      {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md"
                      ></span>
                    </label>
                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        aria-labelledby="size-choice-4-label"
                        className="sr-only"
                        name="size-choice"
                        type="radio"
                        value="L"
                      />
                      <span id="size-choice-4-label">L</span>
                      {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md"
                      ></span>
                    </label>
                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        aria-labelledby="size-choice-5-label"
                        className="sr-only"
                        name="size-choice"
                        type="radio"
                        value="XL"
                      />
                      <span id="size-choice-5-label">XL</span>
                      {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md"
                      ></span>
                    </label>
                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        aria-labelledby="size-choice-6-label"
                        className="sr-only"
                        name="size-choice"
                        type="radio"
                        value="2XL"
                      />
                      <span id="size-choice-6-label">2XL</span>
                      {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md"
                      ></span>
                    </label>
                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                      <input
                        aria-labelledby="size-choice-7-label"
                        className="sr-only"
                        name="size-choice"
                        type="radio"
                        value="3XL"
                      />
                      <span id="size-choice-7-label">3XL</span>
                      {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md"
                      ></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <button
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="submit"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* <!-- Description and details --> */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: &quot;Black&quot;. Need to add an extra
                  pop of color to your outfit? Our white tee has you covered.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm" role="list">
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Hand cut and sewn locally
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Dyed with our proprietary colors
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Pre-washed &amp; pre-shrunk
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Ultra-soft 100% cotton
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  The 6-Pack includes two black, two white, and two heather gray
                  Basic Tees. Sign up for our subscription service and be the
                  first to get new, exciting colors, like our upcoming
                  &quot;Charcoal Gray&quot; limited release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
