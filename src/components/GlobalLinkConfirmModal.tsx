import LinkConfirmModal from "./LinkConfirmModal";
import { useLinkConfirmModal } from "@/hooks/useLinkConfirmModal";

const GlobalLinkConfirmModal = () => {
  const { open, link, hideModal } = useLinkConfirmModal();

  const handleConfirm = () => {
    if (link) {
      window.open(link.href, "_blank", "noopener,noreferrer");
    }
    hideModal();
  };

  return (
    <div className="transition-opacity duration-700 opacity-0 animate-fadeIn">
      <LinkConfirmModal
        link={link}
        open={open}
        onConfirm={handleConfirm}
        onCancel={hideModal}
      />
    </div>
  );
};

export default GlobalLinkConfirmModal;
