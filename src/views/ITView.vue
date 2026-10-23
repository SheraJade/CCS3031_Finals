<template>
<div class="it-page">
<!-- HEADER -->
<header class="site-header">
<div class="header-inner">
<a href="/" class="brand">
<div class="brand-logo">CCS</div>
<div class="brand-text">
<strong>COLLEGE OF COMPUTER STUDIES</strong>
<span>Central Philippine University</span>
</div>
</a>

<button class="menu-button" @click="menuOpen = !menuOpen">
{{ menuOpen ? "✕" : "☰" }}
</button>

<nav :class="{ open: menuOpen }">
<a href="#home" @click="menuOpen = false">Home</a>
<a href="#about" @click="menuOpen = false">About IT</a>
<a href="#objectives" @click="menuOpen = false">Objectives</a>
<a href="#outcomes" @click="menuOpen = false">Outcomes</a>
<a href="#curriculum" @click="menuOpen = false">Curriculum</a>
<a href="#organization" @click="menuOpen = false">Organization</a>
</nav>
</div>
</header>

<!-- HERO -->
<main>
<section class="hero" id="home">
<div class="hero-overlay"></div>
<div class="hero-content">
<div class="breadcrumb">
<a href="/">Home</a>
<span>/</span>
<span>Information Technology</span>
</div>

<span class="eyebrow">COLLEGE OF COMPUTER STUDIES</span>
<h1>Information Technology</h1>
<div class="gold-line"></div>
<p>
Empowering future IT professionals through innovation,
technical excellence, collaboration, and responsible use
of technology.
</p>
<a href="#about" class="primary-button">
Explore the Program <span>↓</span>
</a>
</div>

<div class="hero-mark" aria-hidden="true">
<div class="hero-mark-inner">
<span>IT</span>
<small>INNOVATE<br />CREATE<br />CONNECT</small>
</div>
</div>
</section>

<!-- INTRODUCTION -->
<section class="section about-section" id="about">
<div class="section-heading">
<span class="section-label">ABOUT THE PROGRAM</span>
<h2>Discover Information Technology</h2>
<div class="gold-line centered"></div>
</div>

<div class="about-layout">
<div class="about-copy">
<h3>Bachelor of Science in Information Technology</h3>
<p>
The Information Technology (IT) program is designed to
bridge the gap between computer science and management
information systems.
</p>
<p>
It focuses on the selection, development, application,
integration, administration, and management of computing
technologies to provide solutions to the needs of
individuals and organizations.
</p>
<p>
Students develop competencies in networking, database
administration, information security, systems
administration, web technologies, and technical support.
The program also encourages teamwork, communication,
ethical conduct, and continuous professional development.
</p>
</div>

<div class="about-highlight">
<span class="highlight-symbol">01</span>
<h3>Technology with Purpose</h3>
<p>
Transform ideas into practical computing solutions that
support organizations and contribute to society.
</p>
<div class="highlight-footer">
<span>BSIT</span>
<span>LEARN · BUILD · INNOVATE</span>
</div>
</div>
</div>

<div class="feature-grid">
<article class="feature-card">
<span class="feature-icon">⌘</span>
<h3>Technical Knowledge</h3>
<p>
Develop practical skills in programming, databases,
networks, and information systems.
</p>
</article>
<article class="feature-card">
<span class="feature-icon">◇</span>
<h3>Problem Solving</h3>
<p>
Analyze real-world problems and create appropriate
technology-based solutions.
</p>
</article>
<article class="feature-card">
<span class="feature-icon">◎</span>
<h3>Professional Values</h3>
<p>
Practice responsible, ethical, collaborative, and
lifelong learning in the IT profession.
</p>
</article>
</div>
</section>

<!-- EDUCATIONAL OBJECTIVES -->
<section class="section pale-section" id="objectives">
<div class="section-heading">
<span class="section-label">PROGRAM DIRECTION</span>
<h2>Program Educational Objectives</h2>
<div class="gold-line centered"></div>
<p>
The program aims to prepare graduates for successful
careers, professional growth, and meaningful contributions
to society.
</p>
</div>

