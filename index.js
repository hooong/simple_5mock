import express from 'express';
import {createServer} from 'node:http';
import {Server} from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(new URL('./index.html', import.meta.url).pathname);
});

io.on('connection', (socket) => {
    console.log('a user connected.');

    // let board = get_init_board();
    // let stone = 1;
    //
    // do {
    //     console.log(print_board(board));
    //
    //     if (stone === 1) {
    //         console.log("흑돌 차례");
    //     } else {
    //         console.log("백돌 차례");
    //     }
    //
    //     while (true) {
    //         let tmp = null;
    //         if (false) {
    //             break;
    //         }
    //     }
    //
    //     change_stone(stone);
    // } while (true);

    socket.on('chat message', (msg) => {
        const regex = /^[A-Z]\d{1,2}$/;

        if (regex.test(msg)) {
            let col = msg.slice(0,1);
            col = col.charCodeAt(0) - 65
            console.log(col);
            let row = msg.slice(1);
            row = Number(row) - 1;
            console.log(row);
            io.emit('put stone', row, col);
            // io.emit('chat message', (alpha.charCodeAt(0) - 65));
            // io.emit('chat message', Number(num - 1));
        }
        io.emit('chat message', msg);
    })

    socket.on('init board', () => {
        io.emit('init board');
        io.emit('chat message', "게임을 초기화합니다.");
    })

    socket.on('disconnect', () => {
        console.log('user disconnected.')
    })
})

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});