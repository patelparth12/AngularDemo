
export class LikeComponent{

    constructor(private _likesCount: number, private _isLiked: boolean){
        
    }

    onClick(){
        this._likesCount += this._isLiked ? -1 : 1;
        this._isLiked = !this._isLiked;
    }

    get likesCount(){
        return this._likesCount;
    }

    get isLiked(){
        return this._isLiked;
    }
}