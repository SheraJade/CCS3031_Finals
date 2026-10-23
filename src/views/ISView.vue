
<template>
  <section class="program-page">
    <!-- HERO -->
    <div class="hero">
      <span class="eyebrow">COLLEGE OF COMPUTER STUDIES</span>
      <h1>Information Systems</h1>
      <p class="subtitle">
        Connecting technology, business, and people to create
        effective solutions for organizations.
      </p>
      <a href="#about" class="hero-button">Explore the Program</a>
    </div>

    <!-- ABOUT -->
    <div id="about" class="content-section">
      <h2>About the Program</h2>
      <p>
        The Bachelor of Science in Information Systems (BSIS) focuses
        on using technology to improve business processes and solve
        organizational problems. Students learn how to understand
        business needs and develop information systems that help
        organizations work more efficiently.
      </p>
    </div>

    <!-- WHAT YOU WILL LEARN -->
    <div class="content-section learning-section">
      <h2>What You Will Learn</h2>

      <div class="cards">
        <div class="card">
          <h3>System Analysis</h3>
          <p>
            Learn to identify problems, gather requirements, and plan
            effective information systems.
          </p>
        </div>

        <div class="card">
          <h3>Database Management</h3>
          <p>
            Understand how to organize, store, and manage information
            for businesses and organizations.
          </p>
        </div>

        <div class="card">
          <h3>Business Technology</h3>
          <p>
            Explore how software and digital tools can improve
            workflows and support decision-making.
          </p>
        </div>
      </div>
    </div>

    <!-- CAREER OPPORTUNITIES -->
    <div class="content-section">
      <h2>Career Opportunities</h2>
      <p>
        Graduates may pursue careers such as:
      </p>

      <ul class="career-list">
        <li>Systems Analyst</li>
        <li>Business Analyst</li>
        <li>IT Project Coordinator</li>
        <li>Database Administrator</li>
        <li>Information Systems Specialist</li>
      </ul>
    </div>

    <!-- CTA -->
    <div class="program-cta">
      <h2>Build Your Future with Technology</h2>
      <p>
        Discover how information systems can connect business needs
        with practical technology solutions.
      </p>

      <router-link to="/" class="back-button">
        Back to Home
      </router-link>
    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.program-page {
  color: #26382e;
  background: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

/* HERO */
.hero {
  padding: 85px 8%;
  background: linear-gradient(135deg, #06452f, #28744e);
  color: #ffffff;
}

.eyebrow {
  color: #e1bd79;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
}

.hero h1 {
  margin: 18px 0;
  font-size: clamp(36px, 5vw, 55px);
}

.subtitle {
  max-width: 650px;
  color: #e2eee6;
  font-size: 18px;
  line-height: 1.8;
}

.hero-button {
  display: inline-block;
  margin-top: 18px;
  padding: 12px 22px;
  border-radius: 5px;
  background: #c49a50;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
}

.hero-button:hover {
  background: #a87c35;
}

/* CONTENT */
.content-section {
  max-width: 1150px;
  margin: auto;
  padding: 60px 7%;
}

.content-section h2 {
  margin-bottom: 18px;
  color: #06452f;
  font-size: 30px;
}

.content-section > p {
  color: #5d6b62;
  line-height: 1.9;
}

.learning-section {
  max-width: none;
  background: #f3f6f3;
}

.learning-section h2,
.learning-section .cards {
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 30px;
}

.card {
  padding: 25px;
  border: 1px solid #e1e9e3;
  border-radius: 8px;
  background: #ffffff;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  border-color: #c49a50;
}

.card h3 {
  color: #06452f;
  font-size: 19px;
}

.card p {
  color: #5d6b62;
  line-height: 1.8;
}

/* CAREER LIST */
.career-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  padding: 0;
  margin-top: 25px;
  list-style: none;
}

.career-list li {
  padding: 16px 20px;
  border-left: 4px solid #c49a50;
  background: #f3f6f3;
  color: #34483a;
}

/* CTA */
.program-cta {
  padding: 60px 7%;
  background: #06452f;
  color: #ffffff;
  text-align: center;
}

.program-cta h2 {
  font-size: clamp(26px, 4vw, 36px);
}

.program-cta p {
  max-width: 600px;
  margin: 15px auto;
  color: #e0ebe4;
  line-height: 1.8;
}

.back-button {
  display: inline-block;
  margin-top: 18px;
  padding: 12px 24px;
  border-radius: 5px;
  background: #c49a50;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
}

.back-button:hover {
  background: #a87c35;
}

/* RESPONSIVE */
@media (max-width: 700px) {
  .hero {
    padding: 65px 6%;
  }

  .content-section {
    padding: 45px 6%;
  }

  .cards,
  .career-list {
    grid-template-columns: 1fr;
  }
}
</style>
