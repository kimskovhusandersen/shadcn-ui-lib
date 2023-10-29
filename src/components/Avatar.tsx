import * as ReactAvatar from "@radix-ui/react-avatar";
import React, { PropsWithChildren } from "react";
import { cls } from "tagged-classnames-free";

export type AvartarProps = PropsWithChildren<
  Pick<ReactAvatar.AvatarImageProps, "alt" | "src">
>;

export function Avatar({ alt, children, src }: AvartarProps) {
  return (
    <ReactAvatar.Root
      className={cls`inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden 
      rounded-[100%] bg-[color:var(--black-a3)] align-middle`}
    >
      <ReactAvatar.Image
        alt={alt}
        className={cls`h-full w-full rounded-[inherit] object-cover`}
        src={src}
      />
      <ReactAvatar.Fallback
        className={cls`flex h-full w-full items-center justify-center bg-[white] text-[15px] font-medium 
        leading-none text-[color:var(--violet-11)]`}
        delayMs={600}
      >
        {children}
      </ReactAvatar.Fallback>
    </ReactAvatar.Root>
  );
}
export default Avatar;
