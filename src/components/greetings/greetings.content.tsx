import GreetingsText from "@/components/greetings/greetings.text";
import SocialMedia from "@/components/social-media/social.media";
import GreetingsImage from "@/components/greetings/greetings.image";
import GreetingsButtons from "@/components/greetings/greetings.buttons";
import FadeIn from "@/components/ui/fade-in/fade.in";

const GreetingsContent = () => {
  return (
    <>
      <FadeIn
        delay={0}
        distance={40}
        className="z-10 flex flex-col justify-center gap-6 pt-16 lg:pt-0 w-full lg:w-[60%] h-full lg:text-left text-center grow"
      >
        <GreetingsText />

        <SocialMedia />

        <GreetingsButtons />
      </FadeIn>

      <FadeIn
        delay={0}
        distance={40}
        className="z-10 flex justify-center items-center w-full lg:w-[40%] h-full grow"
      >
        <GreetingsImage />
      </FadeIn>
    </>
  );
};

export default GreetingsContent;
