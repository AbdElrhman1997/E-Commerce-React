import { React, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./SideBarItem.scss";

const SideBarItem = ({ title, imgUrl, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDisplay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="catgory-item">
      <div className="catgory-head" onClick={handleDisplay}>
        <div>
          <img src={imgUrl} />
          <div className="ml-3 text-main-text font-semibold">{title}</div>
        </div>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <ul className={isOpen ? "dropdown fadeDown" : "dropdown fadeUp"}>
        {content.map((product, i) => {
          return (
            <li key={i}>
              <p>{product.product}</p>
              <p>{product.count}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarItem;
