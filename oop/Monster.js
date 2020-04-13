class yuusya{
    constructor(name,buki,hp,mp){
        this._name = name;
        this._buki = buki;
        this._hp = hp;
        this._mp = mp;
    }

    getName() {
        return this._name;
    }
}

var yoshihiko = new yuusya(
    "ヨシヒコ",
    "剣",
    "100",
    "50"
);

console.log(yoshihiko.getName());




class wizard{
    constructor(name,buki,hp,mp){
        this._name = name;
        this._buki = buki;
        this._hp = hp;
        this._mp = mp;
    }

    getName() {
        return this._name;
    }
}

var merebu = new wizard(
    "メレブ",
    "魔法の杖",
    "100",
    "60"
);

console.log(merebu.getName());
