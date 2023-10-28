import * as ReactAvatar from "@radix-ui/react-avatar";
import React, { PropsWithChildren } from "react";

export type AvartarProps = PropsWithChildren<
  Pick<ReactAvatar.AvatarImageProps, "alt" | "src">
>;

export function Avatar({ alt, src, children }: AvartarProps) {
  return (
    <ReactAvatar.Root className="inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-[100%] bg-[color:var(--black-a3)] align-middle">
      <ReactAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={src}
        alt={alt}
      />
      <ReactAvatar.Fallback
        className="flex h-full w-full items-center justify-center bg-[white] text-[15px] font-medium leading-none text-[color:var(--violet-11)]"
        delayMs={600}
      >
        {children}
      </ReactAvatar.Fallback>
    </ReactAvatar.Root>
  );
}
export default Avatar;
