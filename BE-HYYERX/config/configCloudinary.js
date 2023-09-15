import {v2 as cloudinary} from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary' 
import multer from 'multer';

cloudinary.config({ 
  cloud_name: 'dpfndtcya', 
  api_key: '851828775853393', 
  api_secret: '1UJW3fBdeZSwb-OqHQ7E1oBlnns' 
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