import { Info } from "@/app/(platform)/(dashboard)/organization/[organizationId]/_components/info";
import { ActivityList } from "@/app/(platform)/(dashboard)/organization/[organizationId]/activity/_components/activity-list";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

const ActivityPage = () => {
  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
