import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, author, image_url, details, tags } = news;

  return (
    <div className="card bg-base-100 border border-gray-200 shadow-sm">
      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={image_url}
          alt="news"
          className="w-full h-1/2 object-cover rounded-lg"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-lg font-bold text-gray-800 leading-snug">
          {title}
        </h2>

        {/* Author and Date */}
        <p className="text-xs text-gray-500">
          {new Date(author?.published_date).toDateString()} |{" "}
          <span className="capitalize">{tags?.join(", ")}</span>
        </p>

        {/* Details */}
        <p className="text-sm text-gray-700 leading-relaxed">{details}</p>

        {/* Button */}
        <div className="mt-4">
          <button className="btn btn-sm bg-pink-600 hover:bg-pink-700 text-white rounded-lg flex items-center gap-2">
            <FaArrowLeft />
            <Link to={`/category/${news.category_id}`}>
              All news in this category
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
