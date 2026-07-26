"use client";

interface Props {
  selectedCrop: string;
  onCropChange: (value: string) => void;

  selectedPeriod: string;
  onPeriodChange: (value: string) => void;
}

export default function ReportFilters({
  selectedCrop,
  onCropChange,
  selectedPeriod,
  onPeriodChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 rounded-xl border bg-white p-5 shadow-sm">

      <div>
        <label className="mb-1 block text-sm font-medium">
          Crop
        </label>

        <select
          value={selectedCrop}
          onChange={(e) =>
            onCropChange(e.target.value)
          }
          className="rounded-lg border px-3 py-2"
        >
          <option value="">
            All Crops
          </option>

          <option value="Maize">
            Maize
          </option>

          <option value="Beans">
            Beans
          </option>

          <option value="Rice">
            Rice
          </option>

          <option value="Coffee">
            Coffee
          </option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Period
        </label>

        <select
          value={selectedPeriod}
          onChange={(e) =>
            onPeriodChange(e.target.value)
          }
          className="rounded-lg border px-3 py-2"
        >
          <option value="7">
            Last 7 Days
          </option>

          <option value="30">
            Last 30 Days
          </option>

          <option value="90">
            Last 90 Days
          </option>

          <option value="365">
            Last Year
          </option>
        </select>
      </div>

    </div>
  );
}