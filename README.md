# SpaceX Launch Program

[Github](https://github.com/chander-prakash/spacex)

SpaceX is a website to source information of all the launch programs. It gives you multiple filter options for results. 
[Project Link](https://space-s.herokuapp.com/)



# Features!

  - Can filter the launches by Year
  - Can filter the launches by Successful Launch
  - Can filter the launches by Successful Landing (* API is not working right now)


# Code Quality!

  - React-App Eslinter configuration installed
  - Husky setup to check pre and post commit
  - Hooks on Before push to Git, checking for Linting
  - Hooks on Before push to Git, running all the test cases

### Installation

SpaceX requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd spaceX
$ npm install
$ npm run start
```


### Manual Deploying

SpaceX requires [Heroku Cli].

Install the dependencies and devDependencies and start the server.

```sh
$ heroku create space-s --buildpack mars/create-react-app 
$ git push heroku master
$ heroku open
```

### Deploying CI/CD
SpaceX Auto Deployed to [Project](https://space-s.herokuapp.com/)

```sh
$ Push to master, auto deploy on heroku
```


# React-Testing 
    - Use Jest to implement unit testing
    - Testing Coverage
        - Shallow mount tested
        - Click event tested
        - Element check


### Tech

SpaceX uses a number of open source projects to work properly:
* [React JS] - HTML enhanced for web apps!
* [Typescript] - Strict data type mapping
* [CSS3] - styling component
* [HTML5] - UI component implementation



# Filter Screen
![FilterScreen](/public/images/screenshot/filter.png)


# SpaceX Missions Screen
![SpaceXMissions](/public/images/screenshot/spacex.png)


# SpaceX Project Screen
![SpaceXProject](/public/images/screenshot/project.png)


And of course SpaceX itself is open source with a [public repository](https://github.com/chander-prakash/spacex)
 on GitHub.