<div class="objective-list">
<article
v-for="(item, index) in objectives"
:key="item"
class="objective-row"
>
<div class="objective-number">
{{ String(index + 1).padStart(2, "0") }}
</div>
<div>
<h3>{{ item.title }}</h3>
<p>{{ item.description }}</p>
</div>
</article>
</div>
</section>

<!-- PROGRAM OUTCOMES -->
<section class="section" id="outcomes">
<div class="section-heading">
<span class="section-label">EXPECTED COMPETENCIES</span>
<h2>Program Outcomes</h2>
<div class="gold-line centered"></div>
<p>
Graduates of computing programs are expected to develop
professional, technical, and interpersonal competencies.
</p>
</div>

<div class="outcome-grid">
<article
v-for="item in programOutcomes"
:key="item.code"
class="outcome-card"
>
<span class="outcome-code">{{ item.code }}</span>
<p>{{ item.description }}</p>
</article>
</div>

<div class="reference-note">
<strong>Reference:</strong>
CHED Memorandum Order No. 25, Series of 2015, as identified
in the supplied curriculum information.
</div>
</section>

<!-- CURRICULUM RATIONALE -->
<section class="section pale-section" id="rationale">
<div class="section-heading">
<span class="section-label">THE FOUNDATION</span>
<h2>Curriculum Rationale</h2>
<div class="gold-line centered"></div>
</div>

<div class="reading-panel">
<p>
The computing field continues to grow and evolve. It
encompasses computer engineering, software engineering,
computer science, information systems, and information
technology. Educational programs must respond to changing
technological developments and the needs of the country.
</p>
<p>
Outcomes-based education emphasizes the competencies
expected of graduates. CHED Memorandum Order No. 25,
Series of 2015, identifies core competencies for the
Bachelor of Science in Computer Science (BSCS), Bachelor
of Science in Information Systems (BSIS), and Bachelor
of Science in Information Technology (BSIT) programs.
</p>
<p>
The BSIT program focuses on the utilization of hardware
and software technologies, including planning, installing,
customizing, operating, managing, administering, and
maintaining information technology infrastructure.
</p>
<p>
The program prepares graduates to address user needs
through the selection, development, application,
integration, and management of computing technologies
within organizations.
</p>
<p>
Career-related areas include information security,
network architecture, database administration,
systems administration, and computer support.
</p>
</div>
</section>

<!-- CURRICULUM DESCRIPTION -->
<section class="section" id="curriculum">
<div class="section-heading">
<span class="section-label">WHAT STUDENTS LEARN</span>
<h2>Curriculum Description</h2>
<div class="gold-line centered"></div>
<p>
The BSIT curriculum includes basic and advanced courses
in the planning, development, integration, and management
of information technology infrastructure.
</p>
</div>

<h3 class="knowledge-heading">Eleven Knowledge Areas</h3>

<div class="knowledge-grid">
<article
v-for="(area, index) in knowledgeAreas"
:key="area"
class="knowledge-card"
>
<span>{{ String(index + 1).padStart(2, "0") }}</span>
<h3>{{ area }}</h3>
</article>
</div>
</section>

<!-- STUDENT ORGANIZATION -->
<section class="section organization-section" id="organization">
<div class="organization-inner">
<div class="section-heading">
<span class="section-label light-label">STUDENT LIFE</span>
<h2>Student Organization</h2>
<div class="gold-line centered"></div>
</div>

<div class="organization-content">
<div class="organization-logo">ITSO</div>
<div class="organization-copy">
<h3>Growing Together Through Technology</h3>
<p>
The Information Technology Students Organization
(ITSO) enriches student life through camaraderie,
collaboration, and shared experiences across year
levels.
</p>
<p>
Through outreach activities, college and university
events, and collaborative initiatives, members exchange
ideas, strengthen teamwork, develop leadership, and
contribute to the community.
</p>
<p>
These experiences help students build their
personalities, improve their skills, and work together
toward the goals of their organization.
</p>
</div>
</div>
</div>
</section>

