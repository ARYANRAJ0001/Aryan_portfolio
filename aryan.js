const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
 
  document.body.classList.toggle('dark-mode');
  
  
  if (document.body.classList.contains('dark-mode')) {
    
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/blue-toned-set-triangular-paper-sheets-with-copy-space_23-2148320443.jpg')";
    document.body.style.color= "red";
  } else {
   
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/abstract-black-lines-geometric-background_677411-2748.jpg')";
    document.body.style.color= "yellow";
  }
});


let isWebTechVisible = false;


function toggleWebTechInfo() {
  const content = `
    <h2>Web Technologies</h2>
    <p>Web Technologies refer to the tools, languages, and protocols that enable the creation, management, and functionality of websites and web applications. They form the foundation of web development, allowing developers to build interactive, accessible, and responsive websites. Web technologies are essential for both the frontend (what users see) and the backend (how data is processed and stored) of a website.</p>
    
    <h3>Importance of Web Technologies</h3>
    <ul>
      <li><strong>Global Connectivity:</strong> Web technologies allow us to share information and services across the world. Without them, the internet would not function as we know it today.</li>
      <li><strong>User Experience:</strong> They help create intuitive, interactive, and dynamic web interfaces, improving the user experience.</li>
      <li><strong>E-commerce & Business:</strong> They enable businesses to reach a global audience, sell products, and interact with customers through websites and applications.</li>
      <li><strong>Accessibility & Usability:</strong> Web technologies help ensure that websites are accessible across devices, browsers, and for users with disabilities.</li>
    </ul>
    
    <h3>Role of HTML, CSS, and JavaScript in Web Development</h3>
    
    <h4>HTML (HyperText Markup Language)</h4>
    <p><strong>Purpose:</strong> HTML is the foundation of every web page. It structures the content, such as text, images, links, and other media. HTML uses "tags" to define elements (e.g., headings, paragraphs, lists).</p>
    <p><strong>Role:</strong> It provides the basic skeleton of a webpage, allowing browsers to render and display the content. Without HTML, there would be no content to show.</p>
    
    <h4>CSS (Cascading Style Sheets)</h4>
    <p><strong>Purpose:</strong> CSS defines the visual appearance and layout of the HTML elements. It controls aspects like color, typography, spacing, positioning, and responsiveness of the webpage.</p>
    <p><strong>Role:</strong> CSS enhances the user interface (UI) by styling HTML content. It makes websites aesthetically pleasing and ensures they are responsive (adjusting to different screen sizes). With CSS, you can create modern designs with effects like animations and transitions.</p>
    
    <h4>JavaScript</h4>
    <p><strong>Purpose:</strong> JavaScript is a scripting language that adds interactivity and dynamic behavior to web pages. It allows developers to create interactive features like forms, buttons, sliders, and real-time content updates.</p>
    <p><strong>Role:</strong> JavaScript makes the web "interactive." It can manipulate HTML and CSS in real time (client-side scripting), handle user inputs, fetch data from external sources (using AJAX), and even create entire web applications (e.g., single-page applications).</p>
    
    <h3>Summary</h3>
    <ul>
      <li><strong>HTML:</strong> Provides structure.</li>
      <li><strong>CSS:</strong> Provides style.</li>
      <li><strong>JavaScript:</strong> Adds interactivity.</li>
    </ul>
    <p>Together, these technologies create modern, functional, and attractive websites and applications, each playing a crucial role in delivering a seamless user experience.</p>
  `;

  
  const contentDiv = document.getElementById('web-tech-content');

  if (isWebTechVisible) {
    contentDiv.innerHTML = ''; 
    isWebTechVisible = false;
  } else {
    contentDiv.innerHTML = content; 
    isWebTechVisible = true;
  }
}


if (!document.getElementById('web-tech-content')) {
  const newContentDiv = document.createElement('div');
  newContentDiv.id = 'web-tech-content';
  document.body.appendChild(newContentDiv);
}


document.getElementById('intro').addEventListener('click', toggleWebTechInfo);

let isSkillsVisible = false;


function toggleSkillsInfo() {
  const content = `
    <h2>Education and Skills</h2>
    
    <!-- Education Details Table -->
    <h3>Education</h3>
    <table border="1" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Institution</th>
          <th>Year</th>
          <th>cpi/percentace<th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>B.Tech in Computer Science and Engineering</td>
          <td>RGIPT</td>
          <td>2023 - 2027</td>
          <td>7.96</td>
           <tr>
          <td>B.S in Data science</td>
          <td>IIT MADRAS</td>
          <td>2024 - 2027</td>
          <td>7.00</td>
        </tr>
          <tr>
          <td>Intermediate</td>
          <td>Rk+2 high school</td>
          <td>2022</td>
          <td>87.4%</td>
        </tr>
         </tr>
          <tr>
          <td>matriculation</td>
          <td>ABR foundation school</td>
          <td>2020</td>
          <td>85.7%</td>
        </tr>
        

        <!-- Add more rows as needed -->
      </tbody>
    </table>
    
    <!-- Skills with Progress Bars -->
    <h3>Skills</h3>
    <ul>
      <li>HTML <div class="progress-bar" ></div></li>
      <li>CSS <div class="progress-bar" ></div></li>
      <li>JavaScript <div class="progress-bar"></div></li>
      <li>Python <div class="progress-bar" ></div></li>
      <li>c/c++ <div class="progress-bar" ></div></li>
      <!-- Add more skills as needed -->
    </ul>
  `;

  const contentDiv = document.getElementById('skills-content');
  
  
  if (isSkillsVisible) {
    contentDiv.innerHTML = '';  
    isSkillsVisible = false;
  } else {
    contentDiv.innerHTML = content; 
    isSkillsVisible = true;
  }
}


document.getElementById('skillsButton').addEventListener('click', toggleSkillsInfo);
