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
   
      <div className="absolute -z-10 top-0 w-full h-[60vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[60vh]">
     
        <div className="absolute bg-royal/50 inset-0 w-full h-full z-20"></div>
        <Image
          key={post.uri}
          src={post.featuredImage?.node.sourceUrl}
          width={1500}
          height={500}
          className="w-full h-full object-cover  -z-20 inset-0 relative"
        />
        
      </div>
      <div className="max-w-[800px] w-10/12  lg:w-10/12  m-auto my-32   lg:mt-48 xl:mb-48 ">
          <h4 className=" text-white font-bold uppercase lg:w-10/12 m-auto  mb-3">Blog</h4>
          <h1 className="text-3xl md:text-4xl lg:text-6xl lg:w-10/12 m-auto xl:text-6xl text-white font-bold">
            {post.title}
          </h1>
        </div>

      
      <div className="grid xl:grid-cols-4 w-10/12 m-auto relative">
  
      <aside className="flex xl:flex-col gap-3 justify-start lg:col-span-2 xl:col-span-1 lg:w-10/12 lg:m-auto items-center my-5 lg:my-7 xl:my-0 lg:border-y border-primary xl:border-none">

          <div className="flex  items-center lg:w-3/4   gap-5 xl:pl-10 ">
     <FacebookShareButton
        url={`https://quality-ruby.vercel.app/${post.uri}`}
        quote={post.title}
        hashtag={"#QualityEstimation"} className="w-32"
        media={post.image}
        >
       
        <div className="justify-between items-center flex  flex-col lg:flex-row group">  <FacebookIcon size={30}  />
      <h3 className="uppercase text-xs text-primary lg:ml-5 group-hover:text-royal hidden lg:flex">Share it on Facebook</h3></div>
      </FacebookShareButton>
    
    
   
      
          </div>
          <div className="flex  items-center lg:w-3/4   xl:border-y-[1px] py-2 xl:pl-10 xl:border-primary/30 gap-5">
     <TwitterShareButton
      
      url={`https://quality-ruby.vercel.app/${post.uri}`}
      quote={post.title}
      hashtag={"#QualityEstimation"} className="w-32"
      media={post.image}
      >
        
        
        <div className="justify-between items-center flex  flex-col lg:flex-row group"> <TwitterIcon square size={30}/>
      <h3 className="uppercase text-xs text-primary lg:ml-5 group-hover:text-royal hidden lg:flex">Share it on Twitter</h3></div>
      </TwitterShareButton>
    
          </div>
          <div className="flex  items-center lg:w-3/4   gap-5 xl:pl-10">
     <LinkedinShareButton
      
      url={`https://quality-ruby.vercel.app/${post.uri}`}
      quote={post.title}
      hashtag={"#QualityEstimation"} className="w-32 flex"
      media={post.image}
      >
        
       <div className="justify-between items-center flex  flex-col lg:flex-row group"> <LinkedinIcon square size={30}/>
      <h3 className="uppercase text-xs text-primary lg:ml-5 group-hover:text-royal hidden lg:flex">Share it on LinkedIn</h3></div>
      </LinkedinShareButton>
          </div>
      
  
      </aside>

      <div className="w-full lg:col-span-2 lg:w-10/12  m-auto  font-light text-xl leading-[2rem] text-gray-700 relative ">
        <article
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="[&>h2]:text-black [&>h2]:text-3xl text-justify"></article>
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
