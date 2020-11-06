const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Come back for new updates!'))
app.listen(3000, () => console.log('Server ready'))
