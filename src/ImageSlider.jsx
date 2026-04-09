import React, { useState, useEffect } from "react";

// ✅ Import your images (match exact file names)
import img1 from "./assets/Image 1.jpg";
import img2 from "./assets/Image 2.jpg";
import img3 from "./assets/Image 3.jpg";
import img4 from "./assets/Image 4.jpg";

const images = [img1, img2, img3, img4];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // 👉 Next Slide
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // 👉 Previous Slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // 👉 Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      <h2>IMAGE SLIDER</h2>

      <div style={styles.container}>
        <button onClick={prevSlide} style={styles.button}>
          ⬅
        </button>

        <img
          src={images[current]}
          alt="slider"
          style={styles.image}
        />

        <button onClick={nextSlide} style={styles.button}>
          ➡
        </button>
      </div>

      {/* ✅ Dots */}
      <div style={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              ...styles.dot,
              backgroundColor:
                current === index ? "black" : "gray",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    maxWidth: "700px",
    margin: "auto",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    height: "300px",
    objectFit: "cover", // 🔥 fixes stretching
    borderRadius: "10px",
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
  dots: {
    marginTop: "15px",
  },
  dot: {
    height: "10px",
    width: "10px",
    margin: "5px",
    borderRadius: "50%",
    display: "inline-block",
    cursor: "pointer",
  },
};

export default ImageSlider;