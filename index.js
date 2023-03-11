const inquirer=require("inquirer");
const fs=require("fs");

inquirer
.prompt([{
    type:"input",
    name:"logoInfo",
    message:"Enter the Logo Name",
},
{
    type:"input",
    name:"textColor",
    message:"Enter the text color",
},
{
    type:"input",
    name:"logoColor",
    message:"Enter the logo color",
},
{
    
}
])