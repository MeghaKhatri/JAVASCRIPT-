// normal flow to function

document.write("normal flow to function");
function fun1(){
    let a;
    let b;
    for(a=0;a<=5;a++){
        document.write(a);
        for(b=1;b<=a;b++){
            document.write(b);
        }
        document.write("<br>")
    }
}
fun1();
document.write("------The End------<br>")

document.write("--------------------------------------------------------")

// flow of asynchronus program
document.write("<br>flow of asynchronus program")
function fun2(){
    setTimeout(() => {
    let a;
    let b;
    for(a=0;a<=5;a++){
        document.write(a);
        for(b=1;b<=a;b++){
            document.write(b);
        }
        document.write("<br>")
    }
    }, 5000);
}
fun2();
document.write("------The End------")