import { Mail, Github, Instagram, type LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  platform: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    label: "faezaraziqg@gmail.com",
    href: "mailto:faezaraziqg@gmail.com",
    platform: "Email",
  },
  {
    icon: Github,
    label: "github.com/Farzync",
    href: "https://github.com/Farzync",
    platform: "GitHub",
  },
  {
    icon: Instagram,
    label: "instagram.com/zazaraziq",
    href: "https://instagram.com/zazaraziq",
    platform: "Instagram",
  },
];

interface SocialLinksProps {
  onLinkClick: (link: SocialLink) => void;
}

const SocialLinks = ({ onLinkClick }: SocialLinksProps) => {
  return (
    <div className="flex flex-col gap-2">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <button
            key={link.label}
            onClick={() => onLinkClick(link)}
            className="flex items-center gap-2.5 text-muted-foreground transition-colors duration-200 hover:text-primary w-full text-left py-1"
          >
            <Icon size={18} strokeWidth={1.5} />
            <span className="text-sm font-body">{link.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
