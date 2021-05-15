import { AXIOS } from './axios.config';

// const apiKey = 'DQE5EVW07GMwxfyEfJlpGhCwx8VfgFAyAaOSsGtR';
// const apiKey = 'Av6juv1Hj5HNeYzqCraCnNmmNyhwmK58knqJAakc';
const apiKey = 'YrJlR1eTSzZP9SrraVyeW9hxqwGLiYafb66ZdSBE';

class PhotosService {
    // async getCuriosityPhotos(params) {
    //     const {data} = await AXIOS.get(`/curiosity/photos?api_key=${apiKey}&sol=100`, {params});
    //     return data;
    // };

    async getPhotos(rover, params= {sol: 100}) {
        const {data} = await AXIOS.get(`/${rover}/photos?api_key=${apiKey}`, {params})
        return data;
    }
// ====================
//     async getPhotoById(rover, id) {
// const {data} =  await AXIOS.get(`/${rover}/photos?api_key=${apiKey}`)
//        const photo = data.find((item) => item.id === id);
//         console.log(photo);
//     return photo;
//     }
    // =====================
};
export const photosService = new PhotosService();
