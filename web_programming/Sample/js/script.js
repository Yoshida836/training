console.log("file連動中かチェック");

let messsage = "";
//let：スクラッチでいう変数を定義-変数messageを宣言＝情報データの格納場所
message = document.getElementById("welcomeMessage");
// 指名したID名("welcomeMessage")を持っている要素情報を取得
// この命令はdocumentと呼ばれるものが持っています
message.textContent = "こんにちは！";
// 指定した場所のテキストを決める
// ＝<p id="welcomeMessage">こんにちは！</p>と同じ


// let hour = 4;
//let =スクラッチでいう変数を定義-時間を記録する変数
let hour = new Date().getHours();
//現在の時間を取得する命令

if (hour >= 18) {
    // if=条件分岐-もしも○○ならA、でなければB→処理が分岐する
    message.textContent = "こんばんは"
} else if (hour >= 10) {
    message.textContent = "こんにちは！"
} else if (hour >= 4) {
    //でなければ　もし
    message.textContent = "おはよう！"
}

let starEle1 = document.getElementById("staras1");

for (let i = 0; i < 3; i++) {
//for=繰り返し変数
//forには３つの情報を指定
//①カウント専用の変数：「i = 0」-適当な「i」に初期値は０-「i」以外でもいい-でも「i」がセオリー
//②カウント専用の変数がどうなるまで繰り返しなのか：「i < 3」の間は繰り返す(0,1,2で★3つ)
//③カウント専用の変数がどのようにカウントされるのか決める：「i++」-「++」は指定した変数を１増やす
    let addCnt = document.createElement("span");
    addCnt.textContent = "★";
    //spanというタグを生成し、そのテキストの中身★とする
    starEle1.appendChild(addCnt);
    //特定しておいた場所starEle1に生成したspan(★)を足す
}
//{}は繰り返しの内容→この場合は★を繰り返す



// 大事な記号知識！！！
//本格的なプログラミング(java script等)での等号記号は「==」：　a==b　※「===」も同じ
//「=」は代入の役割：a = b　→　bの結果をaに入れる
//前に「!」つけると、意味を反転させる： a != 5 →　a=5ではない。