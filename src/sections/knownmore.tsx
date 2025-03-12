'use client';


import { FaUniversity, FaBuilding } from 'react-icons/fa';


import { TechIcon } from "@/components/TechIcon";  // Correct import path
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

import { HeroOrbit } from '@/components/HeroOrbit';

import React, { useRef } from "react";

import grainImage from '@/assets/images/grain.jpg';

const KnowMoreSection = () => {
  const education = [
    // { year: '2021 - Present', degree: 'BS Computer Science', institute: 'The University of Faisalabad', percentage: '3.75' },
    { year: '2020 - 2022', degree: 'Fsc Pre Engineering', institute: 'Punjab Group of Colleges', percentage: '75%' },
    { year: '2018 - 2020', degree: 'Matriculation', institute: 'White Rose School System', percentage: '82%' },
  ];

  const experience = [
    { year: 'June 2024 - Sep 2024', role: 'Web Developer', company: 'CSOFT Systems', duration: '3 months' },
    // { year: 'Aug 2024', role: 'Intern', company: 'NetSol Technologies, Lahore', duration: '1 month' },
    // { year: '2023', role: 'Deep Learning Researcher', company: 'Self-Learning & Open Source Contributions', duration: '6 months' },
  ];
  const universityGreen = "white";
  // Customize with your education color

  return (
    <div className="py-20 md:py-32 bg-gradient-to-r from-darkblue-900 text-white ">
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'> 
    <div className='absolute inset-0 -z-30 opacity-5' style={{
      backgroundImage:`url(${grainImage.src})`,
    }}></div>



{/* 

<HeroOrbit size={330} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
 <SparkleIcon className="size-8 text-emerald-300/20" />
  </HeroOrbit>
  <HeroOrbit size={340} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
 <SparkleIcon className="size-5 text-emerald-300/20" />
  </HeroOrbit>
  <HeroOrbit size={420} rotation={-41} shouldOrbit orbitDuration='34s'>
 <div className="size-2 rounded-full bg-emerald-300/20" >
 </div>
  </HeroOrbit>
  <HeroOrbit size={430} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
 <SparkleIcon className="size-10 text-emerald-300/20" />
  </HeroOrbit>
  <HeroOrbit size={450} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
 <StarIcon className="size-12 text-emerald-300" />
  </HeroOrbit>
  <HeroOrbit size={490} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
 <StarIcon className="size-8 text-emerald-300" />
  </HeroOrbit>
  <HeroOrbit size={550} rotation={-5} shouldOrbit orbitDuration='42s'>
 <div className="size-2 rounded-full bg-emerald-300/20" >
 </div>
  </HeroOrbit>
  <HeroOrbit size={610} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
 <SparkleIcon className="size-14 text-emerald-300/20" />
  </HeroOrbit>
  <HeroOrbit size={620} rotation={85} shouldOrbit orbitDuration='46s'>
 <div className="size-3 rounded-full bg-emerald-300/20" >
 </div>
  </HeroOrbit>
<HeroOrbit size={700} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
  <StarIcon className='size-28 text-emerald-300'/>
  </HeroOrbit>
  */}
 
  

  </div>
      
      <div className="container mx-auto px-4">
          
        {/* About Section */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
             <h1  className="text-5xl font-extrabold uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text bg-clip-text mb-4">About Me</h1>
            <SectionHeader eyebrow="" title="" description=" I am a passionate AI Engineer and Data Scientist with a strong background in machine learning, deep learning, and data science. 
            Currently pursuing a Bachelor's in Computer Science, I have a keen interest in building innovative solutions and working on cutting-edge projects. 
            I aim to push the boundaries of technology and contribute to impactful advancements in the AI and ML fields. My journey in technology is fueled by a passion for transforming data into actionable insights and solving complex problems.with like-minded individuals and contributing to meaningful initiatives that leverage technology for positive change."/>
         
          {/* <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
           
          </p> */}
        </div>

        {/* Education Section */}
        {/* <h1 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center text-transparent bg-clip-text tracking-widest animate__animated animate__fadeIn"></h1> */}
    <div className='pt-5'>
    <SectionHeader eyebrow="MY EDUCATION" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and inspires me." />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      
      
        <div  className="p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className='absolute inset-0 opacity-5 -z-10' style={{
      backgroundImage: `url(${grainImage.src})`,
    }}></div>
          <FaUniversity style={{ color: universityGreen }} className="mx-auto text-4xl mb-4 bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text" />
          <h3  className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text">BS Computer Science</h3>
          <p className="text-gray-400">The University of Faisalabad</p>
          <span className="text-sm text-gray-500">2022 - Present</span>
          <p className="text-sm text-gray-400 mt-2">CGPA: <span >3.75</span></p>
        </div>
     
    {/* </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mt-10"> */}
      
          {education.map((edu, index) => (
            <div key={index} className="p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <div className='absolute inset-0 opacity-5 -z-10' style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>
              <FaUniversity style={{ color: universityGreen }} className="mx-auto text-4xl mb-4 bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text" />
              <h3  className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institute}</p>
              <span className="text-sm text-gray-500">{edu.year}</span>
              <p className="text-sm text-gray-400 mt-2">Percentage: <span >{edu.percentage}</span></p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        {/* <h1  className="text-center text-4xl font-extrabold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mt-16 mb-10 animate__animated animate__fadeIn">MY EXPERIENCES</h1>
        <h2 className="text-center text-2xl font-semibold text-white mb-16">Where I've Been Employed</h2> */}
      <div className='mt-16'>
      <SectionHeader eyebrow="MY EXPERIENCES" title="Where I've Been Employed" description=""/>
        <div className="space-y-12 mt-10">
          {experience.map((exp, index) => (
            <div key={index} className="border-b border-gray-700 pb-6  transform transition duration-300 ease-in-out">
              <div className="flex items-center mb-4 ">
                <FaBuilding style={{ color: universityGreen }} className="text-3xl mr-4 " />
                <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  {exp.role}, <span >{exp.company}</span>
                </h3>
              </div>
              <p className="text-sm text-gray-400">{exp.year}</p>
              <p className="text-sm text-gray-400 mt-2">Duration: <span >{exp.duration}</span></p>
              <p className="text-gray-300 mt-2">
              I do intership as a web developer at CSOFT Systems, where my role involves working with front-end and back-end technologies to create seamless user experiences.
              </p>
            </div>
          ))}
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default KnowMoreSection;
