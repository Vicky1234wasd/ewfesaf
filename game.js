player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
first_number = document.getElementById("first_number").value;
second_number = document.getElementById("second_number").value;
actual_answer = parseInt(first_number) * parseInt(second_number)
question_number = "<h4>" + first_number + "X" + second_number + "</h4>"
input_box="<br>Answer : <input type='text' id='input_check_box'"
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("first_number").value ="";
document.getElementById("second_number").value ="";
}