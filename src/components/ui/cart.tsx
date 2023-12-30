import { Button } from "@/components/ui/button";
import { CartItem } from "./cart-item";
import { CartSummary } from "./cart-summary";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export const cartItems = [
  {
    name: "Throwback Hip Bag",
    price: "$90.00",
    color: "Salmon",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
  },
  {
    name: "Throwback Hip Bag",
    price: "$90.00",
    color: "Salmon",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
  },
  {
    name: "Medium Stuff Satchel",
    price: "$32.00",
    color: "Blue",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
  },
];

export const Cart = () => {
  return (
    <Sheet key={"right"}>
      <SheetTrigger className="z-50">
        <Button
          className="rounded-full border-none"
          size="icon"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="sr-only">items in cart, view bag</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto p-0" side={"right"}>
        <SheetHeader>
          <SheetTitle className="sr-only">Cart</SheetTitle>
        </SheetHeader>
        {/* <div className="fixed inset-0 overflow-hidden"> */}
        {/* <div className="absolute inset-0 overflow-hidden"> */}
        <div className="pointer-events-none flex max-w-full">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                  {/* <div className="ml-3 flex h-7 items-center">
                        <button
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          type="button"
                        >
                          <span className="absolute -inset-0.5"></span>
                          <span className="sr-only">Close panel</span>
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
                      </div> */}
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <CartItem {...item} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <CartSummary
                subtotalAmount={{ amount: "122", currencyCode: "EUR" }}
              />
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <button
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    type="button"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </SheetContent>
    </Sheet>
  );
};
