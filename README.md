# webApp-Aggregator
This is an application built using React in frontend, stored in the 'client' folder, and NodeJs in backend, stored in the 'server' folder.
The main purpose of this webApp is to execute aggregation on one or more different attributes on a table (Project, Employee, Date) taken from a JSON file called 'projectData.json' stored inside the client folder and show it to the user the requested operation.

# How to start application
Most of the application is been built using React, therefore it's necessary installing the dependencies stored in the package.json file inside the client folder typing 'npm install'. When the node_modules folder is created, you can type 'npm run start' to start a local environment on the 'http://localhost:3000' browser page.
In NodeJs I have only wrote one get API inside the 'server/index.js' file that sends the projectData.json, anyway it's not necessary using the server part because I decided to store the file in the client folder and use it from there. But if you want to test it, you can follow the previous passage: go into the 'server' folder and typing: 'npm install'.  After that, the server will be available on 'http://localhost:3001' and you can see the json typing 'http://localhost:3001/json'.

# Structure of the application
As said, the core of the application is stored in the 'client', especially inside 'src/components' folder. 
![image](https://user-images.githubusercontent.com/61562831/157054529-785a76d9-7d4f-484d-99ac-889280a81f06.png)
* Homepage is the main page of the application;
* Projects allows you to see the content of the json file on the main page;
* Aggregation where are stored the functions made to execute aggregations and gives the result on frontend;
* TableViewer includes the different views based on the attributes in tabular format;
* AggregationsTest is just a file used during the development to test functions.

# Main page
![image](https://user-images.githubusercontent.com/61562831/157057323-44e5e23a-386f-4d16-a89d-259a03938143.png)
This is the structure of the main page. 
At the center, the json file is showed in a tabular format.
To execute an aggregation, you can select any value that refers to the attributes of the table in the comboboxes, so 'Project, Employee, Date'.
* Aggregation with only one attribute
![image](https://user-images.githubusercontent.com/61562831/157057984-a0605268-7604-48c8-b11b-f880ae12c6f6.png)
* Aggregation with two attributes
![image](https://user-images.githubusercontent.com/61562831/157058171-f6568960-eb6c-481f-8059-7195b2857aeb.png)
![image](https://user-images.githubusercontent.com/61562831/157058269-cafbd2f6-bc3f-4c96-b4fd-ca1d7af3c376.png)


