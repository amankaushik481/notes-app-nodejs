const fs=require('fs')
// const book = {
//     title: 'Think like a monk',
//     author: 'Jay Shetty'
// }
// const books = JSON.stringify(book)
// fs.writeFileSync('1-json.json', books)

const data = fs.readFileSync('1-json.json')
console.log(data.toString())