"use strict";(self.webpackChunkchris_kuhrt=self.webpackChunkchris_kuhrt||[]).push([[914],{6351:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(1883),i=a(7294);var l=()=>i.createElement(i.Fragment,null,i.createElement("svg",{className:"customLinkArrow",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M5.79194 4.99988V7.24519L14.6794 7.25457L4.99976 16.9343L6.58882 18.5233L16.2685 8.84363L16.2638 17.7311H18.5232V4.99988H5.79194Z"})));var s=e=>{let{to:t,aria:a,children:s,external:m=!1}=e;const r=m?i.createElement(i.Fragment,null,s,i.createElement(l,null)):s;return i.createElement(n.Link,{to:t,className:"customLink","aria-label":a},r)}},320:function(e,t,a){a.r(t),a.d(t,{Head:function(){return p},default:function(){return d}});var n=a(7294),i=a(3089);var l=e=>{let{buttonText:t,id:a,children:i,closed:l=!1,openOnMobile:s=!1}=e;const m="undefined"!=typeof window&&window.innerWidth<900,{0:r,1:c}=(0,n.useState)(m?!s:l);(0,n.useEffect)((()=>{c((e=>m?!s:e&&l))}),[m,l,s]);const o={cursor:m||l?"pointer":"text"};return n.createElement(n.Fragment,null,n.createElement("div",{id:a},n.createElement("h2",{className:"accordionTitleWrapper"},n.createElement("button",{className:"accordionTitle",onClick:()=>{(m||l)&&c(!r)},style:o,"aria-expanded":!r},t)),n.createElement("article",{className:"accordionContent","aria-hidden":r?"true":"false"},n.createElement("div",{className:"accordionContentWrapper"},i))))},s=a(4214),m=a(9802),r=a(1817),c=a(916),o=a(6351);var d=()=>{const{0:e,1:t}=(0,n.useState)(null);return(0,n.useEffect)((()=>{const a="scrollTopActive",n=()=>{window.scrollY>=120?document.querySelector(".scrollTop").classList.add(a):document.querySelector(".scrollTop").classList.remove(a);const n=window.innerHeight/2;let i=!1;const l=document.querySelectorAll(".accordion > *"),s=l[l.length-1];if(0===window.scrollY)return e&&e.classList.remove("active"),void t(null);if(window.innerHeight+window.scrollY>=document.body.offsetHeight){const a=document.querySelector('.anchorTimeline a[href="#'+s.id+'"]');e!==a&&(e&&e.classList.remove("active"),a&&a.classList.add("active"),t(a))}else l.forEach((a=>{if(i)return;const l=a.getBoundingClientRect().top,s=l+a.offsetHeight;if(n>=l&&n<=s){i=!0;const n=document.querySelector('.anchorTimeline a[href="#'+a.id+'"]');n&&e!==n&&(e&&e.classList.remove("active"),n.classList.add("active"),t(n))}}))};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}}),[e]),n.createElement("div",{className:"gridContainer"},n.createElement(r.Z,null),n.createElement(s.Z,null),n.createElement("main",{className:"gridWrapper"},n.createElement("div",{id:"pageTop"}),n.createElement("div",{className:"contentContainer contentContainer--main TemplateB"},n.createElement("div",{className:"anchor",id:"workExperince"}),n.createElement("h1",{className:"width--full title--XXXL"},"Timeline"),n.createElement("p",{className:"timeLineIntro text--Medium"},"I am filled with gratitude for every experience. Each one has helped shape the designer I am today and I look forward to the next chapter of this ever-evolving journey."),n.createElement("aside",null,n.createElement("div",{className:"timelineMenu"},n.createElement(c.Z,{pattern:"Pattern01",className:"cardSpacing--Large"},n.createElement("div",{className:"timelineMenuStyle"}),n.createElement("ul",{className:"anchorTimeline"},n.createElement("li",null,n.createElement(i.P,{to:"timeline/#workExperince"},"Work experince")),n.createElement("li",null,n.createElement(i.P,{to:"timeline/#sideProjects"},"Passion & Projects")),n.createElement("li",null,n.createElement(i.P,{to:"timeline/#freelancer"},"Freelancer")),n.createElement("li",null,n.createElement(i.P,{to:"timeline/#furtherEducation"},"Further education")),n.createElement("li",null,n.createElement(i.P,{to:"timeline/#volunteerWork"},"Volunteer work")),n.createElement("li",null,n.createElement(i.P,{to:"timeline/#backer"},"Backer")),n.createElement("li",null,n.createElement(i.P,{to:"timeline/#gaming"},"Gaming")),n.createElement("li",null,n.createElement(i.P,{className:"scrollTop",to:"timeline/#pageTop"},"Scroll to top")))))),n.createElement("section",{className:"accordion"},n.createElement(l,{buttonText:"💼 Work experince",openOnMobile:!0},n.createElement("ul",{className:"timelineWrapper"},n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"02/2022"),n.createElement("h3",{className:"timelineCompany"},"Patronas"),n.createElement("h4",{className:"timelineTitle"},"Product Design"),n.createElement("p",{className:"timelineText"},"Establishing UX within the company and transfering a rich client platform to the web. Also introducing new tools and workflows to enable and work more cooperatively with our colleagues and cross-functional teams together.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"11/2020 - 01/2022"),n.createElement("h3",{className:"timelineCompany"},"Chrono24"),n.createElement("h4",{className:"timelineTitle"},"UX/UI Design"),n.createElement("p",{className:"timelineText"},"As a member of a newly formed senior team, our primary responsibility was to provide first-class service to VIPs customers. My further responsibilities and achievements included:",n.createElement("ul",null,n.createElement("li",null,"Leading Figma Roll-Out: I was in leading the introduction of Figma for the whole team."),n.createElement("li",null,"Designen a new customer login: I conducted research and developed concepts for a new login interface. Its implementation resulted in a conversion rate increase of up to 12%."),n.createElement("li",null,"Creating the basis for the design system: I worked with another designer. another designer, working closely with the front-end team to create the foundations of the design system."),n.createElement("li",null,"Harmonizing Web & App UX/UI: In collaboration with a designer from the App Team, we harmonized the user experience and user interface across web and mobile applications.")))),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"06/2015 – 08/2020"),n.createElement("h3",{className:"timelineCompany"},"Reservix"),n.createElement("h4",{className:"timelineTitle"},"UX/UI Design"),n.createElement("p",{className:"timelineText"},"I was responsible for UX/UI in the portal team that managed over 3000 white label web shops and supported various teams across web, app, B2C, B2B and products. My primary responsibilities and outcomes were:",n.createElement("ul",null,n.createElement("li",null,"Gathering requirements and creating prototypes."),n.createElement("li",null,"Creating the foundations for a design system."),n.createElement("li",null,"Replacing the previously implemented software stack (Sketch, Adobe XD, Zeplin and Abstract) with Figma."),n.createElement("li",null,"Designing the ticket resale process for the 1st Bundesliga."),n.createElement("li",null,"Increasing ticket insurance sales by up to 7%."),n.createElement("li",null,"Improve the seating plan to ensure modularity and flexibility according to the needs of the organiser.")))),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"01/2009 - 02/2009"),n.createElement("h3",{className:"timelineCompany"},"Platformsixproduction"),n.createElement("h4",{className:"timelineTitle"},"Web Design, Photography"),n.createElement("p",{className:"timelineText"},"Brisbane, Australia: Using Photoshop, I modified and enhanced fashion, people and lifestyle pictures. I was also responsible for maintaining the in-house customer management system.")))),n.createElement("div",{className:"timeLineDevider"}),n.createElement("div",{className:"anchor",id:"sideProjects"}),n.createElement(l,{buttonText:"❤️ Passion & Projects"},n.createElement("ul",{className:"timelineWrapper"},n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"03/2021"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"http://uxfreiburg.de/",aria:"uxfreiburg.de"},"Freiburger UX Community - German UPA")),n.createElement("h4",{className:"timelineTitle"},"Co-founder"),n.createElement("p",{className:"timelineText"},"Our initial mission was straightforward: share UX insights with like-minded peers. This endeavor eventually led to the founding of the German UPA regional group in Freiburg. Since then, we've launched an official website, wiki, and Discord server, creating a vibrant community where members collaborate, exchange insights, and provide mutual support in the realm of UX. A significant portion of the credit for our Discord server's notable growth goes to my dedicated co-founders, Laura and Miri.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"12/2022"),n.createElement("h3",{className:"timelineCompany"},n.createElement(o.Z,{to:"http://pixelbricks.de/",aria:"pixelbricks.de"},"Figma Plugin: Pixelbricks")),n.createElement("h4",{className:"timelineTitle"},"Product Designer"),n.createElement("p",{className:"timelineText"},"Pixelbricks is a Figma plugin that allows you to transform your pixel art into Lego and order them via BrickLink. I always find it exciting to combine digital and analogue. I aimed to manage the entire process, from start to finish. This included overseeing the plugin, Figma files, homepage, FAQs, and Instagram - every part that makes a good product complete. Thanks to"," ",n.createElement(o.Z,{to:"https://twitter.com/mariusbethge",aria:"marius"},"Marius")," ","for the coding.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"01/2020 - 11/2020"),n.createElement("h3",{className:"timelineCompany"},"Hammertime"),n.createElement("h4",{className:"timelineTitle"},"Product Design"),n.createElement("p",{className:"timelineText"},"Redesigned our website, elevated the standards, and presented our product compellingly, leading our efforts in customer acquisition. Our success against the competition earned us a wildcard from Baden-Campus, a start-up accelerator. This allowed us to attend the valuable workshops they offer.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"03/2015 - 04/2021"),n.createElement("h3",{className:"timelineCompany"},"Frau Skroblies & Freunde"),n.createElement("h4",{className:"timelineTitle"},"Cinematography"),n.createElement("p",{className:"timelineText"},"Producing, shooting, and editing wedding films, I also lent a hand with technical aspects when needed. The role demands meticulous and swift workmanship. There's absolutely no room for error at any stage.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"05/2012"),n.createElement("h3",{className:"timelineCompany"},n.createElement(o.Z,{to:"https://steamcalculator.com/",aria:"steamcalculator.com"},"SteamCalculator")),n.createElement("h4",{className:"timelineTitle"},"UX/UI, Frontend"),n.createElement("p",{className:"timelineText"},"Creating the designs and utilized the project as an opportunity to acquaint myself with new technologies, diving into some frontend coding in the process. The significant popularity the application garnered enabled me to base my Bachelor's thesis* on it. *Title: Online Gaming Self-Efficacy: Designing Personalized Data Visualizations as Marketing Instruments for a Gaming Community.")))),n.createElement("div",{className:"timeLineDevider"}),n.createElement("div",{className:"anchor",id:"freelancer"}),n.createElement(l,{buttonText:"💻 Freelancer"},n.createElement("ul",{className:"timelineWrapper"},n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"06/2015 - 10/2020"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"https://www.geospin.de/",aria:"geospin.de"},"GeoSpin")),n.createElement("h4",{className:"timelineTitle"},"Product Desgin"),n.createElement("p",{className:"timelineText"},"As a product design consultant, I not only designed the homepage but also established a comprehensive corporate design. Using the given basic color as a foundation, I developed a style guide to ensure consistency. Additionally, I implemented a CMS using Docker to streamline content management.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"04/2015 – 05/2015"),n.createElement("h3",{className:"timelineCompany"},"IPB - Ingenieurbüro für Projektentwicklung"),n.createElement("h4",{className:"timelineTitle"},"Product Design"),n.createElement("p",{className:"timelineText"},"I conceptualized and designed a logo for the company and subsequently extended the design to create a cohesive set of company stationery, ensuring brand consistency throughout.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"02/2015 – 05/2015"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"http://www.herlyn-konsens.de/",aria:"herlyn-konsens.de"},"Herlyn-konsens")),n.createElement("h4",{className:"timelineTitle"},"Webdesign"),n.createElement("p",{className:"timelineText"},"While designing the homepage, I also customized a WordPress theme tailored to my client's branding and specific requirements.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"02/2013 – 04/2013"),n.createElement("h3",{className:"timelineCompany"},n.createElement(o.Z,{to:"http://www.physiologikum.de/",aria:"physiologikum.de"},"Physiologikum Mengeringhausen")),n.createElement("h4",{className:"timelineTitle"},"Web, Print & Photography"),n.createElement("p",{className:"timelineText"},"Along with designing and implementing the homepage, I also designed the company's stationery, which included letterheads, appointment reminder cards, and marketing brochures.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"05/2012 – 07/2012"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"https://www.sunzinet.com/",aria:"sunzinet.com"},"sunzinet")),n.createElement("h4",{className:"timelineTitle"},"Webdesign"),n.createElement("p",{className:"timelineText"},"Collaborated directly with the Creative Art Director to transform a design concept into a responsive webpage.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"03/2011 – 05/2011"),n.createElement("h3",{className:"timelineCompany"},"Torsten Ulrich Galts"),n.createElement("h4",{className:"timelineTitle"},"Webdesign"),n.createElement("p",{className:"timelineText"},"Creating a portfolio showcasing fashion design photographs for a renowned European photographer.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"02/2011 – 05/2011"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"https://kunstlicht.de/ueber-uns/",aria:"kunstlicht.de"},"Kunstlicht")),n.createElement("h4",{className:"timelineTitle"},"Cinematography"),n.createElement("p",{className:"timelineText"},"Alongside a colleague, I directed, shot, and edited a corporate video for Kunstlicht, a premium interior lighting design firm. We collaborated on this project, managing it independently and delivering it ahead of the scheduled timeline.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"03/2010 – 03/2010"),n.createElement("h3",{className:"timelineCompany"},"newCasa"),n.createElement("h4",{className:"timelineTitle"},"Print, Photography"),n.createElement("p",{className:"timelineText"},"Designed the company stationery like letterhead and business cards.")))),n.createElement("div",{className:"timeLineDevider"}),n.createElement("div",{className:"anchor",id:"furtherEducation"}),n.createElement(l,{buttonText:"🎓 Further education"},n.createElement("ul",{className:"timelineWrapper"},n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"07/2023"),n.createElement("h3",{className:"timelineCompany"},"Nielsen Norman Group"),n.createElement("h4",{className:"timelineTitle"},"Workshop"),n.createElement("p",{className:"timelineText"},"Becoming a UX Strategist, with Nancy Dickenson.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"09/2022 - 10/2022"),n.createElement("h3",{className:"timelineCompany"},"Smashing"),n.createElement("h4",{className:"timelineTitle"},"Workshop"),n.createElement("p",{className:"timelineText"},"Interface Design Patterns UX Training, with Vitaly Friedman.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"05/2021 - 06/2021"),n.createElement("h3",{className:"timelineCompany"},"Product Discovery"),n.createElement("h4",{className:"timelineTitle"},"Coaching"),n.createElement("p",{className:"timelineText"},"Tim Herbig's Product Discovery Coaching provides continuous, hands-on support for product teams, guiding them in understanding the Problem and Solution Space.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"03/2021"),n.createElement("h3",{className:"timelineCompany"},"SmashingConf"),n.createElement("h4",{className:"timelineTitle"},"Workshop"),n.createElement("p",{className:"timelineText"},"Creating and Maintaining Successful Design Systems, with Brad Frost.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"12/2019"),n.createElement("h3",{className:"timelineCompany"},"Udemy"),n.createElement("h4",{className:"timelineTitle"},"Online-Learning"),n.createElement("p",{className:"timelineText"},"JavaScript, jQuery, node.js")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"09/2019"),n.createElement("h3",{className:"timelineCompany"},"Design Sprint Masterclass"),n.createElement("h4",{className:"timelineTitle"},"Online-Learning"),n.createElement("p",{className:"timelineText"},"Masterclass with Jake Knapp and Jonathan Courtney: Steering Teams to Conceptualize and Validate New Products in only 4 Days.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"04/2019"),n.createElement("h3",{className:"timelineCompany"},"Ticketing Business Forum"),n.createElement("h4",{className:"timelineTitle"},"Conference"),n.createElement("p",{className:"timelineText"},"Showcasing the future of live entertainment ticketing. - Manchester UK")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"03/2019"),n.createElement("h3",{className:"timelineCompany"},"Internet World Expo"),n.createElement("h4",{className:"timelineTitle"},"E-Commerce Fair"),n.createElement("p",{className:"timelineText"},"The commerce e-xperience 2019. - Munich")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"12/2018"),n.createElement("h3",{className:"timelineCompany"},"Udacity"),n.createElement("h4",{className:"timelineTitle"},"Online-Learning"),n.createElement("p",{className:"timelineText"},"Product Design: Ideation & Validation, UX/UI, Design Sprint, Key Metrics.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"10/2018"),n.createElement("h3",{className:"timelineCompany"},"Communication, Cooperation, Coordination"),n.createElement("h4",{className:"timelineTitle"},"Workshop"),n.createElement("p",{className:"timelineText"},"Learning different types of conversation techniques. – Freiburg")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"09/2018"),n.createElement("h3",{className:"timelineCompany"},"SmashingConf"),n.createElement("h4",{className:"timelineTitle"},"Conference"),n.createElement("p",{className:"timelineText"},"Focused on real-world problems and solutions. Covering everything web relevant. Like front-end, UX/UI design or machine learning. – Freiburg")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"03/2018"),n.createElement("h3",{className:"timelineCompany"},"Google"),n.createElement("h4",{className:"timelineTitle"},"Conference"),n.createElement("p",{className:"timelineText"},"Progressive Web Apps Roadshow. – London")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"12/2017"),n.createElement("h3",{className:"timelineCompany"},"CodeSchool"),n.createElement("h4",{className:"timelineTitle"},"Online-Learning"),n.createElement("p",{className:"timelineText"},"HTML & CSS – Master Status.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"09/2017"),n.createElement("h3",{className:"timelineCompany"},"SmashingConf"),n.createElement("h4",{className:"timelineTitle"},"Conference"),n.createElement("p",{className:"timelineText"},"Solve real-life design problems and what workflow we are using to solve them intelligently. – Freiburg")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"08/2017"),n.createElement("h3",{className:"timelineCompany"},"Google"),n.createElement("h4",{className:"timelineTitle"},"Conference"),n.createElement("p",{className:"timelineText"},"Polymer Summit 2017. – Copenhagen")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"05/2017"),n.createElement("h3",{className:"timelineCompany"},"Google"),n.createElement("h4",{className:"timelineTitle"},"Online-Learning"),n.createElement("p",{className:"timelineText"},"The Digital Garage: Online Marketing")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"09/2016"),n.createElement("h3",{className:"timelineCompany"},"SmashingConf"),n.createElement("h4",{className:"timelineTitle"},"Workshop"),n.createElement("p",{className:"timelineText"},"Scalable Design Systems, with Nathan Curtis. – Freiburg")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"05/2016"),n.createElement("h3",{className:"timelineCompany"},"Facebook"),n.createElement("h4",{className:"timelineTitle"},"Conference"),n.createElement("p",{className:"timelineText"},'The event covered topics around digitalisation, especially in the area of "online" and "mobile". In a discussion, regional companies reported on their experiences with Facebook and emphasised the increasing usage time by users. – Freiburg')),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"05/2016"),n.createElement("h3",{className:"timelineCompany"},"re-lounge"),n.createElement("h4",{className:"timelineTitle"},"Talk"),n.createElement("p",{className:"timelineText"},"How to use online marketing to not only reach your customers, but also understand. – Freiburg")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"06/2016"),n.createElement("h3",{className:"timelineCompany"},"IA Konferenz 2016"),n.createElement("h4",{className:"timelineTitle"},"Conference"),n.createElement("p",{className:"timelineText"},'The IA Conference is the annual gathering of the German-speaking IA and UX community, which includes information architects, conceptual designers, UX designers, usability engineers, product managers, service designers and service providers. Topic "Vision. Strategy. Product.". – Berlin')))),n.createElement("div",{className:"timeLineDevider"}),n.createElement("div",{className:"anchor",id:"volunteerWork"}),n.createElement(l,{buttonText:"🏅 Volunteer work"},n.createElement("ul",{className:"timelineWrapper"},n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"03/2017"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"https://haus-des-engagements.de/",aria:"haus-des-engagements.de"},"Haus des Engagements")),n.createElement("h4",{className:"timelineTitle"},"Corporate Design"),n.createElement("p",{className:"timelineText"},"I developed a small style guide, offering logo designs and defining corporate colors.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"02/2012 – 02/2013"),n.createElement("h3",{className:"timelineCompany"},n.createElement(o.Z,{to:"https://vimeo.com/64133805",aria:"PHoS Imagefilm"},"Palliatives Hospiz Solingen")),n.createElement("h4",{className:"timelineTitle"},"Cinematography"),n.createElement("p",{className:"timelineText"},"I worked on filming and editing a corporate video for PHoS – Palliatives Hospiz Solingen, a nonprofit end-of-life care organization. This promotional film was incorporated into my friend's bachelor thesis.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"07/2007, 06/2006, 06/2005"),n.createElement("h3",{className:"timelineCompany"},"Caritas"),n.createElement("h4",{className:"timelineTitle"},"Child carer"),n.createElement("p",{className:"timelineText"},"During my summer break, I organized and led day trips for socially underprivileged children, providing them with both work and play opportunities.")))),n.createElement("div",{className:"timeLineDevider"}),n.createElement("div",{className:"anchor",id:"backer"}),n.createElement(l,{buttonText:"💰 Backer"},n.createElement("ul",{className:"timelineWrapper"},n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"05/2018"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"https://www.indiegogo.com/projects/anvanda-a-great-f-cking-bag#/",aria:"Använda. A Great F*cking Bag."},"Använda")),n.createElement("h4",{className:"timelineTitle"},"Fashion & Design"),n.createElement("p",{className:"timelineText"},"Använda – „A Great F*cking Bag.“ Just a cool looking bag.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"10/2016"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"https://subformapp.com/",aria:"subformapp"},"Subform")),n.createElement("h4",{className:"timelineTitle"},"Software & Design"),n.createElement("p",{className:"timelineText"},"A tool for digital designers, where dynamic layouts merge with direct code manipulation.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"09/2015"),n.createElement("h3",{className:"timelineCompany"},n.createElement(o.Z,{to:"https://www.kickstarter.com/projects/thestandardsmanual/reissue-of-the-1975-nasa-graphics-standards-manual",aria:"Reissue of the 1975 NASA Graphics Standards Manual"},"Reissue of the 1975 NASA Graphics Standards Manual")),n.createElement("h4",{className:"timelineTitle"},"Design"),n.createElement("p",{className:"timelineText"},"This Kickstarter campaign honors the legacy of Danne and Blackburn. Revived 41 years post-design and 23 years after its disappearance.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"08/2015"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"https://www.kickstarter.com/projects/megabots/support-team-usa-in-the-giant-robot-duel",aria:"Mega Bot"},"MegaBots")),n.createElement("h4",{className:"timelineTitle"},"Tech"),n.createElement("p",{className:"timelineText"},"Support Team USA in the Giant Robot Duel: They challenged Japan to a massive robot duel. Japan accepted with the condition of hand-to-hand combat. They've rallied a formidable team to upgrade the Mk.II for this monumental showdown and needed support for the improvements.")))),n.createElement("div",{className:"timeLineDevider"}),n.createElement("div",{className:"anchor",id:"gaming"}),n.createElement(l,{buttonText:"🕹️ Gaming"},n.createElement("ul",{className:"timelineWrapper"},n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"08/2004"),n.createElement("h3",{className:"timelineCompany"},"ThW Mapping Contest"),n.createElement("h4",{className:"timelineTitle"},"Organisator"),n.createElement("p",{className:"timelineText"},"My brother and I initiated a Half-Life deathmatch remake mapping contest for the thewall.de community, which was the leading German Half-Life mapping community of its time.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"07/2004"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"https://killbox.spike-fx.net/home.html",aria:"Kill-Box Mod"},"Killbox Mod")),n.createElement("h4",{className:"timelineTitle"},"Level Design"),n.createElement("p",{className:"timelineText"},"During a LAN-Party, we developed v1.0 in 17 hours. Additionally, a mapping contest was held where my map was awarded the second place.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"09/2002"),n.createElement("h3",{className:"timelineCompany"},"PC Action Counter-Strike Special-Edition"),n.createElement("h4",{className:"timelineTitle"},"Level Design"),n.createElement("p",{className:"timelineText"},"Winning a mapping contest for an exclusive Counter-Strike map pack. The exclusive-pack also is known as “best of german speaking Mapper”-pack was organized by the Clan00 map-forum in collaboration with the PC Action magazine. The pack contained 12 premium maps.")),n.createElement("li",{className:"timelineList"},n.createElement("span",{className:"timelineDate"},"06/2001"),n.createElement("h3",{className:"timelineCompany"}," ",n.createElement(o.Z,{to:"https://spezi-clan.com/",aria:"spezi-clan"},"spezi-clan")),n.createElement("h4",{className:"timelineTitle"},"Co-Clanleader, Wedbdesign"),n.createElement("p",{className:"timelineText"},"As a co-clan leader, I organized clan wars, spearheaded training sessions, and supervised our gaming server, ensuring strategic advantages and among our members. Or tested selfmade aim maps on our gaming server."))))))),n.createElement(m.Z,null))};const p=()=>n.createElement(n.Fragment,null,n.createElement("meta",{charSet:"UTF-8"}),n.createElement("html",{lang:"en"}),n.createElement("title",null,"Timeline"),n.createElement("meta",{name:"description",content:"Hi, my name is Chris Kuhrt and I am a Designer who is passionate about user-centered design, design processes and design systems. I am always looking for ways to improve the workflow between design, development, and management in order to improve the output and, above all, the outcome."}))}}]);
//# sourceMappingURL=component---src-pages-timeline-tsx-278a37dfb045a5f8864a.js.map