const closeButton = document.querySelector(".close-button");
const modal = document.getElementById("custom-modal");
const errorBox = document.getElementById("error-box");
let oldHTML = document.getElementById("modal-content").innerHTML;

let isApplied = false;

const joblist = [
  {
    img: "google-logo-9808.png",
    companyName: "Google",
    jobRole: "Data Science",
    about: ` Google LLC is an American multinational technology company focusing
        on artificial intelligence,[9] online advertising, search engine
        technology, cloud computing, computer software, quantum computing,
        e-commerce, and consumer electronics. It has been referred to as
        "the most powerful company in the world"[10] and as one of the
        world's most valuable brands due to its market dominance, data
        collection, and technological advantages in the field of artificial
        intelligence.`,
    qualification: [
      "Statistics and Mathematics",
      "Data Manipulation and Analysis",
      "Machine Learning",
    ],
  },

  {
    img: "tik-tok-logo-33077.png",
    companyName: "Tiktok",
    jobRole: "Data Analyst",
    about: ` TikTok is a video-sharing app that allows users to create and share short-form videos on any topic. It’s mainly mobile-based, although you can still watch TikTok videos using the web app. The platform allows users to get creative with their content using filters, stickers, voiceovers, sound effects, and background music.In the Chinese market, TikTok works as a separate app called Douyin, which is one of the most popular apps in the country. There are currently more than 1.5 billion people who use the app on a daily basis. TikTok maintains a separate user count from the Chinese version of the app.`,
    qualification: [
      "SQL and Nosql",
      "Python",
      "Maths and Statistics",
      "Data Visualisation",
    ],
  },

  {
    img: "youtube-logo-png-2088.png",
    companyName: "Youtube",
    jobRole: "Data Analyst",
    about: `YouTube is a free video sharing website that makes it easy to watch online videos. You can even create and upload your own videos to share with others. Originally created in 2005, YouTube is now one of the most popular sites on the Web, with visitors watching around 6 billion hours of video every month. ouTube is an American free, international, video sharing and social networking website and app on the internet. The website lets people upload, view, and share videos.`,
    qualification: [
      "Statistics and Mathematics",
      "Data Manipulation and Analysis",
      "Machine Learning",
    ],
  },

  {
    img: "png-apple-logo-9713.png",
    companyName: "Apple",
    jobRole: "UI UX Designer",
    about: `Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers. Apple is one of the largest companies globally with a market cap of over 2 trillion dollars.
    Apple devices are renowned for their design aesthetic and attention to detail. Tight integration between hardware and software gives their systems a performance advantage over competitor systems with similar specifications.Apple rose to its position as a market leader by correctly positioning its products. They didn't invent personal computers, graphical user interfaces (GUIs), mp3 players, smartphones, smartwatches or tablets. Instead, they produced some of the first versions of these products that were refined, easy to use and well-designed, which led to wide market adoption.`,
    qualification: [
      "Visual design and design software",
      "Information architecture ",
      "Wireframing",
      "Prototyping",
    ],
  },

  {
    img: "amazon-png-logo-vector-6708.png",
    companyName: "Amazon",
    jobRole: "Custom Service",
    about: `Amazon is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. It has been often referred to as "one of the most influential economic and cultural forces in the world",[5] and is often regarded as one of the world's most valuable brands.[6] It is considered to be one of the Big Five American technology companies, alongside Alphabet (parent company of Google), Apple, Meta and Microsoft.`,
    qualification: [
      "Persuasive Speaking Skills",
      "Adaptability",
      "Professionalism",
    ],
  },
];

function handleCardClick(index) {
  let companyData = joblist[index];

  let sidebar = document.getElementById("company-info-sidebar");

  let qualificationList = companyData.qualification
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");

  let sidebarData = `<div class="detail-header">
  <img src=${companyData.img}>
  <h2>${companyData.companyName}</h2>
  <p id="job-role-info">${companyData.jobRole}</p>
</div>
<hr class="divider" />
<div class="detail-desc">
  <div class="about">
    <h4>About Company</h4>
    <p>
${companyData.about}
    </p>
  </div>
  <hr class="divider" />
  <div class="qualification"></div>
  <h4>Qualification</h4>
  <ul>
  ${qualificationList}
  </ul>
</div>`;

  sidebar.innerHTML = sidebarData;
}

handleCardClick(0);

const handleApplyJob = () => {
  toggleModal();
  document.getElementById("jobRole").value =
    document.getElementById("job-role-info").innerText;
};

const handleCloseModal = () => {
  toggleModal();
};

const toggleModal = () => {
  modal.classList.toggle("show-modal");
};

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    toggleModal();
    if (isApplied) {
      document.getElementById("modal-content").innerHTML = oldHTML;
      isApplied = false;
      document.getElementById("jobRole").value =
        document.getElementById("job-role-info").innerText;
    }
  }
});

const handleFinalApply = (event) => {
  event.preventDefault();
  const { firstName, lastName, email, address, city, pincode, dob } =
    event.target;

  document.getElementById(
    "modal-content"
  ).innerHTML = `<div class="success-message-wrapper">
      <img src="success.jpeg" alt="success" class="success-image" />
      <div class="content-head">Job Application Submitted Successfully.</div>
    </div>`;
  isApplied = true;
};
