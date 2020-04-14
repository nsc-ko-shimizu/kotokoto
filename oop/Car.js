class Car{
    constructor(engine,color,name,type,maker){
        this._engine = engine;
        this._color = color;
        this._name = name;
        this._type = type;
        this._maker = maker;
    }

    get maker(){
        return this._maker;
    }

    get name() {
        return this.name;
    }

    move(){
        console.log(`${this._name}が走りました。`);
    }

    stop(){
        console.log(`${this._name}が止まりました。`);
    }
}

let prius = new Car(
    "ハイブリッド",
    "赤",
    "プリウス",
    "セダン",
    "トヨタ"
);

console.log(prius);

prius.getMakerName;

//public ⇒　誰にでも見える
//private ⇒　自分だけに見える
//protected ⇒　自分＋継承者に見える

//   ↓
// _で代用