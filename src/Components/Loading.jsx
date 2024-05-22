import logo from "../Assets/logo-l.png";

export default function Loading() {
  const loadingPageStyle = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const imageStyle = {
    width: "30vw",
    height: "30vw",
    opacity: "0.01",
  };
  return (
    <div style={loadingPageStyle}>
      <img style={imageStyle} src={logo} alt="" />
    </div>
  );
}
