export type WeekImage = {
  src: string; // URL or path under /public (e.g. "/weeks/week-1.jpg")
  alt?: string;
  caption?: string;
};

export type Week = {
  number: number;
  dates: string;
  focus: string;
  summary: string;
  tasks: string[];
  tools: string[];
  reflection: string;
  /**
   * Free-form paragraphs you can edit per week. Add as many as you like.
   * Example: details: ["First paragraph here.", "Second paragraph here."]
   */
  details?: string[];
  /**
   * Pictures to display for this week. Drop image files into `public/weeks/`
   * and reference them as "/weeks/your-image.jpg", or paste any image URL.
   */
  images?: WeekImage[];
};

export const weeks: Week[] = [
  {
    number: 1,
    dates: "Week 1",
    focus: "IT Fundamentals & Onboarding",
    summary:
      "Onboarding at Ezidea Solutions, introduction to the team, workspace setup, and review of IT fundamentals.",
    tasks: [
      "Company orientation and tour of Melawati Corporate Center",
      "Reviewed IT fundamentals: hardware, OS, and software stack",
      "Set up workstation, accounts, and internal communication tools",
    ],
    tools: ["Windows", "Microsoft Teams", "Canva"],
    reflection:
      "Gained a clear picture of Ezidea's culture and the scope of the upcoming training program.",
    // EDIT ME: add as many paragraphs as you want for this week.

    
    details: [
      "Activities Completed:",
      "• Attended first meeting with UTM regarding API Gateway implementation",
      "• Studied about TCP/IP networking fundamentals and core concepts",
      "• Learned basic IT infrastructure and networking architecture",
      "• Reviewed IT Fundamentals course materials",
      "\u00A0", // This is a non-breaking space for a gap
      "Key Insights & Understanding:",
      "• Received comprehensive understanding of new TCP/IP protocols with better reference materials and latest features, gaining deeper knowledge of networking concepts essential for infrastructure management.",
      "\u00A0",
      "Impacts:",
      "• Gained confirmation that can join first meeting with UTM to discuss API Gateway implementation, and understanding of when to participate in meetings for better knowledge transfer.",
    ],
    // EDIT ME: add pictures by dropping image files into `public/weeks/` and
    // referencing them as "/weeks/your-file.jpg", or by pasting any image URL.
    images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/utmmeeting1.png", alt: "Meeting UTM", caption: "First meeting regarding API Gateway" },
    ],
  },


  
  {
    number: 2,
    dates: "Week 2",
  focus: "Knowledge Sharing & IT Infrastructure Fundamentals",
  summary:
    "Presented and shared understanding of TCP/IP networking, Desktop & Server systems, and IT Fundamentals with company staff as part of internal knowledge sharing and learning development activities.",

  tasks: [
    "Prepared presentation materials based on Week 1 learning outcomes",
    "Presented TCP/IP networking fundamentals to staff members",
    "Explained differences and functions of Desktop and Server environments",
    "Shared understanding of core IT Fundamentals concepts",
    "Participated in discussion sessions and answered questions from staff",
    "Improved communication and presentation skills during knowledge sharing session",
  ],

  tools: [
    "Microsoft PowerPoint",
    "Windows",
    "Microsoft Teams",
    "Canva",
  ],

  reflection:
    "This week improved my confidence in explaining technical concepts to others. Presenting networking and IT infrastructure topics helped strengthen my own understanding while also improving my communication and professional presentation skills in a workplace environment.",

  details: [
    "Activities Completed:",
    "• Prepared slides and presentation materials regarding TCP/IP, Desktop & Server, and IT Fundamentals topics",
    "• Conducted presentation session with company staff members",
    "• Explained networking concepts including IP addressing, protocols, and network communication flow",
    "• Shared understanding about Desktop and Server system roles in IT infrastructure",
    "• Participated in question-and-answer session with staff for better knowledge exchange",
    "\u00A0",

    "Key Insights & Understanding:",
    "• Developed stronger understanding of TCP/IP networking concepts through presentation and explanation activities",
    "• Learned the importance of clear communication when presenting technical information to team members",
    "• Improved understanding of the relationship between Desktop systems, Server infrastructure, and network operations",
    "• Gained exposure to professional presentation practices within a corporate working environment",
    "\u00A0",

    "Impacts:",
    "• Increased confidence in delivering technical presentations and sharing knowledge with colleagues",
    "• Strengthened communication and teamwork skills through interaction with staff members",
    "• Improved ability to explain technical concepts in a simpler and more understandable manner",
    "• Enhanced overall understanding of IT infrastructure fundamentals for future project involvement",
  ],

    // EDIT ME: add pictures by dropping image files into `public/weeks/` and
    // referencing them as "/weeks/your-file.jpg", or by pasting any image URL.
    images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/image.png", alt: "Networking Study", caption: "Presenting TCP/IP fundamentals" },

    ],
  },


  {
    number: 3,
     dates: "Week 3",
  focus: "Server Management, Virtualization & Network Infrastructure",

  summary:
    "Focused on advanced TCP/IP learning, server troubleshooting, virtualization setup, Linux server deployment, and implementation of monitoring and VPN solutions within the IT infrastructure environment.",

  tasks: [
    "Studied TCP/IP networking concepts in greater detail",
    "Troubleshooted and repaired a crashed server",
    "Installed and configured Proxmox virtualization platform",
    "Installed and configured Rocky Linux operating system",
    "Set up Elasticsearch and Kibana for log management and visualization",
    "Configured Metricbeat for server performance monitoring",
    "Set up Tailscale VPN for secure remote connectivity",
  ],

  tools: [
    "Proxmox",
    "Rocky Linux",
    "Elasticsearch",
    "Kibana",
    "Metricbeat",
    "Tailscale VPN",
    "Linux Terminal",
  ],

  reflection:
    "This week provided valuable hands-on experience in server management and infrastructure setup. Troubleshooting a crashed server and deploying monitoring solutions improved my technical problem-solving skills while also strengthening my understanding of virtualization, Linux systems, and secure network connectivity.",

  details: [
    "Activities Completed:",
    "• Studied TCP/IP networking concepts in greater depth including communication protocols and network architecture",
    "• Performed troubleshooting and recovery procedures on a crashed server",
    "• Installed and configured Proxmox as a virtualization environment",
    "• Installed Rocky Linux and performed initial system configuration",
    "• Implemented Elasticsearch and Kibana for centralized log management and data visualization",
    "• Configured Metricbeat to monitor server CPU and system performance metrics",
    "• Set up Tailscale VPN for secure remote network access and connectivity",
    "\u00A0",

    "Key Insights & Understanding:",
    "• Gained deeper understanding of TCP/IP concepts and network communication processes",
    "• Learned the fundamentals of virtualization and virtual machine management using Proxmox",
    "• Improved knowledge in Linux installation, configuration, and server administration",
    "• Understood the importance of log management and monitoring systems in maintaining server performance",
    "• Learned how VPN technology provides secure communication and remote access capabilities",
    "\u00A0",

    "Impacts:",
    "• Improved troubleshooting and critical problem-solving skills during server recovery tasks",
    "• Enhanced practical experience in server management and infrastructure deployment",
    "• Strengthened understanding of networking systems and IT security practices",
    "• Increased confidence in handling Linux environments, monitoring tools, and virtualization platforms",
  ],

  images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/server1.png", alt: "Networking Study", caption: "Installing Proxmox in Office Server" },

    ],
  },


  {
    number: 4,
    dates: "Week 4",
focus: "Linux Fundamentals, Blockchain & AI Infrastructure Planning",

summary:
  "Focused on learning Linux fundamentals, understanding blockchain concepts, and preparing technical proposals related to AI Infrastructure and OpenStack deployment.",

tasks: [
  "Studied Linux basics through Linux Foundation learning materials",
  "Learned blockchain fundamentals including hashing concepts",
  "Reviewed company project presentation slides and documentation",
  "Prepared AI Infrastructure proposal using Microsoft Word",
  "Researched OpenStack implementation using Platform9",
],

tools: [
  "Linux Foundation",
  "Microsoft Word",
  "Platform9",
  "OpenStack",
],

reflection:
  "This week strengthened my theoretical understanding of modern IT technologies while also improving my ability to prepare technical documentation and infrastructure proposals in a professional environment.",

details: [
  "Activities Completed:",
  "• Learned Linux fundamentals and command-line basics through Linux Foundation resources",
  "• Studied blockchain concepts including hashing and data integrity mechanisms",
  "• Reviewed company project slides for better understanding of project requirements",
  "• Prepared proposal about Infrastructure Private AI Cloud",
  "• Conducted research on OpenStack deployment using Platform9",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Gained basic understanding of Linux operating systems and administration concepts",
  "• Learned how blockchain and hashing technologies work in securing digital data",
  "• Improved understanding of technical proposal preparation and infrastructure planning",
  "\u00A0",

  "Impacts:",
  "• Enhanced theoretical knowledge in modern IT technologies",
  "• Improved documentation and proposal writing skills",
  "• Increased understanding of company and client technical requirements",
],

images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/proposal.png", alt: "Proposal Docs", caption: "Proposal Prepared to Staff" },

    ],
  },



  {
    number: 5,
    dates: "Week 5",
focus: "Server Troubleshooting & Linux Server Setup",

summary:
  "Focused on troubleshooting server hardware issues, performing server maintenance, and setting up Rocky Linux as a mini server environment.",

tasks: [
  "Resolved server crash issue by changing power supply connection from input 1 to input 2",
  "Restarted and updated the server system",
  "Setup Mini Server using several PC",
  "Installed Rocky Linux on a PC as a mini server using balenaEtcher",
],

tools: [
  "Rocky Linux",
  "balenaEtcher",
  "Linux Foundation",
  "Linux Terminal",
],

reflection:
  "This week improved my practical troubleshooting abilities and increased my confidence in handling server setup and maintenance tasks independently.",

details: [
  "Activities Completed:",
  "• Troubleshooted server crash issue related to power supply connection",
  "• Performed server restart and system updates",
  "• Flashed Rocky Linux image to USB drive using balenaEtcher",
  "• Installed Rocky Linux on PC and configured it as a mini server",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned basic hardware troubleshooting methods for server systems",
  "• Understood the process of flashing operating system images to bootable USB drives",
  "• Improved understanding of Linux server installation and configuration",
  "\u00A0",

  "Impacts:",
  "• Enhanced server troubleshooting and maintenance skills",
  "• Increased confidence in building and configuring servers independently",
  "• Strengthened practical knowledge in Linux server environments",
],

      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
     { src: "/weeks/miniserver.png", alt: "mini server", caption: "Mini Server Setup in Progress" },

    ],

  },
  {
    number: 6,
  dates: "Week 6",
  focus: "Enterprise Infrastructure Discussion at UMPSA",
  summary:
    "Attended project meeting at UMPSA Kuantan discussing enterprise infrastructure concepts including Active Directory Domain Services (ADDS), FSMO roles, Identity and Access Management (IAM), and API Management (APIM).",
  tasks: [
    "Attended project meeting at UMPSA Kuantan",
    "Participated in discussions on ADDS, FSMO, IAM, and APIM",
    "Learned enterprise infrastructure integration concepts",
  ],
  tools: [
    "Active Directory",
    "Enterprise systems",
    "API Management",
  ],
  reflection:
    "The UMPSA meeting provided valuable insights into enterprise-level infrastructure and system integration, deepening my understanding of how different IT systems work together in a production environment.",
  details: [
    "Meeting Summary:",
    "• Attended project discussion at UMPSA Kuantan",
    "• Discussed ADDS (Active Directory Domain Services) and FSMO roles in enterprise environments",
    "• Explored IAM (Identity and Access Management) concepts",
    "• Reviewed APIM (API Management) integration strategies",
    "",
    "Key Learning Points:",
    "• Understood Active Directory infrastructure and FSMO role importance",
    "• Gained knowledge of enterprise identity and access management",
    "• Learned how API Management integrates with enterprise systems",
    "• Recognized importance of system integration in enterprise IT",
  ],
      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/umpmeeting1.png", alt: "UMP Meeting", caption: "Discussion Session With UMPSA " },
      { src: "/weeks/umptraining.png", alt: "UMP Training", caption: "Training Session With UMPSA Staff for the new System" },
      { src: "/weeks/sesimakan.png", alt: "eating", caption: "Sesi Makan Malam Bersama Team Ezidea" },

    ],
  },

  {
    number: 7,
    dates: "Week 7",
    focus: "Public Holiday & Ramadhan",
    summary:
      "No technical activities were conducted during this week due to Chinese New Year holidays and early Ramadan break.",
    tasks: [
      "Company operations paused during holiday period",
      "Observed Chinese New Year and early Ramadan holidays",
    ],
    tools: [ "N/A",],
    reflection:
      "This break period provided time to rest and prepare for upcoming tasks and activities.",
    
  },


  {
    number: 8,
    dates: "Week 8",
focus: "Remote Server Access & Fleet Agent Configuration",

summary:
  "Focused on configuring secure remote access for the mini server environment, continuing Linux studies, and setting up Fleet Agent integration with Elasticsearch.",

tasks: [
  "Installed Tailscale on PC used as mini server",
  "Configured remote access to mini server from home environment",
  "Continued Linux Foundation learning up to Chapter 4: Linux Basics & System Startup",
  "Installed Fleet Agent on mini server with Elasticsearch",
  "Enabled Transport Security and SSL security features",
  "Configured laptop as Fleet Agent to send data to Elasticsearch",
],

tools: [
  "Tailscale",
  "Rocky Linux",
  "Elasticsearch",
  "Fleet Agent",
],

reflection:
  "This week improved my understanding of secure remote access, Linux system startup concepts, and Elasticsearch security configuration for monitoring infrastructure.",

details: [
  "Activities Completed:",
  "• Installed and configured Tailscale for remote mini server access from home",
  "• Attempted Fleet Agent installation on mini server with Elasticsearch",
  "• Identified Fleet installation issue caused by disabled security features",
  "• Enabled Transport Security and SSL configuration for Elasticsearch",
  "• Configured laptop as Fleet Agent to send monitoring data to Elasticsearch",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned the importance of secure remote access using VPN solutions",
  "• Improved understanding of Linux startup processes and system basics",
  "• Gained knowledge about Elasticsearch security requirements for Fleet integration",
  "• Understood how Fleet Agent communicates and transfers data to Elasticsearch",
  "\u00A0",

  "Impacts:",
  "• Enhanced practical skills in remote server management and monitoring setup",
  "• Improved troubleshooting abilities related to security configuration issues",
  "• Increased understanding of secure infrastructure and centralized monitoring systems",
],
      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/tailscale.png", alt: "tailscale page", caption: "Install and Applying Tailscale in the Server" },

    ],
  },



  {
    number: 9,
    dates: "Week 9",
focus: "Elastic Stack Upgrade & AI Integration",

summary:
  "Focused on integrating AI capabilities within Elasticsearch and Kibana environments, performing rolling upgrades, and studying Elastic Stack installation",

tasks: [
  "Integrated AI features into Elasticsearch and Kibana using API key authentication",
  "Performed Elasticsearch rolling upgrade using node-by-node approach",
  "Reviewed RPM-based Elasticsearch installation documentation",
  "Configured Elasticsearch and Kibana connection using authentication token",
],

tools: [
  "Elasticsearch",
  "Kibana",
  "Grok API Key",
  "Linux Terminal",
],

reflection:
  "This week improved my understanding of Elastic Stack management, system integration, and performing upgrades without interrupting service availability.",

details: [
  "Activities Completed:",
  "• Integrated AI functionality within Elasticsearch and Kibana environment",
  "• Configured API key authentication for secure integration",
  "• Performed rolling upgrade process on Elasticsearch cluster node-by-node",
  "• Referred to RPM installation documentation for deployment understanding",
  "• Configured secure connection between Elasticsearch and Kibana using authentication token",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned how AI services can be integrated into Elastic Stack environments",
  "• Understood rolling upgrade procedures to minimize system downtime",
  "• Improved understanding of secure authentication between Elasticsearch and Kibana",
  "• Gained knowledge of RPM-based installation and upgrade methods",
  "\u00A0",

  "Impacts:",
  "• Enhanced practical skills in managing and upgrading Elastic Stack infrastructure",
  "• Improved ability to perform system integration without service interruption",
  "• Increased confidence in handling enterprise-level monitoring and analytics platforms",
],

    /**   images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/server1.png", alt: "Networking Study", caption: "Installing Proxmox in Office Server" },

    ],*/
},


  {
    number: 10,
    dates: "Week 10",
focus: "UTM Kickoff Session - PostgreSQL Cluster & API Gateway Architecture",
summary:
  "Attended UTM kickoff meeting discussing PostgreSQL cluster architecture and API Gateway topology. Reviewed enterprise system design for database clustering and API management integration.",
tasks: [
  "Attended UTM kickoff session",
  "Discussed PostgreSQL cluster architecture",
  "Reviewed API Gateway topology and design",
  "Aligned on project requirements and system architecture",
],
tools: [
  "PostgreSQL",
  "API Gateway",
  "Enterprise Architecture",
],
reflection:
  "The UTM kickoff meeting provided clarity on enterprise database clustering and API Gateway architecture, strengthening my understanding of how these systems integrate in production environments.",
details: [
  "Meeting Summary:",
  "• Attended UTM kickoff session for project alignment",
  "• Discussed PostgreSQL cluster architecture and configuration",
  "• Reviewed API Gateway topology and integration design",
  "• Aligned team on technical requirements and system design",
  "",
  "Key Learning Points:",
  "• Understood PostgreSQL clustering for high availability and data redundancy",
  "• Gained knowledge of API Gateway architecture and its role in system integration",
  "• Recognized importance of proper database and API infrastructure design",
  "• Learned how these systems work together in enterprise environments",
],


      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/utmkickoff.png", alt: "UTM Meeting Room", caption: "UTM Skudai Kickoff Meeting" },

    ],
  },


  {
    number: 11,
    dates: "Week 11",
focus: "Linux GUI & Desktop Environment Fundamentals",

summary:
  "Focused on learning Linux graphical interface concepts, desktop environment usage, session management, and basic desktop operations through Linux Foundation materials.",

tasks: [
  "Studied Linux Foundation Chapter 5: Graphical Interface",
  "Learned about Linux desktop environments and GUI components",
  "Explored session management and user login sessions",
  "Practiced basic operations in Linux desktop environment",
],

tools: [
  "Linux Foundation",
  "Linux Desktop Environment",
  "GUI Interface",
],

reflection:
  "This week improved my practical understanding of Linux through graphical interface usage, making system interaction more intuitive and user-friendly compared to command-line only operations.",

details: [
  "Activities Completed:",
  "• Completed Linux Foundation Chapter 5 focusing on graphical interface concepts",
  "• Learned structure and usage of Linux desktop environments",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Gained understanding of how GUI operates within Linux systems",
  "• Learned how session management controls user access and environment state",
  "\u00A0",

  "Impacts:",
  "• Enhanced ability to use Linux in both GUI and CLI environments",
  "• Improved practical understanding of user interaction in Linux systems",
],
      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/linuxchap5.png", alt: "Linux Study", caption: "Studying Linux Foundation on LinuxFoundation.org Website" },

    ],
  },


  {
    number: 12,
    dates: "Week 12",
focus: "Wireless Device Setup",

summary:
  "Focused on learning and configuring wireless connection between a printer and a laptop.",

tasks: [
  "Configured wireless connection between printer and laptop",
  "Performed setup and pairing process for printer connectivity",
],

tools: [
  "Laptop",
  "Wireless Printer",
],

reflection:
  "This week improved my basic understanding of wireless device setup and practical troubleshooting for connectivity issues.",

details: [
  "Activities Completed:",
  "• Set up wireless connection between printer and laptop",
  "• Configured printer network settings for proper connectivity",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned the basic process of wireless device configuration",
  "• Understood how network connectivity affects device pairing",
  "\u00A0",

  "Impacts:",
  "• Improved basic skills for wireless devices",
  "• Increased confidence in handling simple IT hardware setup tasks",
],

      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/printer.png", alt: "Printer", caption: "Connecting Printer" },

    ],
  },


  {
    number: 13,
    dates: "Week 13",
focus: "APIM System Flow & PostgreSQL Data Migration",

summary:
  "Focused on attending discussions at UTM Skudai regarding APIM and understanding system workflow and data migration status to PostgreSQL.",

tasks: [
  "Attended discussion session at UTM Skudai on APIM",
  "Studied system flow of API Management (APIM)",
  "Reviewed status of data migration to PostgreSQL",
],

tools: [
  "APIM",
  "PostgreSQL",
],

reflection:
  "This week improved my understanding of enterprise system architecture, especially API management flow and database migration processes.",

details: [
  "Activities Completed:",
  "• Attended technical discussion at UTM Skudai regarding APIM implementation",
  "• Learned end-to-end flow of API Management system",
  "• Reviewed and understood migration progress to PostgreSQL database",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Gained clearer understanding of APIM workflow and system integration",
  "• Learned how data migration is structured and monitored in enterprise systems",
  "• Improved knowledge of PostgreSQL role in backend system architecture",
  "\u00A0",

  "Impacts:",
  "• Enhanced understanding of enterprise system implementation",
  "• Improved awareness of API management and database integration processes",
],
      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/utmmeeting2.png", alt: "Meetin W UTM", caption: "First Meeting with UTM about Flow System & Migration" },
      { src: "/weeks/utmmeeting3.png", alt: "Meetin W UTM", caption: "UTMDigital Team & Ezidea Team" },
      { src: "/weeks/sesimakanUTM.png", alt: "Eat Session", caption: "Dinner Session with Ezidea Teams" },

    ],
  },


  {
    number: 14,
    dates: "Week 14",
focus: "Elastic Stack Cluster Management & VM Deployment",

summary:
  "Focused on managing Elasticsearch cluster health, upgrading nodes, and deploying multiple virtual machines for Elastic Stack setup using Proxmox.",

tasks: [
  "Fixed Elasticsearch cluster status from yellow to green",
  "Deployed 5 Rocky Linux VMs (3 Elasticsearch, 1 Kibana, 1 Fleet Agent)",
],

tools: [
  "Elasticsearch",
  "Proxmox",
  "Rocky Linux",
],

reflection:
  "This week improved my hands-on experience in virtual machines, and Elastic Stack deployment in an enterprise-like environment.",

details: [
  "Activities Completed:",
  "• Resolved Elasticsearch cluster health issue (yellow to green)",
  "• Installed and configured 5 Rocky Linux VMs for Elastic Stack setup",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned how to maintain and stabilize Elasticsearch cluster health",
  "• Improved understanding of Elastic Stack architecture in virtual environment",
  "\u00A0",

  "Impacts:",
  "• Enhanced skills in server and cluster management",
  "• Increased confidence in handling enterprise-level system setup",
],

      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/EScluster.png", alt: "Elasticsearch Cluster", caption: "Elastic health turn green after configuration" },

    ],
  },


  {
    number: 15,
    dates: "Week 15",
focus: "Project Closure & System Troubleshooting",

summary:
  "Focused on attending project closing meeting at UMPSA and participating in monitoring session with Politeknik Lecturer Puan Maznah Ahmad.",

tasks: [
  "Attended UMPSA project closure meeting",
  "Participated in monitoring session with lecturer",
  "Tested system authentication during project evaluation",
  "Identified issue with login delay after password reset",
],

tools: [
  "UMPSA System",
],

reflection:
  "This week improved my understanding of real-world system troubleshooting, especially related to authentication issues in a live project environment.",

details: [
  "Activities Completed:",
  "• Attended final project meeting at UMPSA",
  "• Tested system authentication during live environment usage",
  "• Observed delay issue after password reset during login process",
  "• Joined monitoring and evaluation session with lecturer",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned how authentication systems behave after password reset",
  "• Understood possible delay issues in user authentication flow",
  "• Gained exposure to real project testing and system validation process",
  "\u00A0",

  "Impacts:",
  "• Improved troubleshooting skills in real system environments",
  "• Increased understanding of authentication workflows and issues",
],

      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/UMPclosure.png", alt: "Closure Meeting", caption: "Meeting Penutup Project antara Ezidea & UMPSA" },
      { src: "/weeks/UMPtesting.png", alt: "Testing Meeting", caption: "Testing & Debbugging the new system with new UMP Staff and Student" },
      { src: "/weeks/pemantauan.png", alt: "Pemantauan", caption: "Sesi Pemantauan bersama pensyarah PSIS Puan Maznah Ahmad. Secara Online." },

    ],


  },
  {
    number: 16,
    dates: "Week 16",
focus: "Industrial Training Documentation & Project Meeting",

summary:
  "Focused on completing industrial training report documentation and attending UTM project progress meeting as Ezidea representative.",

tasks: [
  "Completed industrial training report after supervisor approval",
  "Attended UTM project progress meeting as Ezidea representative",
  "Recorded meeting minutes during project discussion",
],

tools: [
  "Microsoft Teams",
  "Meeting Documentation",
],

reflection:
  "This week improved my professional communication and documentation skills through report preparation and participation in project meetings.",

details: [
  "Activities Completed:",
  "• Finalized industrial training report after receiving supervisor approval",
  "• Represented Ezidea during UTM project progress meeting",
  "• Took meeting minutes and documented important discussion points",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned proper documentation process for industrial training reports",
  "• Improved understanding of professional meeting management and communication",
  "• Gained experience in recording and organizing meeting information",
  "\u00A0",

  "Impacts:",
  "• Enhanced communication and documentation skills",
  "• Improved ability to manage and organize project information",
],


      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/UTMgmeet.png", alt: "Meeting with UTM", caption: "Online Meeting with UTM about Requirements" },

    ],
  },


  {
    number: 17,
    dates: "Week 17",
focus: "Elastic Stack Deployment & Client Support",

summary:
  "Focused on official Elastic Stack deployment at MARDI and involvement in tender submission process at Lembaga Getah Malaysia (LGM).",

tasks: [
  "Installed and configured 3 Elasticsearch nodes at MARDI",
  "Deployed Kibana and Fleet Agent environment",
  "Performed troubleshooting for CPU and Memory monitoring issues showing N/A",
  "Participated in tender submission process at Lembaga Getah Malaysia (LGM)",
],

tools: [
  "Elasticsearch",
  //"Kibana",
  //"Fleet Agent",
  "Rocky Linux",
  "Linux Terminal",
],

reflection:
  "This week provided valuable real-world experience in enterprise deployment and improved my confidence in handling client-side infrastructure implementation and troubleshooting tasks.",

details: [
  "Activities Completed:",
  "• Performed official Elastic Stack deployment at MARDI",
  "• Configured 3 Elasticsearch nodes, Kibana, and Fleet Agent setup",
  "• Troubleshooted CPU and Memory monitoring issue displaying N/A in Fleet/Kibana",
  "• Assisted in tender submission process at Lembaga Getah Malaysia (LGM)",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned real-world deployment workflow for Elastic Stack infrastructure",
  "• Improved understanding of monitoring integration and troubleshooting methods",
  "• Gained exposure to client project handling and tender submission process",
  "\u00A0",

  "Impacts:",
  "• Enhanced practical skills in enterprise system implementation",
  "• Increased confidence in handling deployment and troubleshooting with real clients",
],
      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/mardiES.png", alt: "ES INstallation ", caption: "Mardi Elasticsearch Installation Done" },
      { src: "/weeks/ESproblemMardi.png", alt: "ES INstallation ", caption: "Mardi Fleet Agent N/A Issue" },
      { src: "/weeks/LGM.png", alt: "LGM Tender", caption: "Tender Submission at Lembaga Getah Malaysia" },

    ],
  },


  {
    number: 18,
    dates: "Week 18",
focus: "Elastic Stack Monitoring & Upgrade Management",

summary:
  "Focused on tender document submission, resolving Elastic Stack monitoring issues at MARDI, and learning Elasticsearch upgrade procedures from version 8.x to 9.x.",

tasks: [
  "Prepared and submitted tender documents to Lembaga Perindustrian Kayu Malaysia (MTIB) at Menara PGRM",
  "Resolved CPU and Memory monitoring issues showing N/A at MARDI",
  "Installed Elastic Agent on application and database servers",
  "Learned upgrade process for Elasticsearch, Fleet, and Kibana from version 8.x to 9.x",
],

tools: [
  "Elasticsearch",
  "Kibana",
  "Fleet",
  "Elastic Agent",
  "Linux Terminal",
],

reflection:
  "This week improved my understanding of enterprise monitoring systems, upgrade management, and professional documentation processes in real working environments.",

details: [
  "Activities Completed:",
  "• Prepared and submitted tender documents to MITB at Menara PGRM",
  "• Troubleshooted CPU and Memory monitoring issues in Elastic Stack environment at MARDI",
  "• Installed Elastic Agent on application and database servers",
  "• Studied rolling upgrade process for Elasticsearch, Fleet, and Kibana from version 8.x to 9.x",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned professional tender preparation and submission workflow",
  "• Improved understanding of Elastic Stack monitoring and troubleshooting",
  "• Gained knowledge of Elastic Agent deployment on enterprise servers",
  "• Understood node-by-node upgrade procedures without service interruption",
  "\u00A0",

  "Impacts:",
  "• Enhanced documentation and technical deployment skills",
  "• Increased practical experience in managing enterprise monitoring systems",
  "• Improved confidence in handling real-world Elastic Stack infrastructure",
],
      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/mitbtender.png", alt: "Tender MItb", caption: "Tender Preparation for MITB" },
      { src: "/weeks/submitb.png", alt: "Tender MItb", caption: "Submission Tender at MITB" },
      { src: "/weeks/mardivisit.png", alt: "Mardi Visit", caption: "Visitting Mardi again to resolve the issue" },
      { src: "/weeks/mardisolved.png", alt: "Mardi ES", caption: "Mardi Fleet Agent issue Solved" },

    ],
  },


  {
    number: 19,
dates: "Week 19",
focus: "Event Route Planning & SOC Analyst Exposure",

summary:
  "Focused on route planning and manpower coordination for PERKESO Run & Ride event.",

tasks: [
  "Conducted route survey for PERKESO Run & Ride event",
  "Determined checkpoint manpower requirements at each junction",
  "Attended briefing session with PERKESO at Jalan Ampang",
  "Performed event route analysis in Putrajaya",
  "Registered for SOC Analyst program organized by Institut Latihan Perindustrian (ILP) Kuala Langat",
],

tools: [
  "Google Maps",
  "Event Planning Documents",
  "GPX Viewer",
],

reflection:
  "This week improved my operational planning and communication skills through involvement in event coordination and route management activities.",

details: [
  "Activities Completed:",
  "• Conducted site and route survey for PERKESO Run & Ride event",
  "• Planned checkpoint placement and manpower allocation for each route junction",
  "• Attended official briefing session with PERKESO at Jalan Ampang",
  "• Analyzed event route logistics in Putrajaya",
  "• Registered for SOC Analyst program under ILP Kuala Langat",
  "\u00A0",

  "Key Insights & Understanding:",
  "• Learned basic event management and operational coordination processes",
  "• Improved understanding of checkpoint planning and workforce coordination",
  "\u00A0",

  "Impacts:",
  "• Enhanced communication and field operation management skills",
  "• Improved planning and logistics coordination abilities for large-scale events",
],

      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/putrajaya.png", alt: "Putrajaya Route", caption: "Arrive at Putrajaya to analyst routes" },
      { src: "/weeks/brief.png", alt: "Briefing perkeso", caption: "PERKESO Event Briefing Session" },

    ],
  },


  {
    number: 20,
    dates: "Week 20",
    focus: "Final Documentation & Handover",
    summary:
      "Final week — documentation, handover sessions, and report preparation.",
    tasks: [
      "Wrote final runbooks for the Elastic and Kong stacks",
      "Conducted a knowledge-transfer session with the team",
      "Compiled the final industrial training report",
    ],
    tools: ["Markdown", "Confluence", "Diagrams"],
    reflection:
      "Wrapping up reinforced how much I learned over 20 weeks at Ezidea Solutions.",

      images: [
      // { src: "/weeks/meeting.jpg", alt: "Meeting with UTM", caption: "First meeting regarding API Gateway" },
      { src: "/weeks/server1.png", alt: "Networking Study", caption: "Installing Proxmox in Office Server" },

    ],
  },
];
