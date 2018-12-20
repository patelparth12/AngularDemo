"use strict";
//Here use FB Like Component
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var likeComponent = new like_component_1.LikeComponent(20, true);
console.log('Number Of Likes: ' + likeComponent.likesCount + ', isLiked: ' + likeComponent.isLiked);
likeComponent.onClick();
console.log('Number Of Likes: ' + likeComponent.likesCount + ', isLiked: ' + likeComponent.isLiked);
likeComponent.onClick();
console.log("Number Of Likes:  " + likeComponent.likesCount + ", isLiked: " + likeComponent.isLiked);
likeComponent.onClick();
console.log("Number Of Likes:  " + likeComponent.likesCount + ", isLiked: " + likeComponent.isLiked);
