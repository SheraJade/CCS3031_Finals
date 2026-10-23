
<script setup>
import NavBar from '@/components/AppNavBar.vue'
</script>

<template>
  <NavBar />

  <main class="about-page">
    <!-- HERO SECTION -->
    <section class="about-hero">
      <div class="hero-content">
        <span class="eyebrow">CENTRAL PHILIPPINE UNIVERSITY</span>
        <h1>About the College of Computer Studies</h1>
        <p>
          Building knowledge, developing skills, and preparing future
          professionals for a technology-driven world.
        </p>
        <a href="#history" class="hero-button">Discover Our Story</a>
      </div>
    </section>

    <!-- HISTORY SECTION -->
    <section id="history" class="section history-section">
      <div class="section-heading">
        <span class="section-label">OUR BEGINNINGS</span>
        <h2>College History</h2>
        <p>Discover how the College of Computer Studies began and grew.</p>
      </div>

      <div class="history-content">
        <div class="history-year">
          <span>1995</span>
          <small>Where it began</small>
        </div>

        <div class="history-text">
          <h3>A Journey of Growth and Excellence</h3>
          <p>
            The College of Computer Studies traces its beginnings to 1995,
            when the Bachelor of Science in Computer Science program was
            established under the College of Commerce at Central Philippine
            University.
          </p>
          <p>
            In the following years, computing programs were brought together
            under the College of Computer Studies. The college continued to
            grow through new academic programs, improved facilities, and
            efforts to strengthen the quality of education.
          </p>
          <p>
            Today, CCS continues to prepare students for opportunities in
            computing, information technology, digital media, and information
            management.
          </p>
        </div>
      </div>
    </section>

    <!-- VISION AND MISSION -->
    <section id="vision-mission" class="section vision-section">
      <div class="section-heading light-heading">
        <span class="section-label">OUR DIRECTION</span>
        <h2>Vision and Mission</h2>
        <p>Guiding our commitment to quality education and lifelong learning.</p>
      </div>

      <div class="vision-grid">
        <article class="vision-card">
          <div class="card-icon">✦</div>
          <h3>Our Vision</h3>
          <p>
            The College of Computer Studies is founded on the vision of
            academic excellence in Information Technology Education and
            responsiveness to the needs of the total person and the world.
          </p>
        </article>

        <article class="vision-card">
          <div class="card-icon">◎</div>
          <h3>Our Mission</h3>
          <p>
            To educate students in the Christian principles and practices
            of computer studies, preparing them for advanced studies,
            careers in software development, computing systems technology,
            information management, and lifelong learning.
          </p>
        </article>
      </div>
    </section>

    <!-- MESSAGE OF THE DEAN -->
    <section id="dean-message" class="section dean-section">
      <div class="dean-content">
        <div class="dean-decoration">
          <span class="quote-mark">“</span>
          <h3>Learn. Grow. Achieve.</h3>
          <p>
            Your journey in knowledge and technology starts here.
          </p>
        </div>

        <div class="dean-message">
          <span class="section-label">A MESSAGE TO OUR STUDENTS</span>
          <h2>Message of the Dean</h2>

          <p>Dear CCS Students,</p>

          <p>
            Welcome to the College of Computer Studies! Every school year
            brings new opportunities to learn, grow, build friendships,
            and contribute to our university community.
          </p>

          <p>
            At CCS, we value teaching, learning, personal development,
            and experiences both inside and outside the classroom.
            Make the most of the opportunities available to you, work
            toward your dreams, and continue developing your skills
            and character.
          </p>

          <p>
            May you face every challenge with determination and make
            this school year a meaningful step toward your future.
          </p>

          <div class="dean-signature">
            <strong>Ma. Christina A. Quijano, MSCS</strong>
            <span>Dean, College of Computer Studies</span>
          </div>

          <p class="message-note">
            Note: This is a summarized welcome message, not a verbatim
            reproduction of the dean's official message.
          </p>
        </div>
      </div>
    </section>

    <!-- OBJECTIVES -->
    <section id="objectives" class="section objectives-section">
      <div class="section-heading">
        <span class="section-label">OUR GOALS</span>
        <h2>Educational Objectives</h2>
        <p>
          Developing competent, responsible, and future-ready graduates.
        </p>
      </div>

      <div class="objectives-grid">
        <article class="objective-card">
          <span class="objective-number">01</span>
          <h3>Skills, Knowledge, and Leadership</h3>
          <p>
            Develop the knowledge, technical skills, and leadership
            needed to succeed in computing and related careers.
          </p>
        </article>

        <article class="objective-card">
          <span class="objective-number">02</span>
          <h3>Professionalism and Teamwork</h3>
          <p>
            Practice professionalism and work effectively with people
            from different disciplines.
          </p>
        </article>

        <article class="objective-card">
          <span class="objective-number">03</span>
          <h3>Research and Community Outreach</h3>
          <p>
            Participate in research, scholarly activities, and outreach
            that help improve society.
          </p>
        </article>

        <article class="objective-card">
          <span class="objective-number">04</span>
          <h3>Ethics and Social Responsibility</h3>
          <p>
            Demonstrate ethical conduct, professional and spiritual
            values, and social responsibility.
          </p>
        </article>

        <article class="objective-card">
          <span class="objective-number">05</span>
          <h3>Digital Media Proficiency</h3>
          <p>
            Develop the ability to design and implement digital media
            solutions for creative and professional environments.
          </p>
        </article>
      </div>
    </section>

    <!-- CALL TO ACTION -->
    <section class="about-cta">
      <h2>Your Future Begins Here</h2>
      <p>
        Explore the opportunities and experiences offered by the
        College of Computer Studies.
      </p>
      <a href="#history" class="cta-button">Explore CCS</a>
    </section>
  </main>
