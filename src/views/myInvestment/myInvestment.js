import React from "react";
import image from "../../assets/images/Rectangle7.jpg";
import InvestmentCard from "../../components/InvestmentCard/InvestmentCard";
import "./myInvestment.css";

function myInvestment() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="myinvestment container">
      <div className="row">
        <h3>
          My Investment<span></span>
        </h3>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InvestmentCard
            className="card"
            width={"auto"}
            addbtn={true}
            image={image}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InvestmentCard
            className="card"
            width={"auto"}
            addbtn={true}
            image={image}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InvestmentCard
            className="card"
            width={"auto"}
            addbtn={true}
            image={image}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InvestmentCard
            className="card"
            width={"auto"}
            addbtn={true}
            image={image}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InvestmentCard
            className="card"
            width={"auto"}
            addbtn={true}
            image={image}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <InvestmentCard
            className="card"
            width={"auto"}
            addbtn={true}
            image={image}
          />
        </div>
      </div>
    </div>
  );
}

export default myInvestment;
