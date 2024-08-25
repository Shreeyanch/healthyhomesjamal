import type { NextPage } from "next";
import { useCallback } from "react";
import Modal from "../components/modal";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Rating: NextPage = () => {
  const onLETTERLOGO2Click = useCallback(() => {
    window.open("https://www.samparka.info/");
  }, []);

  return (
    <div className={styles.rating}>
      <div className={styles.image12Parent}>
        <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
        {/* <div className={styles.highlandBeans}>HIGHLAND BEANS</div> */}
        <div className={styles.modalWrapper}>
          <Modal />
        </div>
        <FrameComponent
          lETTERLOGO2="/letter-logo-2@2x.png"
          onLETTERLOGO2Click={onLETTERLOGO2Click}
        />
      </div>
    </div>
  );
};

export default Rating;
