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
    { id: 1, email: "user1@example.com", password: "password", name: "Usuario Teste", nickname: "@userTeste", dateofbirth: "24/11/2000", profileImage: Profile, coverImage: BannerImage, joined:"05/05/2020", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "gabrielsanzone.app" },
    { id: 2, email: "user2@example.com", password: "password", name: "Designsta", nickname: "@inner", dateofbirth: "16/03/2003", profileImage: Designsta, coverImage: BannerImage, joined:"18/03/2021", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "designsta.app" },
    { id: 3, email: "user3@example.com", password: "password", name: "cloutexhibition", nickname: "@RajLahoti", dateofbirth: "18/05/2000", profileImage: Cloutexhibition, coverImage: BannerImage, joined:"15/08/2018", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "cloutexhibition.app" },
    { id: 4, email: "user4@example.com", password: "password", name: "CreativePhoto", nickname: "@cloutexhibition", dateofbirth: "20/08/2003", profileImage: CreativePhoto, coverImage: BannerImage, joined:"23/08/2021", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "CreativePhoto.app" },
    { id: 5, email: "user5@example.com", password: "password", name: "Mushtariy", nickname: "@Mushtar565266", dateofbirth: "18/05/2000", profileImage: Mushtariy, coverImage: BannerImage, joined:"15/08/2018", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "mushtariy.app" },
    { id: 6, email: "user6@example.com", password: "password", name: "Shuhratbek", nickname: "@mrshukhrat", dateofbirth: "20/08/2003", profileImage: Shuhratbek, coverImage: BannerImage, joined:"23/08/2021", bio:"Lorem ipsum dolor sit amet, consectetur", city: "São Paulo", site: "shuhratbek.app" },
  ];
  
  export const mockTweets: Props[] = [
    { id: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam nulla.", name: "Designsta", nickname: "@inner", avatar: Designsta, likes: '8', retweets: '1', comments: '10', date: 'Apr 1', user_id: 2 },
    { id: 2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam nulla. Praesent mi nulla, tempus sit amet sollicitudin at", name: "cloutexhibition", nickname: "@RajLahoti", avatar: Cloutexhibition, likes: '9', retweets: '5', comments: '', date: 'Apr 1', user_id: 3 },
    { id: 3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam nulla. Praesent mi nulla, tempus sit amet sollicitudin at", name: "CreativePhoto", nickname: "@cloutexhibition", avatar: CreativePhoto, likes: '8', retweets: '1', comments: '10', date: 'Apr 1', image: Imagem, user_id: 4 },
    { id: 4, description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: Profile, likes: '15', retweets: '3', comments: '7', date: 'Apr 1', user_id: 1 },
    { id: 5, description: "Hello Twitter!", name: "Usuario Teste", nickname: "@userTeste", avatar: Profile, likes: '10', retweets: '2', comments: '5', date: 'Apr 1', user_id: 1 },
    { id: 6, description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: Profile, likes: '15', retweets: '3', comments: '7', date: 'Apr 1', user_id: 1 },
  ];