<!-- GRADUATE OUTCOMES -->
<section class="section" id="graduate-outcomes">
<div class="section-heading">
<span class="section-label">BSIT GRADUATE COMPETENCIES</span>
<h2>Graduate Outcomes</h2>
<div class="gold-line centered"></div>
<p>
The following outcomes describe the knowledge, abilities,
and responsibilities expected of BSIT graduates.
</p>
</div>

<div class="table-container">
<table>
<thead>
<tr>
<th>Code</th>
<th>Graduate Outcome</th>
</tr>
</thead>
<tbody>
<tr v-for="item in graduateOutcomes" :key="item.code">
<td>
<span class="table-code">{{ item.code }}</span>
</td>
<td>{{ item.description }}</td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- CLOSING -->
<section class="closing-section">
<span class="section-label light-label">THE FUTURE IS DIGITAL</span>
<h2>Build Skills. Create Solutions. Shape the Future.</h2>
<p>
An academic program for an era of rapidly changing technology.
</p>
<a href="#home" class="primary-button">Back to Top ↑</a>
</section>
</main>

<!-- FOOTER -->
<footer class="site-footer">
<div class="footer-main">
<div>
<div class="footer-brand">
<div class="brand-logo">CCS</div>
<div>
<h3>College of Computer Studies</h3>
<p>Central Philippine University</p>
</div>
</div>
<p class="footer-description">
Developing computing knowledge, professional skills,
innovation, and responsible technology use.
</p>
</div>

<div class="footer-navigation">
<h3>Explore</h3>
<a href="#about">About Information Technology</a>
<a href="#objectives">Program Objectives</a>
<a href="#outcomes">Program Outcomes</a>
<a href="#curriculum">Curriculum</a>
<a href="#organization">Student Organization</a>
</div>
</div>

<div class="footer-bottom">
<span>
© {{ currentYear }} College of Computer Studies
</span>
<a href="#home">Return to Home ↑</a>
</div>
</footer>
</div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const currentYear = new Date().getFullYear();

const objectives = [
{
title: "Career Excellence and Leadership",
description:
"Exhibit the skills, knowledge, and leadership needed to excel in information technology careers and related disciplines."
},
{
title: "Professionalism and Teamwork",
description:
"Demonstrate high standards of professionalism and become effective members of multidisciplinary development teams."
},
{
title: "Research and Community Engagement",
description:
"Participate in scholarly activities, research, and outreach that contribute to the improvement and transformation of society."
},
{
title: "Ethics and Social Responsibility",
description:
"Demonstrate ethical, professional, and spiritual values, together with social responsibility in IT careers and related professions."
},
{
title: "Digital Media Proficiency",
description:
"Demonstrate proficiency in traditional and digital media arts by designing, developing, and implementing digital media solutions for entertainment and corporate environments."
}
];

const programOutcomes = [
{
code: "PO-A",
description:
"Articulate and discuss the latest developments in the specific field of practice."
},
{
code: "PO-B",
description:
"Communicate effectively orally and in writing using both English and Filipino."
},
{
code: "PO-C",
description:
"Work effectively and independently in multidisciplinary and multicultural teams."
},
{
code: "PO-D",
description:
"Act with recognition of professional, social, and ethical responsibilities."
},
{
code: "PO-E",
description:
"Preserve and promote Filipino historical and cultural heritage, based on Republic Act No. 7722."
},
{
code: "PO-F",
description:
"Analyze complex problems and identify and define computing requirements for appropriate solutions."
},
{
code: "PO-G",
description:
"Apply computing and other knowledge domains to address real-world problems."
},
{
code: "PO-H",
description:
"Design and develop computing solutions using a system-level perspective."
},
{
code: "PO-I",
description:
"Utilize modern computing tools, techniques, and technologies."
}
];

