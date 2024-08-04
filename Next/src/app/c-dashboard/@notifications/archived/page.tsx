import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>archived Notifications</div>
      <Link href={"/c-dashboard"}>Default</Link>
    </Card>
  );
}
