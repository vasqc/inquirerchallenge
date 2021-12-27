

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  //Table of Contents
  * [Name](#Name)
    * Owner of Repository
    ${data.name}
  
  * [Project](#Project)
    * Name of Project:
    ${data.title}

  * [Description](#description)
    ${data.description}

  * [Usage](#usage)
    ${data.usage}

  * [Contributing](#contributing)
    ${data.contributing}
  
  * [Questions](#questions)
  ## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email
    }. You can find more of my work at [${data.github}](https://github.com/${data.github
    }/).
`;

}

module.exports = generateMarkdown;