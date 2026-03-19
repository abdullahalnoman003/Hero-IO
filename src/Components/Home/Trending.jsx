import React from "react";
import { Link } from "react-router";
import apps from "../../data/apps.json";
import AppCard from "../Shared/UI/AppCard";

const Trending = () => {
  const topApps = [...apps]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 8);

  return (
    <section className="px-4 pb-16">
      <div className="text-center my-10">
        <h2 className="text-3xl md:text-5xl font-bold">Trending Apps</h2>
        <p className="text-base-content/70">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap"></div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/apps" className="btn btn-primary  btn-sm md:btn-md">
            Show All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Trending;
