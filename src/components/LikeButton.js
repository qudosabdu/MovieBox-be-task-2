import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

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
          onClick={() => setLiked(!liked)}
        />
      </div>
    </span>
  );
};

export default LikeButton;
