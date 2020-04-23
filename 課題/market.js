//商品を表すクラス
class Product{

    //クラス必須メソッド
    constructor(name, price, amount){
        this._name = name;
        this._price = price;
        this._amount = amount;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    changePrice(price) {
        this._price = price;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }
}

//買い物かごを表すクラス
class Cart {

    constructor(){
        this._productList = [];
    }

    get producTList() {
        return this._productList;
    }

    //商品を追加
    addProduct(product, count) {
        let item = new CartItem(product,count);

        this._productList.push(item);
    }

    //商品をすべて消す
    emptyCart() {

    }

    //商品を取り出す
    removeProduct(product, count) {

    }
}

//買い物かごの中の商品と数を表すクラス
class CartItem {
    constructor(product, count) {
        this._product = product;
        this._count = count;
    }

    get product() {
        return this._product;
    }

    get count() {
        return this._count;
    }   

    set count(value) {
        this._count = value;
    }

    getUnitPrice() {
        return this._product.price;
    }

    getPrice() {
        return this.getUnitPrice() * this._count;
    }
}

//レシートを表したクラス
class Receipt {
    constructor() {
        //買い物の日付
        this.date = new Date();
        //買った商品のリスト
        this.productList = [];
    }

    // 買った商品を追加する
    addProduct(item){
        //買った商品をリストに追加する
            // リストの中から同じ商品名のものがないかを検索する
            // 商品名が一緒だったら数だけを追加する
            // 商品をそのまま追加する

        // this.productList.forEach(element => {
        //     if(element.product == item.product){
        //         element.count = element.count + item.count;
        //         break;
        //     }       
        // });

        let cartItem = this.productList.find(element =>{
            return element.product == item.product
        });

        // ↑　と　↓　　どっちのやり方でもいいよ！for文でもできる！

        let cartItem;
        for(let index = 0; index < this.productList.length; index++){
            if(this.productList[index].Product == item.product){
                cartItem = this.productList[index];
                break;
            }
        }


        // console.log(cartItem);

        if(cartItem){
            cartItem.count += item.count; //　←　cartItem.count = cartItem.count + item.count; と同じこと！
        }else{
            this.productList.push(item);
        }
    }

    //合計を書き出す　B
    _sumCart() {
        //CratItemのgetPriceの合計を出す。
            //productListの中身を合計する。
            //合計を変数に格納して返す。
        let sum = 0;

        for (let index = 0; index < this.productList.length; index++) {
           sum = sum + this.productList[index].getPrice();
        }
            return sum;
    }

    //出力する　A
    createReceipt() {
        //addProduct、_sumCartを使う
        //書き出すための処理
            //日付  Wed Apr 22 2020 10:14:46 GMT+0900 (Japan Standard Time) 
            //productList => 商品名　(一つの値段　＊　数)　合計の値段　
            //合計　=> _sumCart の戻り値
        //書き出したタイミングでオブジェクトを空にする

        console.log(this.date);

        for (let i = 0; i < this.productList.length; index++) {
            let price = this.productList[i].getPrice();

            console.log('商品${this.productList[i]}金額${price}');
            
        }

        let sumPrice = this._sumCart();

        console.log('合計${sumPrice}');

        this.date = "";
        this.productList = [];
        sumPrice = 0;
    }
}

let chocolate = new Product("チョコレート",95 ,100);
let apple = new Product("リンゴ",120 ,100);
let juice = new Product("ジュース",150 ,100);

let cart = new Cart();

cart.addProduct(chocolate,1);
cart.addProduct(apple,2);
cart.addProduct(juice,5);
cart.addProduct(chocolate,1);

// console.log(cart.producTList);

let receipt = new Receipt();

for (let index = 0; index < cart.producTList.length; index++) {
    receipt.addProduct(cart.producTList[index]);
    
}

Comment.log(receipt.productList);
