var path = require('path'),
  util = require('./../util');

exports.index = function(app, publicRoot){
  var pseudoMenbers, pseudoContent, i, pseudoComments, pseudoPost, PSEUDO_POSTS_AMOUNT = 30;

  // initialize pseudo menbers data
  pseudoMenbers = [
    {
      id: Date.now().toString(),
      name: 'menber1',
      description: 'I am member1',
      avatar: {
        size65: '/test/img/avatar65.jpg',
        size200: '/test/img/avatar200.jpg'
      },
      profile: [
        'http://about.me/kerrychen'
      ]
    }
  ];
  // initialize pseudo content data
  pseudoContent = 'content ';
  for (i = 0; i < 3; ++i) {
    pseudoContent += pseudoContent.concat(pseudoContent);
  }
  // initialize pseudo comments data
  pseudoComments = [
    {
      id: Date.now().toString(),
      commenter: {
        name: 'commenter1',
        avatar: {
          size65: '/test/img/avatar65.jpg'
        },
        url: 'http://about.me/kerrychen',
        content: new Array(16).join('comments ')
      }
    }
  ];
  // initialize pseudo post data
  pseudoPost = {
    id: Math.random(),
    title: 'title',
    time: (new Date).getTime().toString(),
    author: pseudoMenbers[0],
    modifier: pseudoMenbers,
    tag: ['tag1', 'tag2'],
    content: pseudoContent,
    comment: pseudoComments
  };

  // single page home
  app.get('/', function (req, res) {
    res.sendfile(path.join(publicRoot, '/dev.html'));
  });

  // api
  app.get('/api/posts', function (req, res) {
    util.initArrAsync(pseudoPost, PSEUDO_POSTS_AMOUNT, function (post, i) {
      post.id = Math.random();
      post.title += i;
      post.time = (new Date).getTime().toString();
    }, function (pseudoPosts) {
      res.send(200, pseudoPosts);
    });
  });
  app.get('/api/posts/amount', function (req, res) {
    res.send(200, PSEUDO_POSTS_AMOUNT);
  });
};
