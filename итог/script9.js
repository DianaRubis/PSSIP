// switch, while, break
let attempts = 3;
while (attempts > 0) {
    const color = prompt("Угадайте цвет (красный/зеленый/синий):");
    
    switch(color?.toLowerCase()) {
        case "красный":
            alert("Правильно!");
            attempts = 0;
            break;
        case "зеленый":
        case "синий":
            alert("Неверно!");
            attempts--;
            break;
        default:
            confirm("Некорректный ввод. Повторить?") || (attempts = 0);
    }
}