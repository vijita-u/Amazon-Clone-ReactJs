# Full-Stack Amazon Clone Web Application



![Amazon Mockup](https://github.com/vijita-u/Amazon-Clone-ReactJs/assets/96591032/f42a413d-28ed-46ef-a8c3-a3ad22fbddcb)


Live Link : [Amazon Clone Live Link](https://clone-using-react-js-c2ec1.web.app/)

## Overview
This project is a full-stack Amazon clone web application built with cutting-edge technologies to replicate the core functionalities of the original Amazon platform. It demonstrates expertise in various technologies, including React.js for the frontend, Stripe for secure payment processing, React Context API for efficient state management, Firebase Cloud Functions for handling Stripe payments, Firebase Firestore for real-time database management, Firebase for user authentication, Sass for styling, React-Slick for a dynamic carousel, and responsive design for cross-device compatibility. Please note that this clone is for educational purposes only and does not process actual payments.



## Project Features

### Frontend
1. ReactJs: The project leverages React.js for the frontend, demonstrating proficiency in building interactive user interfaces.
2. Stripe Payment Processing: Efficient payment processing is integrated with Stripe, offering a seamless checkout experience which replicates an actual payment functionality.
3. React Context API: The application efficiently manages state using the React Context API, ensuring a responsive and intuitive user experience.
4. Firebase Authentication: Firebase is employed for user authentication, providing robust and secure login and registration functionalities.
5. Sass Styling: Styling is organized and modular with Sass, enhancing maintainability and scalability.
6. React-Slick Carousel: The React-Slick carousel enriches the user interface, closely resembling Amazon's design.

### Backend
1. Firebase Cloud Functions: Leveraged for implementing Stripe payments and handling order processing.
2. Firebase Firestore: A real-time NoSQL database is used to keep track of user orders, providing real-time updates and a responsive shopping experience.
3. Express.js API: Employed to set up an API for payment processing, receiving payment intents from Stripe, and ensuring secure transactions.



## Project Structure

```
- /src
  - /axios
    - axios.js
  - /components
    - App.js
    - Header.js
    - ...
  - /firebase
    - firebaseConfig.js
  - /react-context-api
    - reducer.js
    - StateProvider.js
  - /scss
    - /utils
      - ...
    - styles.scss
  - index.js
  - index.scss
  - ...
- /functions
  - index.js
```


## Getting Started

### Installation
1. Clone the repository
   ```
     git clone https://github.com/vijita-u/Amazon-Clone-ReactJs.git
   ```
2. Install dependencies using npm:
   ```
     npm install
   ```


### Usage
1. Start the development server:
   ```
     npm start
   ```
2. Access the web application through your browser.
3. Browse products, add items to your cart, and proceed to checkout with Stripe payment processing (note that no actual payments are processed).


### Deployment
To deploy the project

1. Create a Firebase project and configure Firebase settings in **/src/firebase/firebaseConfig.js**.
2. Login to firebase through command line
   ```
     firebase login
   ```
3. Initialize firebase project
   ```
     firebase init
   ```
4. Build the project:
   ```
     npm run build
   ```
5. Deploy to firebase:
   ```
     firebase deploy
   ```


## Credits

- This project was inspired by the original [Amazon](https://www.amazon.in/) website and [Clever Programmer's Amazon Clone](https://youtu.be/RDV3Z1KCBvo?si=SjWWBUACja1FFplC).
- [Stripe](https://stripe.com/en-in) for payment processing.
- [Firebase](https://firebase.google.com/) for real-time database, authentication, and hosting.


## License
This project is open-source and available under the [MIT License](https://github.com/vijita-u/Amazon-Clone-ReactJs/blob/main/LICENSE).


## Contact
- [My GitHub Profile](https://github.com/vijita-u)

- [My Email ID](udayvijita3009@gmail.com)

- [My LinkedIn Profile]()
