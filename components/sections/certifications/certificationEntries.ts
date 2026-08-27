import { StaticImageData } from "next/image";

// Placeholder imports for your images (update these paths as needed)
import googleLogo from "@/public/assets/images/Certifications/Logos/Google.png";
import ibmLogo from "@/public/assets/images/Certifications/Logos/IBM.png";
import anthropic from "@/public/assets/images/Certifications/Logos/Anthropic.png";
import UB from "@/public/assets/images/Certifications/Logos/UB.png";
import packt from "@/public/assets/images/Certifications/Logos/Packt.png";
import DataAnalytics from "@/public/assets/images/Certifications/DataAnalytics.jpg";
import MLOps from "@/public/assets/images/Certifications/MLOps.jpeg";
import Blockchain from "@/public/assets/images/Certifications/Blockchain.jpg";
import MCP from "@/public/assets/images/Certifications/MCP.jpg";
import DeepLearning from "@/public/assets/images/Certifications/DeepLearning.jpeg";
import MachineLearning from "@/public/assets/images/Certifications/MachineLearning.jpeg";
import AIhealthcare from "@/public/assets/images/Certifications/AIinHealthcare.png";
import AIEthics from "@/public/assets/images/Certifications/AIEthics.png";
import NASA from "@/public/assets/images/Certifications/Logos/NASA.png";
import RemoteSensing from "@/public/assets/images/Certifications/RemoteSensing.png";

export type CertificationEntry = {
  title: string;
  provider: string;
  providerLogo: StaticImageData;
  certImage: StaticImageData;
  link: string;
  skills: string[];
};

const certificationEntries: CertificationEntry[] = [
  {
    title: "Model Context Protocol: Advanced Topics",
    provider: "Anthropic",
    providerLogo: anthropic,
    certImage: MCP,
    link: "https://verify.skilljar.com/c/rteqvhr66umf",
    skills: ["Client-Server Model", "Tool Calling & Integration", "AI Workflow Automation", "Prompt Engineering"],
  },
  {
    title: "DevOps to MLOps Bootcamp",
    provider: "Packt",
    providerLogo: packt,
    certImage: MLOps,
    link: "https://coursera.org/share/5bb7234ede9c749dab29ee8c0be3f28f",
    skills: ["Data Preprocessing", "Model Optimization","Model Deployment", "Devops Tools"],
  },
  {
    title: "Deep Learning with Keras and Tensorflow",
    provider: "IBM",
    providerLogo: ibmLogo,
    certImage: DeepLearning,
    link: "https://coursera.org/share/a2243df4d785d4ad0ee4e59f6af01ae2",
    skills: ["Tensorflow", "Transfer Learning", "Unsupervised Learning", "Generative Model Architectures"],
  },
  {
    title: "Machine Learning with Python",
    provider: "IBM",
    providerLogo: ibmLogo,
    certImage: MachineLearning,
    link: "https://coursera.org/share/689e0cba69bb8bc553f9a150bf8a6c92",
    skills: ["Scikit Learn" ,"Dimensionality Reduction", "Supervised Learning", "Model Evaluation"],
  },
  {
    title: "Google Advanced Data Analytics",
    provider: "Google",
    providerLogo: googleLogo,
    certImage: DataAnalytics,
    link: "https://coursera.org/share/750dad86259a35f4bcb79f39ffb09d55",
    skills: ["Advanced Analytics", "Probability & Statistics", "Data Visualization", "Data-Driven Decision-Making"],
  },
  {
    title: "AI in Healthcare",
    provider: "IBM",
    providerLogo: ibmLogo,
    certImage: AIhealthcare,
    link: "https://skills.yourlearning.ibm.com/activity/PLAN-E7B5ACC9E97C",
    skills: ["Healthcare Applications", "Ethical Considerations", "Patient Data Privacy", "Clinical Decision-Making"],
  },
  {
    title: "Decoding Responsible AI: Upholding Pillars of Trust",
    provider: "IBM",
    providerLogo: ibmLogo,
    certImage: AIEthics,
    link: "https://skills.yourlearning.ibm.com/activity/ALM-COURSE_4068808",
    skills: ["Ethical Frameworks", "Bias and Fairness", "Transparency", "Accountability"],
  },
  {
    title: "Blockchain Specialization",
    provider: "University at Buffalo",
    providerLogo: UB,
    certImage: Blockchain,
    link: "https://coursera.org/share/b361c7c63238ccb94e3b3f96426df39d",
    skills: ["Cryptographic Protocols", "Distributed Computing", "Smart Contracts", "Decentralized Applications"],
  },
  {
    title: "Fundamentals of Remote Sensing",
    provider: "NASA",
    providerLogo: NASA,
    certImage: RemoteSensing,
    link: "https://arset.unhosting.site/pluginfile.php/1/tool_certificate/issues/1787822733/6192993601MS.pdf",
    skills: ["Remote Sensing", "Image Processing", "Geospatial Analysis", "Environmental Monitoring"],
  }
];

export default certificationEntries;