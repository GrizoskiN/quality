// export default function Blog (){
//   return(
//     <div></div>
//   )
// }

 import Head from "next/head";
 import { client } from "@/lib/apollo";
 import { gql } from "@apollo/client";
 import Link from "next/link";
 import Image from "next/image";
 import { parseISO, format } from "date-fns";
 import Date from "@/components/date";
 import BlogSection from "@/components/index/BlogSection";
 import HeaderImage from "/public/img/header.jpg";
   const paper = 
     <svg
       width="14"
       height="24"
       viewBox="0 0 94 114"
       fill="none"
       xmlns="http://www.w3.org/2000/svg">
       <path
         d="M74.6608 0.362762H8.18347C3.72993 0.362762 0.107422 3.98572 0.107422 8.43926V96.6031C0.107422 100.688 3.1642 104.13 7.21831 104.61C7.26974 104.616 7.3214 104.619 7.37192 104.619C8.02034 104.619 8.58018 104.134 8.65789 103.474C8.7424 102.763 8.23399 102.117 7.52213 102.034C4.77348 101.708 2.70134 99.374 2.70134 96.6031V8.43926C2.70134 5.41624 5.16022 2.9569 8.18324 2.9569H74.6605C77.6836 2.9569 80.1424 5.41624 80.1424 8.43926V14.4486C80.1424 15.165 80.7233 15.7457 81.4395 15.7457C82.1557 15.7457 82.7366 15.1652 82.7366 14.4486V8.43926C82.7368 3.98572 79.1143 0.362762 74.6608 0.362762Z"
         fill="white"
       />
       <path
         d="M93.5117 32.0244C87.5678 26.0731 80.4338 18.9429 71.1953 9.70755C70.9857 9.49798 70.6483 9.32761 70.2781 9.32761H20.7273C15.5105 9.32761 11.2656 13.5725 11.2656 18.7898V104.175C11.2656 109.393 15.5105 113.637 20.7273 113.637H84.429C89.6458 113.637 93.8907 109.393 93.8907 104.175V32.9411C93.8907 32.6144 93.7518 32.2655 93.5117 32.0244ZM71.5752 13.7553C76.195 18.374 82.4944 24.6691 89.4634 31.644H75.8667C73.5008 31.644 71.5754 29.7187 71.5754 27.3522V13.7553H71.5752ZM84.429 111.043H20.7273C16.9401 111.043 13.8595 107.962 13.8595 104.175V18.7898C13.8595 15.0025 16.9401 11.9217 20.7273 11.9217H68.9811V27.3522C68.9811 31.1492 72.07 34.2382 75.8665 34.2382H91.2968V104.175C91.2968 107.962 88.2162 111.043 84.429 111.043Z"
         fill="white"
       />
       <path
         d="M24.7214 30.081H57.219C59.0988 30.081 60.6279 28.5517 60.6279 26.6721V21.0692C60.6279 19.1894 59.0986 17.6604 57.219 17.6604H24.7214C22.8416 17.6604 21.3125 19.1897 21.3125 21.0692V26.6719C21.3125 28.5517 22.8418 30.081 24.7214 30.081ZM23.9066 21.0692C23.9066 20.62 24.2723 20.2543 24.7216 20.2543H57.2193C57.6685 20.2543 58.0342 20.62 58.0342 21.0692V26.6719C58.0342 27.1212 57.6685 27.4868 57.2193 27.4868H24.7214C24.2721 27.4868 23.9064 27.1212 23.9064 26.6719L23.9066 21.0692Z"
         fill="white"
       />
       <path
         d="M22.2932 42.4173H35.9703C36.6865 42.4173 37.2674 41.8368 37.2674 41.1202C37.2674 40.4036 36.6865 39.8232 35.9703 39.8232H22.2932C21.577 39.8232 20.9961 40.4036 20.9961 41.1202C20.9961 41.8368 21.577 42.4173 22.2932 42.4173Z"
         fill="white"
       />
       <path
         d="M82.8643 39.8232H42.8674C42.1512 39.8232 41.5703 40.4036 41.5703 41.1202C41.5703 41.8368 42.1512 42.4173 42.8674 42.4173H82.8643C83.5804 42.4173 84.1613 41.8368 84.1613 41.1202C84.1613 40.4036 83.5804 39.8232 82.8643 39.8232Z"
         fill="white"
       />
       <path
         d="M22.2932 65.2124H35.9703C36.6865 65.2124 37.2674 64.632 37.2674 63.9154C37.2674 63.1987 36.6865 62.6183 35.9703 62.6183H22.2932C21.577 62.6183 20.9961 63.1987 20.9961 63.9154C20.9961 64.632 21.577 65.2124 22.2932 65.2124Z"
         fill="white"
       />
       <path
         d="M82.8643 62.6183H42.8674C42.1512 62.6183 41.5703 63.1987 41.5703 63.9154C41.5703 64.632 42.1512 65.2124 42.8674 65.2124H82.8643C83.5804 65.2124 84.1613 64.632 84.1613 63.9154C84.1613 63.1987 83.5804 62.6183 82.8643 62.6183Z"
         fill="white"
       />
       <path
         d="M22.2932 88.0073H35.9703C36.6865 88.0073 37.2674 87.4269 37.2674 86.7103C37.2674 85.9939 36.6865 85.4132 35.9703 85.4132H22.2932C21.577 85.4132 20.9961 85.9937 20.9961 86.7103C20.9961 87.4267 21.577 88.0073 22.2932 88.0073Z"
         fill="white"
       />
       <path
         d="M82.8643 85.4132H42.8674C42.1512 85.4132 41.5703 85.9937 41.5703 86.7103C41.5703 87.4267 42.1512 88.0073 42.8674 88.0073H82.8643C83.5804 88.0073 84.1613 87.4269 84.1613 86.7103C84.1613 85.9937 83.5804 85.4132 82.8643 85.4132Z"
         fill="white"
       />
       <path
         d="M82.8629 51.2208H69.1857C68.4696 51.2208 67.8887 51.8013 67.8887 52.5179C67.8887 53.2343 68.4696 53.815 69.1857 53.815H82.8629C83.579 53.815 84.1599 53.2345 84.1599 52.5179C84.1599 51.8013 83.579 51.2208 82.8629 51.2208Z"
         fill="white"
       />
       <path
         d="M22.2932 53.8148H62.2894C63.0055 53.8148 63.5864 53.2343 63.5864 52.5177C63.5864 51.8013 63.0055 51.2206 62.2894 51.2206H22.2932C21.577 51.2206 20.9961 51.8011 20.9961 52.5177C20.9961 53.2343 21.577 53.8148 22.2932 53.8148Z"
         fill="white"
       />
       <path
         d="M82.8629 74.0155H69.1857C68.4696 74.0155 67.8887 74.596 67.8887 75.3126C67.8887 76.029 68.4696 76.6096 69.1857 76.6096H82.8629C83.579 76.6096 84.1599 76.0292 84.1599 75.3126C84.1599 74.5962 83.579 74.0155 82.8629 74.0155Z"
         fill="white"
       />
       <path
         d="M22.2932 76.6096H62.2894C63.0055 76.6096 63.5864 76.0292 63.5864 75.3126C63.5864 74.5962 63.0055 74.0155 62.2894 74.0155H22.2932C21.577 74.0155 20.9961 74.596 20.9961 75.3126C20.9961 76.0292 21.577 76.6096 22.2932 76.6096Z"
         fill="white"
       />
       <path
         d="M82.8629 96.8109H69.1857C68.4696 96.8109 67.8887 97.3913 67.8887 98.1079C67.8887 98.8243 68.4696 99.405 69.1857 99.405H82.8629C83.579 99.405 84.1599 98.8245 84.1599 98.1079C84.1599 97.3913 83.579 96.8109 82.8629 96.8109Z"
         fill="white"
       />
       <path
         d="M62.2894 96.8109H22.2932C21.577 96.8109 20.9961 97.3913 20.9961 98.1079C20.9961 98.8243 21.577 99.405 22.2932 99.405H62.2894C63.0055 99.405 63.5864 98.8245 63.5864 98.1079C63.5862 97.3913 63.0053 96.8109 62.2894 96.8109Z"
         fill="white"
       />
     </svg>
 export default  function Blog({ posts }) {
  console.log(posts);
   const truncateExcerpt = (excerpt, maxLength) => {
     if (excerpt.length <= maxLength) {
       return excerpt;
     } else {
       // Truncate the excerpt and add an ellipsis (...) at the end
       return excerpt.substring(0, maxLength) + "...";
     }
   };
   return (
     <>
       <Head>
   <meta name="google-site-verification" content="ic_oPp7RembUI_tek6mxOkhrlaG-Qg5ZLQ_o0_xO_is" />
    <title>Quality Estimation | Blog</title>
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
       <main className="w-full m-auto  bg-gray-100 relative ">
         <div className="mb-8  m-auto text-center py-24 lg:pt-48  lg:pb-32">
           <h1 className="text-9xl md:text-[10rem] xl:text-[15rem] text-royal xl:leading-[15rem]">BLOG</h1>
           <p className="w-10/12 m-auto xl:text-2xl">
             Learn more about the latest news in the industry
           </p>
         </div>
         <div className="w-full border-t-[1px] border-primary/30 pt-11 relative">
           <span className="hidden lg:block absolute h-full w-[1px] bg-primary/30 left-1/2 top-0"></span>
           <div className="grid lg:grid-cols-2 gap-5  xl:w-10/12 m-auto xl:px-[2.5rem]  ">
             {posts.map((post) => (
              
               <div
                 key={post.uri}
                 className=" max-w-[80rem] w-[90%] m-auto mt-0 flex flex-col  border-b-[1px] mb-3 pb-11 border-primary/30">
                 <Link
                   href={post.uri}
                   className="flex flex-col items-center bg-gray-300 overflow-hidden">
                   <Image
                     src={post.featuredImage?.node.sourceUrl}
                     width={500}
                     height={500}
                     alt={post.title}
                     className={`w-full h-[20rem]  object-cover hover:scale-[105%] duration-300 `}
                   />
                 </Link>
                 <Date className="text-royal/20" dateString={post.date}></Date>
                 <h1 className="text-xl xl:text-5xl my-5"> {post.title}</h1>
                 <p className="hidden lg:block">{post.author.node.name}</p>
                 <article
                   className="text-royal font-light xl:text-xl mb-5 "
                   dangerouslySetInnerHTML={{
                     __html: truncateExcerpt(post.excerpt, 250),
                   }}></article>
              <Link href={post.uri}  className="relative overflow-hidden group bg-primary rounded-full text-white text-2xl px-11 py-3 w-fit mt-11 flex items-center transition-colors duration-300 ease-out">
                  <span className="mr-3 z-30">{paper}</span> <h3 className="z-30 group-hover:tracking-wide duration-300">Read The Article</h3>
                              
                  <span className=" absolute bg-accent left-1/2 -translate-x-1/2 w-16 h-16 rounded-full -bottom-16 group-hover:h-48 group-hover:w-80 group:hover:left-0                transition-all duration-300 z-20"></span>
               </Link>
               </div>
             ))}
           </div>
         </div>
       </main>
     </>
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
           excerpt
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
  
     revalidate: 10,
     props: {
       posts,
     },
   };
 }