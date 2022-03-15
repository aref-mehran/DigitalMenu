import { RcFile } from 'antd/lib/upload';
import axios, { AxiosResponse, CancelToken } from 'axios';

export interface ImageServiceResponse {
    secure_url: string;
}

export class ImageService {
    async execute(
        file: RcFile | File | string,
        cancelToken: CancelToken,
    ): Promise<AxiosResponse<ImageServiceResponse>> {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'lvpkg390');
        return await axios.post('https://api.cloudinary.com/v1_1/lcnlvrz/image/upload', formData, { cancelToken });
    }
}
