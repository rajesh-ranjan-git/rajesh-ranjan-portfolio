import greetingsStyles from "@/styles/greetings.module.css";
import GreetingsBackground from "@/components/greetings/greetings.background";
import GreetingsContent from "@/components/greetings/greetings.content";

const Greetings = () => {
  return (
    <section
      id="home"
      className={`before:block before:z-10 before:absolute relative before:inset-0 flex flex-wrap justify-around items-center before:opacity-100 pr-2 md:pr-10 md:pl-6 py-0 min-h-screen md:max-h-screen w-full ${greetingsStyles.greetings}`}
    >
      <GreetingsBackground />

      <GreetingsContent />
    </section>
  );
};

export default Greetings;
