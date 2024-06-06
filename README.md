<a name="readme-top"></a>
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

This is a common logging library with newrelic integration

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![Node][Node.js]][Node-url]
* [![TypeScript][TypeScript.img]][TypeScript-url]
* [![Npm][Npm.img]][Npm-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

1. To init NewRelic in your application you must specify the below keys in your application .env

  * 1.1 NODE_ENV
  * 1.2 DEPLOY_ENV
  * 1.3 NEW_RELIC_LICENSE_KEY or NEW_RELIC_LICENSE_KEY_2
  * 1.4 ensure o4s-logger is import at the start of the main file

  > **_NOTE:_**  if these keys are not present newrelic will not be initalized but you can still use the logging 


2. To Define log level you must specify the LOG_LEVEL in your application .env
below are the log levels -
* error - 0
* warn  - 1
* info  - 2
* http  - 3
* verbose - 4
* debug - 5
* silly - 6

> **_NOTE:_** Where 0 is the highest priority and 6 is the least priority
Example LOG_LEVEL=info will block http, verbose, debug, silly and allow info, warn, error only. Default LOG_LEVEL is info

### Installation

npm i https://github.com/original4sure/o4s-logger/tree/master
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
```node
//import logger
import { logger } from "@original4sure/o4s-logger";

// Logger with different log levels
logger.error("this is error!!!");
logger.warn("this is warn!!!");
logger.info("this is info!!!");
logger.http("this is http!!!");
logger.verbose("this is verbose!!!");
logger.debug("this is debug!!!");
logger.silly("this is silly!!!");
```


<!-- CONTRIBUTING -->
## Contributing

Feel free to make the changes and improve this !!! 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Contact Dawn team for any kind of support needed we will be happy to help you !!!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[TypeScript.img]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Npm.img]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[Npm-url]: https://www.npmjs.com/
