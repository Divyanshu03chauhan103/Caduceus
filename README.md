# 🧬 DNA Sequence-Based Disease Classification with Caduceus

An AI-powered web application for predicting genetic diseases from DNA sequences using GAN-based synthetic data augmentation and a bi-directional transformer (Caduceus). The system provides confidence scores, SHAP-based explainability, and downloadable clinical reports, making predictions interpretable and clinically meaningful.

---

## 📌 Project Overview

With the growing adoption of whole-genome sequencing in healthcare and research, there is a strong demand for accurate, scalable, and interpretable AI models to detect disease-associated genetic patterns.

### This project addresses:

- Class imbalance in rare genetic diseases
- Long-range genomic dependency modeling
- Lack of explainability in deep learning-based genomic models

---

## ✨ Key Features

- **DNA Sequence Input** - User-friendly web interface for sequence submission
- **GAN-Based Augmentation** - Synthetic DNA sequence generation using SeqGAN
- **Transformer Classification** - Advanced disease prediction with Caduceus
- **Dual Prediction Modes** - Single-label and multi-label (100 diseases) support
- **Explainability** - SHAP-based nucleotide-level feature importance
- **Clinical Reports** - Downloadable PDF-ready reports
- **Modern Frontend** - Built with Vite and TypeScript for optimal performance

---

## 🏗️ Tech Stack

### Backend
- Python 3.9+
- Flask
- PyTorch
- HuggingFace Transformers
- SHAP
- Scikit-learn
- NumPy, Pandas

### Frontend
- Vite
- TypeScript
- HTML5 & CSS3

### Models
- **Caduceus** - Bi-directional Transformer (primary model)
- **DNA-BERT** - Comparative analysis
- **CNN + BiLSTM** - Baseline model
- **SeqGAN** - Synthetic DNA generation

---

## 📁 Project Structure

```
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
```

---

## ⚙️ Prerequisites

### Software
- Python 3.9 or higher
- Node.js 18 or higher
- npm or yarn
- Git

### Hardware
- **Minimum**: 16 GB RAM, 4-core CPU
- **Recommended**: NVIDIA GPU (RTX 3040+), CUDA-enabled

---

## 🚀 Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the environment:

**Windows:**
```bash
venv\Scripts\activate
```

**Linux/macOS:**
```bash
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the Flask server:
```bash
python app.py
```

The backend will be available at: `http://127.0.0.1:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at: `http://localhost:5173`

---

## 🧪 DNA Input Format

- **Format**: Plain text DNA sequence
- **Allowed nucleotides**: A, C, G, T, N
- **Example**:
```
ATGCGTACGTAGCTAGCTAGCTA
```

---

## 📤 Output

The application provides:

- Predicted disease(s) with confidence scores
- SHAP-based nucleotide-level explanations
- Interpretable visual plots
- Downloadable clinical reports

---

## 🧠 Model Training

### Classification Modes

- **Single-label**: One disease per sequence
- **Multi-label**: 100 disease labels per sequence

### Training Artifacts

- `single_label_classifier.py` - Single-label training & evaluation
- `multi_label_classifier.py` - Multi-label training & evaluation
- `training/single_label_training.ipynb` - Colab notebook (single-label)
- `training/100_multilabel_training.ipynb` - Colab notebook (100-label)
- `training/datasets/clinvar_sequence_disease_clean.csv` - Cleaned dataset

### Performance Results

| Task | F1 Score |
|------|----------|
| Single-label | 82.4% |
| Multi-label (100 labels) | 59.3% |

*All results obtained using Google Colab GPU runtime*

---

## 🚀 Training in Google Colab (Recommended)

1. Open [Google Colab](https://colab.research.google.com/)
2. Go to **File → Open Notebook → GitHub**
3. Paste the repository URL
4. Open either:
   - `training/single_label_training.ipynb`
   - `training/100_multilabel_training.ipynb`
5. Set runtime: **Runtime → Change runtime type → GPU**
6. Run all cells sequentially

The notebooks include all necessary pip install commands used in experiments.

---

## 🔁 Reproducing Results

To reproduce the published F1 scores:

1. Use the provided dataset: `training/datasets/clinvar_sequence_disease_clean.csv`
2. Use GPU runtime (Colab free tier or better)
3. Run all notebook cells sequentially
4. Check final evaluation cells for reported metrics

**Note**: Training locally without GPU will be significantly slower. Trained checkpoints are available in the `models/` folder.

---

## 🌍 Applications

- Genetic disease diagnostics
- Personalized medicine
- Genomic research
- Medical education
- Drug discovery
- Preventive healthcare

---

## 👨‍💻 Contributors

**Team Members:**
- Divyanshu Chauhan
- Chandrashekhar N Divate
- Disha K
- Hani M

**Guided by:**  
Dr. M. S. Bhargavi  
Associate Professor, CSE  
Bangalore Institute of Technology

---

## 📜 License

This project is licensed under the MIT License.

---

## 📞 Support

For questions or issues, please open an issue on the GitHub repository.
