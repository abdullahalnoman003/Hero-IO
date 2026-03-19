
const stateItems = [
    {
        title: "Total Downloads",
        value: "29.6M",
        subtitle: "21% more than last month",
    },
    {
        title: "Total Reviews",
        value: "906K",
        subtitle: "46% more than last month",
    },
    {
        title: "Active Apps",
        value: "132+",
        subtitle: "More 32 will be launched",
    },
];

const States = () => {
    return (
        <section className="px-4  bg-linear-to-br  from-primary to-primary/50">
            <div className="max-w-7xl mx-auto  text-white rounded-3xl p-6 md:p-10">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
                    Tested By Millions, Built For You
                </h2>

                <div className="grid gap-4 md:grid-cols-3">
                    {stateItems.map((item) => (
                        <article
                            key={item.title}
                            className= " p-5 text-center"
                        >
                            
                            <h3 className="text-base font-medium opacity-90">{item.title}</h3>
                            <p className="text-3xl font-black py-1">{item.value}</p>
                            <p className="text-sm opacity-80">{item.subtitle}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default States;