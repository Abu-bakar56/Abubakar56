import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";
import test from "node:test";
import { Fragment } from "react";
const testimonials = [
  {
    name: "Ahmed Raza", 
    position: "Lead Data Scientist @ AI Solutions Pakistan",
    text: "Abubakar's expertise in Machine Learning and AI model deployment has transformed our business operations. His ability to optimize models and integrate MLOps pipelines is truly commendable.",
    avatar: memojiAvatar1,
  },
  {
    name: "Sarah Khan",
    position: "CTO @ VisionTech",
    text: "Working with Abubakar has been a game-changer for our Generative AI applications. His deep understanding of LLMs and RAG has enabled us to build innovative AI-driven products with real-world impact.",
    avatar: memojiAvatar2,
  },
  {
    name: "Hassan Ali",
    position: "CEO @ DataVerse",
    text: "Abubakar's ability to implement NLP solutions using LangChain and Large Language Models has helped us automate critical business workflows. His expertise in AI and cloud integration is remarkable.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ayesha Noor",
    position: "AI Researcher @ DeepVision Labs",
    text: "Abubakar is a brilliant AI Engineer. His skills in Deep Learning and TensorFlow allowed us to build highly accurate predictive models for healthcare applications. A true asset to any team!",
    avatar: memojiAvatar4,
  },
  {
    name: "Bilal Zafar",
    position: "Head of Data Science @ PakAI Innovations",
    text: "Abubakar's work in MLOps and AI model deployment has significantly improved our production AI systems. His ability to optimize workflows and integrate cloud-based AI solutions is outstanding.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (<div className="py-16 lg:py-24">
    <div className="container"> 
    <SectionHeader 
    eyebrow="Happy Clients" title="What Clients Say about Me" description="Don't just take my word for it. See what my clients have to say about my work."
   />
    <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
        {[...new Array(2)].fill(0).map((_,index) =>(
          <Fragment key={index} >
 {testimonials.map((testimonial) => (
  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
    <div className="flex gap-4 items-center"> 
   <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
   <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
   </div>
   <div>
   
    <div className="font-semibold">{testimonial.name}</div>
    <div className="text-sm text-white/40">{testimonial.position}</div>
    </div>
    </div>
    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
    </Card>
))}
</Fragment>
        ))}
   
        </div>
    </div>
    </div>
  </div>
  );
};
