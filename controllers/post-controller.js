const Post = require('../models/post-model')

exports.test = ('/', (req, res) => {
    console.log(req.body)
    res.send('hey there')
})

exports.new = ('/new', (req, res) => {

    console.log(req.body)
    console.log(req.params)
    let post = new Post(req.body)

    post.save()
        .then((newPost) => {
            res.send(newPost)
        })
        .catch((err) => {
            res.send(err)
        })
})

exports.posts = ('/posts', (req, res) => {
    Post.find((err, posts) => {
        err ? res.send('some kind of mistake') :
        res.send(posts)
    })
    // res.send('got it')
})

exports.delete = ('/post/:id', (req, res) => {

    Post.deleteOne({_id: req.params.id})
        .then((del) => {
            res.send(del)
        })
        .catch((err) => res.send(err))
})