</template>

<style scoped>
/* GENERAL */
* {
  box-sizing: border-box;
}

.about-page {
  color: #24352d;
  background: #ffffff;
  padding-top: 120px;
  font-family: Arial, Helvetica, sans-serif;
}

.section {
  padding: 80px 8%;
  scroll-margin-top: 140px;
}

.section-heading {
  max-width: 700px;
  margin: 0 auto 45px;
  text-align: center;
}

.section-label,
.eyebrow {
  color: #b58b45;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.section-heading h2,
.dean-message h2 {
  margin: 12px 0;
  color: #06452f;
  font-size: clamp(28px, 4vw, 40px);
}

.section-heading p {
  color: #68766e;
  line-height: 1.8;
}

/* HERO */
.about-hero {
  min-height: 390px;
  padding: 85px 8%;
  display: flex;
  align-items: center;
  background:
    linear-gradient(90deg, rgba(0, 40, 26, 0.96), rgba(0, 70, 45, 0.78)),
    linear-gradient(135deg, #06452f, #1b7752);
  color: white;
}

.hero-content {
  max-width: 760px;
}

.hero-content h1 {
  margin: 18px 0;
  font-size: clamp(34px, 5vw, 54px);
  line-height: 1.15;
}

.hero-content p {
  max-width: 600px;
  color: #e4eee8;
  line-height: 1.8;
}

.hero-button,
.cta-button {
  display: inline-block;
  margin-top: 18px;
  padding: 13px 24px;
  border-radius: 5px;
  background: #c49a50;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  transition: 0.25s;
}

.hero-button:hover,
.cta-button:hover {
  background: #a87c35;
  transform: translateY(-2px);
}

/* HISTORY */
.history-content {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 45px;
  align-items: start;
}

.history-year {
  padding: 28px 20px;
  border-left: 5px solid #c49a50;
  background: #f2f6f3;
}

.history-year span {
  display: block;
  color: #06452f;
  font-size: 42px;
  font-weight: 800;
}

.history-year small {
  color: #68766e;
}

.history-text h3 {
  margin-top: 0;
  color: #06452f;
  font-size: 24px;
}

.history-text p {
  color: #59675f;
  line-height: 1.9;
}

/* VISION AND MISSION */
.vision-section {
  background: #06452f;
}

.light-heading h2 {
  color: #ffffff;
}

.light-heading p {
  color: #d6e4dc;
}

.vision-grid {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
}

.vision-card {
  padding: 35px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.card-icon {
  color: #b58b45;
  font-size: 32px;
}

.vision-card h3 {
  color: #06452f;
  font-size: 23px;
}

.vision-card p {
  color: #59675f;
  line-height: 1.9;
}

/* DEAN MESSAGE */
.dean-section {
  background: #f5f7f5;
}

.dean-content {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 0.8fr 1.4fr;
  gap: 50px;
  align-items: start;
}

.dean-decoration {
  min-height: 300px;
  padding: 35px;
  border-radius: 10px;
  background: #06452f;
  color: #ffffff;
}

.quote-mark {
  color: #d4ad66;
  font-family: Georgia, serif;
  font-size: 90px;
  line-height: 1;
}

.dean-decoration h3 {
  font-size: 28px;
}

.dean-decoration p {
  color: #dce9e1;
  line-height: 1.8;
}

.dean-message h2 {
  margin-top: 12px;
}

.dean-message p {
  color: #59675f;
  line-height: 1.9;
}

.dean-signature {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 25px;
  padding-left: 15px;
  border-left: 4px solid #c49a50;
}

.dean-signature strong {
  color: #06452f;
}

.dean-signature span {
  color: #68766e;
  font-size: 14px;
}

.dean-message .message-note {
  margin-top: 20px;
  font-size: 12px;
  font-style: italic;
}

/* OBJECTIVES */
.objectives-grid {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.objective-card {
  padding: 28px;
  border: 1px solid #e1e9e3;
  border-radius: 9px;
  background: #ffffff;
  box-shadow: 0 5px 18px rgba(0, 50, 30, 0.05);
  transition: 0.25s;
}

.objective-card:hover {
  transform: translateY(-5px);
  border-color: #c49a50;
  box-shadow: 0 12px 25px rgba(0, 50, 30, 0.1);
}

.objective-number {
  color: #b58b45;
  font-size: 28px;
  font-weight: 800;
}

.objective-card h3 {
  color: #06452f;
  font-size: 19px;
  line-height: 1.5;
}

.objective-card p {
  color: #68766e;
  line-height: 1.8;
}

/* CALL TO ACTION */
.about-cta {
  padding: 65px 8%;
  background: #edf3ee;
  text-align: center;
}

.about-cta h2 {
  color: #06452f;
  font-size: clamp(28px, 4vw, 38px);
}

.about-cta p {
  max-width: 600px;
  margin: 0 auto;
  color: #68766e;
  line-height: 1.8;
}

.cta-button {
  background: #06452f;
}

.cta-button:hover {
  background: #086342;
}

/* RESPONSIVE DESIGN */
@media (max-width: 850px) {
  .objectives-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dean-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .dean-decoration {
    min-height: auto;
  }
}

@media (max-width: 600px) {
  .section {
    padding: 55px 6%;
  }

  .about-hero {
    min-height: 350px;
    padding: 65px 6%;
  }

  .history-content,
  .vision-grid,
  .objectives-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .history-year {
    padding: 20px;
  }

  .vision-card,
  .objective-card {
    padding: 25px;
  }
}
</style>
