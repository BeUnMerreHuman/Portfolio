import { StaticImageData } from "next/image";

import BUChatbot from "@/public/assets/images/ProjectPictures/big-images/BUChatbot.png";
import ViTComparison from "@/public/assets/images/ProjectPictures/big-images/ViTComparison.jpg";
import NYC from "@/public/assets/images/ProjectPictures/big-images/NYC.png";
import AnimeDetector from "@/public/assets/images/ProjectPictures/big-images/AnimeDetector.jpg";

export type ProjectLayout = "default" | "reversed";

export type CapstoneEntry = {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  imageUrl: string;
  gitLink: string;
  youtubeLink?: string;
  liveLink: string;
  techStackList: string[];
  layout?: ProjectLayout;
};

const capstoneEntries: CapstoneEntry[] = [
  {
    title: "BU-Chatbot",
    description:
      "Developed a RAG-based AI chatbot for the Bahria University Student Rulebook by transforming a static PDF into an interactive assistant using MongoDB Atlas Vector Search, LangChain, and Groq LLMs. Implemented conversational memory with LangChain and secure authentication with Clerk. Containerized the backend with Docker and deployed it on Azure, while hosting the frontend on Vercel, reducing response latency from 55 seconds to 5 seconds.",
    image: {
      src: BUChatbot,
      alt: "BU-Chatbot Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/BChatbot.jpg", 
    gitLink: "https://github.com/BeUnMerreHuman/BU-Chatbot",
    liveLink: "https://bu-chatbot-teal.vercel.app/",
    techStackList: ["FastAPI", "Clerk", "MongoDB", "Groq", "LangChain", "Docker", "Azure"],
    layout: "default",
  },
  {
    title: "Anime Character Detector",
    description:
      "Developed an end-to-end zero-shot anime character detection and tracking pipeline, covering dataset creation, model fine-tuning, optimization, and deployment. Combined a fine-tuned DEIMv2 object detector with a LoRA-adapted DINOv3 Vision Transformer for robust visual feature extraction and character re-identification without retraining for new classes. Integrated vector database-based similarity search for matching characters across images and videos, and exported the pipeline to ONNX for optimized inference. Achieved near real-time performance, processing 1 second of video content in approximately 2.5 seconds using GPU acceleration.",
    image: {
      src: AnimeDetector,
      alt: "Anime Detector Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/AnimeDetector.jpg", 
    gitLink: "https://github.com/BeUnMerreHuman/Anime-Character-Re-Identification",
    liveLink: "https://colab.research.google.com/drive/1DTeRMEg3lb7MMctzIaPw7n3IeXc7j6Di",
    techStackList: ["DEIMv2", "DINOv3", "Numpy", "LanceDB", "OpenCV", "ONNX", "GoogleColab"],
    layout: "reversed",
  },
  {
    title: "NYC Fare Predictor",
    description:
      "Developed a hybrid NYC taxi fare prediction system using over 40 million trip records. Built an ensemble of five machine learning models to estimate variable fare components, combined with data-driven business rules for fixed charges derived from extensive exploratory data analysis (EDA). Achieved an average prediction error of 8.5% and deployed the application on Hugging Face Spaces with an optimized inference pipeline for fast CPU performance.",
    image: {
      src: NYC,
      alt: "NYC Fare Predictor Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/NYC.jpg", 
    gitLink: "https://github.com/BeUnMerreHuman/NYC-FarePredictor",
    liveLink: "https://huggingface.co/spaces/Be-Un-Merre-Human/NYC_Fare_Predictor",
    techStackList: ["Numpy", "DuckDB", "SKLearn", "XGBoost", "Seaborn", "FastAPI", "HuggingFace"],
    layout: "default",
  },
  {
    title: "ViT Comparison",
    description:
      "Conducted a comparative study of parameter-efficient fine-tuning techniques on DINOv3-ViT-L/16 (300M parameters) for few-shot fine-grained image classification using a custom dataset of 1,292 images across 26 classes. Benchmarked frozen retrieval, linear probing, partial fine-tuning, LoRA, and LoRA with Supervised Contrastive Learning (SupCon), where LoRA consistently outperformed full fine-tuning at every data stage (10%-80%), reaching 97.8% Top-1 accuracy. Implemented memory-efficient training with gradient checkpointing and optimized batch scheduling to overcome GPU memory limitations.",
    image: {
      src: ViTComparison,
      alt: "ViT Comparison Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/ViTComparison.jpg", 
    gitLink: "https://www.kaggle.com/code/muneeburrehman98/dino-v3-comparison",
    liveLink: "https://www.linkedin.com/posts/muneeb-ur-rehman-siddiqui-618a6336a_deeplearning-computervision-lora-ugcPost-7443182829955379200-dy66/",
    techStackList: ["UMAP", "FAISS", "PEFT", "Transformers", "Pytorch", "MLflow", "Kaggle"],
    layout: "reversed",
  },
];

export default capstoneEntries;
