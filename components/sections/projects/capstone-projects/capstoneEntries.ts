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
      "The BU Chatbot transforms a static PDF into an interactive AI assistant designed to help students navigate the Bahria University Student Rulebook. This project leverages MongoDB Atlas for vector search, Groq for high-speed LLM inference, and Clerk for secure user authentication.",
    image: {
      src: BUChatbot,
      alt: "BU-Chatbot Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/BChatbot.jpg", 
    gitLink: "https://github.com/BeUnMerreHuman/BU-Chatbot",
    liveLink: "https://bu-chatbot-a4c9hkggdrbtbfhs.southeastasia-01.azurewebsites.net/",
    techStackList: ["FastAPI", "Clerk", "MongoDB", "Groq", "LangChain", "Docker", "AWS"],
    layout: "default",
  },
  {
    title: "Anime Character Detector",
    description:
      "Developed a zero-shot anime character detection and tracking system capable of recognizing and re-identifying characters without retraining for new classes. The system combines a fine-tuned DEIMv2 detector with a LoRA-adapted DINOv3 vision transformer for feature extraction, using a vector database and similarity search to match previously seen characters across images and videos. Integrated Norfair tracking for consistent identity tracking in video streams and deployed the pipeline with ONNX for efficient inference.",
    image: {
      src: AnimeDetector,
      alt: "Anime Detector Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/AnimeDetector.jpg", 
    gitLink: "https://github.com/BeUnMerreHuman/Anime-Character-Re-Identification",
    liveLink: "https://colab.research.google.com/drive/1DTeRMEg3lb7MMctzIaPw7n3IeXc7j6Di",
    techStackList: ["DEIMv2", "DINOv3", "Norfair", "LanceDB", "OpenCV", "ONNX", "GoogleColab"],
    layout: "reversed",
  },
  {
    title: "NYC Fare Predictor",
    description:
      "Built a hybrid NYC taxi fare prediction system using 40+ million trip records. Combined data-driven business rules for fixed charges with multiple machine learning models for uncertain fare components such as base fares, tips, and tolls. Designed an explainable prediction pipeline that delivers accurate fare estimates from a minimal set of trip inputs.",
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
      "Benchmarked multiple adaptation strategies for DINOv3 to identify 26 One Piece characters from a custom dataset. Evaluated Frozen Features, Linear Probing, Fine-Tuning, LoRA, and LoRA + Supervised Contrastive Learning across different training data sizes. LoRA + SupCon consistently delivered the highest accuracy, reaching 97.7% top-1 accuracy while maintaining strong performance even in low-data scenarios.",
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
