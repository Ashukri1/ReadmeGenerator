
function generateMarkdown(data) {
  return `# ${data.title}
  ## description
  ${data.description} 

  ## Table of contents
  * [github](#github)
  * [contribution](##contribution)
  * [email](#email)
  * [license](#license)
  * [Description](#Description)
  * [installation](#installation)
  * [usage](#usage)
  * [guidelines](#guidelines)
  
## github
my github is 
${data.github}
## contribution 
contribution to my project 
${data.contirbutors}
## email
my email is  
${data.email}
##license
what kind license was used on this project  
${data.license}
## description
how can you describe the project 
${data.description}
##installaton
how was it installed 
${data.installation}
## usage 
how is it used  
${data.usage }
## guidelines
what are some of the guidelanes 
${data.guidelines}



  


`;
}

module.exports = generateMarkdown;
