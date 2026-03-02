import "../utils/shimmer.css";

// export default function Shimmer(){
//     return (
//         <div>
//             <p>card</p>
//             <p>card</p>   
//         </div>
//     )
// };


export const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
    </div>
  );
};