import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;

  return (
    <Link
      to={`/apps/${id}`}
      className="card h-full bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition"
    >
      <figure className="p-4 pb-0 ">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover rounded-xl"
          loading="lazy"
        />
      </figure>

      <div className="card-body p-4 gap-3">
        <h3 className="text-lg font-semibold truncate">{title}</h3>

        <div className="flex items-center justify-between text-sm text-base-content/80">
          <span className="inline-flex items-center gap-1 bg-green-100 btn btn-sm">
            <img src="/assets/icon-downloads.png" className="w-3" alt="" /> {downloads.toLocaleString()}
          </span>
          <span className="inline-flex items-center gap-1 bg-yellow-100 btn btn-sm">
            <img src="/assets/icon-ratings.png" className="w-3 " alt="icon" /> {ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
