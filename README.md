🧬 DNA Sequence–Based Disease Classification with Caduceus

An AI-powered web application for predicting genetic diseases from DNA sequences using GAN-based synthetic data augmentation and a bi-directional transformer (Caduceus).
The system provides confidence scores, SHAP-based explainability, and downloadable clinical reports, making predictions interpretable and clinically meaningful.

📌 Project Overview

With the growing adoption of whole-genome sequencing in healthcare and research, there is a strong demand for accurate, scalable, and interpretable AI models to detect disease-associated genetic patterns.

This project addresses:

⚠️ Class imbalance in rare genetic diseases

🧠 Long-range genomic dependency modeling

🔍 Lack of explainability in deep learning–based genomic models

✨ Key Features

🔬 DNA sequence input via web interface

🧪 GAN-based synthetic DNA sequence generation (SeqGAN)

🤖 Transformer-based disease classification (Caduceus)

📊 Single-label and multi-label (100-disease) prediction

🧠 SHAP-based nucleotide-level explainability

📄 Downloadable clinical report (PDF-ready)

🌐 Modern frontend built using Vite + TypeScript

🏗️ Tech Stack
Backend

Python 3.9+

Flask

PyTorch

HuggingFace Transformers

SHAP

Scikit-learn

NumPy, Pandas

Frontend

Vite

TypeScript

HTML

CSS

Models

Caduceus (Bi-directional Transformer)

DNA-BERT (comparative analysis)

CNN + BiLSTM (baseline)

SeqGAN for synthetic DNA generation

📁 Project Structure
├── backend/
│   ├── app.py
│   ├── models/
│   ├── utils/
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── src/
│   │   ├── main.ts
│   │   ├── components/
│   │   └── styles/
│   ├── vite.config.ts
│   └── package.json
│
├── training/
│   ├── single_label_training.ipynb
│   ├── 100_multilabel_training.ipynb
│   └── datasets/
│       └── clinvar_sequence_disease_clean.csv
│
├── single_label_classifier.py
├── multi_label_classifier.py
└── README.md

⚙️ Prerequisites
Software

Python 3.9+

Node.js 18+

npm / yarn

Git

Hardware

Minimum: 16 GB RAM, 4-core CPU

Recommended: NVIDIA GPU (RTX 3040+), CUDA-enabled

🚀 Running the Web Application (Inference)
1️⃣ Backend Setup
cd backend
python -m venv venv


Activate environment:

Windows

venv\Scripts\activate


Linux / macOS

source venv/bin/activate


Install dependencies:

pip install -r requirements.txt


Run Flask server:

python app.py


Backend runs at:

http://127.0.0.1:5000

2️⃣ Frontend Setup (Vite + TypeScript)
cd frontend
npm install


Start development server:

npm run dev


Frontend runs at:

http://localhost:5173

🧪 DNA Input Format

Plain text DNA sequence

Allowed nucleotides:

A, C, G, T, N


Example:

ATGCGTACGTAGCTAGCTAGCTA

📤 Output

Predicted disease(s)

Confidence score per disease

SHAP-based nucleotide explanations

Interpretable visual plots

Report-ready outputs

🧠 Model Training README (Caduceus)
Caduceus — Variant-to-Disease Classifiers

This repository contains code, notebooks, and datasets used to train and evaluate DNA variant → disease classifiers using transformer-based models.

Classification Modes

Single-label classification (one disease per sequence)

Multi-label classification (100 disease labels per sequence)

📂 Training Artifacts

single_label_classifier.py — training & evaluation script (single-label)

multi_label_classifier.py — training & evaluation script (multi-label)

training/single_label_training.ipynb — Colab notebook (single-label)

training/100_multilabel_training.ipynb — Colab notebook (100-label)

training/datasets/clinvar_sequence_disease_clean.csv — cleaned dataset

📊 Results
Task	F1 Score
Single-label	82.4%
Multi-label (100 labels)	59.3%

All results were obtained using Google Colab GPU runtime.

🚀 Quick Start — Run in Google Colab (Recommended)

Open Google Colab

Go to File → Open Notebook → GitHub

Paste the repository URL

Open:

training/single_label_training.ipynb

OR training/100_multilabel_training.ipynb

Set:

Runtime → Change runtime type → GPU


Run all cells in order

Notebooks include exact pip install steps used in experiments.

🔁 Reproducing Reported Results

To reproduce the published F1 scores:

Use the same dataset:

training/datasets/clinvar_sequence_disease_clean.csv


Use GPU runtime

Run all notebook cells sequentially

Final evaluation cells log the reported metrics

📝 Notes & Tips

Training locally without GPU will be very slow

Colab free GPU was used for all experiments

Trained checkpoints are available in the models/ folder

For large-scale experiments, consider Colab Pro or a dedicated GPU VM

🌍 Applications

Genetic disease diagnostics

Personalized medicine

Genomic research

Medical education

Drug discovery

Preventive healthcare

👨‍💻 Contributors

Divyanshu Chauhan

Chandrashekhar N Divate

Disha K

Hani M

Guided by:
Dr. M. S. Bhargavi
Associate Professor, CSE
Bangalore Institute of Technology

📜 License

This project is licensed under the MIT License
