const express=require("express");
const multer=require("multer")
const connectDB = require("./config/database");
const userRouter = require("./router/userRouter");
const persionRouter=require("./router/persionRouter")
const app=express();
const path = require("path");
const cors=require("cors")
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, "../public/assets")));

app.use(cors({
    origin: 'http://localhost:4200'  // Angular app's URL
  }));
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Path to store in Angular's public folder
      cb(null, path.join(__dirname, "../public/assets")); 
    },
    filename: function (req, file, cb) {
      // Set filename, keep the original extension
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
  
  app.post('/upload', upload.single('skillsCertificate'), (req, res) => {

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const filePath = `assets/${req.file.filename}`;
    console.log("File uploaded:", filePath);

    // Send the image file path in the response
    res.json({ message: "File uploaded successfully", filePath: filePath });
  });
app.use('/users', userRouter);
app.use('/users', persionRouter);
connectDB();
const port=2000;
app.listen(port, () => console.log(`Server running on port ${port}`));