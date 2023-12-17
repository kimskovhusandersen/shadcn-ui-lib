import * as ReactAvatar from "@radix-ui/react-avatar";
import { tv } from "tailwind-variants";

export type AvartarProps = React.PropsWithChildren<
  Pick<ReactAvatar.AvatarImageProps, "alt" | "src">
>;

const avatar = tv({
  slots: {
    root: "inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-[100%] bg-[color:var(--black-a3)] align-middle",
    image: "h-full w-full rounded-[inherit] object-cover",
    fallback:
      "flex h-full w-full items-center justify-center bg-[white] text-[15px] font-medium leading-none text-[color:var(--violet-11)]",
  },
});

export function Avatar({ alt, children, src }: AvartarProps) {
  const { fallback, image, root } = avatar();
  return (
    <ReactAvatar.Root className={root()}>
      <ReactAvatar.Image alt={alt} className={image()} src={src} />
      <ReactAvatar.Fallback className={fallback()} delayMs={600}>
        {children}
      </ReactAvatar.Fallback>
    </ReactAvatar.Root>
  );
}
export default Avatar;