const knowledgeAreas = [
"Information Technology Fundamentals",
"Human Computer Interaction",
"Information Assurance and Security",
"Information Management",
"Integrative Programming and Technologies",
"Networking",
"Platform Technologies",
"Systems Administration and Maintenance",
"Systems Integration and Architecture",
"Social and Professional Issues",
"Web Systems and Technologies"
];

const graduateOutcomes = [
{
code: "IT01",
description:
"Apply knowledge of computing, science, and mathematics appropriate to the discipline."
},
{
code: "IT02",
description:
"Understand best practices and standards and their applications."
},
{
code: "IT03",
description:
"Analyze complex problems and identify and define the computing requirements appropriate to their solution."
},
{
code: "IT04",
description:
"Identify and analyze user needs and consider them in the selection, creation, evaluation, and administration of computer-based systems."
},
{
code: "IT05",
description:
"Design, implement, and evaluate computer-based systems, processes, components, or programs to meet desired needs and requirements under various constraints."
},
{
code: "IT06",
description:
"Integrate IT-based solutions into the user environment effectively."
},
{
code: "IT07",
description:
"Apply current techniques, skills, tools, and practices necessary for the IT profession."
},
{
code: "IT08",
description:
"Function effectively as a member or leader of a development team, recognizing different roles to accomplish a common goal."
},
{
code: "IT09",
description:
"Assist in the creation of an effective IT project plan."
},
{
code: "IT10",
description:
"Communicate effectively with the computing community and society about complex computing activities through logical writing, presentations, and clear instructions."
},
{
code: "IT11",
description:
"Analyze the local and global impact of computing and information technology on individuals, organizations, and society."
},
{
code: "IT12",
description:
"Understand professional, ethical, legal, security, and social issues and responsibilities in the use of information technology."
},
{
code: "IT13",
description:
"Recognize the need for continuous self-learning, planning, and performance improvement as a foundation for professional development."
}
];
</script>

<style scoped>
:root {
color-scheme: light;
}

.it-page {
--green: #174b35;
--deep-green: #0c2d21;
--gold: #d6b56e;
--cream: #f7f8f4;
--text: #26372e;
--muted: #657168;
color: var(--text);
background: #fff;
font-family: Arial, Helvetica, sans-serif;
font-size: 15px;
line-height: 1.75;
}

.it-page *,
.it-page *::before,
.it-page *::after {
box-sizing: border-box;
}

.it-page a {
color: inherit;
text-decoration: none;
}

.site-header {
position: sticky;
top: 0;
z-index: 100;
background: var(--deep-green);
color: #fff;
box-shadow: 0 4px 18px #00000015;
}

.header-inner {
max-width: 1240px;
margin: auto;
padding: 15px 30px;
min-height: 83px;
display: flex;
align-items: center;
justify-content: space-between;
gap: 24px;
}

.brand,
.footer-brand {
display: flex;
align-items: center;
gap: 12px;
}

.brand {
flex-shrink: 0;
}

.brand-logo {
width: 47px;
height: 47px;
border: 2px solid var(--gold);
color: var(--gold);
display: grid;
place-items: center;
border-radius: 50%;
font-weight: 800;
font-size: 12px;
}

.brand-text strong {
display: block;
font-size: 12px;
letter-spacing: .6px;
}

.brand-text span {
display: block;
font-size: 11px;
color: #c7d8cd;
}

.site-header nav {
display: flex;
flex-wrap: wrap;
gap: 19px;
}

.site-header nav a {
font-size: 12px;
color: #e0eae3;
font-weight: 600;
}

.site-header nav a:hover,
.footer-navigation a:hover {
color: var(--gold);
}

.menu-button {
display: none;
background: transparent;
border: 1px solid #688575;
color: #fff;
border-radius: 5px;
padding: 6px 11px;
cursor: pointer;
}

