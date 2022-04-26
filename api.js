const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log('Start Server : localhost:3001');
})
const key = {
    apiKey: 'YRRQ39Y-YJZMED4-HE3T7R2-MFS96MD',
    uuid: 'f63171a7-f4bf-4734-8b87-a3e0a3f29351'
}

app.get('/api/users/:apikey/:type', async (req, res)=>{
    //req : request, 사용자가 요청한 값
    //res : response, 요청에 응답해준 값.
    let {type, apikey} = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('apikey is not valid');
    } else{
        if(type === 'seoul'){
            let data = [
                {name:"홍길동", city:"seoul"},
                {name:"김철수", city:"seoul"},
            ];
            res.send(data);
        } else if(type ==='jeju'){
            let data = [
                {name:"박지성", city:"jeju"},
                {name:"홍준표", city:"jeju"},
            ];
            res.send(data);
        }  else{
            res.send('Type is not correct');
        }
        res.send('ok');
        //ok가 찍힘
    }

})

app.get('/api/sales/:apikey/:year', async (req, res)=>{
    //req : request, 사용자가 요청한 값
    //res : response, 요청에 응답해준 값.
    let {year, apikey} = req.params;

    if(year === '2019'){
        let data = [
            {product:"냉장고", price:"1230"},
            {product:"세탁기", price:"152"},
        ];
        res.send(data);
    } else if(year ==='2020'){
        let data = [
            {product:"냉장고", price:"130"},
            {product:"세탁기", price:"52"},
        ];
        res.send(data);
    }  else{
        res.send('Type is not correct');
    }
     res.send('ok');
     //ok가 찍힘

})

//api 서버에 제공할 데이터나 기능들을 만들어 두고, 호출 방법들을 설정할 수 있다.
//그래서 REST API 방식은 모든 소스들을 URI로 부여해 API로 제공하는 것이기 때문에
//URI를 통해 원하는 api 데이터를 요청할 수 있다.
