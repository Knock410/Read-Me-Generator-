function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License Badge](https://img.shields.io/badge/license-${license}-red)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
        
        This project is licensed under the ${license} license.`;
  }
  return "";
}

function generatemarkdown(data) {
  return `# ${data.title}
     ${renderLicenseBadge(data.license)}
     
    # Description

    ${data.description} 
    
    ## Table of Contents
 
    * [Description](#description)
    * [Installation Guide](#installation)
    * [Usage](#usage)
    * [Test Instructions](#test)
    * [Contributing](#contributing)
    ${renderLicenseLink(data.license)}
    
    ## Installation

    ${data.installation}data.

    ## Test Instructions

    ${data.test}

    ## Usage

    ${data.usage}

    ## Contributing

    ${data.contribution}

    ## Questions
     
    If you have any questions about the project you can contact me directly via ${
      data.email
    }. 

    You can find more of my work at [${data.github}](#https://github.com/${
    data.github})   
    `;
}
module.exports = generatemarkdown;