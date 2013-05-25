test('コンストラクタのテスト', function(){
    
    var c = new Calculator();
    ok(c instanceof Calculator,'new演算子を付けて呼び出す。');


    c = Calculator();
    ok(c instanceof Calculator,'new演算子を付けないでコンストラクタ関数を呼び出す。');

test('getExpression',function() {
    var c = new Calculator();
    var result = c.getExpression();
     
    equal(result,'');
         
});