import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file, "file");
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

//Multer configuration

export const upload = multer({
  storage,
  limits: { fieldSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    //validate file type(optional)
    const fileTypes = /jpeg || jpg||png/;
    console.log(fileTypes)
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    console.log(extName)
    const mimeType = fileTypes.test(file.mimetype);
    console.log(mimeType)
    if (extName && mimeType) {
      cb(null, true);
    }
    else {
      cb(new Error("Only images are allowed"));
    }
  }
});