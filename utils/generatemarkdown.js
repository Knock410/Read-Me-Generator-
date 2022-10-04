function renderLicenseBadge(license){
    if(license !== "None"){
        return `![License Badge](https://img.shields.io/badge/license-${license}-red)`
    }
    return "";
}

function renderLicenseLink(license){
    if(license !== "None"){
        return `* [License](#license)`
    }
    return "";
}

function renderLicenseSection(license){
    if(license !== "None"){
        return `## License
        
        this project is licensed under the ${license} license.`
    }
    return "";
}




const generateReadME = `# ${title}
 ## ${license}
## Table of Contents
 
 * [Description](#description)
 * [Installation Guide](#installation)
 * [Usage](#usage)
 * [Test Instructions](#test)
 * [Contributing](#contributing)
 * [License](#license)
 
# Description
${description}

## Installation
${installation}

## Test Instructions
${test}

## Usage
${usage}

## Contributing
${contribution}



## Questions
 *[${github}](#https://github.com/${github})
 *${email}
 `;