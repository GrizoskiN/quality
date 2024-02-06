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
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
   <>
   <Head>
   <meta name="google-site-verification" content="ic_oPp7RembUI_tek6mxOkhrlaG-Qg5ZLQ_o0_xO_is" />
    <title>Quality Estimation</title>
    <meta
          content='Quality Estimation is a estimation and development company from San Diego,
          California that specializes in creating the fastest project estimations. Contact us today for a free consultation!'
          name='description'
          key='desc'
        />
        <meta
          property='og:title'
          content='Quality Estimation company, San Diego, USA'
        />
        <meta property='og:image' content='/img/logo.png' />
        <meta
          name='keywords'
          content='Quality Estimation company, San Diego, USA, estimation, estimations, building projects'
        />
   </Head>
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
   </>
  );
}
 export async function getStaticProps() {
   try {
     console.log("Fetching data...");
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
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        posts: [],
      },
      revalidate: 10,
    };
  }

  }
