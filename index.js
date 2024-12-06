const express = require('express')
const app = express()
const multer  = require('multer')



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // ekhane cb hocche callback function. ar cb er first parameter e error show koray. ar first er eta null thakbe. ar error er pore kon folder e chole jabe? images folder e jabe
    cb(null, './images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,uniqueSuffix + '-' + file.originalname)
    console.log(file);
  }
})

const upload = multer({ storage: storage }) 


// app.post('/', upload.single('avatar'), function(req,res){
// // res.send('Hello')
// res.send(`/images/${req.file.filename}`)
// })

app.post('/', upload.array('photos', 12), function(req,res){
res.send(req.files)
// res.send(`/images/${req.file.filename}`)
})

app.use('/images', express.static('images'))

app.listen(8000, function(){
  console.log('server running');
})




// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './images')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, uniqueSuffix+ '-'+ file.originalname )
//       console.log(file);
//     }
//   })
  
//   const upload = multer({ storage: storage })
//   app.use('/images', express.static('images'))

// app.post('/', upload.single('avatar'), function(req, res){
//     // res.send('hello img')
//     // res.send(req.file)
//     res.send(`/images/${req.file.filename}`)

// })


// app.listen(8000, function(){
//     console.log('server running');
// })
