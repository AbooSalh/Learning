import Link from "next/link";

export default function side() {
  return (
    <>
      <div>Notifications</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </>
  );
}
