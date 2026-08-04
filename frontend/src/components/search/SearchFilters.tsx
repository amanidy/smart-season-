interface Props {
  category: string;
  onCategoryChange: (value: string) => void;
}

export default function SearchFilters({
  category,
  onCategoryChange,
}: Props) {
  return (
    <select
      value={category}
      onChange={(e) =>
        onCategoryChange(e.target.value)
      }
      className="rounded-lg border px-3 py-2"
    >
      <option value="ALL">
        All
      </option>

      <option value="FIELD">
        Fields
      </option>

      <option value="REPORT">
        Reports
      </option>

      <option value="WEATHER">
        Weather
      </option>

      <option value="NOTIFICATION">
        Notifications
      </option>

      <option value="USER">
        Users
      </option>
    </select>
  );
}