import { createContext, useContext, useState, ReactNode } from "react";
import type { SocialLink } from "@/components/SocialLinks";

interface LinkConfirmModalContextProps {
  open: boolean;
  link: SocialLink | null;
  showModal: (link: SocialLink) => void;
  hideModal: () => void;
}

const LinkConfirmModalContext = createContext<
  LinkConfirmModalContextProps | undefined
>(undefined);

export const useLinkConfirmModal = () => {
  const ctx = useContext(LinkConfirmModalContext);
  if (!ctx)
    throw new Error(
      "useLinkConfirmModal must be used within LinkConfirmModalProvider",
    );
  return ctx;
};

export const LinkConfirmModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState<SocialLink | null>(null);

  const showModal = (link: SocialLink) => {
    setLink(link);
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
    setLink(null);
  };

  return (
    <LinkConfirmModalContext.Provider
      value={{ open, link, showModal, hideModal }}
    >
      {children}
    </LinkConfirmModalContext.Provider>
  );
};
