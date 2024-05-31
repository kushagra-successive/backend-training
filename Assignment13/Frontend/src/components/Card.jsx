/* eslint-disable react/prop-types */

import { useState, useMemo } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiTrash, BiEdit } from "react-icons/bi";

const Card = ({
  userName,
  timestamp,
  content,
  postId,
  userId,
  likes,
  load,
  userImage,
  title,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [description, setDescription] = useState(content);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/v1/${postId}/handlelike`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      if (!response.ok) {
        console.error(response);
        throw new Error("Failed to handle likes");
      }

      load(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/v1/${postId}/edit`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });
      if (!response.ok) {
        throw new Error("Failed to update the post");
      }
      setShowEditModal(false);
      load(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/v1/${postId}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete the post");
      }
      load(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const likeButtonColor = useMemo(
    () => (likes.includes(userId) ? "text-red-800" : "text-gray-500"),
    [likes, userId]
  );

  return (
    <div className="flex flex-col gap-3 border-2 rounded-xl overflow-hidden m-5 bg-gray-400/10 ">
      <div className="px-4 py-2">
        <div className="text-lg font-medium text-gray-800">{userName}</div>
        <div className="font-medium text-gray-400/70 text-sm">{timestamp}</div>
      </div>
      {userImage && (
        <img
          src={userImage}
          alt="User Uploaded"
          className="w-full h-96 aspect-video"
        />
      )}
      <h1 className="ml-4 mt-4 font-bold text-2xl">{title}</h1>
      <h2 className="ml-4 font-medium text-gray-900/70 text-md">{content}</h2>

      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleLike}
            className={`${
              likes.includes(userId)
                ? "hover:text-gray-500"
                : "hover:text-red-500"
            } mr-4 ${likeButtonColor}`}
          >
            <AiFillLike />
          </button>
          <span className={`text-gray-600 font-semibold`}>
            {likes.length} likes
          </span>
        </div>
        <button
          onClick={handleDelete}
          className="flex items-center text-red-500 hover:text-yellow-900"
        >
          <BiTrash className="mr-1" />
          Delete
        </button>
        {showEditModal && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-gray-400/80 p-8 rounded-lg w-1/2 h-auto shadow-xl">
              <h2 className="text-2xl uppercase font-semibold mb-4 text-center text-white">
                Edit Post
              </h2>
              <textarea
                className="w-full h-96  border-gray-400 rounded-md p-8 mb-7 shadow-inner shadow-black/20"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex justify-center gap-10 font-semibold ">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="bg-red-600/90 shadow-xl text-white px-4 py-2 rounded-md mr-3 uppercase hover:bg-red-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="bg-green-600/90 shadow-xl text-white px-4 py-2 rounded-md uppercase hover:bg-green-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={handleEdit}
          className="flex items-center text-gray-500 hover:text-yellow-900 mr-4"
        >
          <BiEdit className="mr-1" />
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;
