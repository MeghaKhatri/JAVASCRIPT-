let  clocks = document.querySelector('.clock')

let sec = 0,
min = 0,
hr = 0,
intervalID;



const startStopwatch = () =>{
    intervalID = setInterval(() => {
        if(sec <59){
            sec++
        }
        else if(min >=59){
                hr++;
                min = 0;
        }
        else{
            sec = 0;
            min++;
        }
        clocks.innerText=`${String(hr).padStart(2,"0")}: ${String(min).padStart(2,"0")}: ${String(sec).padStart(2,"0")}`;
      
    }, 1000);

}

const stopStopwatch =() => {
    clearInterval(intervalID);
}

const reset = () =>{
    min =0;
    sec =0; 
    hr =0;
    clocks.innerText=`${String(hr).padStart(2,"0")}: ${String(min).padStart(2,"0")}: ${String(sec).padStart(2,"0")}`;
    clearInterval(intervalID);

}