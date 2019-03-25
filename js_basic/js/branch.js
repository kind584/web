var x = 100;
if(x >= 100){
  console.log('100以上の値です。');
}else{
  console.log('100未満の値です。');
}

var y = 80;
if(y >= 90){
  console.log("A");
}else if(y >= 80){
  console.log("B");
}else if(y >= 60){
  console.log("C");
}else{
  console.log("D");
}

var n = 5;
switch (n) {
  case 1:
    console.log("数値は1です。")
    break;
  case 2:
    console.log("数値は2です。")
    break;
  case 2:
    console.log("数値は2です。");
    break;
  default:
    console.log("範囲外です。");
    break;
}
