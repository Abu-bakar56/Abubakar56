
// import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

// import Link from 'next/link';

// import grainImage from '@/assets/images/grain.jpg';
// export const ContactSection = () => {
//   return <div className='py-16  pt-12 lg:py-24 lg:pt-20 '>
//     <div
//     //  className='container'

 

//     >
//       <div 
//       className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left  relative overflow-hidden z-0'
//       >
//         <div className='absolute inset-0 opacity-5 -z-10' style={{
//           backgroundImage: `url(${grainImage.src})`,
//         }}></div>
//         <div 
//         // className='flex flex-col md:flex-row gap-8 md:gap-16 items-center '
//         className='flex flex-col gap-8 md:gap-16  '
//         >
//           <div className=''>
//             <h2 className='font-serif text-2xl md:text-3xl'>Let's create something amazing together</h2>
//             <p className='text-sm md:text-base mt-2'>Ready to bring your next project to life? let's connect and
//               discuss how I can help you achieve your goals.
//             </p>
//           </div>
//           <div  
          
//           >
           



//   <Link href="/contact">
//   <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl -z-10 text-white bg-gray-900  items-center px-6 h-12  rounded-xl gap-2  w-max border border-gray-900">
//   <span className="font-semibold">Contact Me</span>
//     <ArrowUpRightIcon className="size-4" />
//   </button>
// </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// };

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import Link from 'next/link';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 relative">
      <div className="container relative">
        {/* Card with gradient */}
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          
          {/* Background Image (Ensuring It Doesn't Block Clicks) */}
          <div
            className="absolute inset-0 opacity-5 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${grainImage.src})`, zIndex: "-1" }}
          ></div>

          {/* Content Section */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            
            {/* Text Content */}
            <div className="relative z-10">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let’s connect and discuss how I can help you achieve your goals.
              </p>
            </div>

            {/* Fix: Wrapped button in a relative div */}
            <div className="relative z-20">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-6 h-12 rounded-xl text-white bg-gray-900 w-max border border-gray-900 hover:bg-gray-800 transition">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="w-5 h-5" />
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
