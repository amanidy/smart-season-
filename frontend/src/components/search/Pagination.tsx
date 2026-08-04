import Button from "@/components/ui/Button";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-4">

      <Button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </Button>

      <span>
        Page {page} of {totalPages}
      </span>

      <Button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </Button>

    </div>
  );
}