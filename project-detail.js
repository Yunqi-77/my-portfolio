// Project Data
document.addEventListener("DOMContentLoaded", function () {
    console.log("Project.js loaded");

    // Get project ID from URL
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
console.log("Project ID:", projectId);
console.log("Full URL:", window.location.href);
console.log("Query String:", window.location.search);

const projects = {
    1: {
        project_title: "Java Project",
        media_type: "image", 
        project_image: "./assets/java_project1.png",
        project_desc: `<p>This Java-based application provides an efficient way to process and present data which it helps to simplify data analysis and make it more accessible, ensuring users can quickly extract valuable insights. Key features include:</p>
        <ul>
            <li><strong>Data Processing:</strong> The application reads data from a source file and processes it for easy visualization.</li>
            <li><strong>Chart Presentation:</strong> The data is displayed in user-friendly charts, making complex information easy to understand.</li>
            <li><strong>Custom UI:</strong> The user interface is custom-built, offering a personalized and seamless experience for users.</li>
            <li><strong>Interactive Filtering:</strong> Users can filter the data results based on their preferences, focusing on the most relevant information.</li>
            <li><strong>Enhanced Readability:</strong> By organizing and visualizing the data, the application helps users make better, faster decisions from complex datasets.</li>
        </ul>`
    },
    2: {
        project_title: "Magazine Design", 
        media_type: "image", 
        project_image: "./assets/magazine1.png",
        project_desc:   `<p>Magazine design is a creative process that involves crafting visually compelling layouts, engaging typography, 
        and high-quality imagery to communicate a brand's message effectively. Using Adobe tools like 
        <strong>Adobe InDesign, Photoshop, and Illustrator</strong>, designers can create stunning magazine spreads with professional aesthetics.</p>
        <br>
        <h4>Key Aspects of Magazine Design:</h4>
        <ul>
            <li><strong>Layout & Composition:</strong> Using <strong>Adobe InDesign</strong>, designers structure magazine pages with grids, 
            columns, and balanced whitespace for an organized and readable design.</li>
            <li><strong>Typography:</strong> Selecting the right fonts and text hierarchy enhances readability and aesthetic appeal.</li>
            <li><strong>Image Editing & Enhancements:</strong> <strong>Adobe Photoshop</strong> is used to retouch photos, adjust colors, and enhance visual storytelling.</li>
            <li><strong>Vector Graphics & Illustrations:</strong> <strong>Adobe Illustrator</strong> helps create custom icons, infographics, and vector-based elements 
            that add uniqueness to the design.</li>
        </ul>
    `
    },
    3: {
        project_title: "Final Year Project",
        media_type: "image", 
        project_image: "./assets/fyp.png",
        project_desc:   `<p>This project is a web-based music player designed to enhance the user experience with a variety of features. It includes:</p>
        <ul>
        <li><strong>Voice-Controlled Music Playback:</strong> Users can control music playback with voice commands for hands-free interaction.</li>
        <li><strong>Playlist Management:</strong> Allows users to create, edit, and manage their own playlists.</li>
        <li><strong>Track Management:</strong> Users can add, remove, and organize individual tracks in their library.</li>
        <li><strong>User Profile Management:</strong> Users can create and manage their profiles, customize settings, and view preferences.</li>
        <li><strong>Sorting and Searching:</strong> Provides functionality to sort music by various criteria (e.g., artist, genre, track length) and search for specific tracks or artists.</li>
        <li><strong>Sharing Options:</strong> Enables users to share their favorite tracks and playlists with others.</li>
        <li><strong>Contact Support:</strong> Integrated contact support to assist users with issues and inquiries.</li>
        <li><strong>Account Management:</strong> Handles user registration, login, and authentication.</li>
        </ul>

        <h3>Technologies Used:</h3>
        <ul>
        <li><strong>Frontend:</strong> Built with HTML, CSS, and JavaScript to create an interactive and responsive user interface.</li>
        <li><strong>Backend:</strong> PHP is used for server-side logic, handling requests, and processing data.</li>
        <li><strong>Local Server Environment:</strong> XAMPP provides the local server environment for development and testing.</li>
        <li><strong>Database:</strong> phpMyAdmin is used to manage the project's database server, enabling data storage and retrieval for user profiles, playlists, and tracks.</li>
        </ul>`
    },
    4: {
        project_title: "2D Animation", 
        media_type: "video",
        project_video: "./assets/animation.mp4",
        project_desc: `<p>This project is a 2D animation created using Adobe Animate, focusing on storytelling through expressive character motion and visually appealing scenes. The animation aims to convey emotion, movement, and personality in a stylized and engaging way.</p>
        <ul>
        <li><strong>Character Animation:</strong> Designed and animated 2D characters with attention to facial expressions, gestures, and fluid body movements.</li>
        <li><strong>Scene Composition:</strong> Developed backgrounds and scene transitions that support the narrative and enhance visual flow.</li>
        <li><strong>Timeline Management:</strong> Utilized Adobe Animate's timeline tools to synchronize motion, dialogue, and effects accurately.</li>
        <li><strong>Sound Integration:</strong> Included background music and sound effects to enhance the mood and storytelling.</li>
        <li><strong>Symbol and Layer Optimization:</strong> Organized content using layers and reusable symbols for efficient workflow and animation reuse.</li>
        </ul>
        
        <h3>Tools & Technologies Used:</h3>
        <ul>
        <li><strong>Adobe Animate:</strong> The primary software used for creating and exporting the animation, supporting frame-by-frame and tween-based animation techniques.</li>
        <li><strong>Export Formats:</strong> Animation exported as HTML5 canvas or video format for web and presentation use.</li>
        </ul>`
    }
}; 
 
// Load project details dynamically
if (projects[projectId]) {
    document.getElementById("project-title").innerHTML = projects[projectId].project_title;
    document.getElementById("project-desc").innerHTML = projects[projectId].project_desc;

    const videoEl = document.getElementById("project-video");
    const imageEl = document.getElementById("project-image");

    if (projects[projectId].media_type === "video") {
        videoEl.classList.remove("d-none");
        videoEl.src = projects[projectId].project_video;
        imageEl.classList.add("d-none");
    } else {
        imageEl.classList.remove("d-none");
        imageEl.src = projects[projectId].project_image;
        videoEl.classList.add("d-none");
    }
} 
// else {
//     document.querySelector("#project-detail .container").innerHTML = "<h2>Project Not Found</h2>";
// }
});