# Architecture
Application is build by following Microservice architecture with REST APIs. 
Backend developed using Springboot + MySQL.  
Frontend developed using React + Bootstrap.  
Backend has each individual services that are bind to REST Api layer (controller classes).  
Frontend is fetching data with that REST Api directly.

**Microservice architecture**
![Microservice architecture](/dev_purposes_only/git_readme_content/MicroserviceArchitecture.jpg?raw=true )

**Userful links to learn about the architecture**
* [Rest API & Microservices](https://youtu.be/sZKzpHkJ-xw)
* [Spring Boot](https://youtu.be/8SGI_XS5OPw)
* [React](https://youtu.be/JPT3bFIwJYA)


# Prerequisites
Download and install following softwares before launching the project.
* [Download IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/download/#section=windows)
* [Download VSCode](https://code.visualstudio.com/download)
* [Download MySQL for Windows Community](https://dev.mysql.com/downloads/installer/)
* [Download Java 18](https://www.oracle.com/java/technologies/downloads/#jdk18-windows)

# Installation
1. Clone the repository
2. Open UGC_Project folder using intelliJ IDEA (Make sure you are connected to the internet)
3. Open src > client folder using VSCode
4. Then open terminal in VS code and type "npm install" to install the dependencies.
5. After installation type "npm start" to run the Frontend
6. Then go to intelliJ and click on Run "WebsiteApplicaiton" to run the Backend

# Github Source control
There are two options.
1. [Download & Install Github Desktop](https://desktop.github.com/) and make a commit and push.
2. Or [Download & Install GitBash](https://git-scm.com/downloads) and use following commands
   * Add content - `git add .`
   * Make a commit - `git commit -m "add your commit here"`
   * Push to the repository - `git push`

# ATTENTION !
#### Do not modify following files without asking. ####
* pom.xml
* src > client > package.json

#### Do not share this repository or the resources mentioned in this file. ####

