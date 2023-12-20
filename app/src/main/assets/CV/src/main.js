const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const { log } = require('console');

app.use(morgan('combined'));

// Tạo thực thể Express Handlebars engine
const hbs = exphbs.create({});

// Cấu hình engine và view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'reponstiory\\view'));
//console.log('Path :',path.join(__dirname, 'responstiory\\view'));

app.get('/', (req, res)=> {
  res.render('home'); // Hiển thị trang 'home'
});

app.listen(port, () => {
  console.log(`Ứng dụng ví dụ đang lắng nghe tại http://localhost:${port}`);
});
