player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;

function send() {
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question = "<h4>Q." + number1 + "X" + number2 + "=</h4>";
input_box = "<br>Answer : <input type='number' id='input_checkbox'>";
check_button = "<br><br><button class='btn btn-warning' onclick='check()'>Check</button>";
row = question + input_box + check_button;

document.getElementById("resultado").innerHTML = row;

document.getElementById("num1").value="";
document.getElementById("num1").value="";
}
question_turn="player1";
answer_turn="player2";



function check() {
    get_answer = document.getElementById("input_checkbox").value;
    if (get_answer == actual_answer) {
        if(answer_turn == "player1") {
          player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }

        else 
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;  
        }

    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    document.getElementById("resultado").innerHTML = "";
}
