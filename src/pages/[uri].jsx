import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

export default function PostSlug({ post }) {
  return (
    <div className="w-2/3 m-auto">
      <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query AllPosts($id: ID = ID!) {
      post(id: $id, idType: URI) {
        author {
          node {
            nickname
            avatar {
              default
            }
          }
        }
        content
        date
        uri
        title
        excerpt
        seo {
          metaKeywords
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri,
    },
  });
  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}
export async function getStaticPaths() {
  const paths = ["/second-post"];
  return {
    paths,
    fallback: "blocking",
  };
}
