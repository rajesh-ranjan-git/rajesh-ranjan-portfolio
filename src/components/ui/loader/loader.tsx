import loaderStyles from "@/styles/loader.module.css";
import { LoaderProps } from "@/types/props/common.props.types";

const Loader = ({
  outerColor = "var(--fixed-light)",
  middleColor = "var(--accent-pink)",
  innerColor = "var(--fixed-light)",
}: LoaderProps) => {
  return (
    <div
      className={`rounded-full relative inline-block after:absolute before:absolute after:left-0 before:left-0 after:right-0 before:right-0 after:top-0 before:top-0 after:bottom-0 before:bottom-0 after:m-auto before:m-auto after:rounded-full before:rounded-full ${loaderStyles.loader}`}
      style={
        {
          "--outer-color": outerColor,
          "--middle-color": middleColor,
          "--inner-color": innerColor,
        } as React.CSSProperties
      }
    ></div>
  );
};

export default Loader;
