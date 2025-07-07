import React, { useState } from 'react';
import './TestimonialCard.css';
import img1 from '../../assets/images/excel.jpg';
import img2 from '../../assets/images/data visualization.jpg';
import img3 from '../../assets/images/C.jpg';


const testimonials = [
  {
    id: 1,
    image: img1,
    quote: "Excel automation changed our entire workflow.",
    author: "Rajeev Menon, Analyst"
  },
  {
    id: 2,
    image: img2,
    quote: "Python integration was seamless and efficient.",
    author: "Sana Verma, Developer"
  },
  {
    id: 3,
    image: img3,
    quote: "Automation simplified our complex pipelines.",
    author: "Linda Zhou, Operations"
  }
];


export default function TestimonialCard() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { image, quote, author } = testimonials[current];

  return (
    <div className="testimonial-card">
      <div className="testimonial-left">
        <img src={image} alt="testimonial" />
      </div>
      <div className="testimonial-right">
        <p>"{quote}"</p>
        <p><strong>— {author}</strong></p>
        <div className="arrows">
          <button className="arrow-btn" onClick={prevTestimonial}>&larr;</button>
          <button className="arrow-btn" onClick={nextTestimonial}>&rarr;</button>
        </div>
      </div>
    </div>
  );
}









