import { MoneyV2 } from "@/types";
import { buttonVariants } from "./button";

export function CartSummary({
  checkoutUrl,
  subtotalAmount,
}: {
  checkoutUrl?: string;
  subtotalAmount: Pick<MoneyV2, "amount" | "currencyCode"> | undefined;
}) {
  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>
          {subtotalAmount?.currencyCode} {subtotalAmount?.amount}
        </p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="flex flex-col items-center space-y-3 pt-3">
        {checkoutUrl && (
          <a
            className={buttonVariants({ size: "lg" })}
            href={checkoutUrl}
            target="_self"
          >
            Checkout
          </a>
        )}
        <a className={buttonVariants({ variant: "link" })} href="/">
          See cart
        </a>
      </div>
    </div>
  );
}
