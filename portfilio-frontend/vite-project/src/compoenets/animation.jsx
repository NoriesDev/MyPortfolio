import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const TextAnimation = ({ texts, speed = 200}) => {
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

  return (
    <h1 className="text-6xl text-one text-center font-four ">
      {texts[index].substring(0, subIndex)}
    </h1>
  );
};


TextAnimation.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    speed: PropTypes.number,
  };

export default TextAnimation;