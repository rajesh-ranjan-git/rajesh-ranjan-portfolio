import Image from "next/image";
import { basicDetails } from "@/config/owner.config";

const GreetingsImage = () => {
  return basicDetails.images.greetingsImage ? (
    <Image
      src={basicDetails.images.greetingsImage}
      alt="profile-img-3d-cartoon"
      title="3D Cartoon Profile Image"
      width={1024}
      height={1536}
      loading="eager"
      className="rounded-br-[50%] w-full h-auto object-cover"
    />
  ) : (
    <div className="flex justify-center items-center bg-surface-bg hover:bg-surface-bg-hover border border-surface-border hover:border-surface-border-hover rounded-3xl w-full h-40">
      Your Greetings Image goes here..
    </div>
  );
};

export default GreetingsImage;
