
function clean(){
    document.form.textview.value = "";
}

function back(){
    let text = document.form.textview.value;
    document.form.textview.value = text.substring(0, text.length-1);
}

function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

function equals(){
    let temp = document.form.textview.value;
    if(temp)
        document.form.textview.value = eval(temp);
        else 
        document.form.textview.value = 'error';
}