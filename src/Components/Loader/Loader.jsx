import "./loader.scss";

export default function Loader(props) {
  return (
    <>
      <div className="fly">
        <div className="body">
          <span>
            <span />
            <span />
            <span />
            <span />
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
      </div>
      <div className="longfazers">
        <span />
        <span />
        <span />
        <span />
      </div>
      <h1 id="loading">Loading</h1>
    </>
  );
}
