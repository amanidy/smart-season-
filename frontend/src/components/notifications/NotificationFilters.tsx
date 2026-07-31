interface Props {
  filter: string;
  onChange: (value: string) => void;
}

export default function NotificationFilters({
  filter,
  onChange,
}: Props) {
  return (
    <div className="flex gap-4">

      <select
        value={filter}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="rounded-lg border px-3 py-2"
      >
        <option value="ALL">
          All
        </option>

        <option value="UNREAD">
          Unread
        </option>

        <option value="FIELD">
          Field
        </option>

        <option value="WEATHER">
          Weather
        </option>

        <option value="REPORT">
          Report
        </option>

        <option value="SYSTEM">
          System
        </option>

      </select>

    </div>
  );
}