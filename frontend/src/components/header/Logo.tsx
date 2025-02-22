import Link from "@/components/link";
import { Routes } from "@/constants/enums";

export default function Logo() {
  return (
    <Link
      href={Routes.ROOT}
      className="bg-gray-500 p-2 rounded-full flex justify-center items-center"
      aria-label="Homepage"
    >
      Logo
    </Link>
  );
}
