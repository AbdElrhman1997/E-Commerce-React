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
          {imgUrl && <img src={imgUrl} className="mr-3" />}
          <div className="text-main-text font-semibold hover:text-main">
            {title}
          </div>
        </div>
        {content.length ? (
          isOpen ? (
            <AiOutlineMinus className="hover:text-main" />
          ) : (
            <AiOutlinePlus className="hover:text-main" />
          )
        ) : null}
      </div>
      <ul className={isOpen ? "dropdown fadeDown" : "dropdown fadeUp"}>
        {content.map((product, i) => {
          return (
            <li key={i}>
              <a href={product.Url}>
                <p>{product.product}</p>
                <p>{product.count}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarItem;
