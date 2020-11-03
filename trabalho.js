var primos=[];
for(var i = 1;i<=300; i++){
    var divisores=0
    {
        for(d=1;d<=300;d++){
            if(i % d === 0){
                divisores++
            }
        }
        if(divisores===2){
            primos.push(i);
            var divisores=0
            
        }
    }
   
}
var soma=0
for(var i =0; i<primos.length;i++){
    soma=soma+primos[i];
}

console.log(soma);