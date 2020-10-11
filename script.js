// const box = {
//     minBox: [
//         { key: null, drink: 'baltika' },
//         { key: 344, drink: 'Carlsberk' },
//         { drink: 'Carlsberk' },
//         { key: null, drink: 'Carlsberk' }
//     ]
// };

// for (var i = 0; i < box.minBox.length; i++) {
//     if (box.minBox[i].key != null) {
//         console.log('Ключ находится в коробке №: ' + i + " Ключ равен: " + box.minBox[i].key);
//     }
// }

let obj = {
    description: document.querySelector('.description'),
    button: document.querySelector('.button'),
    title: document.querySelector('.title')
};


let random = function () {
    function calc() {
        let add;
        let index = 0;
        for (add = 0; add < 100;) {
            let ran = Math.floor(Math.random() * 101);
            if (ran > 50) {
                add++;
                index++;
            }
            else if (ran <= 50) {
                add++;
                index--;
            }
        }
        return index;
    }
    return calc;
};
let fun = random();

let start = obj.button.addEventListener('click', function () {
    obj.description.style.display = "block";
    let test = fun();
    if (test >= 0) {
        obj.title.style.color = 'green';
        obj.description.innerHTML = 'Решка выпала в ' + test + ' раз больше орла!';
    } else if (test < 0) {
        obj.title.style.color = 'orange';
        obj.description.innerHTML = 'Решки было в ' + test + ' раза меньше орла!';
    }
});



