import Link from "next/link";

export default function f1() {
  return (
    <div>
      f1 page <Link href={"/f1/f2"}>f2</Link>
    </div>
  );
}
