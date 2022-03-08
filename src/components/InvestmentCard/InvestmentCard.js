import React from "react";
import Button from "../../components/Button/Button.module";
import { useHistory } from "react-router-dom";

const InvestmentCard = ({ className, image, width, addbtn }) => {
  let history = useHistory();
  return (
    <div className={className} style={{ width: width }}>
      <div style={{ position: "relative" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        {addbtn === true ? (
          <Button onClick={() => alert(1)} className="buttoncss">
            Edit <i className="ml-2 fa fa-plus"></i>
          </Button>
        ) : (
          ""
        )}
      </div>
      <div className="card-body">
        <p className="text_category">CATEGORY | SUB-CATEGORY </p>
        <hr />
        <h5 className="card-title">Project Title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <p className="card-text2">Lorem ipsum dolor</p>
        <div className="mt-4 mb-4">
          <Button
            onClick={() => history.push("/app/confirm-investment")}
            className="buttoncss4"
          >
            Invest
          </Button>
          <Button
            onClick={() => history.push("/app/confirm-donation")}
            className="buttoncss5"
          >
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
