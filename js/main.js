var nInput = document.getElementById('numberInput')
var form = document.getElementById('form')
var resBtn = document.getElementById('showResult')
var resultDiv = document.getElementById('result')



form.addEventListener('submit',event=>{
    event.preventDefault()
    mukamalSon(nInput)
    resultDiv.textContent= arr1
})
var arr1=[]

function mukamalSon(nInput) {
    let N = Number(nInput.value)    
for(let f=1; f<N; f++){
    var sum = 0;              
for( let i=1; i<f ; i++){   
var check = f%i==0     
if(check){
     sum=sum+i ;                     
 }
else{
 continue;
 }        
}
 if(sum===f){
                  
 arr1.push(f)             
    }
}      
}