.hero {
position: relative;
isolation: isolate;
overflow: hidden;
min-height: 420px;
padding: 65px max(7%, calc((100% - 1100px) / 2));
background: linear-gradient(115deg, #0c2d21, #1c6040);
color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
gap: 35px;
}

.hero-overlay {
position: absolute;
z-index: -1;
width: 470px;
height: 470px;
border: 1px solid #ffffff15;
border-radius: 50%;
right: -100px;
top: -40px;
box-shadow: 0 0 0 50px #ffffff05, 0 0 0 100px #ffffff04;
}

.hero-content {
max-width: 690px;
}

.breadcrumb {
font-size: 11px;
color: #cbdcd0;
margin-bottom: 35px;
}

.breadcrumb span {
margin-right: 8px;
}

.breadcrumb a:hover {
color: var(--gold);
}

.eyebrow,
.section-label {
font-size: 11px;
font-weight: 700;
letter-spacing: 2px;
color: var(--gold);
}

.hero h1,
.section-heading h2,
.closing-section h2 {
font-family: Georgia, "Times New Roman", serif;
font-weight: 700;
line-height: 1.2;
}

.hero h1 {
margin-top: 12px;
font-size: clamp(36px, 5vw, 57px);
}

.gold-line {
height: 3px;
width: 65px;
background: var(--gold);
margin: 23px 0;
}

.gold-line.centered {
margin: 19px auto;
}

.hero-content > p {
max-width: 560px;
color: #e0e9e2;
font-size: 15px;
}

.primary-button {
display: inline-flex;
gap: 13px;
align-items: center;
margin-top: 25px;
padding: 12px 21px;
border-radius: 4px;
background: var(--gold);
color: #193b29 !important;
font-weight: 700;
font-size: 12px;
transition: transform .2s;
}

.primary-button:hover {
transform: translateY(-2px);
}

.hero-mark {
width: 200px;
height: 200px;
flex-shrink: 0;
display: grid;
place-items: center;
border: 1px solid #ffffff50;
border-radius: 50%;
background: #ffffff08;
}

.hero-mark-inner {
width: 150px;
height: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
border: 2px solid var(--gold);
border-radius: 50%;
color: var(--gold);
}

.hero-mark-inner > span {
font-size: 43px;
font-weight: 800;
}

.hero-mark-inner small {
font-size: 8px;
text-align: center;
letter-spacing: 2px;
line-height: 1.5;
}

.section {
padding: 78px max(6%, calc((100% - 1100px) / 2));
}

.pale-section {
background: var(--cream);
}

.section-heading {
max-width: 760px;
text-align: center;
margin: 0 auto 42px;
}

.section-label {
color: var(--green);
}

.section-heading h2 {
font-size: clamp(27px, 3vw, 37px);
color: var(--deep-green);
margin-top: 10px;
}

.section-heading > p {
font-size: 14px;
color: var(--muted);
}

.about-layout {
display: grid;
grid-template-columns: 1.4fr .8fr;
align-items: stretch;
gap: 45px;
}

.about-copy h3,
.reading-panel h3 {
color: var(--green);
font-size: 21px;
margin-bottom: 15px;
}

.about-copy p,
.reading-panel p {
color: var(--muted);
margin-bottom: 16px;
font-size: 14px;
}

.about-highlight {
position: relative;
overflow: hidden;
border-radius: 7px;
padding: 30px;
background: var(--green);
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
min-height: 260px;
}

.highlight-symbol {
color: var(--gold);
font-size: 45px;
font-weight: 800;
line-height: 1.3;
}

.about-highlight h3 {
font-family: Georgia, serif;
font-size: 23px;
margin: 14px 0;
}

.about-highlight p {
font-size: 13px;
color: #dce9df;
}

.highlight-footer {
display: flex;
justify-content: space-between;
gap: 10px;
border-top: 1px solid #ffffff30;
margin-top: 24px;
padding-top: 13px;
color: var(--gold);
font-size: 10px;
font-weight: 700;
}

.feature-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
margin-top: 40px;
}

