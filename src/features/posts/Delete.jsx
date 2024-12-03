import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import React from "react";
import { DeletePost } from "./postsSlice";
import { toast } from "react-toastify";

export const DeleteButton = ({ ID }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(DeletePost(ID))
      .then(() => {
        toast.success("Post deleted successfully!");
      })
      .catch(() => {
        toast.error("Failed to delete the post.");
      });
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} /> Delete
    </button>
  );
};
