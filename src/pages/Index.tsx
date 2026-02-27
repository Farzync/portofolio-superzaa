import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SocialLinks, { type SocialLink } from "@/components/SocialLinks";
import LinkConfirmModal from "@/components/LinkConfirmModal";
import { Mail } from "lucide-react";

const Index = () => {
  const [selectedLink, setSelectedLink] = useState<SocialLink | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLinkClick = (link: SocialLink) => {
    setSelectedLink(link);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    if (selectedLink) {
      window.open(selectedLink.href, "_blank", "noopener,noreferrer");
    }
    setModalOpen(false);
    setSelectedLink(null);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectedLink(null);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <main className="flex flex-1 flex-col items-center justify-center text-center max-w-xl w-full gap-16 sm:gap-24">
        <div className="flex flex-col items-center">
          <div className="fade-in relative flex items-center justify-center">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
              Faeza Raziq
            </h1>
          </div>
          <p className="fade-in-delay-1 mt-3 text-sm sm:text-base font-body uppercase tracking-[0.3em] text-muted-foreground">
            Official Personal Website
          </p>
        </div>

        <div className="fade-in-delay-3 flex justify-center w-full">
          <div className="relative w-full max-w-sm">
            <span className="absolute -top-2.5 left-4 z-10 bg-background px-2 text-[11px] font-body text-muted-foreground border border-border rounded-full leading-5 flex items-center gap-1">
              <Mail className="w-3 h-3" />
              Contact Me
            </span>

            <Card className="w-full pt-3 pb-2">
              <CardContent className="px-4 py-0">
                <SocialLinks onLinkClick={handleLinkClick} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="fade-in-delay-3 mt-auto pt-16 pb-8">
        <p className="text-xs text-muted-foreground font-body">
          &copy; {new Date().getUTCFullYear()} Faeza Raziq
        </p>
      </footer>

      <LinkConfirmModal
        link={selectedLink}
        open={modalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Index;
