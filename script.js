function numbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function combineDigits(a, b, c) {
    return parseInt(`${a}${b}${c}`);
}

function calculateArea(length, width = length) {
    return length * width;
}

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

function findPerfectNumbersInRange(min, max) {
    const perfectNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) perfectNumbers.push(i);
    }
    return perfectNumbers;
}

function formatTime(hours, minutes = 0, seconds = 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return formatTime(hours, minutes, seconds);
}

function dateDifference(h1, m1, s1, h2, m2, s2) {
    const time1 = timeToSeconds(h1, m1, s1);
    const time2 = timeToSeconds(h2, m2, s2);
    const diffInSeconds = Math.abs(time1 - time2);
    return secondsToTime(diffInSeconds);
}
//----------------------------------------------------------------------------------------------------------------------
function handleTask1() {
    const a = parseInt(document.getElementById('task1-a').value);
    const b = parseInt(document.getElementById('task1-b').value);
    document.getElementById('task1-result').textContent = numbers(a, b);
}

function handleTask2() {
    const n = parseInt(document.getElementById('task2-n').value);
    document.getElementById('task2-result').textContent = factorial(n);
}

function handleTask3() {
    const a = parseInt(document.getElementById('task3-a').value);
    const b = parseInt(document.getElementById('task3-b').value);
    const c = parseInt(document.getElementById('task3-c').value);
    document.getElementById('task3-result').textContent = combineDigits(a, b, c);
}

function handleTask4() {
    const length = parseInt(document.getElementById('task4-length').value);
    const width = parseInt(document.getElementById('task4-width').value) || undefined;
    document.getElementById('task4-result').textContent = calculateArea(length, width);
}

function handleTask5() {
    const num = parseInt(document.getElementById('task5-num').value);
    document.getElementById('task5-result').textContent = isPerfectNumber(num);
}

function handleTask6() {
    const min = parseInt(document.getElementById('task6-min').value);
    const max = parseInt(document.getElementById('task6-max').value);
    document.getElementById('task6-result').textContent = findPerfectNumbersInRange(min, max).join(', ');
}

function handleTask7() {
    const hours = parseInt(document.getElementById('task7-hours').value);
    const minutes = parseInt(document.getElementById('task7-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('task7-seconds').value) || 0;
    document.getElementById('task7-result').textContent = formatTime(hours, minutes, seconds);
}

function handleTask8() {
    const hours = parseInt(document.getElementById('task8-hours').value);
    const minutes = parseInt(document.getElementById('task8-minutes').value);
    const seconds = parseInt(document.getElementById('task8-seconds').value);
    document.getElementById('task8-result').textContent = timeToSeconds(hours, minutes, seconds);
}

function handleTask9() {
    const seconds = parseInt(document.getElementById('task9-seconds').value);
    document.getElementById('task9-result').textContent = secondsToTime(seconds);
}