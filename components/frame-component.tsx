import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  lETTERLOGO2?: string;

  /** Style props */
  propFlexDirection?: CSSProperties["flexDirection"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];

  /** Action props */
  onLETTERLOGO2Click?: () => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  lETTERLOGO2,
  propFlexDirection,
  propHeight,
  propWidth,
  onLETTERLOGO2Click,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const lETTERLOGO2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.poweredByParent} style={frameDiv1Style}>
        <div className={styles.poweredBy}>powered by</div>
        <img
          className={styles.letterLogo2}
          alt=""
          src={lETTERLOGO2}
          onClick={onLETTERLOGO2Click}
          style={lETTERLOGO2Style}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
