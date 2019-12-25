let ws;
function connect(){
    let server = document.getElementById('server').value;
    ws = new WebSocket(server);
    ws.onopen = function(){
        document.getElementById('conn').disabled = 'disabled';
        document.getElementById('disconn').disabled = '';
        let nickname = document.getElementById('nickname').value
        if(nickname){
            ws.send('nickname|' + nickname);
        }
    }
    ws.onclose = function(){
        document.getElementById('conn').disabled = '';
        document.getElementById('disconn').disabled = 'disabled';
    }
    ws.onmessage = function(){
        let board = document.getElementById('board');
        let newmsg = document.createElement('div');
        console.log(event.data);
        newmsg.innerHTML = event.data;
        board.appendChild(newmsg);
        board.scrollTop = board.scrollHeight;
    }
}

function disconnect(){
    ws.close();
}

function send(){
    let msg = document.getElementById('content').value;
    ws.send(msg);
}