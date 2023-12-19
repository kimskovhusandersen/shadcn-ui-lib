import { Button } from "@/components/ui/button";
import { Icons } from "./icons";

export const AccountButton = () => {
  return (
    <Button className="rounded-full border-none" size="icon" variant="outline">
      <span className="sr-only">Account</span>
      {Icons.account()}
    </Button>
  );
};
