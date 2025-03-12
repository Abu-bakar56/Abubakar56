import { Fragment } from "react";
import { TechIcon } from "@/components/tech1"; // Assuming this imports your icon component
import Image from 'next/image'; // Import the Image component from Next.js
import PythonIcon from '@/assets/icons/python-brands-solid.svg';
import MLOpsIcon from '@/assets/icons/mlops.svg';
import TensorFlowIcon from '@/assets/icons/tensorflow-icon.svg';
import PyTorchIcon from '@/assets/icons/pytorch-icon.svg';
import LLMIcon from '@/assets/icons/artificial-intelligence-ai-icon.svg';
import LangChainIcon from '@/assets/icons/langchain.svg';
import JupyterIcon from '@/assets/icons/jupyter.svg';
import AIAgentsIcon from '@/assets/icons/multi-agent-vector-53603749.svg';
import aboutpa from '@/assets/images/about.jpeg'; // Ensure the path is correct based on your project setup.

import HuggingFaceIcon from '@/assets/icons/Hugging Face_idJ6-I79C__0.svg';
import RAGIcon from '@/assets/icons/rag.svg';
import GithubIcon from '@/assets/icons/github.svg';
const words = [
 'Python',
  'TensorFlow',
'PyTorch',
  'Hugging Face',
  'LLMs',
 'MLOps',
   'LangChain',
    'Jupyter Notebook',
    'RAG',
    'AI Agents',
    'GitHub',
   
];

const icons = [
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'TensorFlow',
    iconType: TensorFlowIcon,
  },
  {
    title: 'PyTorch',
    iconType: PyTorchIcon,
  },
  {
    title: 'Hugging Face',
    iconType: HuggingFaceIcon,
  },
  {
    title: 'LLMs',
    iconType: LLMIcon,
  },
  {
    title: 'MLOps',
    iconType: MLOpsIcon,
  },
  {
    title: 'LangChain',
    iconType: LangChainIcon,
  },
  {
    title: 'Jupyter Notebook',
    iconType: JupyterIcon,
  },

  {
    title: 'RAG',
    iconType: RAGIcon,
  },
  {
    title: 'AI Agents',
    iconType: AIAgentsIcon,
  },
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },
];

export const TapeSection = () => {
  return (
    <div className="container">



<div className="relative flex items-center justify-center py-16 lg:py-24 overflow-x-clip mt-20 mb-20">
  {/* Center Image */}
 

  {/* Top row - slanted left */}
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-10 mt-20  ">
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <div className="flex flex-none gap-6 pr-4 py-3 animate-move-left [animation-duration:30s]">
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {words.map((word, wordIndex) => (
              <div key={word} className="inline-flex gap-6 items-center">
                <span className="text-white/80 uppercase font-extrabold text-sm">
                  {word}
                </span>
                {icons[wordIndex % icons.length] && (
                  <TechIcon component={icons[wordIndex % icons.length].iconType} />
                )}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  </div>
  <div className="absolute -z-10 md:w-1/2 flex justify-center mb-5">
    <Image 
      src={aboutpa} 
      alt="About Me" 
      className="w-2/3 h-auto rounded-lg shadow-xl rotate-3"
      width={400} 
      height={400} 
    />
  </div>

  {/* Bottom row - slanted right */}
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-10 mt-20 -z-20">
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <div className="flex flex-none gap-6 pr-4 py-3 animate-move-right [animation-duration:30s]">
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {words.map((word, wordIndex) => (
              <div key={word} className="inline-flex gap-6 items-center">
                <span className="text-white/80 uppercase font-extrabold text-sm">
                  {word}
                </span>
                {icons[wordIndex % icons.length] && (
                  <TechIcon component={icons[wordIndex % icons.length].iconType} />
                )}
              </div>
            ))}
          </Fragment>
        ))}  
      </div>
    </div>
  </div>
</div>


    </div>
  );
};
