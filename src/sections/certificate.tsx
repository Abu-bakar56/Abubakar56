import sepecialization from "@/assets/images/Certificate/sepecialization.jpg";
import  AdvanceFineTuning from "@/assets/images/Certificate/Advance Fine-Tuning.jpg";
import  RAGandlanchain from "@/assets/images/Certificate/RAGand lanchain.jpg";
import  RAGlanchain from "@/assets/images/Certificate/RAGlanchain.jpg";
import EngineeringandFineTuning from  "@/assets/images/Certificate/Engineering and Fine-Tuning.jpg";
import mlops from "@/assets/images/Certificate/mlops.jpg";
import ml from "@/assets/images/Certificate/ml.jpg";
import datascience from "@/assets/images/Certificate/data science.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const certificates = [

  {
    "name": "aaa",
    "issuer": "aaa",
    "description": "aaa",
    "image": sepecialization
  },
  {
    "name": "bbb",
    "issuer": "bbb",
    "description": "bbb",
    "image":  AdvanceFineTuning
  },
  {
    "name": "ccc",
    "issuer": "ccc",
    "description": "ccc",
    "image":  RAGandlanchain 
  },
  {
    "name": "ddd",
    "issuer": "ddd",
    "description": "ddd",
    "image":   RAGlanchain
  },
  {
    "name": "eee",
    "issuer": "eee",
    "description": "eee",
    "image":   EngineeringandFineTuning
  },
  {
    "name": "fff",
    "issuer": "fff",
    "description": "fff",
    "image":  mlops
  },
  {
    "name": "ggg",
    "issuer": "ggg",
    "description": "ggg",
    "image":  ml
  },
  {
    "name": "hhh",
    "issuer": "hhh",
    "description": "hhh",
    "image":  datascience
  },


];

export const CertificatesSection = () => {
  return (
    <div className="py-16 lg:py-24">

      <div className="container">

        <SectionHeader
          eyebrow="My Achievements"
          title="Certificates I Have Earned"
          description="Explore the certificates I've earned through rigorous learning and dedication."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused] ">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {certificates.map((certificate) => (
                  <Card key={certificate.name} className="max-w-xs sm:max-w-sm md:max-w-lg   hover:-rotate-3  transition duration-300">

                    <div className=" relaive mt-2 px-2 py-2">
                      <Image src={certificate.image} alt={certificate.name} className="w-full h-100  object-cover rounded-lg" />
                    </div>
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
