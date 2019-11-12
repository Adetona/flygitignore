#!/usr/bin/env node

const fs = require('fs');


function createFile() {
	var content = "#gitignore content"; 

	fs.appendFile('.gitignore', content, (err)=>{
		if (err) throw err; 
		console.log('.gitignore file successfully created')
	})
}



const path = '.gitignore'; 


fs.access(path, fs.F_OK, (Notexist, err)=>{
	
	if(Notexist){
		//createFile();
		console.log('Notexist')
	}else{
		console.log('.gitignore file already exists.'); 
	}


})