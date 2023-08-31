# competency-passbook

A competency passbook to collate, view, track and provide recognition against competencies achieved against learnings completed by each official on the iGoT Karmayogi platform. A Competency Passbook (CP) should be a algorithm-based aggregate which lists the competencies needed by the user as per their role. It also lists the gaps in competencies. The user’s main objective is therefore the closure of the gaps through the selection and consumption of the Courses. This should handle both online and offline based learning.

## Folder Structure
```
Project Root
├── app
│   └── [Main application files]
├── components
│   └── [Reusable UI components]
├── libs
│   └── [Utility functions, helper classes]
├── models
│   └── [Data models and schemas]
├── public
│   ├── images
│   └── fonts
├── .eslintrc.json
├── .gitignore
├── README.md
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Getting Started
### 1. Fork it :fork_and_knife:
Fork the [project repository](https://github.com/Sumitmaithani/competency-passbook) on GitHub by clicking the "Fork" button in the top-right corner.

### 2. Clone it :busts_in_silhouette:
Clone the forked repository to your local machine using the following command:
```bash
git clone https://github.com/your-username/compentency-passbook.git
```

### 3. Set it up :arrow_up:
Navigate to the project directory:
```bash
cd compentency-passbook
```

### 4. Run it :checkered_flag:
Install the required dependencies using npm:
```bash
npm install
```

### 5. For testing purpose 💥
Copy the following content and create a `.env` file in the project root directory. Fill in the `MONGODB_URL` with your MongoDB connection string.
```env
MONGODB_URL=your-mongodb-connection-string
```

### 6. Launch the Application 🚀
Start the development server:
```bash
npm run dev
```

Open http://localhost:3000 in your preferred web browser to see the application in action.
