import Image from "next/image";

import { cn } from "./ui";

export function RemoteImage({
  src,
  alt,
  className,
  width = 1600,
  height = 1200,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={cn("w-full", className)}
    />
  );
}