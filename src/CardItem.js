import React from "react";
import "./MainSection.css";

function CardItem(props) {
  return (
    <>
      <section>
        <div className="Crads-Container">
          <div>
            <div className="card-content">
              <img className="imgggg" alt="Image" src={props.imgsrc} />
              <div className="card_information">
                <p>{props.info} </p>
              </div>
              <a className="button_link" href="">
                <button className="card_button">ADD TO CART</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardItem;