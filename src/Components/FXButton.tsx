import { ReactNode } from "react";
import { useThemeContext } from "../GlobalContext/ThemeContext";

interface FxButtonProps {
  width: number | string;
  height: number | string;
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export default function FxButton({
  width,
  height,
  href,
  onClick,
  children,
}: FxButtonProps) {
  const { theme } = useThemeContext();

  const style = {
    width,
    height,
    "--fx-primary": theme.primary,
    "--fx-secondary": theme.secondary,
    "--fx-background": theme.background,
    "--fx-highlight": theme.highlight,
    "--fx-highlight-fx": theme.highlightFx,
  } as React.CSSProperties;

  const Inner = <div className="fx-btn__inner">{children}</div>;

  return (
    <div className="fx-btn" style={style}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {Inner}
        </a>
      ) : (
        <button onClick={onClick}>{Inner}</button>
      )}

      <style>{`
        .fx-btn {
          position: relative;
          padding: 2px;
          border-radius: 10px;
          background: var(--fx-primary);
          overflow: hidden;
        }

        .fx-btn a,
        .fx-btn button {
          all: unset;
          display: block;
          width: 100%;
          height: 100%;
        }

        .fx-btn__inner {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: var(--fx-background);
          box-shadow: inset 0 0 10px rgba(0,0,0,0.4);

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1.1rem;
          font-weight: 600;
          color: var(--fx-secondary);
          cursor: pointer;

          position: relative;
          z-index: 2;
        }

        /* === FX LAYERS === */
        .fx-btn::before,
        .fx-btn::after {
          content: "";
          position: absolute;
          width: 200%;       /* double size of button */
          height: 200%;      /* double size of button */
          opacity: 0;
          z-index: 1;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in-out;
          pointer-events: none;
        }

        .fx-btn::before {
          top: -170%;
          left: -170%;
          background: linear-gradient(
            to bottom right,
            var(--fx-highlight) 60%,
            var(--fx-highlight-fx)
          );
          transform: rotate(45deg);
        }

        .fx-btn::after {
          bottom: -170%;
          right: -170%;
          background: linear-gradient(
            to top left,
            var(--fx-highlight) 60%,
            var(--fx-highlight-fx)
          );
          transform: rotate(45deg);
        }

        .fx-btn:hover::before,
        .fx-btn:hover::after {
          opacity: 1;
        }

        .fx-btn:hover::before {
          transform: translate(50%, 50%) rotate(45deg);
        }

        .fx-btn:hover::after {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      `}</style>
    </div>
  );
}
