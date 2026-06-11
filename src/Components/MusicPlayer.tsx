/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Track } from "../data/music";

interface MusicPlayerProps {
  track: Track;
  isPlaying: boolean;
  onPlayToggle: () => void;
}

export default function MusicPlayer({
  track,
  isPlaying,
  onPlayToggle,
}: MusicPlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [peaks, setPeaks] = useState<number[] | null>(null);

  // Compute waveform peaks
  const computePeaksFromArrayBuffer = async (
    arrayBuffer: ArrayBuffer,
    numPeaks = 256,
  ) => {
    const tempCtx = new (
      window.OfflineAudioContext || (window as any).AudioContext
    )(1, 1, 44100);
    const decoded = await tempCtx.decodeAudioData(arrayBuffer.slice(0));
    const channelData = decoded.getChannelData(0);
    const blockSize = Math.floor(channelData.length / numPeaks);
    const newPeaks: number[] = new Array(numPeaks).fill(0);

    for (let p = 0; p < numPeaks; p++) {
      const start = p * blockSize;
      const end = Math.min(start + blockSize, channelData.length);
      let sum = 0;
      let max = 0;
      for (let i = start; i < end; i++) {
        const val = Math.abs(channelData[i]);
        sum += val * val;
        if (val > max) max = val;
      }
      const rms = Math.sqrt(sum / Math.max(1, end - start));
      newPeaks[p] = rms;
    }

    const maxPeak = Math.max(...newPeaks, 1e-6);
    for (let i = 0; i < newPeaks.length; i++)
      newPeaks[i] = newPeaks[i] / maxPeak;
    return newPeaks;
  };

  // Draw static waveform
  const drawStaticWaveform = (
    ctx: CanvasRenderingContext2D,
    peaksArr: number[],
    progress = 0,
  ) => {
    const canvas = ctx.canvas as HTMLCanvasElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, width, height);

    const num = peaksArr.length;
    const barWidth = width / num;

    for (let i = 0; i < num; i++) {
      const v = peaksArr[i];
      const barH = Math.max(1, v * height * 0.9);
      const x = i * barWidth;
      const y = (height - barH) / 2;

      const barCenterRatio = (i + 0.5) / num;
      if (barCenterRatio <= progress) {
        ctx.fillStyle = "rgba(200, 161, 88, 0.9)";
      } else {
        ctx.fillStyle = "rgba(199, 132, 51, 0.45)";
      }

      ctx.fillRect(x, y, Math.max(1, barWidth - 1), barH);
    }
  };

  // Resize canvas for DPI
  const resizeCanvasForDPR = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.clientWidth || 300;
    const cssHeight = canvas.clientHeight || 60;
    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvasForDPR(canvas);

    const onResize = () => resizeCanvasForDPR(canvasRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Load and compute peaks
  useEffect(() => {
    let didCancel = false;
    // Reset peaks and canvas when track changes
    setPeaks(null);
    setCurrentTime(0);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      }
    }

    const loadAndCompute = async () => {
      if (!track.url) return;
      try {
        const res = await fetch(track.url, { mode: "cors" });
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const buffer = await res.arrayBuffer();
        const newPeaks = await computePeaksFromArrayBuffer(buffer, 256);
        if (!didCancel) {
          setPeaks(newPeaks);
          const canvas = canvasRef.current;
          if (canvas && newPeaks) {
            const ctx = canvas.getContext("2d");
            if (ctx) drawStaticWaveform(ctx, newPeaks, 0);
          }
        }
      } catch (err) {
        console.warn("Could not compute peaks:", err);
      }
    };
    loadAndCompute();
    return () => {
      didCancel = true;
    };
  }, [track.url]);

  // Setup audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (track.url) {
      if (audio.src !== track.url) {
        audio.src = track.url;
      }
      try {
        audio.load();
      } catch (e) {
        console.error(e);
      }
    }
  }, [track.url]);

  // Attach audio listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setCurrentTime(audio.currentTime || 0);
    const onEnd = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);

    if (audio.readyState >= 1) {
      setDuration(audio.duration || 0);
    }

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, [track.url]);

  // Redraw waveform
  useEffect(() => {
    if (!peaks) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    const prog =
      duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;
    drawStaticWaveform(ctx, peaks, prog);
  }, [peaks, currentTime, duration]);

  // Start visualizer
  const startVisualizer = async () => {
    if (!audioRef.current || !canvasRef.current) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (
        window.AudioContext || (window as any).webkitAudioContext
      )();
    }
    if (audioCtxRef.current.state === "suspended") {
      try {
        await audioCtxRef.current.resume();
      } catch (err) {
        console.error(err);
      }
    }

    if (!analyserRef.current) {
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 1024;
      dataArrayRef.current = new Uint8Array(
        analyserRef.current.frequencyBinCount,
      );
    }

    if (!sourceRef.current && audioRef.current) {
      try {
        sourceRef.current = audioCtxRef.current.createMediaElementSource(
          audioRef.current,
        );
        sourceRef.current.connect(analyserRef.current!);
        analyserRef.current!.connect(audioCtxRef.current.destination);
      } catch (e) {
        console.warn("Could not create media element source:", e);
      }
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (peaks) {
      drawStaticWaveform(
        ctx,
        peaks,
        duration > 0 ? Math.min(1, currentTime / duration) : 0,
      );
    } else {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    }

    const draw = () => {
      if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current)
        return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      const prog =
        audioRef.current && duration > 0
          ? Math.min(1, Math.max(0, audioRef.current.currentTime / duration))
          : 0;

      if (peaks) drawStaticWaveform(ctx, peaks, prog);

      analyserRef.current.getByteFrequencyData(dataArrayRef.current);

      const bars = 48;
      const step = Math.max(
        1,
        Math.floor(dataArrayRef.current.length / bars / 6),
      );
      const barWidth = canvas.clientWidth / bars;
      const height = canvas.clientHeight;

      for (let i = 0; i < bars; i++) {
        const v = dataArrayRef.current[i * step] / 255;
        const barH = Math.max(2, v * height);
        const x = i * barWidth;
        const y = height - barH;
        ctx.fillStyle = `hsla(${180 + i * 2}, 80%, ${40 + v * 20}%, 0.9)`;
        ctx.fillRect(x, y, Math.max(1, barWidth - 2), barH);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    if (rafRef.current == null) draw();
  };

  useEffect(() => {
    if (isPlaying) {
      (async () => {
        if (!audioCtxRef.current) {
          audioCtxRef.current = new (
            window.AudioContext || (window as any).webkitAudioContext
          )();
        }
        try {
          if (audioCtxRef.current.state === "suspended")
            await audioCtxRef.current.resume();
        } catch (err) {
          console.error(err);
        }
        await startVisualizer();
        try {
          await audioRef.current?.play();
        } catch (e) {
          console.error(e);
        }
      })();
    } else {
      audioRef.current?.pause();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try {
        audioCtxRef.current?.close();
      } catch (e) {
        console.error(e);
      }
    };
  }, []);

  const onCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!audioRef.current || !canvasRef.current) return;
    if (duration <= 0) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = Math.min(1, Math.max(0, x / rect.width));
    audioRef.current.currentTime = progress * duration;
    setCurrentTime(progress * duration);
    if (peaks) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) drawStaticWaveform(ctx, peaks, progress);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="music_player_div">
      <div className="music_player_controls">
        <button className="music_play_button" onClick={onPlayToggle}>
          <img
            src="/play_circle_30dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
            alt="play"
          />
        </button>

        <div className="music_canvas_box">
          <canvas
            onClick={onCanvasClick}
            ref={canvasRef}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="music_time">
          {`${formatTime(currentTime)} / ${formatTime(duration)}`}
        </div>
      </div>

      <div className="music_metadata">
        <div className="music_title">{track.title}</div>
      </div>

      <audio
        ref={audioRef}
        crossOrigin="anonymous"
        preload="metadata"
        style={{ display: "none" }}
      />
    </div>
  );
}
