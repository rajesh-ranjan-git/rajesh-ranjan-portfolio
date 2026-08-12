import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { BackButtonProps } from "@/types/props/common.props.types";

const BackButton = ({ back }: BackButtonProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center gap-4 w-full text-center">
      <button
        type="button"
        className="group flex items-center gap-2 bg-amber-50 hover:bg-amber-100 shadow-xl px-4 py-2 border border-amber-300 rounded-xl font-medium text-amber-700 text-sm transition-all duration-500 cursor-pointer"
        onClick={() => (back ? router.back() : router.push("/"))}
      >
        <LuArrowLeft
          size={20}
          className="transition-transform group-hover:-translate-x-0.5 duration-500"
        />

        <span className="font-medium">{back ? "Go Back" : "Go Home"}</span>
      </button>
    </div>
  );
};

export default BackButton;
