const fs=require('fs');

fs.writeFileSync('./text.txt',"boss finally");

fs.writeFile('./text1.txt',"boss finally aagaya",(err)=>{});

const res=fs.readFileSync('./text.txt',"utf-8");//its a sync function doesnt wait
console.log(res);

fs.readFile('./text1.txt',"utf-8",(err,res)=>{
  if(err){
    console.log("Error reading");
  }
  else{
    console.log(res);
  }
});

// main function using a readall is that it returns a promise which a call back function will be called to resolve it

fs.appendFileSync("./text.txt",`\n ${Date.now()}\nHey There`);


fs.cpSync("./text.txt","./copy.txt");

fs.unlinkSync("./copy.txt");
 
const stat=fs.statSync("./text.txt");
console.log(stat);

fs.mkdirSync("mydoc/a/b",{recursive:true});








