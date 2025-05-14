import React, {useState} from "react";
import styles from "./QuantityCounter.module.css";

interface QuantityCounterProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({
  initialValue = 1,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrease = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={`${styles.counter} counter`}>
      <button
        className={styles.button}
        onClick={handleDecrease}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className={styles.value}>{quantity}</span>
      <button className={styles.button} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};
