import { AXIOS } from './axios.config';

const apiKey = 'DQE5EVW07GMwxfyEfJlpGhCwx8VfgFAyAaOSsGtR';

class PhotosService {
    async getCuriosityPhotos(params) {
        const {data} = await AXIOS.get(`/curiosity/photos?api_key=${apiKey}&sol=100`,{params});
        return data;
    };

//     async getCuriosityPhotoById(id) {
// const photo =  await AXIOS.get()
//     return photo;
//     }

    async getSpiritPhotos() {
        const {data} = await AXIOS.get(`/spirit/photos?api_key=${apiKey}`);
        return data;
    };

    async getOpportunityPhotos() {
        const {data} = await AXIOS.get(`/opportunity/photos?api_key=${apiKey}`);
        return data;
    };
};

export const photosService = new PhotosService();
