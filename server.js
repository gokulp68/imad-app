var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'articl-one' : {
              title: 'Article One',
              heading: 'Article one',
              date: 'august 16 2017',
              content:` <div>
                            <p>
                                jhfhklsdufbhhhsdilaufklasvnklagiuegh
                                dnvkladjfgnjkladgvbiladugvvvvvbkddddddddddbndksfb          jhbvjsdfyhgjiu bieurh iuuih
                            </p>
                        </div>
                        <div>
                            <p>
                                jhfhklsdufbhhhsdilaufklasvnklagiuegh
                                dnvkladjfgnjkladgvbiladugvvvvvbkddddddddddbndksfb          jhbvjsdfyhgjiu bieurh iuuih
                            </p>
                        </div>`
            },
    ' ariticle-two' :{title: 'Article Two',
              heading: 'Article Two',
              date: 'august 16 2017',
              content:` <div>
                            <p>
                                jhfhklsdufbhhhsdilaufklasvnklagiuegh
                                dnvkladjfgnjkladgvbiladugvvvvvbkddddddddddbndksfb          jhbvjsdfyhgjiu bieurh iuuih
                            </p>
                        </div>
                        <div>
                            <p>
                                jhfhklsdufbhhhsdilaufklasvnklagiuegh
                                dnvkladjfgnjkladgvbiladugvvvvvbkddddddddddbndksfb          jhbvjsdfyhgjiu bieurh iuuih
                            </p>
                        </div>`},
    'article-three' :{
        title: 'Article three',
              heading: 'Article three',
              date: 'august 16 2017',
              content:` <div>
                            <p>
                                jhfhklsdufbhhhsdilaufklasvnklagiuegh
                                dnvkladjfgnjkladgvbiladugvvvvvbkddddddddddbndksfb          jhbvjsdfyhgjiu bieurh iuuih
                            </p>
                        </div>
                        <div>
                            <p>
                                jhfhklsdufbhhhsdilaufklasvnklagiuegh
                                dnvkladjfgnjkladgvbiladugvvvvvbkddddddddddbndksfb          jhbvjsdfyhgjiu bieurh iuuih
                            </p>
                        </div>`
    }
    
    
};
function createhtml(data){
        var title=data.title;
        var heading=data.heading;
        var date=data.date;
        var content=data.content;
        var htmltemplate = `
                 <html>
                    <head>
                        <title>
                            ${title}
                        </title>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                         <link href="/ui/style.css" rel="stylesheet" />
                    </head>
                    <body>
                    <div class="container">
                        <div>
                            <a href="/">Head back</a>
                        </div>
                        <hr/>
                        <h3>
                            ${heading}
                        </h3>
                        <div>
                            ${date}
                        </div>
                            ${content}
                     </div>
                    </body>
                </html>
        `;
        return htmltemplate;
    
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function (req, res){
    var articleName = req.params.articleName;
  res.send(createhtml(articles[articleName]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