.feature-card {
padding: 27px;
border: 1px solid #e4eae4;
border-radius: 6px;
background: #fff;
transition: transform .2s, box-shadow .2s;
}

.feature-card:hover,
.knowledge-card:hover {
transform: translateY(-4px);
box-shadow: 0 9px 22px #143c2810;
}

.feature-icon {
display: grid;
place-items: center;
width: 45px;
height: 45px;
background: #e5f0e7;
color: var(--green);
border-radius: 5px;
font-size: 24px;
margin-bottom: 18px;
}

.feature-card h3 {
color: var(--green);
font-size: 16px;
margin-bottom: 10px;
}

.feature-card p {
font-size: 13px;
color: var(--muted);
}

.objective-list {
max-width: 900px;
margin: auto;
display: grid;
gap: 14px;
}

.objective-row {
display: grid;
grid-template-columns: 60px 1fr;
gap: 18px;
align-items: start;
background: #fff;
padding: 23px;
border: 1px solid #e2e9e2;
border-radius: 5px;
}

.objective-number {
font-size: 22px;
font-weight: 800;
color: var(--green);
border-right: 2px solid var(--gold);
}

.objective-row h3 {
font-size: 16px;
color: var(--deep-green);
margin-bottom: 7px;
}

.objective-row p {
font-size: 13px;
color: var(--muted);
}

.outcome-grid {
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 17px;
}

.outcome-card {
padding: 23px;
border: 1px solid #e0e8e1;
border-radius: 5px;
background: #fff;
}

.outcome-code,
.table-code {
display: inline-block;
background: #e5f0e7;
color: var(--green);
padding: 4px 9px;
border-radius: 3px;
font-size: 11px;
font-weight: 800;
}

.outcome-card p {
margin-top: 13px;
font-size: 13px;
color: var(--muted);
}

.reference-note {
margin-top: 28px;
padding: 16px 20px;
border-left: 3px solid var(--gold);
background: var(--cream);
color: var(--muted);
font-size: 12px;
}

.reading-panel {
max-width: 950px;
margin: auto;
padding: 35px;
border: 1px solid #e2e9e2;
background: #fff;
border-radius: 6px;
}

.knowledge-heading {
text-align: center;
color: var(--green);
font-size: 19px;
margin-bottom: 25px;
}

.knowledge-grid {
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 16px;
}

.knowledge-card {
min-height: 120px;
padding: 20px;
background: #fff;
border: 1px solid #e2e9e2;
border-radius: 5px;
transition: transform .2s, box-shadow .2s;
}

.knowledge-card > span {
color: #a08040;
font-size: 11px;
font-weight: 800;
}

.knowledge-card h3 {
margin-top: 9px;
color: var(--green);
font-size: 14px;
line-height: 1.5;
}

.organization-section {
background: var(--deep-green);
color: #fff;
}

.organization-inner {
max-width: 1050px;
margin: auto;
}

.organization-section .section-heading h2 {
color: #fff;
}

.light-label {
color: #d2e1d5;
}

.organization-content {
max-width: 900px;
margin: auto;
display: grid;
grid-template-columns: 160px 1fr;
gap: 35px;
align-items: center;
}

.organization-logo {
width: 145px;
height: 145px;
display: grid;
place-items: center;
border: 2px solid var(--gold);
border-radius: 50%;
color: var(--gold);
font-size: 30px;
font-weight: 800;
}

.organization-copy h3 {
font-family: Georgia, serif;
font-size: 24px;
margin-bottom: 15px;
}

.organization-copy p {
font-size: 13px;
color: #d2e1d5;
margin-bottom: 12px;
}

.table-container {
max-width: 1000px;
margin: auto;
overflow-x: auto;
border: 1px solid #e0e8e1;
border-radius: 5px;
}

