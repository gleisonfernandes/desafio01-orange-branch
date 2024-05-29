import {Props, User} from './components/types';
import Imagem from './assets/image.png';
import Profile from './assets/profile.png';
import Designsta from './assets/Designsta.png';
import Cloutexhibition from './assets/cloutexhibition.png';
import CreativePhoto from './assets/CreativePhoto.png';
import Mushtariy from './assets/Mushtariy.png';
import Shuhratbek from './assets/Shuhratbek.png';
import BannerImage from './assets/banner.png';

export const mockUsers: User[] = [
    { id: 1, email: "user1@example.com", password: "password", name: "Usuario Teste", nickname: "@userTeste", dateofbirth: "24 de novembro", profileImage: Profile, coverImage: BannerImage, joined:"May 2020", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "gabrielsanzone.app", Following: 67, Followers: 47},
    { id: 2, email: "user2@example.com", password: "password", name: "Designsta", nickname: "@inner", dateofbirth: "25 de dezembro", profileImage: Designsta, coverImage: BannerImage, joined:"March 2018", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "designsta.app", Following: 58, Followers: 37 },
    { id: 3, email: "user3@example.com", password: "password", name: "cloutexhibition", nickname: "@RajLahoti", dateofbirth: "18 de maio", profileImage: Cloutexhibition, coverImage: BannerImage, joined:"April 2018", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "cloutexhibition.app", Following: 37, Followers: 30 },
    { id: 4, email: "user4@example.com", password: "password", name: "CreativePhoto", nickname: "@cloutexhibition", dateofbirth: "20 julho", profileImage: CreativePhoto, coverImage: BannerImage, joined:"June 2021", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "CreativePhoto.app", Following: 30, Followers: 27 },
    { id: 5, email: "user5@example.com", password: "password", name: "Mushtariy", nickname: "@Mushtar565266", dateofbirth: "09 junho", profileImage: Mushtariy, coverImage: BannerImage, joined:"July 2018", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "mushtariy.app", Following: 11, Followers: 4 },
    { id: 6, email: "user6@example.com", password: "password", name: "Shuhratbek", nickname: "@mrshukhrat", dateofbirth: "20 abril", profileImage: Shuhratbek, coverImage: BannerImage, joined:"March 2021", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "shuhratbek.app", Following: 10, Followers: 5 },
  ];
  
  export const mockTweets: Props[] = [
    { id: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam nulla.", name: "Designsta", nickname: "@inner", avatar: Designsta, likes: '8', retweets: '1', comments: '10', date: 'Apr 1', user_id: 2 },
    { id: 2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam nulla. Praesent mi nulla, tempus sit amet sollicitudin at", name: "cloutexhibition", nickname: "@RajLahoti", avatar: Cloutexhibition, likes: '9', retweets: '5', comments: '', date: 'Apr 1', user_id: 3 },
    { id: 3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam nulla. Praesent mi nulla, tempus sit amet sollicitudin at", name: "CreativePhoto", nickname: "@cloutexhibition", avatar: CreativePhoto, likes: '8', retweets: '1', comments: '10', date: 'Apr 1', image: Imagem, user_id: 4 },
    { id: 4, description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: Profile, likes: '15', retweets: '3', comments: '7', date: 'Apr 1', user_id: 1 },
    { id: 5, description: "Hello Twitter!", name: "Usuario Teste", nickname: "@userTeste", avatar: Profile, likes: '10', retweets: '2', comments: '5', date: 'Apr 1', user_id: 1 },
    { id: 6, description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: Profile, likes: '15', retweets: '3', comments: '7', date: 'Apr 1', user_id: 1 },
  ];