class Human{
    constructor(name,hp,mp){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
    }

    attack(target){
        console.log(`${this.name}が${target}に攻撃した！`);
    }
}

class Yuusya extends Human {
    constructor(name, hp, mp, buki) {
        super(name, hp, mp); //　＝＞　new Human(name,hp,mp);　というイメージ
                            //super で　親クラス（↑）を呼んでいる。
        this.buki = buki;
    }
}

class Wizard extends Human {
    constructor(name, hp, mp, buki) {
        super(name, hp, mp);
        this.buki = buki;
    }


    castSpell(spellName, target) {
        console.log(`${this.name}が${target}に${spellName}の呪文を唱えた。`);
    }
}

class Cleric extends Human {
    constructor(name, hp, mp, weapon) {
        super(name, hp, mp);
        this.weapon = weapon;
    }

    heal(target) {
        console.log(`${this.name}が${target}を回復した。`);
    }
}

class Berserker extends Human {
    constructor(name, hp, mp, weapon) {
        super(name, hp, mp);
        this.weapon = weapon;
    }

    furryMode() {
        console.log(`${this.name}が獣化して攻撃力アップ！`);
    }
}

class Monster {
    constructor(name, hp, mp) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
    }

    attack(target) {
        console.log(`${this.name}が${target}に攻撃した。`);
    }

    runAway() {
        console.log(`${this.name}は逃げ出した！`);
    }
}

class Slime extends Monster {
    constructor(name, hp, mp){
        super(name, hp, mp);
        this.weapon = '';
    }

    split() {
        console.log(`${this.name}が分散した`);
    }
}

class Ork extends Monster {
    constructor(name, hp, mp, weapon){
        super(name, hp, mp);
        this.weapon = weapon;
    }


}


class LastBoss extends Monster {
    constructor(name, hp, mp, weapon){
        super(name, hp, mp);
        this.weapon = weapon;
    }

    runAway() {
        // console.log('このモンスターは逃げない');
    }

    revive() {
        console.log(`${this.name}はよみがえった！`);
    }
}


let boss = new LastBoss('LastBoss', 1000, 5000, 'ring');

boss.runAway();
