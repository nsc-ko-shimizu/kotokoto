class Ramen{

    constructor(men,supu,topingu){
        this.men = men;
        this.supu = supu;
        this.topingu = topingu;
    }

    nobita(time){
        return time > 5;
        //麺が伸びた
    }

    kaedama(){
        //替え玉の処理
        if (this.men == 0 && this.supu > 0){
        }
    }
}

let tonkotsu = new Ramen("細めん","豚骨","チャーシュー");


console.log(tonkotsu);
tonkotsu.kaedama();