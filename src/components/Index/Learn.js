import React, { Fragment } from "react";
import learnStyles from "../Index/Learn.module.css";
import cardStyles from "../Index/Card/Card.module.css";
const scss = () => {
  return (
    <Fragment>
      <div className="card bg-white ">
        <div className="card-title ">
          <span>Hello</span>
        </div>
        <div className="card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          consectetur. Id deleniti sit necessitatibus blanditiis tenetur, totam
          in minus alias eius cupiditate, earum ullam aliquid dolor illo, ipsum
          quae vel!
        </div>
      </div>
      <button class="btn-success-lg">Hover Me</button>
      <span className={`${learnStyles.hello} bg-info`}>
        hello from index module
      </span>
      <span className={`${cardStyles.hello} bg-danger`}>
        hello from card module
      </span>
    </Fragment>
  );
};

export default scss;
