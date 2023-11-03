// socket을 이용해서 오목을 만들어보자.
const black = 1
const white = 2
const black_mark = '  X  '  // 1
const white_mark = '  O  '  // 2

// 15 x 15 오목판 반환
function get_init_board() {

    return Array.from(Array(15), () => new Array(15).fill(0));
}

// 현재 상태의 오목판을 그린다.
function print_board(board) {
    let board_str = '';
    for (let i = 0; i < 15; i++) {
        let row = '|';
        for (let j = 0; j < 15; j++) {
            if (board[i][j] === 1) {
                row += black_mark;
            } else if (board[i][j] === 2) {
                row += white_mark;
            } else {
                row += "     ";
            }
            row += "|";
        }
        row += "\n";
        board_str += row;
        // console.log(row);
    }
    return board_str;
}

// 돌 놓기
function put_stone(board, row, col, stone) {
    if (board[row][col] !== 0) {
        console.log("이미 돌이 존재하는 곳에는 돌을 둘 수 없습니다.");
        return;
    }

    board[row][col] = stone
}

// 오목 여부
function check_winner(board) {

}

function change_stone(cur_stone) {
    if (cur_stone === 1) {
        return 2;
    } else return 1;
}

function main() {
    let board = get_init_board();
    let stone = 1;

    do {
        console.log(print_board(board));

        if (stone === 1) {
            console.log("흑돌 차례");
        } else {
            console.log("백돌 차례");
        }

        while (true) {
            let tmp = null;
            if (false) {
                break;
            }
        }

        change_stone(stone);
    } while (true);

}

// main 시작
main()
