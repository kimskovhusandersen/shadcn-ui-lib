import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
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
    <Card className="group relative rounded-none border-none hover:drop-shadow-lg">
      <CardHeader className="p-0">
        <AspectRatio
          className="bg-gray-200 group-hover:opacity-75"
          ratio={3 / 4}
        >
          <img
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-center"
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          />
        </AspectRatio>
      </CardHeader>
      <div className="flex justify-between p-6">
        <div>
          <CardTitle className="text-md">
            <a
              className="after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Basic Tee
            </a>
          </CardTitle>
          <p className="mt-1 text-sm text-gray-500">Aspen White</p>
        </div>
        <p className="text-md font-semibold leading-none tracking-tight">$35</p>
      </div>
    </Card>
  );
}
