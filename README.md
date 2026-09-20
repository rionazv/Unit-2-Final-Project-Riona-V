# Hyperion Hoard - Full-Stack Web Application
by rionazv

## Badges
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  ![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Hibernate](https://img.shields.io/badge/Hibernate-%2359666C.svg?style=for-the-badge&logo=Hibernate&logoColor=white)

## Table of Contents
- [About This Project](#about-this-project)
- [Technologies Used](#technologies-used)
- [Prerequisites & Installation Instructions](#prerequisites--installation-instructions)
- [Project Usage](#project-usage)
- [Database Structure (ERD)](#database-structure-erd)
- [Wireframes](#wireframes)
- [Looking Forward](#looking-forward)

## About This Project
WELCOME TO THE HOARD! This is my final project for the LaunchCode Full-Time Software Development 2026 Spring cohort.  Hyperion Hoard is a personalized, fandom-wiki-style application. It was made using the technologies above; a React + JavaScript frontend, and a Spring Boot + Java backend using a MySQL database. At the moment, the application has two sides: the client side and the admin side. Currently, the admin side is open for anyone using the project to populate themselves. From an admin view, you can create image categories, create sets or albums of images, and tag and upload images directly to your online image host and database. You can view all the data you've uploaded and manage it with basic CRUD operations. On the client side, you can view all the images, filter them by type or set, and download them.
#### Who is this for?
This application and its UI are modeled after the Chinese ARPG mobile game Honkai Impact 3rd. HI3 has always had a large playerbase, but the global playerbase outside of China has always been quite small. Unlike larger games, the global datamining, archiving, and asset preservation efforts have been rather sparse. Therefore, I'd like to preserve what I can, even if I can't mine assets directly from the game. I'm focused on collecting things that I and others commonly search for but may have to dig through various wikis or SNS posts to find; mainly things like stickers, wallpapers, and CGs. I hope to make it very simple to find exactly what fans are looking for and to download them directly without digging through several sites.
The application's UI is modeled directly after the game itself, but I hope the underlying structure is flexible enough that anyone interested in creating a hoard of their own poorly-preserved game's assets can find it useful to build upon.

## Technologies Used

| Technology | Description |
| --- | --- |
| ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | Front-end library for building the user interface. |
| ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | Programming language used for client-side interactivity. |
| ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) | Fast build tool and dev server for the React app. |
| ![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white) | Styles the app’s layout, theme, and visuals. |
| ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) | Java framework used to build the back-end API. |
| ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) | Main back-end language for application logic. |
| ![MySQL](https://img.shields.io/badge/mysql-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) | Relational database used to store project data. |
| ![Hibernate](https://img.shields.io/badge/Hibernate-%2359666C.svg?style=for-the-badge&logo=Hibernate&logoColor=white) | ORM for mapping Java objects to the database. |

## Prerequisites & Installation Instructions

### Prerequisites
> [!NOTE]
> Make sure all required tools and dependencies are installed before continuing with the setup steps below.
- Node.js
- npm
- Java Development Kit (JDK) 26
- MySQL Server
- I use [imgbb](https://imgbb.com/) for image hosting and the upload portal specifically uses an imgBB widget. You can use any host you want and copy in image links, but imgBB will be easiest. You don't need an account, but having one makes images a lot easier to find.

### Back-end setup (Spring Boot, Java, MySQL)
1. Clone the repository: In the terminal, navigate to the directory where you want the project to be placed, then execute the following commands:
```
git clone https://github.com/rionazv/Unit-2-Final-Project-Riona-V.git
cd Unit-2-Final-Project-Riona-V/Unit-2-Final-Project
```
2. Configure secrets for database: Create a new MySQL database named unit-2-final-project, then update .env file at the project root directory (Unit-2-Final-Project) with YOUR mySQL Workbench password. It should just say admin.
```
DB_PASS=[your_password]
```
3. Run ```Categories_population_script.sql``` from the repository root in MySQL Workbench to populate the database with initial categories (Wallpapers, CGs and Stickers). This is optional, but highly recommended if you don't already have a category structure in mind. The reason that these categories are pre-populated is that for my application, these are generally unchanging values and will not need to be managed by an admin once they are populated. If you want to add your own types of categories, feel free to change them in the script.
4. Run the Spring Boot application: If you have an IDE such as IntelliJ, open the backend folder there and click the run button on ```Unit2FinalProjectApplication.java```. If you don't have an IDE, in the terminal, navigate to the back-end directory and execute the following command:
```
mvn spring-boot:run
```

### Front-end setup (React/Vite)
1. Navigate to the front-end directory in your terminal.
```
cd ../Unit-1-Final-Project
```
2. Install dependencies.
```
npm install
```
3. Run the React/Vite application.
```
npm run dev
```

## Project Usage
Navigate to localhost:5173 in your browser to view the landing page of the application. From there, you can navigate to the admin side or the client side of the application.

### Admin Side
1. Navigate to the admin side of the application in your browser by clicking the "Admin" button on the landing page.
2. Navigate to "Manage Image Sets."
3. From there, you can create new image sets, view existing sets, and manage the images within those sets. Add a few sets, and name them whatever you wish.
4. Navigate to "Upload Images."
5. From there, you can upload images to the sets you created. Please note that the upload portal uses an imgBB widget, so if you have an account, you can log into it from another tab. If you don't, that's fine too; you can still upload images without an account. Just make sure to copy the image link from the upload portal and paste it into the "Image Link" field in the form.
6. You can also add tags to your images, which will help users find them on the client side. Currently, all the tags are characters from the game Honkai Impact 3rd, but a user could easily modify the list of characters within the ```DataContext.jsx``` file if they wanted to use this application for a different media.
>[!NOTE]
> Please create a set before trying to upload images. There is currently no "uncategorized" option, so you must create a set first.

### Client Side
1. Once the admin has uploaded some images, navigate to the client side of the application in your browser by clicking the "Assets" button in the navigation menu.
2. From there, you can view all the images that have been uploaded. You can filter them by category or set, and you can also download them directly from the application. Happy browsing!

## Database Structure (ERD)
<img width="2246" height="1063" alt="image" src="https://github.com/user-attachments/assets/08a5d00f-c562-4536-850a-fdf80c8ddaa3" />

## Wireframes
These are the wireframes for the admin portal pages.
<img width="3508" height="2480" alt="Unit 2 Final Project Wireframe" src="https://github.com/user-attachments/assets/517de51b-9f0d-4cbe-baa5-b3d20f131cce" />

## Looking Forward

### Unsolved Problems
- The client-side filters for sets and categories behave a little strangely. When updating the category, the set filter changes correctly, but images don't change until you update the set.

### Future Features
- Add authentication to the admin side so that only certain users can upload and manage images.
- Enable admin to also run Update and Delete operations on images, not just sets.
- Add a filter by valkyrie function to the client side so that users can easily find images of their favorite valkyries.
- Add pagination to the client side so that users can easily navigate through large numbers of images or sets.
