import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../common/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import AddBlogModal from "./AddBlogModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditBlogModal from "./EditBlogModal";
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blogs"); // Adjust the URL to your API endpoint
        console.log(response);
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else if (response.data.blogs) {
          setBlogs(response.data.blogs);
        } else {
          throw new Error("Unexpected response format");
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching product data:", error);
        setError(error.message || "Unknown error occurred");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {authUser?.role === "Admin" ? (
          <div className="flex mb-12 gap-3 items-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-green-300">
              Blogs
            </h2>
            <AddBlogModal setBlogs={setBlogs} />
          </div>
        ) : (
          <div className="text-left mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-green-300">
              Latest Blogs
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Check out our latest Blogs .
            </p>
          </div>
        )}

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          {blogs.map((blog) => (
            <div
              key={blog.BlogId}
              className="overflow-hidden bg-white rounded shadow"
            >
              <div className="p-5">
                <div className="relative">
                  <a
                    href={`/blogs/${blog.BlogId}`}
                    title={blog.title}
                    className="block aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full"
                      src={blog.image || "https://via.placeholder.com/400"}
                      alt={blog.title || "Blog image"}
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {blog.type || "General"}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {blog.date
                    ? new Date(blog.date).toLocaleDateString()
                    : "Date not available"}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a
                    href={`/blogs/${blog.BlogId}`}
                    title={blog.title}
                    className="text-black"
                  >
                    {blog.title}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600 line-clamp-4">
                  {blog.content}
                </p>
                {authUser?.role === "Admin" ? (
                
                    <div className="flex flex-col items  justify-end sm:flex-row gap-2">
                      <EditBlogModal blog={blog} setBlogs={setBlogs} />
                      <DeleteConfirmationModal
                        setBlogs={setBlogs}
                        blog={blog}
                      />
                    </div>
                
                ) : (
                  <a
                    href={`/blogs/${blog.BlogId}`}
                    title="Continue reading"
                    className="inline-flex items-center justify-center  pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                  >
                    Continue Reading
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
