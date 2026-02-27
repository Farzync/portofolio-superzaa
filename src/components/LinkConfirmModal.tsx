import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { SocialLink } from "./SocialLinks";

interface LinkConfirmModalProps {
  link: SocialLink | null;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LinkConfirmModal = ({
  link,
  open,
  onConfirm,
  onCancel,
}: LinkConfirmModalProps) => {
  if (!link) return null;
  const Icon = link.icon;

  // Only modal (DialogContent) gets fade-in/fade-out effect
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onCancel()}>
      <DialogContent
        className={[
          "sm:max-w-sm",
          "transition-all duration-300 ease-in-out",
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none",
          "bg-background border border-border shadow-xl rounded-xl p-6 flex flex-col gap-6",
        ].join(" ")}
      >
        <DialogHeader>
          <DialogTitle className="font-heading tracking-tight text-2xl font-bold text-foreground mb-1">
            Leave this page?
          </DialogTitle>
          <DialogDescription className="font-body text-sm text-muted-foreground mb-2">
            You&apos;re about to be redirected to an external link.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 px-5 py-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
            <Icon
              size={20}
              strokeWidth={1.5}
              className="text-muted-foreground"
            />
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-body font-medium">
              {link.platform}
            </span>
            <span className="text-base font-body text-foreground truncate font-semibold">
              {link.label}
            </span>
          </div>
        </div>

        <DialogFooter className="flex gap-2 pt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="transition-colors duration-200 font-body text-sm rounded-lg px-4 py-2 border border-transparent hover:bg-muted/60 hover:text-foreground"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={onConfirm}
            className="transition-colors duration-200 font-body text-sm rounded-lg px-4 py-2 gap-2 bg-primary text-primary-foreground hover:bg-primary/80 shadow"
          >
            <ExternalLink size={16} />
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LinkConfirmModal;
