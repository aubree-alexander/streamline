const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

// ***Scott*** These requires were in the tutorial I found for using Cloudinary (https://youtu.be/2gEv05VmEC8)
// const formidable = require('formidable');
// const cloudinary = require('cloudinary');

require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// // ***Scott*** So this is the config for cloudinary using the .env file
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });

// // ***Scott***apparently this 'if' statement is necessary and likely belongs inside a function
// // the function in the walkthrough I am learning from is not relevant to our project though--http.createServer--
// genericFunction(req, res) => {
//   if(req.url === '/upload' && req.method.toLowerCase() === 'post') {

//     // ***Scott*** this part is supposed to parse a file upload???
//     const form = new formidable();

//     form.parse(req, (err, fields, files) => {

//       // ***Scott*** this part saves the file inside cloudinary---or at least returns a usable file path in the console.log ???
//       cloudinary.uploader.upload(files.upload.path, result => {
//         console.log(result)
//       })

//       res.writeHead(200, { 'content-type': 'text/plain'});
//       res.write('recieved upload:\n\n');
//       res.end(util.inspect({ fields: fields, files: files }));
//     });
//   }

//   // ***Scott*** this part shows a simple file upload form we can probably abandon or re-use somewhere else
//   res.writeHead(200, { 'content-type': 'test/html' });
//   res.end(`
//   <div style='display:flex;justify-content:center; align-items:center; width:100%; height:100%>
//   <form action+"/upload" enctype="multipart/form-data" method="post">
//     <input type="file" name="upload" multiple="multiple" /><br/><br/>
//     <input type="submit" value="Upload" />
//   </form>
//   </div>
//   `)
// };


app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));


sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});




//repurpose utils, auth, index.js - they will be similar