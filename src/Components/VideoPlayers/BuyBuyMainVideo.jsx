import projectVideo from "../../Assets/projectVideos/buybuy_demo.mp4";

export default function BuyBuyMainVideo() {
  return (
    <video controls>
      <source src={projectVideo} type="video/mp4" />
      Your browser does not support the video.
    </video>
  );
}
