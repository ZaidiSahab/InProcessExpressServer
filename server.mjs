import express from 'express'
const app = express()
const PORT = process.env.PORT || 3004;

app.get('/', (req, res) => {
  res.send('Hello Chattur!'+ new Date());
  console.log('Hello Chattur!', new Date());
 
  
})

app.get('/weather', (req, res) => {
    res.send('weather'+ new Date());
    console.log('weather', new Date());
   
    
  })

app.listen(PORT, () => {
  console.log(`Example  SERVErr listening on port ${PORT}`)
})