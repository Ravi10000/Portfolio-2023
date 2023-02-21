import Button from "../button/button";
import "./form.styles.scss";
import Input from "./input/input";
export default function Form() {
  return (
    <div className="form-container" id="form">
      <div className="left">
        <h2 className="form-title">SAY HI / HIRE ME</h2>
        <form>
          <div className="inputs-container">
            <Input label="Name" />
            <Input label="Email/Phone" />
            <Input label="Message" textarea />
          </div>
          <div className="buttons-container">
            <Button secondary icon="/reset.png">Reset</Button>
            <Button icon="/go.png">Send</Button>
          </div>
        </form>
      </div>
      <img className="right" src="/cartoon-me.png" alt="form-background" />
    </div>
  );
}
