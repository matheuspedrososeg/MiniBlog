import { BsFileX } from "react-icons/bs";
import "./Loading.css";

const Loading = () => {
  return (
    <div id="svg-loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200" /* Ajuste o viewBox conforme necessário */
      >
        <circle
          className="svg__fill svg__stroke svg_strokeWidth"
          fill="#0094f6"
          stroke="#0094f6"
          strokeWidth="10"
          r="8" /* Aumenta o raio do círculo */
          cx="50"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2.4s"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4s"
          ></animate>
        </circle>
        <circle
          className="svg__fill svg__stroke svg_strokeWidth"
          fill="#0094f6"
          stroke="#0094f6"
          strokeWidth="10"
          r="8" /* Aumenta o raio do círculo */
          cx="100"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2.4s"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2s"
          ></animate>
        </circle>
        <circle
          className="svg__fill svg__stroke svg_strokeWidth"
          fill="#0094f6"
          stroke="#0094f6"
          strokeWidth="10"
          r="8" /* Aumenta o raio do círculo */
          cx="150"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2.4s"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
