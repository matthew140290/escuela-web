import { useState } from "react";

export default function EventCard({ event }) {
  const [likes, setLikes] = useState(event.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-bold mt-2">{event.title}</h2>
      <p className="text-gray-600">{event.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500">{event.date}</span>
        <button
          onClick={handleLike}
          className={`text-${liked ? "red" : "gray"}-500`}
        >
          ❤️ {likes}
        </button>
      </div>
    </div>
  );
}
