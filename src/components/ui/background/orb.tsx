import orbStyles from "@/styles/orb.module.css";

const Orb = () => {
  return (
    <div className="z-0 fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className={`-right-25 bottom-0 w-125 h-125 absolute rounded-[50%] pointer-events-none blur-[60px] ${orbStyles.orb_purple}`}
      />
      <div
        className={`top-1/2 left-1/2 opacity-50 w-75 h-75 animate-delay-[8s] absolute rounded-[50%] pointer-events-none blur-[60px] ${orbStyles.orb_blue}`}
      />
    </div>
  );
};

export default Orb;
