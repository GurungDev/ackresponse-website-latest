import Image from "next/image";
import Link from "next/link";

export default function BlogCardSm() {
  return (
    <div className="shadow-md rounded-[5px] overflow-hidden hover:shadow-xl relative group">
      <Image
        src="/banner.jpg"
        width={400}
        height={300}
        alt="blog-card-sm"
        className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-[60%] transition-all duration-300"
      />

      <div className="relative px-6 py-4 z-50 min-h-[250px] flex flex-col justify-end">
        <div>
          <small className="text-white">August 21, 2023</small>
          <h1 className="my-2 text-white">
            Generative AI: driving growth in the rapidly evolving AI market
          </h1>
        </div>

        <Link
          href="/insights/1"
          className="text-white underline underline-offset-2"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
