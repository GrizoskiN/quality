import Blog from "@/pages/blog";
import Head from "next/head";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import Date from "@/components/date";

export default function BlogSection({ posts }) {
  return (
    <div className="w-2/3 m-auto grid grid-cols-3 ">
      <div className="relative">
      <h1 className="text-8xl [writing-mode:vertical-lr] rotate-180 absolute top-32"> News & Insights  </h1>
      </div>
      <div className="flex flex-col col-span-2 ">
        {posts.slice(0, 3).map((post) => (
          <div className="w-full flex my-11 h-full ">
            <Link href={post.uri} className="h-[25rem] w-[25rem] ">
              <Image
                src={post.featuredImage.node.sourceUrl}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="w-2/4 mx-auto flex flex-col justify-between">
              <h1 className="bg-[#D9D9D9] px-5 py-2 w-fit tracking-[.2rem]">
                BLOG
              </h1>
              <Link href={post.uri} key={post.uri}>
                <h1 className="font-bold text-3xl uppercase my-6">
                  {post.title}
                </h1>
              </Link>
              <article
                className="text-royal font-light w-3/4 mb-5"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}></article>
              <Date className="my-5" dateString={post.date}></Date>
              <Link href={post.uri}>
                <svg
                  className="mt-5"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="22.5281"
                    cy="23.4715"
                    r="22.5281"
                    fill="#E1E427"
                  />
                  <path
                    d="M29.8434 24.4217C29.1067 23.5429 28.3377 22.2698 27.5364 20.6025H28.9322C30.5737 22.5412 32.3185 23.9758 34.1667 24.9064V25.6043C32.3185 26.5349 30.5737 27.9695 28.9322 29.9082H27.5364C28.3377 28.2409 29.1067 26.9679 29.8434 26.089H10.6699V24.4217H29.8434Z"
                    fill="#1F2A46"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
