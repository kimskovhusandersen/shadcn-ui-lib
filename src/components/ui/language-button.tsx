import { Button } from "@/components/ui/button";

export const LanguageButton = () => {
  return (
    <Button className="rounded-full border-none" size="icon" variant="outline">
      <img
        alt=""
        className="block h-auto w-5 flex-shrink-0"
        src="https://tailwindui.com/img/flags/flag-canada.svg"
      />
      <span className="sr-only">, change currency</span>
    </Button>
  );
};
