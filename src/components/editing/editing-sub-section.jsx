import "./editing-sub-section.styles.scss";
import images from "./image";

export default function EditingSubSection() {
  return (
    <div className="editing">
      <h3 className="__sub-heading">Editing</h3>
      <div className="edited-images">
        {images?.map((image) => (
          <img src={`/${image}`} alt="image" key={image} width={"100%"} />
        ))}
      </div>
    </div>
  );
}
