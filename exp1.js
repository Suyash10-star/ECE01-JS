function calculateResult(){
    let n=document.getElementById("objects").value;
    let i;
    let total=0;
    for(i0;i<n;i++){
        let x=prompt("Enter subject No."+(i+1));
        total+=x;

    }
    let average=total/n;
    let grade;

   if(average>=90){
    document.write(grade="A+")
   }
   if(average>=75 && average<=90){
    document.write(grade="A")
   }
   if(average>=60 && average<=75){
    document.write(grade="B")
   }
   if(average>=40 && average<=60){
    document.write(grade="c")
   }
   else{
    document.write(grade="F")
   }
   
   
   
    
        let r=document.getElementById("result").innerHTML="Total marks"+total+"</br>"+"Average marks:"+average+"</br>"+"Grade:"
        +grade
}