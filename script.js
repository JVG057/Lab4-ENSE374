const addElem = document.getElementById("addElement");
const sortElem = document.getElementById("sortElements");

function findEmpty(){
    let one = document.getElementById("inputOne").value;
    let two = document.getElementById("inputTwo").value;
    let three = document.getElementById("inputThree").value;
    let four = document.getElementById("inputFour").value;
    let five = document.getElementById("inputFive").value;

    document.getElementById("element").value = "";
    let list =[one,two,three,four,five];
    for (let i = 0; i < 5; i++){
        if (list[i] == ""){
            return i;
        }
    }
    return -1;
}

function addWords()
{

    let elem = document.getElementById("element").value;


    switch(findEmpty()){
        case 0:
            document.getElementById("inputOne").value = elem;
            break;
        case 1:
            document.getElementById("inputTwo").value = elem;
            break;
        case 2:
            document.getElementById("inputThree").value = elem;
            break;
        case 3:
            document.getElementById("inputFour").value = elem;
            break;
        case 4:
            document.getElementById("inputFive").value = elem;
            break;
        default:
            document.getElementById("inputFive").value = document.getElementById("inputFour").value;
            document.getElementById("inputFour").value = document.getElementById("inputThree").value;
            document.getElementById("inputThree").value = document.getElementById("inputTwo").value;
            document.getElementById("inputTwo").value = document.getElementById("inputOne").value;
            document.getElementById("inputOne").value = elem;
            break;
    }

    
}

function sortElements(){
    let one = document.getElementById("inputOne").value;
    let two = document.getElementById("inputTwo").value;
    let three = document.getElementById("inputThree").value;
    let four = document.getElementById("inputFour").value;
    let five = document.getElementById("inputFive").value;

    let list =[one,two,three,four,five];

    for (let i = 0; i < 5; i++){
        for (let k = 0; k < 5; k++){
            if(list[i] < list[k])
            {
                let temp = list[k]
                list[k] = list[i]
                list[i] = temp;
            }
        }
    }

    document.getElementById("inputOne").value = list[0];
    document.getElementById("inputTwo").value = list[1];
    document.getElementById("inputThree").value = list[2];
    document.getElementById("inputFour").value = list[3];
    document.getElementById("inputFive").value = list[4 ];

    
}

addElem.addEventListener('click', addWords);
sortElem.addEventListener('click', sortElements);