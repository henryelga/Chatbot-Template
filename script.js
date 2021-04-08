console.log('Hello world')

// var messages = document.getElementById('chatlogs')

// var chat_bot = document.getElementsByClassName('chat bot')
// var chat_user = document.getElementsByClassName('chat self')

// var bot = document.getElementById('robot')
// var user = document.getElementById('user')

// bot.innerHTML = "Hello world. This is robot..."
// user.innerHTML = "Hello world. This is robot..."

// function sendMsg() {
//     var newBox = document.createElement(chat_bot)
//     newBox.bot.innerHTML = 'HEyyyyyyyy'
//     messages.appendChild(newBox)
// }


function scrollDown() {
    document.getElementById('chatlogs').scrollTop = document.getElementById('chatlogs').scrollHeight
}


const human_div = `<div id="chat self" class="chat self">
                        <div class="user-pic"><img src="img/user.png" alt="bot"></div>
                            <p class="chat-msg user" id="user">`;

const bot_div = `<div id="chat bot" class="chat bot">
                    <div class="user-pic"><img src="img/bot.png" alt="bot"></div>
                        <p class="chat-msg robot" id="robot">`;

const close_div = "</p></div>";

$("#form").submit(function (e) {
    e.preventDefault();
    var input = $("#userMsg").val();
    $("#userMsg").val("");
    // make_request(input);
    $("#chatlogs").append(human_div + input + close_div);
    scrollDown()
});


function make_request(message) {
    var url =
        "https://api.wit.ai/message?v=20201005&q=" +
        message +
        "&access_token=IIB7VULJ25MSNQHPMG6IUKIG3VH4JA2Y";
    $.getJSON(url, function (data) {
        return bot_reply(data);
    });
}

function bot_reply(data) {
    console.log(data);
    var reply = "I am not programmed to answer that query just yet.";

    $("#messages").append(bot_div + reply + close_div);
}

