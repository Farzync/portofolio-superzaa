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

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onCancel()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-heading tracking-tight">
            Leave this page?
          </DialogTitle>
          <DialogDescription className="font-body text-sm leading-relaxed">
            You&apos;re about to be redirected to an external link.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3">
          <Icon
            size={16}
            strokeWidth={1.5}
            className="text-muted-foreground shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-body">
              {link.platform}
            </span>
            <span className="text-sm font-body text-foreground truncate">
              {link.label}
            </span>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="font-body text-sm"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={onConfirm}
            className="font-body text-sm gap-2"
          >
            <ExternalLink size={14} />
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LinkConfirmModal;
