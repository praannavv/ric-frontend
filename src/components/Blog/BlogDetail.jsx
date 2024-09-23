// BlogDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../common/LoadingSpinner";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the specific blog by its ID
    axios.get(`http://localhost:8000/blogs/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error("Error fetching blog details", error));
  }, [id]);

  if (!blog) return <div><LoadingSpinner color={"green"}/></div>;

  return (
    <section className="py-10 bg-transparent sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-black dark:text-green-300">{blog.title}</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{new Date(blog.Date).toLocaleDateString()}</p>
          <img
            className="w-full mt-6 h-80 object-cover rounded-lg"
            src={blog.image || "https://via.placeholder.com/800"}
            alt={blog.title}
          />
          <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-400">{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
