const fs = require('fs');
const path = require('path');

readCount = (to) => {
    let getMonth = new Date().getMonth();
    let newForm = new Object({
        count: 0,
        refresh: getMonth
    });

    let filePath = path.join(__dirname, '../store/count.json');
    const toAppend = fs.existsSync(filePath);

    if(toAppend) {
        newForm = fs.readFileSync(filePath, {encoding:'utf8', flag:'r'})
        newForm = JSON.parse(newForm)
    }

    if(newForm.count >= to && newForm.refresh !== getMonth) {
        newForm = new Object({
            count: 0,
            refresh: getMonth
        });
    }

    return newForm
}

count = (inc, to) => {
    const dir = path.join(__dirname, '../store');
    const isThere = fs.existsSync(dir);
    if(isThere === false) {
        fs.mkdirSync(dir);
    }
    let filePath = path.join(__dirname, '../store/count.json');
    const toAppend = fs.existsSync(filePath);

    let getMonth = new Date().getMonth();
    let newForm = new Object({
        count: 0,
        refresh: getMonth
    });

    if(toAppend) {
        newForm = fs.readFileSync(filePath, {encoding:'utf8', flag:'r'})
        newForm = JSON.parse(newForm)
    }

    if(newForm.count >= to && newForm.refresh !== getMonth) {
        newForm = new Object({
            count: 0,
            refresh: getMonth
        });
    }
   
    if(newForm.count < (to + 1)) {
        newForm.count += inc
        const form = JSON.stringify(newForm);
        fs.writeFileSync(filePath, form);
    }

    return (newForm.count < (to + 1))
}



module.exports = {
    count,
    readCount
}