import loaderStyles from "@/styles/loader.module.css";

const Loader = () => {
  return (
    <div
      className={`rounded-full relative inline-block after:absolute before:absolute after:left-0 before:left-0 after:right-0 before:right-0 after:top-0 before:top-0 after:bottom-0 before:bottom-0 after:m-auto before:m-auto after:rounded-full before:rounded-full ${loaderStyles.loader}`}
    ></div>
  );
};

export default Loader;
