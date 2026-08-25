import { MessageCircle } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center">
      <div className="container flex items-center justify-center gap-6 text-sm">
        <span className="hidden sm:inline">Worldwide insured shipping</span>
        <span className="hidden sm:inline">·</span>
        <span>100% authenticity guarantee</span>
        <span className="hidden sm:inline">·</span>
        <a 
          href="https://wa.me/16462440064"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span> +1 (646) 244-0064
        </a>
      </div>
    </div>
  );
}