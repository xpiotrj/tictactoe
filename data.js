/*
h - horizontal
v- certical
s - half by

+ - add
0 - center
- - substract
l - rotate left
r - rotate right
*/

const offset = 400 * 0.33;

function place_line(pos){
    const line = document.getElementById('line');
    const board = document.getElementById('board');
    line.style.display = 'block';
    const board_pos = board.getBoundingClientRect();
    console.log(board_pos);
    //decode line pos
    switch (pos[0]) {
        case 'h':
            if(pos[1] == '+'){
                line.style.top = board_pos.top + 'px';
                line.style.left = board_pos.left + offset * 2.5 + 'px';
            }
            else if(pos[1] == '-'){
                line.style.top = board_pos.top + 'px';
                line.style.left = board_pos.left + offset / 2+ 'px';
            }
            else if(pos[1] == '0'){
                line.style.top = board_pos.top + 'px';
                line.style.left = board_pos.left + offset * 1.5 + 'px';
            }
            break;


        case 'v':
            if(pos[1] == '+'){
                line.style.top = board_pos.top + offset  + 'px';
                line.style.transform = 'rotate(90deg)';
                line.style.left = board_pos.left + 200 + 'px';
            }
            else if(pos[1] == '-'){
                line.style.transform = 'rotate(90deg)';
                line.style.top = board_pos.top - offset +'px';
                line.style.left = board_pos.left + 200 + 'px';
            }
            else if(pos[1] == '0'){
                line.style.transform = 'rotate(90deg)';
                line.style.top = board_pos.top + 'px';
                line.style.left = board_pos.left + 200 + 'px';
            }
            break;


        case 's':
            if(pos[1] == 'l'){
                line.style.transform = 'rotate(-45deg)';
                line.style.height = 400  + "px";
                line.style.top = board_pos.top +  'px';
                line.style.left = board_pos.left + 200 + 'px';
            }
            else{
                line.style.transform = 'rotate(45deg)';
                line.style.height = 400  + "px";
                line.style.top = board_pos.top +  'px';
                line.style.left = board_pos.left + 200 + 'px';
            }
            break;
    }
}