export type MiniProjectEntry = {
  title: string;
  description: string;
  gitLink: string;
  liveLink: string;
  listItems: string[];
};

const miniProjectsEntries: MiniProjectEntry[] = [
  {
    title: "Low-Shot Color Classifier",
    description:
      "An end-to-end pipeline for low-shot image classification, designed to bridge the gap between manual data collection, data cleaning and deep learning. ",
    gitLink: "https://github.com/BeUnMerreHuman/Low-Shot-Color-Classifier",
    liveLink: "https://github.com/BeUnMerreHuman/Low-Shot-Color-Classifier",
    listItems: ["AppSheet", "PyQt6", "Tensorflow"],
  },
  {
    title: "LLM Style Transfer ",
    description:
      "Fine-tuned an open-source LLM using QLoRA to emulate Gollum's speech patterns, vocabulary, and conversational style from The Lord of the Rings",
    gitLink: "https://www.kaggle.com/code/muneeburrehman98/qwen3-qlora",
    liveLink: "https://colab.research.google.com/drive/1gkIefC7x8_LDxZyI3-3oAUhBeTAoFUdc",
    listItems: ["Unsloth", "ChromaDB", "Langchain"],
  },
  {
    title: "Anime Character Dataset",
    description:
      "Created a dataset containing about 15000 anime images sourced from Danbooru, annotated in COCO format for training character detection models.",
    gitLink: "https://github.com/BeUnMerreHuman/Anime-COCO-Pipeline",
    liveLink: "https://www.kaggle.com/datasets/muneeburrehman98/danbooru-annotated-images",
    listItems: ["OpenCV", "ONNX", "Kaggle"],
  },
  {
    title: "Karachi Navigator",
    description:
      "Karachi-Navigator is a standalone, high-performance navigation engine designed specifically for Karachi’s road network.",
    gitLink: "https://github.com/BeUnMerreHuman/Karachi-Navigator",
    liveLink: "https://karachi-navigator.onrender.com/",
    listItems: ["GeoJSON", "NetworkX", "FastAPI"],
  },
  {
    title: "Few-Shot Vision Dataset",
    description:
      "Curated images from the One Piece universe, designed for few-shot learning, character recognition, and computer vision tasks.",
    gitLink: "https://www.kaggle.com/datasets/muneeburrehman98/one-piece-character-images",
    liveLink: "https://www.kaggle.com/datasets/muneeburrehman98/one-piece-character-images",
    listItems: ["Playwright", "PyQt6", "Kaggle"],
  },
  {
    title: "BU Student Rulebook",
    description:
      "A structured JSON transformation of the Bahria University Student Rulebook for Retrieval-Augmented Generation pipelines.",
    gitLink: "https://www.kaggle.com/datasets/muneeburrehman98/bu-student-rulebook-spring-2025-structured-json",
    liveLink: "https://www.kaggle.com/datasets/muneeburrehman98/bu-student-rulebook-spring-2025-structured-json",
    listItems: ["Regex", "JSON", "Kaggle"],
  },
  {
    title: "Personal Python Library",
    description:
      "Created \"muneeb_nlp\", a Python package that simplifies NLP preprocessing for textual columns.",
    gitLink: "https://libraries.io/pypi/muneeb_nlp",
    liveLink: "https://libraries.io/pypi/muneeb_nlp",
    listItems: ["Pandas", "NLTK", "PYPI"],
  },
  {
    title: "Image Dataset Builder",
    description:
      "An end-to-end workflow designed to scrape, curate, and package high-quality image datasets.",
    gitLink: "https://github.com/BeUnMerreHuman/Image-Dataset-Builder",
    liveLink: "https://github.com/BeUnMerreHuman/Image-Dataset-Builder",
    listItems: ["Camoufox", "Parquet", "Snakemake"],
  },
  {
    title: "Wasooli",
    description:
      "A Flask-based web application that fetches, filters, and displays real-time student data from an external API.",
    gitLink: "https://github.com/BeUnMerreHuman/Wasooli",
    liveLink: " https://wasooli.onrender.com",
    listItems: ["JavaScript", "Flask", "Pandas"],
  },
];

export default miniProjectsEntries;
