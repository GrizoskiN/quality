import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import { FacebookShareButton, FacebookIcon } from "next-share";
export default function PostSlug({ post }) {
  return (
    <div className="font-['Open_Sans'] ">
      <div className="absolute -z-10 top-0 w-full h-[60vh]">
        <div className="absolute bg-black/50 inset-0 w-full h-full z-20"></div>
        <Image
          key={post.uri}
          src={post.featuredImage?.node.sourceUrl}
          width={1500}
          height={500}
          className="w-full h-full object-cover  inset-0 relative"
        />
      </div>
      <div className=" w-full  h-[40vh] mt-24 flex flex-col items-center  relative ">
        <div className="max-w-[800px] w-[90%] z-50">
          <h4 className="bg-white text-royal w-fit px-5 mb-3">Blog</h4>
          <h1 className="text-3xl lg:text-6xl text-white font-bold">
            {post.title}
          </h1>
        </div>
      </div>

      <FacebookShareButton
        url={`https://quality-ruby.vercel.app/${post.uri}`}
        quote={post.title}
        hashtag={"#QualityEstimation"}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <div className="w-[90%] lg:w-2/3 m-auto max-w-[800px] font-light text-xl leading-[2rem] text-gray-700 relative ">
        <article
          dangerouslySetInnerHTML={{ __html: post.content }}
          className=""></article>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query AllPosts($id: ID!) {
      post(id: $id, idType: URI) {
        author {
          node {
            nickname
            avatar {
              default
            }
          }
        }
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
        content
        date
        uri
        
        title
        excerpt
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
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
