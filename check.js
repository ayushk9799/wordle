import fs from 'fs';
import {promisify} from 'util'
import readline from 'readline'

const readfilePromise=promisify(fs.readFile)
let wordset=new Set();

const readingfile=async ()=>{
  try{
          const data=await readfilePromise('5letterwords.txt','utf8')
          const lines=data.split('\n');
          lines.forEach((line)=>
          {
             wordset.add(line)
          });
          console.log(wordset.size)
  }
  catch(e){
    console.log(e)
  }
}

export const populateWordSet = async () => {
    await readingfile();
    return wordset;
};

