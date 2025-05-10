# 🚀 Movie Explorer – Discover Your Favorite Films https://681f65dee296b82f39e2a8ee--ornate-otter-1f92a7.netlify.app/

MTube is a modern and intuitive movie discovery web app that lets users explore the latest trending films, search for favorites, view detailed movie info, and watch trailers — all in one place. Powered by TMDB and YouTube APIs, MTube offers a smooth browsing experience with a user-friendly interface, personalized search, and real-time data fetching.

# 1] Explaining project setup
✔️ Initialized React App with Vite
Created a fast and optimized React project using Vite for rapid development and hot reloading

✔️ Installed Node Modules
Installed all required project dependencies

✔️ Set Up Global State Management with Redux Toolkit
Installed Redux Toolkit and React-Redux to manage application-wide state (store movie details)

✔️ Styled the App with Tailwind CSS
Integrated Tailwind CSS for utility-first styling

✔️ Initialized Git for Version Control
Initialized a Git repository to track changes and enable collaboration

# 2] API usage
✔️TMDb API: All movie data (Overview,Images, Dates, Ratings and Go to https://developer.themoviedb.org/)

✔️YouTube API: Trailer fetching (Go to https://console.cloud.google.com/apis.)

✔️Axios: Axios is widely used to retrieve data from RESTful APIs, allowing applications to interact with backend services. 

✔️Postman: Manual API testing before integration

# 3] Features Implemented
✔️ Login Screen

The login screen validates user input against default credentials (username: admin, password: admin). Upon correct entry, it smoothly redirects to the Home page, ensuring a seamless and secure entry point into the MTube movie exploration  experience.

![Screenshot (1330)](https://github.com/user-attachments/assets/4bfda42c-0292-4805-a04e-d13acab11d6f)



✔️ Home Screen 

   ✨ Fetching Trending Movies throught TMDB API and show the details
    Trending movies are fetched using Axios from the TMDb REST API and displayed in a responsive grid layout. Each card showcases the poster, title, rating, and release date, adapting seamlessly across mobile and 
    desktop screens for optimal viewing.
    
![Screenshot (1331)](https://github.com/user-attachments/assets/b97374e0-bfb9-4b1c-9a5a-5d12779e0ff3)


   ✨The movie search feature 
    
  uses a search bar integrated with Redux for global state management. When movie details are fetched, they are stored in the Redux store using a detailStore reducer. As the user types 
  in the search bar, results are dynamically filtered from the stored data, ensuring faster response times and reduced redundant API calls.

![Screenshot (1332)](https://github.com/user-attachments/assets/15e09fa1-1941-4b9e-b5fe-aad6a43c2919)



  ✨ Fetching Upcoming Movies throught TMDB API and show the details.

![Screenshot (1333)](https://github.com/user-attachments/assets/10751fc8-881c-4de4-b350-a016468e92b6)


  ✨The loading feature uses React’s useEffect and useState to simulate data fetching delays, creating a more realistic experience. A animated is displayed while movies load, enhancing UX 
   with smooth transitions before the actual content appears on screen.

   
![Screenshot (1337)](https://github.com/user-attachments/assets/84f6593e-1ca4-4c4f-97c9-026d57b9187c)


  ✨The movie rating feature uses a React-based star rating system to visually represent the movie’s average vote. Ratings are calculated by converting TMDb's 10-point scale into a 5-star format. Each star is 
    conditionally colored based on the score, enhancing user experience with clear, intuitive feedback for each movie's popularity.
    
  ![Screenshot (1334)](https://github.com/user-attachments/assets/74c952dc-872c-4893-b617-c39ef3418c62)


  ✨Movie trailers are displayed using the YouTube Data API by embedding videos based on trailer keys fetched from TMDb. Axios handles API calls to retrieve relevant trailer links. Users can watch high-quality 
    trailers directly within the app, offering an immersive preview without navigating away from the movie detail page.
    
   ![Screenshot (1336)](https://github.com/user-attachments/assets/e97f449b-d463-4f2c-89a4-5ef444ba4662)






