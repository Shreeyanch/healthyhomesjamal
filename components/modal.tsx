import type { NextPage } from "next";
import { useCallback } from "react";
import StateSelected from "./state-selected";
import { useRouter } from "next/router";
import styles from "./modal.module.css";

export type ModalType = {
  className?: string;
};

const Modal: NextPage<ModalType> = ({ className = "" }) => {
  const router = useRouter();

  const onStarRatingClick = useCallback(() => {
    window.location.href = "https://www.tripadvisor.com/UserReviewEdit-g293890-d28244702-Khohang_Taste_Of_Thakali-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html";
  }, []);

  const onStarRating1Click = useCallback(() => {
    window.location.href = "https://www.tripadvisor.com/UserReviewEdit-g293890-d28244702-Khohang_Taste_Of_Thakali-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html";
  }, []);

  const onStarRating2Click = useCallback(() => {
    router.push("/feed-back");
  }, [router]);

  const onStarRating3Click = useCallback(() => {
    router.push("/feed-back");
  }, [router]);

  const onStarRating4Click = useCallback(() => {
    router.push("/feed-back");
  }, [router]);

  return (
    <div className={[styles.modal, className].join(" ")}>
      <div className={styles.pleaseRateYour}>Please rate your experience.</div>
      <div className={styles.starRatingParent}>
        <button className={styles.starRating} onClick={onStarRatingClick}>
          <div className={styles.excellent}>EXCELLENT:</div>
          <div className={styles.starGroup}>
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(123, 97, 255, 0)"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(123, 97, 255, 0)"
            />
          </div>
        </button>
        <button className={styles.starRating1} onClick={onStarRating1Click}>
          <div className={styles.good}>GOOD:</div>
          <div className={styles.starGroup1}>
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(123, 97, 255, 0)"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
          </div>
        </button>
        <button className={styles.starRating2} onClick={onStarRating2Click}>
          <div className={styles.good}>AVERAGE:</div>
          <div className={styles.starGroup1}>
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(199, 195, 216, 0)"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
          </div>
        </button>
        <button className={styles.starRating3} onClick={onStarRating3Click}>
          <div className={styles.fair}>FAIR:</div>
          <div className={styles.starGroup1}>
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(123, 97, 255, 0)"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
          </div>
        </button>
        <button className={styles.starRating4} onClick={onStarRating4Click}>
          <div className={styles.needImprovement}>
            <span className={styles.needImprovementTxtContainer}>
              <p className={styles.need}>NEED</p>
              <p className={styles.need}>IMPROVEMENT:</p>
            </span>
          </div>
          <div className={styles.starGroup1}>
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(123, 97, 255, 0)"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar1.svg"
              stateSelectedBackgroundColor="unset"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Modal;
