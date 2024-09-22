import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

library.add(fas);

export default function ErrorMessage({ errors }) {
  return (
    <div>
      {errors &&
        Object.keys(errors).map((key) => (
          <p
            className={
              errors.responseSuccess
                ? "successMessageContainer"
                : "errorMessageContainer"
            }
            key={key}
          >
            <FontAwesomeIcon
              className={
                errors.responseSuccess ? "icon icon-good" : "icon icon-danger"
              }
              icon={
                errors.responseSuccess
                  ? ["fas", "circle-check"]
                  : ["fas", "triangle-exclamation"]
              }
            />
            {/* Displaying only the error message */}
            {errors[key]?.message || errors[key]}
          </p>
        ))}
    </div>
  );
}
