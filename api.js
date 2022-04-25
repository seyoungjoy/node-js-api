const express = require('express');
const app = express();
const uuidAPIkey = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log('Start Server : localhost: 3001');
})

// console.log(uuidAPIkey.create());

const key = {
    apiKey: 'J7SMBGC-CABMQXZ-PFENAZQ-TMH65YB',
    uuid: '91f345c1-6297-4bf7-b3dd-557ed52262f9'
}

//users
app.get('/api/users/:apikey/:type', async (req,res) => {
    // res.send('connect.');

    let{ type,apikey } = req.params;

    if(!uuidAPIkey.isAPIKey(apikey) || !uuidAPIkey.check(apikey, key.uuid)){
        res.send('apikey is not valid')
    } else{
        if(type === 'seoul'){
            let data = [
                {name:'홍길동', city:'seoul'},
                {name:'김철수', city:'seoul'},
            ];
            res.send(data);
        } else if(type === 'jeju'){
            let data = [
                {name:'박지성', city:'jeju'},
                {name:'손흥민', city:'jeju'},
            ];
            res.send(data);
        } else{
            res.send('Type is not correct')
        }
        console.log(type);
        res.send('ok');
    }
})

//sales
app.get('/api/:apikey/sales/:year', async (req,res) => {

let{ year, apikey } = req.params;

if(year === '2019'){
    let data = [
        {product:'반도체', amount:3293203},
        {product:'냉장고', amount:2323233},
    ];
    res.send(data);
} else if(year === '2020'){
    let data = [
        {product:'반도체', amount:303},
        {product:'냉장고', amount:2233},
    ];
    res.send(data);
} else{
    res.send('Type is not correct')
}

res.send('ok');
})
