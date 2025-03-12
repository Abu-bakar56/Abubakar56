import multiragchatbot from "@/assets/images/multi rag chatbot.jpg";
import chestproject from "@/assets/images/chest project.jpg";
import MovieRecommenderSystem from "@/assets/images/Movie Recommender System.jpg";
import  MultiDomainChatbot  from "@/assets/images/Multi-Domain Chatbot.jpg"; 
import   StockPricePredictionForecasting from "@/assets/images/Stock Price.jpg";
import CustomerChurnPredictor from "@/assets/images/Customer Churn Predictor.jpg";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Self-Initiated Project",
    year: "2025",
    title: "Multi-File RAG Chatbot",
    results: [
      { title: "Enhanced UX by 40% with RAG model" },
      { title: "Boosted site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
  ],
    link: "https://multi-file-rag-chatbot.onrender.com/",
    image: multiragchatbot,
    
  },
  {
    company: "Self-Initiated Project",
    year: "2021",
    title: "Chest Cancer Classification with MLOps",
    results: [
      { title: "Improved diagnosis accuracy by 20%" },
      { title: "Enhanced model efficiency, reducing processing time by 35%" },
      { title: "Increased deployment reliability by 15%" },
  ],
    link: "http://3.109.210.206:8080/",
    image: chestproject,
  },
  {
    company: "Self-Initiated Project",
    year: "2024",
    title: " Stock Price Prediction & Forecasting",
    results: [
      { title: "Enhanced model accuracy for stock price prediction by 40%" },
      { title: "Optimized LSTM model performance, improving processing speed by 50%" },
      { title: "Improved forecasting reliability, increasing user trust by 35%" },
  ],
    link: "https://github.com/Abu-bakar56/Stock-Price-Prediction-And-Forecasting-Using-Stacked-LSTM",
    image:   StockPricePredictionForecasting,
  },
  {
    company: "Self-Initiated Project",
    year: "2024",
    title: "Movie Recommender System with Sentiment Analysis",
    results: [
      { title: "Increased recommendation accuracy by 40%" },
      { title: "Optimized system performance, improving speed by 50%" },
      { title: "Enhanced user engagement, boosting traffic by 35%" },
  ],
    link: "https://movie-recommender-system-with-sentiment.onrender.com/",
    image: MovieRecommenderSystem,
  },

  {
    company: "Self-Initiated Project",
    year: "2025",
    title: " Multi-Domain Chatbot ",
    results: [
      { title: "Increased response accuracy by 40%" },
      { title: "Optimized chatbot performance, improving speed by 50%" },
      { title: "Enhanced user interaction, boosting engagement by 35%" },
  ],
    link: "https://multi-domain-chatbot.onrender.com/",
    image:  MultiDomainChatbot ,
  },
  {
    company: "Self-Initiated Project",
    year: "2024",
    title: " Customer Churn Predictor",
    results: [
      { title: "Improved churn prediction accuracy by 40%" },
      { title: "Optimized ML model efficiency, boosting speed by 50%" },
      { title: "Enhanced customer retention strategies, increasing engagement by 35%" },
  ],
    link: "https://customer-churn-predictor-weql.onrender.com/",
    image:   CustomerChurnPredictor,
  },
 

];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Real-world Results" title="Featured Projects " description="Explore my AI-driven solutions that optimize performance, enhance user experiences, and deliver real-world impact."/>
      

      <div className="flex flex-col md:mt-20 mt-10 gap-20">
        {portfolioProjects.map((project,projectIndex) => (
          <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky " style={
            {
              top: `calc(64px + ${projectIndex * 40}px)` ,
            }
          }>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                </ul>
                <a href={project.link}>
                  <button className="  bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className='size-4' />
                  </button>
                </a>

              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
