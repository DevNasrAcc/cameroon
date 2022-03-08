import React from "react";
import Button from "../Button/Button.module";
import Input from "../../components/Input/Input.module";
import "./SubscribeModal.css";

const SubscribeModal = () => {
  return (
    <div
      id="subscriptionModal"
      class="modal fade in show"
      role="dialog"
      style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
    >
      <div class="modal-dialog" style={{ maxWidth: "800px" }}>
        <div class="modal-content">
          <div class="modal-header">
            <strong className="navTitle2" href="#">
              Subscribe to our <span>Newsletter</span>.
            </strong>
            <button type="button" class="close" data-dismiss="modal">
              <i className="fa fa-times"></i>
            </button>
          </div>
          <div class="modal-body pad">
            <label className="modallabel">
              Email <span className="modalspan">*</span>
            </label>
            <p className="modalP">Enter your Email Address here</p>
            <div style={{ display: "flex" }}>
              <Input
                placeholder="Type your Email"
                valueName="email"
                type="email"
                width="lg"
                height="38px"
                // onChange={(e) => handleInputChange('email', e.target.value)}
              />
              <Button onClick={() => alert(1)} className="buttoncss4">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
