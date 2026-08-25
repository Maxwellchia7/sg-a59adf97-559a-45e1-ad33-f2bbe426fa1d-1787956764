interface ImagePlaceholderProps {
  src: string;
  alt: string;
  uploadPath: string;
  className?: string;
  aspectRatio?: string;
}

export function ImagePlaceholder({ src, alt, uploadPath, className = "", aspectRatio = "1/1" }: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center p-6 text-center ${className}`}
      style={{ aspectRatio }}
    >
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">IMAGE PLACEHOLDER</p>
        <p className="text-xs text-accent font-mono break-all">{uploadPath}</p>
        <p className="text-xs text-muted-foreground mt-2">{alt}</p>
      </div>
    </div>
  );
}

export function getPlaceholderPath(filename: string): string {
  return `[UPLOAD: maisoncalder.com → ${filename}]`;
}