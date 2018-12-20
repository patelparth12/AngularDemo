
//Here use FB Like Component

import { LikeComponent } from './like.component'

let likeComponent = new LikeComponent(20, true);
console.log('Number Of Likes: ' + likeComponent.likesCount + ', isLiked: ' + likeComponent.isLiked);
likeComponent.onClick();
console.log('Number Of Likes: ' + likeComponent.likesCount + ', isLiked: ' + likeComponent.isLiked);
likeComponent.onClick();
console.log(`Number Of Likes:  ${likeComponent.likesCount}, isLiked: ${likeComponent.isLiked}`);
likeComponent.onClick();
console.log(`Number Of Likes:  ${likeComponent.likesCount}, isLiked: ${likeComponent.isLiked}`);