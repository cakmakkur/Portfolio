import projectVideo from "../../Assets/projectVideos/band_demo.mp4";

export default function BuyBuyAdminVideo() {
  return (
    <video controls>
      <source src={projectVideo} type="video/mp4" />
      Your browser does not support the video.
    </video>
  );
}
