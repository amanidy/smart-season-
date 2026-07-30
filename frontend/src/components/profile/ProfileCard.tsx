import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import UserAvatar from "./UserAvatar";

import { UserProfile } from "@/types/profile";

interface Props {
  profile: UserProfile;
}

export default function ProfileCard({
  profile,
}: Props) {
  return (
    <Card>
      <div className="flex flex-col items-center gap-4 md:flex-row">

        <UserAvatar
          fullName={profile.fullName}
          avatarUrl={profile.avatarUrl}
        />

        <div className="flex-1">

          <h2 className="text-2xl font-bold">
            {profile.fullName}
          </h2>

          <p className="text-gray-500">
            {profile.email}
          </p>

          {profile.phone && (
            <p className="text-gray-500">
              {profile.phone}
            </p>
          )}

          <div className="mt-3">
            <Badge>
              {profile.role}
            </Badge>
          </div>

        </div>

      </div>
    </Card>
  );
}