import { ReactNode } from "react";
import Card from "@/components/ui/Card";

interface Props {
  title: string;
  children: ReactNode;
}

export default function AuthCard({
  title,
  children,
}: Props) {
  return (
    <Card>
      <div className="mx-auto w-full max-w-md space-y-6">

        <h1 className="text-center text-3xl font-bold">
          {title}
        </h1>

        {children}

      </div>
    </Card>
  );
}