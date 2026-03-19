import React, { useEffect, useRef, useState } from "react";
import apps from "../../data/apps.json";
import AppCard from "../Shared/UI/AppCard";

const AllApps = () => {
    const [inputValue, setInputValue] = useState("");
    const [searchText, setSearchText] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [sortOrder, setSortOrder] = useState("default");
    const searchTimeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
            }
        };
    }, []);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setIsSearching(true);

        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
        }

        searchTimeoutRef.current = setTimeout(() => {
            setSearchText(value.trim());
            setIsSearching(false);
        }, 350);
    };

    const matchedApps = apps.filter((app) =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
    );

    let filteredApps = matchedApps;

    if (sortOrder === "high-low") {
        filteredApps = [...matchedApps].sort((a, b) => b.downloads - a.downloads);
    }

    if (sortOrder === "low-high") {
        filteredApps = [...matchedApps].sort((a, b) => a.downloads - b.downloads);
    }

    return (
        <section className="px-4 pt-24 pb-16">
             <div className="space-y-2 text-center my-10">
                    <h1 className="text-3xl md:text-4xl font-bold">Our All Applications</h1>
                    <p className="text-base-content/70">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>
            <div className="max-w-6xl mx-auto space-y-6">
               

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <p className="font-medium">Total Apps: {apps.length}</p>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <input
                            value={inputValue}
                            onChange={handleSearchChange}
                            type="search"
                            placeholder="Search apps by title"
                            className="input input-bordered w-full md:w-80"
                        />

                        <select
                            className="select select-bordered"
                            value={sortOrder}
                            onChange={(event) => setSortOrder(event.target.value)}
                            aria-label="Sort by downloads"
                        >
                            <option value="default">Sort by Downloads</option>
                            <option value="high-low">High-Low</option>
                            <option value="low-high">Low-High</option>
                        </select>
                    </div>
                </div>

                {isSearching ? (
                    <div className="flex flex-col items-center justify-center gap-2 py-8">
                        <span className="loading loading-spinner loading-md text-primary" />
                        <p className="text-sm text-base-content/80">Searching apps...</p>
                    </div>
                ) : filteredApps.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredApps.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                ) : (
                    <div className="alert">
                        <span>No App Found</span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllApps;