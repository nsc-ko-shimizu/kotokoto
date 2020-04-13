class Truck extends Car{
    load(){
        console.log(`${this._name}が荷物を積みました。`);
    }
    
    unload(){
        console.log(`${this._name}が荷物を降ろしました。`);
    }
}