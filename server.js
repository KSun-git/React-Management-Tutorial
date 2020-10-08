const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.Port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req,res) => {
    //고객목록 리스트 출력
    res.send([
        {
          'id' : 'kch',
          'image' : 'https://placeimg.com/64/64/1',
          'name' : '김철수',
          'birthday' : '961222',
          'gender' : '남자',
          'job' : '프로그래머'
        },
        {
          'id' : 'kyh',
          'image' : 'https://placeimg.com/64/64/2',
          'name' : '김영희',
          'birthday' : '960305',
          'gender' : '여자',
          'job' : '프로그래머'
        },
        {
            'id' : 'hgd',
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '홍길동',
            'birthday' : '960701',
            'gender' : '남자',
            'job' : '프로그래머'
          }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));