import Link from "next/link";
import Button from "../ui/Button";

interface Props {
  role: "ADMIN" | "AGENT";
}

export default function QuickActions({
  role,
}: Props) {
  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-3">
        <Link href="/fields/new">
          <Button>
            Register Field
          </Button>
        </Link>

        <Link href="/updates/new">
          <Button>
            Add Update
          </Button>
        </Link>

        <Link href="/weather">
          <Button>
            Weather
          </Button>
        </Link>

        {role === "ADMIN" && (
          <>
            <Link href="/reports">
              <Button>
                View Reports
              </Button>
            </Link>

            <Link href="/agents">
              <Button>
                Manage Agents
              </Button>
            </Link>
          </>
        )}

        {role === "AGENT" && (
          <Link href="/fields">
            <Button>
              My Fields
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
}