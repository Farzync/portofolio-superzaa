import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Compass } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <main className="flex flex-1 flex-col items-center justify-center text-center max-w-xl w-full gap-16 sm:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative flex items-center justify-center transition-opacity duration-700 opacity-0 animate-fadeIn">
            <h1 className="font-heading text-8xl sm:text-9xl font-bold tracking-tight text-foreground z-10 select-none">
              404
            </h1>
          </div>

          <Separator />

          <p className="mt-1 text-sm sm:text-base font-body uppercase tracking-[0.3em] text-muted-foreground transition-opacity duration-700 opacity-0 animate-fadeIn [animation-delay:200ms]">
            Page Not Found
          </p>
        </div>

        {/* Info card — mirrors Index card block */}
        <div className="flex justify-center w-full transition-opacity duration-700 opacity-0 animate-fadeIn [animation-delay:400ms]">
          <div className="relative w-full max-w-sm">
            {/* Floating label — same pattern as Index "Contact Me" badge */}
            <span className="absolute -top-2.5 left-4 z-10 bg-background px-2 text-[11px] font-body text-muted-foreground border border-border rounded-full leading-5 flex items-center gap-1">
              <Compass className="w-3 h-3" />
              Lost?
            </span>

            <Card className="w-full pt-5 pb-4">
              <CardContent className="px-5 py-0 flex flex-col gap-4">
                {/* Message */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  The page you're looking for doesn't exist or may have been
                  moved or deleted.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer — identical to Index */}
      <footer className="mt-auto pt-16 pb-8 transition-opacity duration-700 opacity-0 animate-fadeIn [animation-delay:600ms]">
        <p className="text-xs text-muted-foreground font-body">
          &copy; {new Date().getUTCFullYear()} Faeza Raziq
        </p>
      </footer>
    </div>
  );
};

export default NotFound;
