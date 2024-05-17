import logo from "../Assets/logo-l.png";

export default function Loading() {
  const loadingPageStyle = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    // justifyContent: "center",
    // alighItems: "center"
    objectFit: "contain",
  };
  // const imageStyle = {

  // }
  return (
    <div>
      <img style={loadingPageStyle} src={logo} alt="" />
    </div>
  );
}
