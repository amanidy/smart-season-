export default function RecentUpdates() {
  const updates = [
    "Irrigation completed",
    "Fertilizer applied",
    "Pest inspection scheduled",
  ];

  return (
    <section>
      <h2>Recent Updates</h2>

      <ul>
        {updates.map((update) => (
          <li key={update}>{update}</li>
        ))}
      </ul>
    </section>
  );
}