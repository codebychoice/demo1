function changeValue(event){
    console.log('select value '+event.target.value);
    var value = event.target.value;
    document.getElementById('input1').value = value;
    if(value == 'One'){
        document.getElementById('input2').value = "";
        document.getElementById('input2').readOnly = false;
        document.getElementById('input2').style.cursor = 'text';
        document.getElementById('input2-div').hidden = false;
        changeInput();
    }else if(value == 'Two'){
        document.getElementById('input2').readOnly = true;
        document.getElementById('input2').style.cursor = 'not-allowed';
        document.getElementById('input2').value = value;
        document.getElementById('input2-div').hidden = false;
        changeInput();
    }else if(value == 'Three'){
        document.getElementById('input2').value = "";
        document.getElementById('input2-div').hidden = true;
    }
}

function changeInput(){
    console.log('input value '+event.target.value);
    var value = document.getElementById('input2').value; 
    document.getElementById('input2val').innerText = value;

}