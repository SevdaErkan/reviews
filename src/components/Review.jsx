import "../styles.css";
import { useState } from "react";
import reviews from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review() {
   const [index, setIndex] = useState(0);
   const { image, job, name, text } = reviews[index];
   return (
      <article className="review">
         <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
               <FaQuoteRight />
            </span>
         </div>
         <h4>{name}</h4>
         <p className="job">{job}</p>
         <p className="info">{text}</p>
         <div className="button-container">
            <button
               className="prev-btn"
               onClick={() =>
                  index === 0
                     ? setIndex(reviews.length - 1)
                     : setIndex(index - 1)
               }
            >
               <FaChevronLeft className="icon" />
            </button>
            <button
               className="next-btn"
               onClick={() => (index === 3 ? setIndex(0) : setIndex(index + 1))}
            >
               <FaChevronRight className="icon" />
            </button>
         </div>
         <button
            className="random-btn"
            onClick={() => {
               let random = Math.floor(Math.random() * reviews.length);
               random === index && index <= 3
                  ? setIndex(random + 1)
                  : setIndex(random);
            }}
         >
            surprise me
         </button>
      </article>
   );
}
