import Image from "next/image";

interface ProxiedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ProxiedImage({ src, alt, fill, width, height, className, sizes, priority }: ProxiedImageProps) {
  // If it's a local image, use it directly
  if (src.startsWith("/")) {
    if (fill) {
      return (
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          sizes={sizes}
          priority={priority}
        />
      );
    }
    return (
      <Image
        src={src}
        alt={alt}
        width={width!}
        height={height!}
        className={className}
        priority={priority}
      />
    );
  }

  // If it's a Chrono24 URL, proxy it through our API
  if (src.startsWith("https://img.chrono24.com/")) {
    const proxiedSrc = `/api/proxy-image?url=${encodeURIComponent(src)}`;
    
    if (fill) {
      return (
        <Image
          src={proxiedSrc}
          alt={alt}
          fill
          unoptimized
          className={className}
          sizes={sizes}
          priority={priority}
        />
      );
    }
    return (
      <Image
        src={proxiedSrc}
        alt={alt}
        width={width!}
        height={height!}
        unoptimized
        className={className}
        priority={priority}
      />
    );
  }

  // For other external URLs, use unoptimized
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width!}
      height={height!}
      unoptimized
      className={className}
      priority={priority}
    />
  );
}