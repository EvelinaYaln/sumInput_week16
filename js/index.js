sumInput = () => {
    let arr = [];
    while (true) {
        let number = prompt('Введите число', 1);
        if (number === '' || number === null || !Number.isFinite(+number)) break; {
            arr.push(+number);
        }
    }
    arr.sort();
    alert(`Отсортированный по возрастанию массив: ${arr}`);
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}
alert(sumInput());