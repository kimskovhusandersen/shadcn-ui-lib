import { Button } from "@/components/ui/button";

export const AccountButton = () => {
  return (
    <Button className="rounded-full border-none" size="icon" variant="outline">
      <span className="sr-only">Account</span>
      <svg
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_369_4314)">
          <path
            d="M6.66675 9.16683C6.66675 10.0509 7.01794 10.8987 7.64306 11.5239C8.26818 12.149 9.11603 12.5002 10.0001 12.5002C10.8841 12.5002 11.732 12.149 12.3571 11.5239C12.9822 10.8987 13.3334 10.0509 13.3334 9.16683C13.3334 8.28277 12.9822 7.43493 12.3571 6.80981C11.732 6.18469 10.8841 5.8335 10.0001 5.8335C9.11603 5.8335 8.26818 6.18469 7.64306 6.80981C7.01794 7.43493 6.66675 8.28277 6.66675 9.16683V9.16683Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
          ></path>
          <path
            d="M15.7609 17.3968C15.0061 16.6372 14.1085 16.0344 13.1199 15.6231C12.1312 15.2118 11.0709 15 10.0001 15C8.92926 15 7.869 15.2118 6.88032 15.6231C5.89165 16.0344 4.99408 16.6372 4.23926 17.3968"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
          ></path>
          <path
            d="M0.625 10C0.625 12.4864 1.61272 14.871 3.37087 16.6291C5.12903 18.3873 7.5136 19.375 10 19.375C12.4864 19.375 14.871 18.3873 16.6291 16.6291C18.3873 14.871 19.375 12.4864 19.375 10C19.375 7.5136 18.3873 5.12903 16.6291 3.37087C14.871 1.61272 12.4864 0.625 10 0.625C7.5136 0.625 5.12903 1.61272 3.37087 3.37087C1.61272 5.12903 0.625 7.5136 0.625 10V10Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_369_4314">
            <rect fill="white" height="20" width="20"></rect>
          </clipPath>
        </defs>
      </svg>
    </Button>
  );
};
