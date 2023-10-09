import Head from "next/head";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import Date from "@/components/date";
import BlogSection from "@/components/index/BlogSection";

export default function Blog({ posts }) {
  return (
    <div>
      <Head></Head>
      <main className="w-2/3 m-auto">
        <h1>Learn more about the latest news in the industry</h1>
        <p>Learn more about your business here!</p>

        <div className="grid grid-cols-3">
          {posts.map((post) => (
            <div>
              <Link href={post.uri}>
                {" "}
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  width={500}
                  height={500}
                  className="w-96 h-96"
                />
              </Link>
              <Link href={post.uri} key={post.uri}>
                {post.title}
              </Link>
              <p>{post.author.node.name}</p>
              <Date dateString={post.date}></Date>
            </div>
          ))}
        </div>
      </main>
    </div>
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
  };
}
