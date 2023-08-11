import express from 'express';
import path from 'path'
import { populateWordSet } from './check.js';
import { fileURLToPath } from 'url';
const app=express();
let wordset;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)
app.use(express.static(path.join(__dirname,'/public')))
console.log(__dirname)
// Route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  '/public/index.html'));
});

const getWordSet=async()=>
{
     wordset=await populateWordSet();
}
getWordSet();
app.get('/api/wordset',async (req,res)=>
{
   
    
    res.json({wordset:[...wordset]})
})
app.listen(3000,()=>
{
    console.log('server running')
})