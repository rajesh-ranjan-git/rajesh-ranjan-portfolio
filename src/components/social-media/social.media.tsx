"use client";

import Link from "next/link";
import { socialMediaList } from "@/config/social.config";
import { SocialMediaProps } from "@/types/props/common.props.types";
import { getSocialLinks } from "@/helpers/owner.helpers";
import Tooltip from "@/components/ui/tooltip/tooltip";

const SocialMedia = ({ section }: SocialMediaProps) => {
  const socials = getSocialLinks();

  return (
    <div
      className={`text-fixed-light flex flex-wrap justify-center lg:justify-start items-center gap-2 ${section === "contact" ? "w-max" : "w-full"}`}
    >
      {socialMediaList.map((social) => {
        const socialLink = socials.find((s) => s?.id === social.id);

        if (!socialLink) return null;

        const href = socialLink.url;
        const Icon = social.icon;

        return (
          <Tooltip
            key={social.id}
            content={social.label}
            position="top"
            delay={0}
          >
            <Link
              href={href ?? ""}
              className={`flex justify-center items-center p-1 rounded-full w-10 h-10 shadow-[0_12px_20px_var(--color-surface-shadow)] transition-all duration-300 ${social.color ? social.color : "text-social-text"} ${social.bgColor ? social.bgColor : "bg-social-bg"} hover:bg-social-hover`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default SocialMedia;
