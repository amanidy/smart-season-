import Button from "@/components/ui/Button";

interface Props {
  onExportCsv: () => void;
  onExportPdf: () => void;
}

export default function ExportButtons({
  onExportCsv,
  onExportPdf,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">

      <Button onClick={onExportCsv}>
        Export CSV
      </Button>

      <Button onClick={onExportPdf}>
        Export PDF
      </Button>

    </div>
  );
}