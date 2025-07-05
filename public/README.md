# React + Vite

Car Analytics Dashboard
Overview
The Car Analytics Dashboard is an interactive web application designed for car enthusiasts and market owners. Built with React and Bootstrap, this platform provides features for analyzing car data, leaving reviews, and contacting the team.

Features
Dynamic Data Display: Fetches and displays car data from a JSON file.
Filtering and Sorting: Allows users to filter and sort cars based on name, model, year, or price.
Pagination and Load More: Supports pagination for desktop and a "Load More" button for mobile devices.
Highlighting: Users can highlight cars to mark them as favorites.
Reviews and Contact Forms: Users can leave reviews and contact the team through integrated forms.
Responsive Design: Adapts to different device sizes for an optimal viewing experience.
Technologies Used
React: For building a dynamic and responsive user interface.
Vite: A fast build tool and development server for modern web projects.
React Bootstrap: For creating a responsive, mobile-first front-end design.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/car-analytics-dashboard.git
Navigate to the Project Directory:

bash
Copy code
cd car-analytics-dashboard
Install Dependencies:

bash
Copy code
npm install
Run the Development Server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser to view the application.

Project Structure
public/: Contains static assets such as images.
src/: Contains React components and other JavaScript files.
components/: Includes reusable components like Carousels, FilterSearch, ScrollToTop, and more.
pages/: Includes the main pages like Dashboard, ContactPage, and About.
data/: Contains the cars.json file with car data.
Key Components
Dashboard: Displays car data with options to filter, sort, and highlight cars. Includes pagination and "Load More" functionality.
ContactPage: Allows users to leave reviews and contact the team. Reviews and contact messages are saved in local storage.
About: Provides information about the Car Analytics application and the technologies used.
Data Format
The car data is fetched from src/data/cars.json and should follow this structure:

json
Copy code
{
"Cars": [
{
"Cid": "1",
"NameMMT": "Car Name",
"Model": "Model Name",
"Yr": "2024",
"Prc": "30,000",
"Currency": "USD",
"Province": "Province Name",
"Img300": "/path/to/image.jpg"
}
]
}
Usage
Dashboard: Use the filter input to search for cars, click on sorting buttons to organize the data, and use pagination controls or "Load More" for navigation.
Contact Page: Submit reviews and contact the team through the forms provided.
About Page: Learn more about the project and the technologies used.
Responsive Design
The application is designed to be responsive, providing a seamless experience across different device sizes. Mobile users will see a "Load More" button for pagination, while desktop users have traditional pagination controls.

Contact Information
Team Members
Oguejiofor George Obinna

ID: 6520283
Email: u6520283@au.edu
Phone: 0632100659
Image:
Min La Wee Chan

ID: 6520189
Email: u6520189@au.edu
Phone: 0649916003
Image:
Sai Hein Thu Ya Soe

ID: 6520051
Email: u6520051@au.edu
Phone: 0661078960
Image:
Contributing
Contributions are welcome! Please submit a pull request or open an issue with any suggestions or improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.
