import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Meta } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Components/Card",
  component: Card,
  subcomponents: {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  },
} as Meta;

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>Card content goes here</CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}

export function ProductCard() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Card className="group relative w-[350px]">
          <CardHeader className="p-0">
            <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              />
            </div>
          </CardHeader>
          <div className="flex justify-between p-6">
            <div>
              <h3 className="text-sm text-gray-700">
                <a
                  className="after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0"
                  href="#"
                >
                  Basic Tee
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">Aspen White</p>
            </div>
            <p className="text-sm font-medium text-gray-900">$35</p>
          </div>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Add to cart</Button>
            <Button onClick={() => alert("Clicked")}>Instant buy</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
