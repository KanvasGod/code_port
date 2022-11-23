
function listYears(year) {
    var d = new Date();
    var year = d.getFullYear() - year
    if(year <= 0) {
        return 1
    }

    return year
}

var charms = {
    Linux: {
        years: listYears(2022)
    },
    Go: {
        years: listYears(2022)
    },
    Python: {
        years: listYears(2019)
    },
    Vue: {
        years: listYears(2018)
    },
    React: {
        years: listYears(2020)
    },
    NodeJS: {
        years: listYears(2018)
    }
}

const timeKeys = {
    Linux: document.getElementById('linux_time'),
    NodeJS: document.getElementById('nodejs_time'),
    Python: document.getElementById('python_time'),
    Vue: document.getElementById('Vue_time'),
    React: document.getElementById('React_time')
}

timeKeys.Linux.innerText = charms.Linux.years
timeKeys.NodeJS.innerText = charms.NodeJS.years
timeKeys.Python.innerText = charms.Python.years
timeKeys.Vue.innerText = charms.Vue.years
timeKeys.React.innerText = charms.React.years

sendMessage = async () => {
    const message = document.getElementById('msg');
    const textarea = document.getElementById('textarea');
    const email = document.getElementById('email');
    const send = document.getElementById('send');

    let emailData = {
        email: email.value,
        text: textarea.value
    }

    const url = window.location.href;

    message.classList.add('alert_active');
    message.classList.remove('alert_inactive');
    textarea.innerText = '';
    email.innerText = '';
    send.style.display = 'none'
    setTimeout(()=> {
        message.classList.remove('alert_active');
        message.classList.add('alert_inactive');
    }, 5000)

    let responce = await fetch(url + 'email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(emailData)
    })

    let result = await responce.json();
}

deleteImg = (id) => {
    const tag = document.getElementById(id);
    setTimeout(() => {
        tag.remove()
    }, 1)
}

const slideBank = {
    0: 'build',
    1: 'Malik-final',
    2: 'Serenity',
    3: 'shoe',
    4: 'skate',
    5: 'kanvas',
    6: 'statue'
}

let slot = 0
setInterval(() => {
    const slideHud = document.getElementById('slider-hud');
    const img = document.createElement('img');
    img.className = 'slider'
    img.src = `./images/slider/${slideBank[slot]}.jpg`;
    let id = `img${slot}`;
    img.id = id;
    deleteImg(id);
    slideHud.appendChild(img);
    slot++;
    if (slot > 6) {
        slot = 0;
    }
}, 3000)
