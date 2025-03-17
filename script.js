document.addEventListener("DOMContentLoaded", function() {
    const roles = [
        { title: "Android Developer", about: "Builds mobile applications for Android devices.", role: "Develops apps using Kotlin and Java.", languages: "Kotlin, Java", companies: "Google, Samsung, OnePlus", coreCourses: "Mobile Development, Java Programming, Kotlin Basics" },
        { title: "AI Engineer", about: "Works on artificial intelligence and machine learning models.", role: "Develops machine learning models and AI solutions.", languages: "Python, TensorFlow, PyTorch", companies: "Tesla, Google, Amazon", coreCourses: "Machine Learning, Data Structures, Algorithms" },
        { title: "Backend Developer", about: "Handles server-side application logic.", role: "Manages backend services and databases.", languages: "Java, Python, Node.js", companies: "Amazon, Microsoft, Netflix", coreCourses: "Database Management, API Development, Backend Frameworks" },
        { title: "Blockchain Developer", about: "Develops decentralized applications and smart contracts.", role: "Works on DApps and blockchain solutions.", languages: "Solidity, Rust", companies: "ConsenSys, IBM, Binance", coreCourses: "Cryptography, Blockchain Fundamentals, Smart Contracts" },
        { title: "Cloud Engineer", about: "Manages cloud computing infrastructure and services.", role: "Works on AWS, Azure, and Google Cloud.", languages: "AWS, Azure, GCP", companies: "Google, AWS, Oracle", coreCourses: "Cloud Computing, Networking Fundamentals, Security Practices" },
        { title: "Data Engineer", about: "Designs and builds data pipelines.", role: "Manages big data using tools like Apache Spark.", languages: "SQL, Apache Spark, Python", companies: "Facebook, Uber, Snowflake", coreCourses: "Data Warehousing, ETL Processes, Big Data Technologies" },
        { title: "DevOps Engineer", about: "Automates development processes.", role: "Streamlines deployment using Docker and Kubernetes.", languages: "Bash, Python, YAML", companies: "Netflix, LinkedIn, IBM", coreCourses: "Continuous Integration/Continuous Deployment, Linux Fundamentals, Scripting" },
        { title: "Frontend Developer", about: "Creates interactive user interfaces.", role: "Builds web UIs using React and CSS.", languages: "HTML, CSS, JavaScript, React", companies: "Adobe, Google, Facebook", coreCourses: "Web Development, JavaScript Frameworks, UI/UX Design" },
        { title: "Full Stack Developer", about: "Works on both frontend and backend of applications.", role: "Handles web development end-to-end.", languages: "JavaScript, Python, Node.js, React", companies: "Uber, Twitter, Airbnb", coreCourses: "Full Stack Development, RESTful APIs, Database Management" },
        { title: "Game Developer", about: "Develops video games and interactive experiences.", role: "Creates games using Unity and Unreal Engine.", languages: "C++, C#, Unity", companies: "EA, Rockstar, Epic Games", coreCourses: "Game Design, Physics in Games, C# Programming" },
        { title: "Machine Learning Engineer", about: "Builds AI-driven applications.", role: "Develops predictive models using deep learning.", languages: "Python, TensorFlow, Scikit-learn", companies: "OpenAI, Google, Amazon", coreCourses: "Machine Learning, Neural Networks, Data Analysis" },
        { title: "Network Engineer", about: "Manages IT network infrastructure.", role: "Handles security and networking solutions.", languages: "Cisco, Juniper", companies: "Cisco, Juniper, Nokia", coreCourses: "Networking Fundamentals, Security Protocols, Network Configuration" },
        { title: "Software Engineer", about: "Designs and develops software applications.", role: "Writes, tests, and maintains software.", languages: "Java, C++, Python", companies: "Microsoft, Apple, IBM", coreCourses: "Software Development Life Cycle, Object-Oriented Programming, Testing Techniques" },
        { title: "QA Engineer", about: "Ensures software quality through testing.", role: "Tests applications using automation tools.", languages: "Selenium, JUnit, Python", companies: "Infosys, TCS, Wipro", coreCourses: "Quality Assurance, Testing Automation, Agile Methodologies" },
        // Additional Roles
        { title: "Security Engineer", about: "Protects systems from cybersecurity threats.", role: "Implements security measures and monitors systems.", languages: "Python, C++, Java", companies: "Cisco, McAfee, Symantec", coreCourses: "Cybersecurity Fundamentals, Network Security, Ethical Hacking" },
        { title: "Systems Analyst", about: "Analyzes and improves IT systems.", role: "Works with stakeholders to enhance system performance.", languages: "SQL, Python, R", companies: "IBM, Accenture, Deloitte", coreCourses: "Systems Analysis, Business Process Modeling, Data Analysis" },
        { title: "Mobile App Developer", about: "Designs applications for mobile devices.", role: "Creates apps for iOS and Android platforms.", languages: "Swift, Kotlin, React Native", companies: "Apple, Google, Spotify", coreCourses: "Mobile Application Development, User Interface Design, Swift Programming" },
        { title: "Product Manager", about: "Oversees product development and strategy.", role: "Coordinates teams to deliver product vision.", languages: "No specific programming languages", companies: "Amazon, Microsoft, Google", coreCourses: "Product Management, Agile Methodologies, Market Research" },
        { title: "Technical Writer", about: "Creates documentation for technical projects.", role: "Develops manuals, guides, and online help.", languages: "Markdown, XML, HTML", companies: "Adobe, Microsoft, IBM", coreCourses: "Technical Writing, Documentation Standards, UX Writing" }
    ];

    const rolesContainer = document.getElementById("rolesContainer");
    const roleDescription = document.getElementById("roleDescription");
    const searchBar = document.getElementById("searchBox");

    searchBar.style.width = "250px"; // Adjusted search bar width

    function displayRoles(filteredRoles = roles) {
        rolesContainer.innerHTML = "";
        filteredRoles.sort((a, b) => a.title.localeCompare(b.title));
        filteredRoles.forEach(role => {
            let button = document.createElement("button");
            button.classList.add("role-button");
            button.textContent = role.title;
            button.addEventListener("click", function () {
                showRole(role.title);
            });
            rolesContainer.appendChild(button);
        });
    }

    function showRole(roleTitle) {
        const role = roles.find(r => r.title === roleTitle);
        if (role) {
            roleDescription.innerHTML = `
                <h2 class='role-title'>${role.title}</h2>
                <p class='role-text'><strong>About:</strong> ${role.about}</p>
                <p class='role-text'><strong>Role:</strong> ${role.role}</p>
                <p class='role-text'><strong>Languages:</strong> ${role.languages}</p>
                <p class='role-text'><strong>Companies:</strong> ${role.companies}</p>
                <p class='role-text'><strong>Core Courses:</strong> ${role.coreCourses}</p>
            `;
            // Hide all role buttons after selecting one
            rolesContainer.innerHTML = "";
        } else {
            roleDescription.innerHTML = "<h2>Select a role to see the details.</h2>";
        }
    }

    function handleSearch() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredRoles = roles.filter(role => role.title.toLowerCase().includes(searchTerm));
        displayRoles(filteredRoles);
    }

    searchBar.addEventListener("input", handleSearch);
    displayRoles();
});
