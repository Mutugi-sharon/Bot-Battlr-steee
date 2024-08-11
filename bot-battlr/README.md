
# Bot Battlr
Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This application allows users to browse through a list of robots, view a robot’s details, and enlist a bot into their army.

## Table of Contents
* Project Setup
* Core Deliverables
* Components
* Styling
* Usage
* Contributing
* License
* Project Setup
* Create a new project folder and navigate into it.
* Create a new GitHub repository (ensure it is private) and add your TM as a contributor for grading purposes.
* Regularly commit to the repository.
* In your project directory, create a db.json file and use the provided data for your server DB.
* Run the following command to get the backend started:
* json-server --watch db.json

# Test your server by visiting this route in the browser:
* http://localhost:8001/bots

## Core Deliverables
* As a user, you should be able to:

* See profiles of all bots rendered in BotCollection.
* Add an individual bot to your army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be enlisted only once and does not disappear from the BotCollection.
* Release a bot from your army by clicking on it. The bot disappears from the YourBotArmy component.
* Discharge a bot from their service forever by clicking the red button marked “x”, which deletes the bot both from the backend and from the YourBotArmy on the frontend.
# Components
## BotCollection
* Fetches the list of bots from the server and renders them using the BotCard component.

## YourBotArmy
* Displays the bots that have been added to the user’s army.

## BotCard
* Represents an individual bot and is used in both BotCollection and YourBotArmy.

## App
* Manages the state of the bot army and handles adding/removing bots.

## Styling
* The application is styled using the styles.css file. The styles ensure a clean and user-friendly interface.

## Usage
* Clone the repository:
* git clone <repository-url>

## Navigate into the project directory:
* cd bot-battlr

## Install dependencies:
* npm install

## Start the React application:
* npm start

## Contributing
* Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
* This project is licensed under the MIT License.

