const express = require('express')
const morgan = require('morgan')
const app = express()
const layout = require('./views/layout')
const { db, Page, User } = require('./models')
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/users')


const PORT = 1338;

const init = async () => {
  await Page.sync({force: true})
  await User.sync({force: true})

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init()

app.use(express.json())

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.use('/wiki', wikiRouter)

app.get("/", (req, res) => {
  res.redirect('/wiki');
})

