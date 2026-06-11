export interface Track {
  id: string;
  title: string;
  duration?: number;
  url: string;
}

export const musicTracks: Track[] = [
  {
    id: "5",
    title: "Tell me all",
    url: "/songs/k35.mp3",
  },
  {
    id: "1",
    title: "1.06 PM",
    url: "/songs/1.mp3",
  },
  {
    id: "2",
    title: "Hysteria",
    url: "/songs/H.mp3",
  },
  {
    id: "6",
    title: "Winds of Summer",
    url: "/songs/6.mp3",
  },
  {
    id: "4",
    title: "Beim Meer",
    url: "/songs/3.mp3",
  },
  {
    id: "3",
    title: "Stop the Time",
    url: "/songs/2.mp3",
  },
];
