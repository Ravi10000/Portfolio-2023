import Button from "../button/button";
import "./form.styles.scss";
import Input from "./input/input";
import { useRef } from "react";
export default function Form() {
  const formRef = useRef();

  return (
    <div className="form-container" id="form">
      <div className="left">
        <h2 className="form-title">SAY HI 👋 / HIRE ME</h2>
        <form ref={formRef}>
          <div className="inputs-container">
            <Input label="Your Name" />
            <Input label="Your Email/Phone" />
            <Input label="Message✍" textarea />
          </div>
          <div className="buttons-container">
            <Button secondary icon="/reset.png" type="reset">
              Reset
            </Button>
            <Button icon="/go-circle.png">Send</Button>
          </div>
        </form>
      </div>
      <img className="right" src="/blob2.svg" alt="form-background" />
    </div>
  );
}
