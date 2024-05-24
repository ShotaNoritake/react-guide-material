import "./Child.css";
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illum obcaecati iste doloribus, aperiam unde, laboriosam earum quasi, quidem fuga corporis. Enim accusamus tempora libero aliquid voluptates architecto molestias commodi!</p>
    </Fragment>
  );
};

export default Child;
