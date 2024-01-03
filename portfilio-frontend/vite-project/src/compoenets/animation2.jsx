import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const VerticalTextAnimation = ({ texts, speed = 200 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!reverse && subIndex === texts[index].length) {
        setReverse(true);
      } else if (reverse && subIndex === 0) {
        const nextIndex = (index + 1) % texts.length;
        setReverse(false);
        setIndex(nextIndex);
      }

      setSubIndex((prev) => (reverse ? prev - 1 : prev + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed]);

  const currentText = texts[index].substring(0, subIndex);
  const displayText = currentText.split("").join("\n"); // Split each character with a newline

  return (
    <pre className="font-three text-4xl text-one text-center whitespace-pre-line">
      {displayText}
    </pre>
  );
};

VerticalTextAnimation.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
};

export default VerticalTextAnimation;
