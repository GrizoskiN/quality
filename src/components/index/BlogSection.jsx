import Blog from "@/pages/blog";
import Head from "next/head";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import Date from "@/components/date";

export default function BlogSection({ posts }) {
  const truncateExcerpt = (excerpt, maxLength) => {
    if (excerpt.length <= maxLength) {
      return excerpt;
    } else {
      // Truncate the excerpt and add an ellipsis (...) at the end
      return excerpt.substring(0, maxLength) + "...";
    }
  };

  return (
    <div className="w-[90%] xl:w-2/3 m-auto grid xl:grid-cols-4  xl:my-16">
      <div className="relative mt-11">
        <h1 className="text-3xl lg:text-5xl lg:mb-11 xl:text-8xl xl:[writing-mode:vertical-lr] xl:rotate-180 xl:absolute top-32">
          {" "}
          News & Insights{" "}
        </h1>
      </div>
      <div className="flex flex-col col-span-3 ">
        {posts.slice(0, 3).map((post) => (
          <div
            className="w-full flex flex-col gap-5 lg:flex-row my-5 "
            key={post.uri}>
            <Link href={post.uri} className="h-48 md:h-80 lg:h-[25rem]  lg:w-[25rem]">
              <Image
                key={post.uri}
                src={post.featuredImage?.node.sourceUrl}
                width={500}
                height={500}
                className=" h-full w-full object-cover"
              />
            </Link>
            <div className="lg:w-1/2 xl:w-2/4  flex flex-col justify-between">
              <h1 className="bg-[#D9D9D9] hidden lg:flex px-5 lg:py-2 w-fit tracking-[.2rem]">
                BLOG
              </h1>
              <span className="flex lg:hidden font-light text-sm">
                <Date dateString={post.date}></Date>
              </span>
              <Link href={post.uri} key={post.uri}>
                <h1 className="font-bold text-xl 2xl:text-3xl uppercase my-3 lg:my-6">
                  {post.title}
                </h1>
              </Link>
              <article
                className="text-royal font-light xl:text-md mb-5"
                dangerouslySetInnerHTML={{
                  __html: truncateExcerpt(post.excerpt, 150),
                }}></article>

              <span className="hidden lg:flex">
                <Date className="" dateString={post.date}></Date>
              </span>
              <Link href={post.uri} className="flex ">
                <svg
                  width="206"
                  height="36"
                  viewBox="0 0 206 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="206" height="36" fill="#D9D9D9" />
                  <rect
                    width="206"
                    height="36"
                    fill="url(#paint0_linear_0_1)"
                    fillОpacity="0.91"
                  />
                  <path
                    d="M165.146 20.4199C164.66 19.8399 164.152 18.9997 163.623 17.8994H164.545C165.628 19.1789 166.779 20.1257 167.999 20.7398V21.2004C166.779 21.8145 165.628 22.7613 164.545 24.0408H163.623C164.152 22.9404 164.66 22.1003 165.146 21.5203H152.492V20.4199H165.146Z"
                    fill="#FFF6F6"
                  />
                  <path
                    d="M46.0613 24H44.1207L42.18 20.1038H40.0603V24H38.2689V13.5503H43.643C45.0612 13.5503 45.7329 14.2221 45.7329 15.6403V17.9691C45.7329 19.223 45.2104 19.8948 44.1058 20.0291L46.0613 24ZM40.0603 18.5065H43.3743C43.7923 18.5065 43.9416 18.3572 43.9416 17.9392V15.7298C43.9416 15.3268 43.7923 15.1775 43.3743 15.1775H40.0603V18.5065ZM52.7449 20.4322V22.0146C52.7449 22.4326 52.8942 22.5818 53.3122 22.5818H55.2528C55.6708 22.5818 55.8201 22.4326 55.8201 22.0146V21.4025H57.5368V22.0295C57.5368 23.373 56.9099 24 55.5663 24H52.9987C51.6552 24 51.0282 23.373 51.0282 22.0295V17.9093C51.0282 16.5658 51.6552 15.9388 52.9987 15.9388H55.5663C56.9099 15.9388 57.5368 16.5658 57.5368 17.9093V20.4322H52.7449ZM55.2528 17.357H53.3122C52.8942 17.357 52.7449 17.5063 52.7449 17.9243V19.223H55.8201V17.9243C55.8201 17.5063 55.6708 17.357 55.2528 17.357ZM64.939 15.9388H67.3125C68.6561 15.9388 69.283 16.5658 69.283 17.9093V24H67.5663V22.7908C66.9841 23.5522 66.387 24.0597 64.924 24.0597C63.3267 24.0597 62.6997 23.3879 62.6997 21.716C62.6997 20.0441 63.4462 19.4768 64.7748 19.3126C65.4465 19.223 66.4616 19.1334 67.5663 19.0737V17.9243C67.5663 17.5212 67.4021 17.357 66.999 17.357H65.2226C64.8195 17.357 64.6553 17.5212 64.6553 17.9243V18.3273H62.9685V17.9093C62.9685 16.5658 63.5954 15.9388 64.939 15.9388ZM67.5663 20.1933L65.0882 20.5815C64.5807 20.6561 64.3866 20.7905 64.3866 21.5817C64.3866 22.3878 64.5508 22.5818 65.1927 22.5818C66.2974 22.5818 66.8647 22.2683 67.5663 21.8504V20.1933ZM77.057 15.8791C78.5945 15.8791 79.1469 16.3867 79.7739 17.1032V13.1025H81.4906V24H79.7739V22.8356C79.1469 23.5522 78.5945 24.0597 77.057 24.0597C75.385 24.0597 74.758 23.4327 74.758 21.9847V17.9541C74.758 16.5061 75.385 15.8791 77.057 15.8791ZM76.4748 18.0885V21.8504C76.4748 22.3579 76.639 22.5221 77.3406 22.5221C78.505 22.5221 79.0722 22.2982 79.7739 21.8802V18.0586C79.0722 17.6406 78.505 17.4167 77.3406 17.4167C76.639 17.4167 76.4748 17.5809 76.4748 18.0885ZM104.754 13.5503V24H102.992V16.6106L100.395 22.5669H99.0066L96.4091 16.6106V24H94.6924V13.5503H96.7077L99.7231 20.1933L102.739 13.5503H104.754ZM112.513 15.9388H115.17C116.514 15.9388 117.14 16.5658 117.14 17.9093V22.0295C117.14 23.373 116.514 24 115.17 24H112.513C111.169 24 110.542 23.373 110.542 22.0295V17.9093C110.542 16.5658 111.169 15.9388 112.513 15.9388ZM115.439 21.925V18.0138C115.439 17.5959 115.274 17.4466 114.871 17.4466H112.826C112.423 17.4466 112.259 17.5959 112.259 18.0138V21.925C112.259 22.343 112.423 22.4923 112.826 22.4923H114.871C115.274 22.4923 115.439 22.343 115.439 21.925ZM127.405 17.566H126.539C125.674 17.566 125.077 17.8048 124.405 18.193V24H122.688V15.9388H124.405V17.1629C125.002 16.4613 125.569 15.9388 126.793 15.9388H127.405V17.566ZM133.802 20.4322V22.0146C133.802 22.4326 133.951 22.5818 134.369 22.5818H136.31C136.728 22.5818 136.877 22.4326 136.877 22.0146V21.4025H138.594V22.0295C138.594 23.373 137.967 24 136.624 24H134.056C132.712 24 132.085 23.373 132.085 22.0295V17.9093C132.085 16.5658 132.712 15.9388 134.056 15.9388H136.624C137.967 15.9388 138.594 16.5658 138.594 17.9093V20.4322H133.802ZM136.31 17.357H134.369C133.951 17.357 133.802 17.5063 133.802 17.9243V19.223H136.877V17.9243C136.877 17.5063 136.728 17.357 136.31 17.357Z"
                    fill="#FFF6F6"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_1"
                      x1="-2.51373e-06"
                      y1="13.0154"
                      x2="205.65"
                      y2="23.3238"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#071230" />
                      <stop offset="1" stopColor="#50659C" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
