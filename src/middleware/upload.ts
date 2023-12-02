import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const storage: multer.StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Define the upload directory
    },
    filename: (req, file, cb) => {
        const randomName = uuidv4();
        const fileExtension = file.originalname.split('.').pop();
        cb(null, `${randomName}.${fileExtension}`);
    },
});

const upload = multer({ storage: storage });

export { upload };
