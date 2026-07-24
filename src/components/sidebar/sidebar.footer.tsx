import Image from "next/image";
import Link from "next/link";
import { basicDetails } from "@/config/owner.config";
import { useAppStore } from "@/store/store";
import { getFullName } from "@/helpers/owner.helpers";

const SidebarFooter = () => {
  const sidebarToggle = useAppStore((state) => state.sidebarToggle);
  const setSidebarToggle = useAppStore((state) => state.setSidebarToggle);

  const handleImageClick = () => {
    if (!sidebarToggle) {
      setSidebarToggle(!sidebarToggle);
    }
  };

  return (
    <div className="flex flex-col w-full h-12 overflow-hidden shrink-0">
      <hr className="text-slate-700" />
      <div className="flex justify-between items-center gap-2 px-1 w-full h-full">
        <Image
          src="/assets/personal-img/profile-photo-3d-cartoon-square.webp"
          width={40}
          height={40}
          alt="profile-img"
          loading="eager"
          className="bg-linear-to-r border border-surface-border hover:border-surface-border-hover rounded-full hover:scale-105 transition-all ease-in-out from-accent-purple to-accent-blue cursor-pointer"
          onClick={handleImageClick}
        />

        {sidebarToggle && (
          <div className="flex flex-col w-full">
            <p className="w-full font-alkatra font-bold text-md whitespace-nowrap translate-y-1">
              {getFullName()}
            </p>
            {basicDetails.social.google ? (
              <Link
                href="mailto:rajeshranjan8271@gmail.com"
                target="_blank"
                className="font-semibold text-slate-400 hover:text-white text-xs transition-all ease-in-out"
              >
                {basicDetails.social.google}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarFooter;
