const dataBase = [];

while (true) {

    const input = prompt("Введите команду (add или del) и элемент через запятую (например, add, Иван):");

    if (input === 'stop') {
        break;
    }

    const [command, element] = input.split(',').map(item => item.trim());

    switch (command) {
        case "add":
            if (element) {
                dataBase.push(element);
                console.log(`Элемент "${element}" добавлен в массив.`);
            } else {
                console.log("Ошибка: Не указан элемент для добавления.");
            }
            break;
        case "del":
            if (element) {
                const index = dataBase.indexOf(element);
                if (index !== -1) {
                    dataBase.splice(index, 1);
                    console.log(`Элемент "${element}" удален из массива.`);
                } else {
                    console.log(`Ошибка: Элемент "${element}" не найден в массиве.`);
                }
            } else {
                console.log("Ошибка: Не указан элемент для удаления.");
            }
            break;
        default:
            console.log("Ошибка: Неизвестная команда.");
    }
}

console.log("Итоговый массив:", dataBase);