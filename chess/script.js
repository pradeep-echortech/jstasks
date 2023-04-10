const board = document.querySelector('.board')

for (let row=0;row<8;row++){
    let boxcolor; 
    let startcolorwhote= row % 2 === 0? true:false;


    for(let column=0;column<8;column++){
        if(startcolorwhote){
            boxcolor = column % 2 === 0? 'burlywood':'brown';
        }
        else{
            boxcolor = column % 2 === 0? 'brown':'burlywood';
        }
        const box = document.createElement('div');
        box.style.height= board.clientHeight /8 + 'px';
        box.style.width= board.clientWidth /8 + 'px';
        box.style.backgroundColor= boxcolor;
        board.append(box);
    }
}