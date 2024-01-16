import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon } from "next-share";
import Date from "@/components/date";


export default function PostSlug({ post }) {
  return (
    <>
   <Head>
   <meta property='og:image' content='' />
<meta property='og:title' content='' />
<meta property='og:description' content='' />
   </Head>

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
        <div className="max-w-[800px] w-2/3 pl-10 z-50">
          <h4 className="bg-white text-royal w-fit px-5 mb-3">Blog</h4>
          <h1 className="text-3xl lg:text-6xl text-white font-bold">
            {post.title}
          </h1>
        </div>
      </div>
<div className="grid grid-cols-4 relative">
  
<aside className="flex flex-col gap-3 justify-start items-center  top-0 left-48">
     <div className="flex items-center w-2/3 ml-auto gap-5 pl-10">
     <FacebookShareButton
        url={`https://quality-ruby.vercel.app/${post.uri}`}
        quote={post.title}
        hashtag={"#QualityEstimation"} className="w-32 "
        media={post.image}
        >
       
        <div className="justify-between items-center flex group">  <FacebookIcon size={40} square />
      <h3 className="uppercase text-primary ml-5 group-hover:text-royal">Share it on Facebook</h3></div>
      </FacebookShareButton>
    
    
   
      
     </div>
     <div className="flex items-center w-2/3 ml-auto border-y-[1px] py-2 pl-10 border-primary/30 gap-5">
     <TwitterShareButton
      
      url={`https://quality-ruby.vercel.app/${post.uri}`}
      quote={post.title}
      hashtag={"#QualityEstimation"} className="w-32"
      media={post.image}
      >
        
        
        <div className="justify-between items-center flex"> <TwitterIcon square size={40}/>
      <h3 className="uppercase text-primary ml-5">Share it on Twitter</h3></div>
      </TwitterShareButton>
    
     </div>
     <div className="flex items-center w-2/3 ml-auto gap-5 pl-10">
     <LinkedinShareButton
      
      url={`https://quality-ruby.vercel.app/${post.uri}`}
      quote={post.title}
      hashtag={"#QualityEstimation"} className="w-32 flex"
      media={post.image}
      >
        
       <div className="justify-between items-center flex"> <LinkedinIcon square size={40}/>
      <h3 className="uppercase text-primary ml-5">Share it on LinkedIn</h3></div>
      </LinkedinShareButton>
     </div>
      
  
      </aside>

      <div className="w-full col-span-2 lg:w-3/4 m-auto max-w-[800px] font-light text-xl leading-[2rem] text-gray-700 relative ">
        <article
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="[&>h2]:text-black [&>h2]:text-3xl"></article>
      </div>
      <div>
      <Date className="uppercase" dateString={post.date}></Date>
      <p>{post.author.node.name}</p>
      </div>
</div>
    </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query AllPosts($id: ID!) {
      post(id: $id, idType: URI) {
        author {
          node {
            name
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
