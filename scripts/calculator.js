function Calculator(){
    if (!(this instanceof Calculator)){
         return new Calculator();
    }
    
    this.expression ='';
    
    this.getExpression = function(){
        return this.expression;
     };
}