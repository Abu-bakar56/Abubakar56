import Image from 'next/image'; // Import the Image component from Next.js
import aboutpa from '@/assets/images/about (1).jpg'; // Ensure the path is correct based on your project setup.
import ArrowUpRightIcon from '@/assets/icons/arrow-right-solid.svg';
import Link from 'next/link';
export const AboutMePage = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section (Text) */}
          <div className="text-left max-w-lg mx-auto md:max-w-none md:w-1/2">
  <div className="mt-8">
    <h1 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
      About Me
    </h1>
    
    <h1 className="bg-transparent font-semibold text-white mt-4  md:text-left text-3xl md:text-4xl font-bold">
    Know who am I
</h1>

      <br />
      <p className="text-center md:text-left text-white/60 md:text-lg">
  I'm an <strong>AI Engineer & Data Scientist</strong>, currently pursuing Computer Science at The University of Faisalabad. Passionate about AI, I specialize in Machine Learning, Deep Learning, and Generative AI, developing intelligent solutions using LLMs, RAG, and LangChain. With expertise in Python, SQL, Flask, and cloud technologies, I build scalable AI-driven applications.  

  Currently, I'm diving deeper into MLOps, optimizing AI workflows, and advancing Generative AI models. I believe technology, when applied effectively, can drive meaningful change. Let’s connect and shape the future together!
</p>


  </div>
  <div className="flex flex-col md:flex-row justify-start items-center mt-6 gap-4">
    {/* <button className="inline-flex items-center gap-2   border border-white/50 px-6 h-12 rounded-xl z-20 bg-transparent text-white hover:bg-white/10 transition-all"  >
      <span className="font-semibold ">Know More</span>
      <ArrowUpRightIcon className="size-4 " />
    </button> */}


<Link href="/know-more">
  <button className="inline-flex items-center gap-2 border border-white/50 px-6 h-12 rounded-xl z-20 bg-transparent text-white hover:bg-white/10 transition-all">
    <span className="font-semibold">Know More</span>
    <ArrowUpRightIcon className="size-4" />
  </button>
</Link>
    
     {/* Arrow & Text Positioned Below Image */}
  <div className="absolute bottom-[280px] left-1/2 -translate-x-1/2 flex items-center gap-2 flex flex-col items-center md:items-start md:-my-20 md:mx-10  ">
    
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 320 512"
  className="w-5 h-5 text-emerald-300 mb-5 md:w-8 md:h-8 "
  fill="currentColor"
>
  <path d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"/>
</svg>

    <span className=" bg-gradient-to-r from-emerald-300 to-sky-400  text-black/60 text-sm font-semibold mx-5 mt-15 rotate-6">AbuBakar Shahzad</span>
  </div>
  </div>
 
</div>


          {/* Right Section (Picture) */}
          <div className="relative md:w-1/2 flex justify-center mt-10"> 
  <Image 
    src={aboutpa} 
    alt="About Me" 
    className="w-2/3 h-auto rounded-lg shadow-xl rotate-3"
    width={400} 
    height={400} 
  />
  
 
</div>

        </div>

        {/* Know More Button Section */}
        
      </div>
    </div>
  );
};

