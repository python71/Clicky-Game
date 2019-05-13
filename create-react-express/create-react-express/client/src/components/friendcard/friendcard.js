import React from "react";
import "./friendCard.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => (
    <div className="card" onClick={props.handleClick(props.key)}> {/* onClick={props.handleClick(props.id)} */}
        <div className="img-container"  >
            <img alt={props.img.replace(".jpg", "")} src={props.img} />
        </div>
    </div>
);

export default FriendCard;