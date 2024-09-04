import { motion } from "framer-motion";
import Text from "../text";
import { useForm } from "react-hook-form";
import { usePreviewStore } from "../../hooks/usePreviewStore";
import { useEffect } from "react";
import styles from "./infoPreview.module.css";
import Preview from "../preview";
export const InfoPreview = () => {
  const enterAnimationTop = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const { changeDetails, details } = usePreviewStore();
  const { register, watch } = useForm({
    defaultValues: {
      title: "",
      tagline: "",
    },
  });

  const title = watch("title");
  const tagline = watch("tagline");

  useEffect(() => {
    if (title != "") {
      changeDetails({ ...details, title });
    }
    if (tagline != "") {
      let tags = tagline.split(",");
      tags = tags.map((tag) => "#" + tag.trim());
      changeDetails({ ...details, tags: tags.join(" ") });
    }
  }, [title, tagline]);
  return (
    <>
      <div className="w-4/6 flex flex-col gap-12">
        <motion.h2
          initial="initial"
          animate="animate"
          variants={enterAnimationTop}
          className="text-5xl font-semibold mb-6"
        >
          Tell us more about <br /> this
          <Text text="Project" />
        </motion.h2>
        <div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
            className={styles.labelContent}
          >
            <input
              type="text"
              placeholder="Project Title"
              maxLength={20}
              {...register("title")}
              className={styles.floatingInput}
            />
            <label className={styles.floatingLabel}>Project Title*</label>
            <div
              className={`${styles.floatingCounter} text-right text-xs text-gray-500 mt-1`}
            >
              {title.length}/20
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            animate={"animate"}
            variants={{
              initial: { opacity: 0, y: -20 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              },
            }}
            className={styles.labelContent}
          >
            <input
              type="text"
              placeholder="Tagline"
              maxLength={60}
              {...register("tagline")}
              className={styles.floatingInput}
            />
            <label className={styles.floatingLabel}>Tagline*</label>
            <p
              className={`${styles.floatingCounter} text-right text-xs text-gray-500 mt-1`}
            >
              {tagline.length}/60
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex max-md:flex-col gap-32">
        <Preview />
      </div>
    </>
  );
};
