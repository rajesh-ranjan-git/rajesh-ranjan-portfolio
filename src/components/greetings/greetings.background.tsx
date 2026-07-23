import greetingsStyles from "@/styles/greetings.module.css";
import GreetingsParticles from "@/components/greetings/greetings.particles";

const GreetingsBackground = () => {
  return (
    <>
      <GreetingsParticles />

      <div
        className={`border-8 z-6 border-alternate-bg opacity-20 absolute lg:w-160 lg:h-160 md:w-120 md:h-120 w-80 h-80 block lg:left-[-20%] lg:bottom-[-30%] left-[-5%] bottom-[-10%] ${greetingsStyles.rectangle_transparent}`}
      ></div>

      <div
        className={`border-8 z-6 border-alternate-bg opacity-20 absolute block lg:w-120 lg:h-120 md:w-140 md:h-140 w-100 h-100 right-[10%] top-[5%] ${greetingsStyles.rectangle_transparent}`}
      ></div>

      <div
        className={`border-2 z-6 border-alternate-bg opacity-20 absolute block rounded-full w-20 h-20 left-[5%] top-[50%] ${greetingsStyles.circle}`}
      ></div>

      <div
        className={`border-2 z-6 border-alternate-bg opacity-20 absolute block rounded-full w-32 h-32 left-[83%] top-[20%] ${greetingsStyles.circle}`}
      ></div>

      <div
        className={`border-2 z-6 border-alternate-bg opacity-20 absolute block rounded-full w-40 h-40 right-[25%] top-[80%] ${greetingsStyles.circle}`}
      ></div>

      <div className={`absolute z-6 right-[50%] ${greetingsStyles.triangle_1}`}>
        <svg
          width="75"
          height="75"
          viewBox="0 0 100 100"
          className="opacity-20"
        >
          <polygon
            points="50,5 95,95 5,95"
            fill="none"
            stroke="var(--alternate-bg)"
            strokeWidth="4"
          />
        </svg>
      </div>

      <div
        className={`absolute z-6 top-[30%] left-[20%] ${greetingsStyles.triangle_2}`}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          className="opacity-20"
        >
          <polygon
            points="50,5 95,95 5,95"
            fill="none"
            stroke="var(--alternate-bg)"
            strokeWidth="4"
          />
        </svg>
      </div>

      <div
        className={`absolute z-6 top-[80%] left-[15%] ${greetingsStyles.triangle_3}`}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 100 100"
          className="opacity-20"
        >
          <polygon
            points="50,5 95,95 5,95"
            fill="none"
            stroke="var(--alternate-bg)"
            strokeWidth="4"
          />
        </svg>
      </div>

      <div
        className={`absolute z-6 top-0 right-[10%] ${greetingsStyles.triangle_4}`}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 100 100"
          className="opacity-20"
        >
          <polygon
            points="50,5 95,95 5,95"
            fill="none"
            stroke="var(--alternate-bg)"
            strokeWidth="4"
          />
        </svg>
      </div>

      <div
        className={`w-[100vh] md:w-[300vh] z-8 h-64 absolute left-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_1}`}
      ></div>

      <div
        className={`w-[250vh] z-8 h-64 absolute left-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_2}`}
      ></div>
    </>
  );
};

export default GreetingsBackground;
