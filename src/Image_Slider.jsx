import React, { useState } from "react";

const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300",
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1020/600/300",
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div style={styles.container}>
      <button onClick={prevSlide}>⬅</button>

      <img src={images[current]} alt="slider" style={styles.image} />

      <button onClick={nextSlide}>➡</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  image: {
    width: "600px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default ImageSlider;