import React, {  useState } from "react";
import { Link, useParams } from "react-router";
import toast from "react-hot-toast";
import apps from "../../data/apps.json";
import AppNotFound from "../../Error/AppNotFound";

const STORAGE_KEY = "hero-io-installed-apps";

const getInstalledAppIds = () => {
  if (typeof window === "undefined") {
    return [];
  }

  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return [];
  }

  try {
    const parsed = JSON.parse(savedData);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveInstalledAppIds = (ids) => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
};

const formatCompactNumber = (value) => {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
};

const AppDetails = () => {
  const { id } = useParams();
  const appId = Number(id);
  const app = apps.find((item) => item.id === appId);
  const [, setRefresh] = useState(0);

  const installed = app ? getInstalledAppIds().includes(app.id) : false;

  if (!Number.isInteger(appId) || !app) {
    return <AppNotFound />;
  }

  const handleInstall = () => {
    const installedIds = getInstalledAppIds();

    if (installedIds.includes(app.id)) {
      toast("App already installed", { icon: "ℹ️" });
      return;
    }

    const updatedIds = [...installedIds, app.id];
    saveInstalledAppIds(updatedIds);
    setRefresh((previous) => previous + 1);
    toast.success(`${app.title} installed successfully`);
  };
  return (
    <section className="px-4 pt-24 pb-16">
      <div className="max-w-6xl mx-auto space-y-10">
        <Link to="/apps" className="link link-hover text-sm font-medium">
          ← Back to Apps
        </Link>

        <article className="grid md:grid-cols-[260px_1fr] gap-8 items-center">
  <img
    src={app.image}
    alt={app.title}
    className="w-60 h-60 object-cover rounded-lg bg-base-200 p-6"
  />

  <div>
    <h1 className="text-3xl font-bold">{app.title}</h1>

    <p className="text-base-content/70 mt-1">
      Developed by{" "}
      <span className="text-primary font-medium">
        {app.companyName}
      </span>
    </p>

    <div className="border-b my-5"></div>

    <div className="flex items-center gap-12">
      <div>
        <img src="/src/assets/icon-downloads.png" className="w-6 mb-1" />
        <p className="text-xs text-base-content/70">Downloads</p>
        <p className="text-2xl font-bold">
          {formatCompactNumber(app.downloads)}
        </p>
      </div>
      <div>
        <img src="/src/assets/icon-ratings.png" className="w-6 mb-1" />
        <p className="text-xs text-base-content/70">Average Ratings</p>
        <p className="text-2xl font-bold">
          {app.ratingAvg.toFixed(1)}
        </p>
      </div>
      <div>
        <img src="/src/assets/icon-review.png" className="w-6 mb-1" />
        <p className="text-xs text-base-content/70">Total Reviews</p>
        <p className="text-2xl font-bold">
          {formatCompactNumber(app.reviews)}
        </p>
      </div>
    </div>

    <button
      onClick={handleInstall}
      disabled={installed}
      className="mt-6 bg-green-500 hover:bg-green-600 text-white disabled:bg-gray-400 px-6 py-2 rounded-md font-medium"
    >
      {installed
        ? "Installed"
        : `Install Now (${app.size} MB)`}
    </button>
  </div>
</article>

        <section className="mt-10">
  <div className="border-t pt-6">
    <h2 className="text-xl font-semibold mb-6">Ratings</h2>

    <div className="space-y-4">
      {[5, 4, 3, 2, 1].map((star) => {
        const item = app.ratings.find((r) => r.name === `${star} star`);
        const max = Math.max(...app.ratings.map((r) => r.count));
        const width = (item.count / max) * 100;

        return (
          <div key={star} className="flex items-center gap-4">
            <span className="w-12 text-sm text-base-content/70">
              {star} star
            </span>

            <div className="flex-1 bg-base-200 h-4 rounded">
              <div
                className="bg-orange-500 h-4 rounded"
                style={{ width: `${width}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

        <section className="mt-10">
  <div className="border-t pt-6">
    <h2 className="text-xl font-semibold mb-4">Description</h2>

    <p className="text-base-content/80 leading-relaxed whitespace-pre-line">
      {app.description}
    </p>
  </div>
</section>
      </div>
    </section>
  );
};

export default AppDetails;
