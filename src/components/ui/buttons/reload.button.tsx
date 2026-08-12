import Loader from "@/components/ui/loader/loader";

const ReloadButton = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-full text-center">
      <button
        type="button"
        className="group text-fixed-light flex items-center gap-2 bg-error hover:bg-emerald-700 shadow-xl px-4 py-2 rounded-xl font-medium text-sm transition-all hover:-translate-y-0.5 duration-500 cursor-pointer"
        onClick={() => {
          window.location.reload();
        }}
      >
        <span className="font-medium">Reload</span>

        <Loader
          outerColor="var(--fixed-light)"
          middleColor="transparent"
          innerColor="var(--fixed-light)"
        />
      </button>
    </div>
  );
};

export default ReloadButton;
