import styles from "./DropdownContent.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const colors = ["#E46635", "#C58EB6", "#F86381"];

function DropdownContent({ open, content, onSelectionChange }) {
  const [hover, setHover] = useState(null);
  const [selected, setSelected] = useState([]); // Tracks clicked (selected) elements

  const toggleSelection = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item) // Remove if already selected
        : [...prev, item] // Add if not selected
    );
  };

  // Call onSelectionChange only when selected items change
  useEffect(() => {
    onSelectionChange(selected);
  }, [selected]);

  return (
    <div className={styles.dropdownWrapper}>
        <motion.div className={styles.dropdownContent} initial={{ height: 0, opacity: 0 }} animate={{height: open ? 300 : 0, opacity: open ? 1 : 0}} transition={{ duration: 0.5, ease: "easeInOut" }}>
        {content.map((item, index) => (
          <button
            type="button"
            key={index}
            className={styles.eachblock}
            style={{
              backgroundColor: selected.includes(item)
                ? colors[index % colors.length]
                : hover === index
                  ? colors[index % colors.length]
                  : "#FFFEF6",
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            onClick={() => toggleSelection(item)}
          >
            <span className={styles.txt}>{item}</span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}

export default DropdownContent;
