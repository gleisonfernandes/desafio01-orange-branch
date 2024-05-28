import {Props} from './components/types'
import Imagem from './assets/image.png'

export const mockUsers = [
    { id: 1, email: "user1@example.com", password: "password", name: "Usuario Teste", nickname: "@userTeste", dateofbirth: "10/07/2000", profileImage: "https://via.placeholder.com/150", coverImage: "https://via.placeholder.com/600x200" },
    { id: 2, email: "user2@example.com", password: "password", name: "Usuario Teste2", nickname: "@userTeste2", dateofbirth: "16/03/2003", profileImage: "https://via.placeholder.com/150", coverImage: "https://via.placeholder.com/600x200" }
  ];
  
  export const mockTweets: Props[] = [
    { description: "Hello Twitter!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '10', retweets: '2', comments: '5', date: 'Apr 1' },
    { description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '15', retweets: '3', comments: '7', date: 'Apr 1', image: Imagem},
    { description: "Hello Twitter!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '10', retweets: '2', comments: '5', date: 'Apr 1' },
    { description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '15', retweets: '3', comments: '7', date: 'Apr 1'  },
    { description: "Hello Twitter!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '10', retweets: '2', comments: '5', date: 'Apr 1' },
    { description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '15', retweets: '3', comments: '7', date: 'Apr 1'  },
  ];

  export const mockTweetsGeneral: Props[] = [
    { description: "Hello Twitter!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '10', retweets: '2', comments: '5', date: 'Apr 1' },
    { description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '15', retweets: '3', comments: '7', date: 'Apr 1', image: Imagem},
    { description: "Hello Twitter!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '10', retweets: '2', comments: '5', date: 'Apr 1' },
    { description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '15', retweets: '3', comments: '7', date: 'Apr 1'  },
    { description: "Hello Twitter!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '10', retweets: '2', comments: '5', date: 'Apr 1' },
    { description: "Spring Boot is awesome!", name: "Usuario Teste", nickname: "@userTeste", avatar: "http://localhost:3000/static/media/profile.204e5788438b3ff007cc.png", likes: '15', retweets: '3', comments: '7', date: 'Apr 1'  },
  ];
  
  export const recentUsers = [
    { id: 3, username: "user3", email: "user3@example.com", profileImage: "https://via.placeholder.com/150" },
    { id: 4, username: "user3", email: "user4@example.com", profileImage: "https://via.placeholder.com/150" }
  ];