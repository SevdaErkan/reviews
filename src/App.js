import "./styles.css";
import reviews from "./data";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Review from "./components/Review";

export default function App() {
   return (
      <main>
         <div className="container">
            <div className="title">
               <h2>Our Reviews</h2>
               <div className="underline"></div>
            </div>
            <Review />
         </div>
      </main>
   );
}
