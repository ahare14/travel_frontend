# Farther - Overview

Farther is an application that enables users to take the next step in planning their travels.  Users are able to take travel inspiration from their fellow friends on Farther. Using the photos / trips of their friends the user can create a list of activities for the location they want to visit.   

Along with getting inspiration from friends, users are also able to provide inspiration by posting their own photos.  With photo posting a user can tie the picture to a location by simply typing the name upon submission.  The location is then queried using google to capture the Latitude and Longitude of the location.

The platform looks to move photos beyond the static level of presentation, but give them functionality.

## Farther - Build

The frontend of the application is built using React and the backend is built using Ruby on Rails.  The application also utilizes the Google Developer Console to generate coordinates, addresses, and map rendering (click here to create an api key

## Farther - Run Instructions 

- Fork 🍴
- ```git clone ```
- ``` npm install ```
- ``` npm start ```

## Farther - Usage

Homepage - here the user can has a newsfeed to view post of other trips from their friends / community users:

![Alt text](src/ScreenshotFolder/newsfeed_screenshot.png?raw=true "Optional Title")
![](src/GifFolder/newsfeed.gif)

See the location for each picture render on the map:

![](src/GifFolder/photo_location_plotting.gif)

Add a new Trip:

![](src/GifFolder/addTrip.gif)
![Alt text](src/ScreenshotFolder/addTrip_screenShot.png?raw=true "Optional Title")

Upload photos to a trip, and have the location render on the map:

![](src/GifFolder/photoupload.gif)
![Alt text](src/ScreenshotFolder/addPicture_screenshot.png?raw=true "Optional Title")

Save trips and view all your favorites:

![Alt text](src/ScreenshotFolder/fav_screenshot.png?raw=true "Optional Title")
![](src/GifFolder/view_saved_photos.gif)

View your saved photo information:

![](src/GifFolder/favorite_folder_interaction.gif)
![Alt text](src/ScreenshotFolder/favContent.png?raw=true "Optional Title")







