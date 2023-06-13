import React, { useEffect, useState } from "react";
import RootLayout from "../layout/RootLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { toast } from "react-hot-toast";

function EditStory() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [story, setStory] = useState("");

  console.log(id);

  const { data, loading, error } = useFetch(
    `http://127.0.0.1:8000/api/stories/${id}/`,
    token
  );

  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setTags(data.tags);
      setStory(data.story);
    }
  }, [data]);

  const UpdateTask = async (updatedStory) => {
    const res = await fetch(`http://127.0.0.1:8000/api/stories/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` Token ${token}`,
      },
      body: JSON.stringify(updatedStory),
    });

    console.log(res);

    if (res.status === 400) {
      toast.error("Unable to update story");
      return;
    }

    if (res.status === 200) {
      toast.success("Updated Successfully");
      navigate("/my-stories");
    }

    const data = res.json();
  };

  return (
    <RootLayout>
      <form
        action=""
        className="mw1240 mx-auto text-start py-4 d-flex flex-column gap-3"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = {
            title,
            tags,
            story,
          };

          UpdateTask(formData);
        }}
      >
        <h1>Edit Story</h1>
        <div className="d-flex align-items-center  border rounded-1 px-2">
          <label htmlFor="title">Title</label>
          <input
            className="w-100 px-3 py-2 fw-semibold border-0 "
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="d-flex align-items-center  border rounded-1 px-2">
          <label htmlFor="tags">Tags:</label>
          <input
            className="w-100 px-3 py-2 fw-semibold border-0"
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </div>

        <div className="position-relative">
          <textarea
            className="w-100 px-3 py-2 fw-semibold border rounded-1"
            name=""
            id=""
            cols="30"
            rows="10"
            value={story}
            onChange={(e) => {
              setStory(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn bg-blue w-50 text-white mx-auto">
          Update Story
        </button>
      </form>
    </RootLayout>
  );
}

export default EditStory;
