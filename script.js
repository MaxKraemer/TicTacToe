let fields = [];

let currentshape = 'mark';

function fillField(id){
    if(currentshape == 'mark'){
        currentshape = 'circle';

    }else{
        currentshape = 'mark';
    }

    fields[id] = currentshape;
    console.log(fields);
    draw();
    checkForWin();
}

function draw(){

    for (let i = 0; i < fields.length; i++) {
        
        if(fields[i] == 'circle') {

            document.getElementById('circle-' +i).classList.remove('d-none');        
        }

        if(fields[i] == 'mark') {

            document.getElementById('mark-' +i).classList.remove('d-none');        
        }
    }

}

function checkForWin(){

    if(fields[0]== fields[1] && fields[1] == fields[2]){


    }
    
    if(fields[2]== fields[4] && fields[4] == fields[5]){


    }
    
    if(fields[6]== fields[7] && fields[7] == fields[8]){


    }


}