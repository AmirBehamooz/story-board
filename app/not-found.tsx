import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col gap-4 items-center mt-12">
      <h2 className="text-white font-bold">404 - Page Not Found</h2>
      <Link href="/" className="px-4 py-2 border rounded-sm">
        Home Page
      </Link>
    </section>
  );
}
