export function StatsSection() {
  const stats = [
    { value: "354,840", label: "Watches curated" },
    { value: "26", label: "Manufactures" },
    { value: "90,567", label: "Client reviews" },
    { value: "5 Years", label: "Warranty coverage" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-light text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}