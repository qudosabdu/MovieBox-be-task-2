import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { message } from "antd";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (liked) {
      message.error("Removed from favorite list");
    } else {
      message.success("Added to favorite list");
    }

    setLiked(!liked);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 500);
  };

  return (
    <span className="absolute top-2 right-2 m-4">
      <div
        className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md ${
          liked ? "bg-opacity-100" : "bg-opacity-30"
        }`}
        style={{
          transition: "transform 0.3s",
          transform: liked ? "scale(1.1)" : "scale(1)",
          cursor: "pointer",
        }}
      >
        <AiFillHeart
          size={25}
          style={{
            color: liked ? "red" : "black",
            transition: "transform 0.3s",
          }}
          onClick={handleClick}
        />
      </div>
    </span>
  );
};

export default LikeButton;
