import Image from "next/image";
import { Inter } from "next/font/google";

import Header from "@/components/index/Header";
import FirstSection from "@/components/index/FirstSection";
import SecondSection from "@/components/index/SecondSection";
import ThirdSection from "@/components/index/ThirdSection";
import FourthSection from "@/components/index/FourthSection";
import FifthSection from "@/components/index/FifthSection";
import SixthSection from "@/components/index/SixthSection";
import BlogSection from "@/components/index/BlogSection";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <main className="">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <BlogSection posts={posts} />
    </main>
  );
}
export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          slug
          title
          uri
          postId
          date
          content
          excerpt
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