.it-page table {
width: 100%;
border-collapse: collapse;
background: #fff;
text-align: left;
}

.it-page thead {
background: var(--green);
color: #fff;
}

.it-page th,
.it-page td {
padding: 15px 20px;
border-bottom: 1px solid #e4eae4;
font-size: 13px;
}

.it-page th:first-child,
.it-page td:first-child {
width: 100px;
}

.it-page tbody tr:nth-child(even) {
background: #f6f8f5;
}

.it-page tbody tr:hover {
background: #eaf3eb;
}

.table-code {
white-space: nowrap;
}

.closing-section {
text-align: center;
padding: 75px 25px;
color: #fff;
background: linear-gradient(115deg, #174b35, #0c2d21);
}

.closing-section h2 {
max-width: 750px;
margin: 15px auto;
font-size: clamp(29px, 4vw, 43px);
}

.closing-section > p {
color: #d2e1d5;
font-size: 14px;
}

.site-footer {
background: #071c14;
color: #fff;
padding: 42px max(6%, calc((100% - 1100px) / 2)) 0;
}

.footer-main {
display: flex;
justify-content: space-between;
gap: 45px;
padding-bottom: 35px;
}

.footer-brand h3 {
font-size: 14px;
}

.footer-brand p {
font-size: 11px;
color: #bfd0c4;
}

.footer-description {
margin-top: 17px;
max-width: 360px;
color: #bfd0c4;
font-size: 12px;
}

.footer-navigation {
display: flex;
flex-direction: column;
gap: 8px;
}

.footer-navigation h3 {
color: var(--gold);
font-size: 13px;
margin-bottom: 5px;
}

.footer-navigation a {
color: #bfd0c4;
font-size: 12px;
}

.footer-bottom {
padding: 17px 0;
border-top: 1px solid #254334;
display: flex;
justify-content: space-between;
gap: 15px;
flex-wrap: wrap;
color: #bfd0c4;
font-size: 11px;
}

.footer-bottom a:hover {
color: var(--gold);
}

@media (max-width: 1000px) {
.header-inner {
flex-wrap: wrap;
}

.site-header nav {
gap: 12px;
}

.site-header nav a {
font-size: 11px;
}

.hero-mark {
width: 165px;
height: 165px;
}

.hero-mark-inner {
width: 125px;
height: 125px;
}
}

@media (max-width: 760px) {
.header-inner {
padding: 12px 20px;
}

.brand-text strong {
font-size: 10px;
}

.brand-text span {
font-size: 10px;
}

.menu-button {
display: block;
}

.site-header nav {
display: none;
width: 100%;
flex-direction: column;
gap: 0;
}

.site-header nav.open {
display: flex;
}

.site-header nav a {
padding: 11px 0;
border-top: 1px solid #ffffff20;
font-size: 13px;
}

.hero {
padding: 50px 25px;
min-height: 370px;
}

.hero-mark {
display: none;
}

.section {
padding: 55px 22px;
}

.about-layout {
grid-template-columns: 1fr;
gap: 25px;
}

.feature-grid,
.outcome-grid,
.knowledge-grid {
grid-template-columns: repeat(2, minmax(0, 1fr));
}

.organization-content {
grid-template-columns: 1fr;
justify-items: center;
text-align: center;
}

.reading-panel {
padding: 23px;
}

.site-footer {
padding: 35px 22px 0;
}
}

@media (max-width: 480px) {
.hero h1 {
font-size: 35px;
}

.feature-grid,
.outcome-grid,
.knowledge-grid {
grid-template-columns: 1fr;
}

.objective-row {
grid-template-columns: 42px 1fr;
padding: 17px;
gap: 12px;
}

.footer-main {
flex-direction: column;
gap: 30px;
}

.footer-bottom {
flex-direction: column;
}

.it-page th,
.it-page td {
padding: 12px;
font-size: 12px;
}
}
</style>