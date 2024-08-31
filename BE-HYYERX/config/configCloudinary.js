import {v2 as cloudinary} from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary' 
import multer from 'multer';

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET, 
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        fordel: 'samples',
        allowed_formats:['jpg','png', 'jpeg', 'gif'],
        public_id: (req, file) => `${file.originalname}`
    }
})
const upload = multer({storage})
export default upload