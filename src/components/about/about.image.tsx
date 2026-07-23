import Image from "next/image";
import Link from "next/link";
import { basicDetails } from "@/config/owner.config";
import { getFullName, getSingleSocialLink } from "@/helpers/owner.helpers";
import { toTitleCase } from "@/utils/common.utils";
import ImageBackground from "@/components/ui/background/image.background";
import FloatingBadge from "@/components/ui/floating/floating.badge";
import Tooltip from "@/components/ui/tooltip/tooltip";

const AboutImage = () => {
  const social = getSingleSocialLink(basicDetails.socialBadge);

  return (
    <div className="isolate relative flex justify-center items-center bg-surface-bg hover:bg-surface-bg-hover shadow-[0_8px_32px_rgba(13,15,43,0.08),0_2px_8px_rgba(13,15,43,0.04)] backdrop-blur-xl p-3 sm:p-4 border border-surface-border hover:border-surface-border-hover rounded-[64px] sm:rounded-[84px] w-full min-h-108">
      <ImageBackground className="top-0 left-0 -rotate-6" />
      <ImageBackground className="top-0 left-0 -rotate-12" />

      {basicDetails.totalExperience.years &&
      basicDetails.totalExperience.years > 0 ? (
        <FloatingBadge
          position="top-right"
          type="float-diagonal-reverse"
          duration={10}
          className="px-4"
        >
          <div className="flex justify-between items-center gap-1 w-full h-full">
            <span className="font-alkatra text-4xl text-accent-blue shrink-0">
              {basicDetails.totalExperience.years}
              <span className="text-2xl align-super">+</span>
            </span>
            <span className="flex flex-col justify-center items-start text-sm">
              <span>yrs of</span>
              <span>experience</span>
            </span>
          </div>
        </FloatingBadge>
      ) : basicDetails.totalExperience.months &&
        basicDetails.totalExperience.months > 0 ? (
        <FloatingBadge
          position="top-right"
          type="float-diagonal-reverse"
          duration={10}
          className="px-4"
        >
          <div className="flex justify-between items-center gap-1 w-full h-full">
            <span className="font-alkatra text-4xl text-accent-blue shrink-0">
              {basicDetails.totalExperience.months}
              <span className="text-2xl align-super">+</span>
            </span>
            <span className="flex flex-col justify-center items-start text-sm">
              <span>months of</span>
              <span>experience</span>
            </span>
          </div>
        </FloatingBadge>
      ) : null}

      {social ? (
        <Link
          href={social.url ?? ""}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FloatingBadge
            position="bottom-left"
            type="float-y"
            duration={3}
            className="flex justify-between items-center gap-1 pr-4"
          >
            <Tooltip
              content={toTitleCase(social.label)}
              position="bottom"
              delay={0}
            >
              <div className="bg-linear-to-r border border-surface-border hover:border-surface-border-hover rounded-full w-12 h-12 overflow-hidden from-accent-purple to-accent-blue shrink-0">
                {basicDetails.images.profileImage ? (
                  <Image
                    src={basicDetails.images.profileImage}
                    alt="Rajesh Ranjan profile illustration"
                    width={100}
                    height={100}
                    loading="eager"
                    className="rounded-full w-full h-auto"
                  />
                ) : (
                  <div className="flex justify-center items-center bg-surface-bg hover:bg-surface-bg-hover border border-surface-border hover:border-surface-border-hover rounded-3xl w-full h-full translate-y-0.5">
                    {basicDetails.initials ? basicDetails.initials : "JD"}
                  </div>
                )}
              </div>
              <span className="flex flex-col justify-center items-start text-sm">
                <span className="text-lg">{getFullName()}</span>
                <span className="text-alternate-secondary text-xs transition-all ease-in-out group-hover:text-accent-blue">
                  @{social.userName}
                </span>
              </span>
            </Tooltip>
          </FloatingBadge>
        </Link>
      ) : null}

      {basicDetails.images.aboutImage ? (
        <Image
          src={basicDetails.images.aboutImage}
          alt="Rajesh Ranjan profile illustration"
          width={1024}
          height={1536}
          loading="eager"
          className="rounded-br-[50%] w-full h-auto"
        />
      ) : (
        <div>Your About Image goes here..</div>
      )}
    </div>
  );
};

export default AboutImage;
