import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, thumbnail_url, details, tags } =
    news;

  return (
    <div className="card w-full bg-base-100 shadow-md border border-gray-200">
      {/* Author & Actions */}
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={author.img}
              alt="author"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <FaRegBookmark className="cursor-pointer hover:text-gray-800" />
          <FaShareAlt className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 pt-3 text-lg font-semibold leading-snug">{title}</h3>

      {/* Thumbnail */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="w-full h-56 object-cover rounded-xl"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-3 text-sm text-gray-600">
        <p>{details.length > 200 ? details.slice(0, 200) + "..." : details}</p>
        <a className="text-orange-500 font-medium cursor-pointer">Read More</a>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100">
        <div className="flex items-center text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-2 font-semibold text-gray-700">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
