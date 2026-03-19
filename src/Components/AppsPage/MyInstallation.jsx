import React, { useState } from "react";
import toast from "react-hot-toast";
import apps from "../../data/apps.json";
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

const getInstalledAppsFromStorage = () => {
  const installedIds = getInstalledAppIds();
  return apps.filter((app) => installedIds.includes(app.id));
};

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState(
    getInstalledAppsFromStorage,
  );
  const [sortOrder, setSortOrder] = useState("default");

  let sortedInstalledApps = [...installedApps];

  if (sortOrder === "high-low") {
    sortedInstalledApps.sort((a, b) => b.downloads - a.downloads);
  }

  if (sortOrder === "low-high") {
    sortedInstalledApps.sort((a, b) => a.downloads - b.downloads);
  }

  const handleUninstall = (appId, title) => {
    const installedIds = getInstalledAppIds();

    if (!installedIds.includes(appId)) {
      return;
    }

    const updatedIds = installedIds.filter((id) => id !== appId);
    saveInstalledAppIds(updatedIds);

    setInstalledApps((currentApps) =>
      currentApps.filter((app) => app.id !== appId),
    );
    toast.success(`${title} uninstalled`);
  };

  return (
    <section className="px-4 pt-24 pb-16">
      <div className="space-y-2 text-center my-10">
        <h1 className="text-3xl md:text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-base-content/70">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
      </div>
      <div className="max-w-6xl mx-auto space-y-6">
        {installedApps.length === 0 ? (
          <div className="alert">
            <span>No installed apps yet. Install from the apps page.</span>
          </div>
        ) : (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
              <p className="font-medium">Installed Apps: {installedApps.length}</p>

              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                aria-label="Sort installed apps by downloads"
              >
                <option value="default">Sort by Downloads</option>
                <option value="high-low">High-Low</option>
                <option value="low-high">Low-High</option>
              </select>
            </div>

            {sortedInstalledApps.map((app) => (
              <article
                key={app.id}
                className="flex items-center justify-between bg-base-200 px-4 py-3 rounded-md mb-5"
              >
  
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-12 h-12 rounded-md object-cover"
                    loading="lazy"
                  />

                  <div>
                    <h2 className="text-sm font-semibold">{app.title}</h2>

                    <div className="flex items-center gap-3 text-xs text-base-content/70 mt-1">
                      <span className="flex place-items-center"> <img src="/src/assets/icon-downloads.png" className="w-3" alt="" /> {formatCompactNumber(app.downloads)}</span>
                      <span className="flex place-items-center"><img src="/src/assets/icon-ratings.png" className="w-3" alt="ratings" /> {app.ratingAvg.toFixed(1)}</span>
                      <span>{app.size || 258} MB</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-1.5 rounded-md font-medium"
                >
                  Uninstall
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyInstallation;
