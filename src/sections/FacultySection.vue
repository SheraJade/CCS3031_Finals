
<template>
  <div class="dmia-page">
    <!-- Header -->
    <header class="hero">
      <p>COLLEGE OF COMPUTER STUDIES</p>
      <h1>Bachelor of Science in</h1>
      <h2>Digital Media and Interactive Arts</h2>
      <p>
        Combining creativity, technology, and digital innovation.
      </p>
    </header>

    <!-- Overview -->
    <section class="section">
      <h2>Program Overview</h2>
      <p>
        The Bachelor of Science in Digital Media and Interactive Arts
        (BSDMIA) develops students' creative and technical skills in
        traditional arts, digital media, animation, and interactive
        experiences for entertainment and corporate applications.
      </p>
    </section>

    <!-- Objectives -->
    <section class="section light">
      <h2>Program Educational Objectives</h2>

      <div class="cards">
        <article class="card">
          <h3>Knowledge and Leadership</h3>
          <p>Develop knowledge, skills, and leadership in technology careers.</p>
        </article>

        <article class="card">
          <h3>Professionalism</h3>
          <p>Work professionally and effectively with different teams.</p>
        </article>

        <article class="card">
          <h3>Research and Service</h3>
          <p>Participate in research and outreach activities for society.</p>
        </article>

        <article class="card">
          <h3>Ethics and Responsibility</h3>
          <p>Practice ethical values and social responsibility.</p>
        </article>

        <article class="card">
          <h3>Digital Media Skills</h3>
          <p>Use traditional and digital arts for creative solutions.</p>
        </article>
      </div>
    </section>

    <!-- Areas of Study -->
    <section class="section">
      <h2>Areas of Study</h2>

      <div class="cards">
        <article class="card">
          <h3>Video Editing</h3>
          <p>Create and edit video content.</p>
        </article>

        <article class="card">
          <h3>Animation</h3>
          <p>Create movement and visual stories.</p>
        </article>

        <article class="card">
          <h3>3D Modeling</h3>
          <p>Design three-dimensional objects.</p>
        </article>

        <article class="card">
          <h3>Photography</h3>
          <p>Capture images and tell stories visually.</p>
        </article>

        <article class="card">
          <h3>Graphic Design</h3>
          <p>Create designs using images, colors, and typography.</p>
        </article>

        <article class="card">
          <h3>Game Design</h3>
          <p>Develop ideas for interactive games.</p>
        </article>

        <article class="card">
          <h3>Virtual Reality</h3>
          <p>Explore immersive digital environments.</p>
        </article>
      </div>
    </section>

    <!-- Images -->
    <section class="section light">
      <h2>Digital Media and Interactive Arts</h2>

      <div class="image-grid">
        <img
          src="/src/assets/image/people/parreno.jpg"
          alt="Digital Media and Interactive Arts"
        />

        <img
          src="/src/assets/image/people/parreno.jpg"
          alt="Digital Media and Interactive Arts"
        />
      </div>
    </section>

    <!-- Careers -->
    <section class="section">
      <h2>Career Opportunities</h2>

      <div class="careers">
        <span>Animator</span>
        <span>Graphic Designer</span>
        <span>Game Designer</span>
        <span>Web Designer</span>
        <span>Multimedia Artist</span>
        <span>Advertising Executive</span>
        <span>Art Director</span>
        <span>Digital Artist</span>
        <span>Freelance Artist</span>
      </div>
    </section>

    <!-- Program Outcomes -->
    <section class="section light">
      <h2>Program Outcomes</h2>

      <div class="outcomes">
        <p><strong>DMIA01:</strong> Apply knowledge of mathematics and media arts.</p>
        <p><strong>DMIA02:</strong> Identify user needs and create appropriate solutions.</p>
        <p><strong>DMIA03:</strong> Combine traditional arts and digital media.</p>
        <p><strong>DMIA04:</strong> Apply digital media in entertainment and corporate settings.</p>
        <p><strong>DMIA05:</strong> Use current digital media tools and techniques.</p>
        <p><strong>DMIA06:</strong> Work effectively in a team.</p>
        <p><strong>DMIA07:</strong> Practice ethical, legal, and social responsibility.</p>
        <p><strong>DMIA08:</strong> Communicate effectively.</p>
        <p><strong>DMIA09:</strong> Understand current digital media practices and issues.</p>
        <p><strong>DMIA10:</strong> Continue learning and developing professional skills.</p>
      </div>
    </section>

    <!-- Coordinator -->
    <section class="section">
      <h2>Program Coordinator</h2>

      <div class="coordinator">
        <img
          src="/src/assets/image/people/parreno.jpg"
          alt="Ma'am Pinky"
        />

        <div>
          <h3>Marjee Rose B. Parreño</h3>
          <p>MSCS, MBA</p>
          <p>BSDMIA Program Coordinator</p>
          <p>College of Computer Studies</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>College of Computer Studies | BSDMIA</p>
    </footer>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.dmia-page {
  font-family: Arial, sans-serif;
  color: #26372d;
  line-height: 1.6;
}

.hero {
  padding: 65px 20px;
  text-align: center;
  color: white;
  background: #155b3b;
}

.hero p:first-child {
  color: #e0bd58;
  font-weight: bold;
  letter-spacing: 2px;
}

.hero h1 {
  margin-bottom: 5px;
  font-size: 2rem;
}

.hero h2 {
  margin-top: 5px;
  color: #e0bd58;
  font-size: 2.2rem;
}

.section {
  max-width: 1100px;
  margin: auto;
  padding: 45px 25px;
}

.section h2 {
  margin-bottom: 25px;
  color: #155b3b;
  text-align: center;
}

.light {
  max-width: none;
  background: #f7f7f0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  max-width: 1050px;
  margin: auto;
}

.card {
  padding: 20px;
  border: 1px solid #e4e5dc;
  border-top: 4px solid #d5aa42;
  border-radius: 8px;
  background: white;
}

.card h3 {
  color: #155b3b;
}

.card p {
  margin-bottom: 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  max-width: 850px;
  margin: auto;
}

.image-grid img {
  width: 100%;
  height: 280px;
  border-radius: 8px;
  object-fit: cover;
}

.careers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.careers span {
  padding: 10px 16px;
  border-radius: 5px;
  background: #155b3b;
  color: white;
}

.outcomes {
  max-width: 850px;
  margin: auto;
}

.outcomes p {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.outcomes strong {
  color: #155b3b;
}

.coordinator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  max-width: 650px;
  margin: auto;
  padding: 25px;
  border-radius: 8px;
  background: #f7f7f0;
}

.coordinator img {
  width: 160px;
  height: 180px;
  border-radius: 8px;
  object-fit: cover;
}

.coordinator h3 {
  color: #155b3b;
}

.footer {
  padding: 20px;
  background: #103f2b;
  color: white;
  text-align: center;
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero h2 {
    font-size: 1.7rem;
  }
}

@media (max-width: 480px) {
  .cards,
  .image-grid {
    grid-template-columns: 1fr;
  }

  .coordinator {
    flex-direction: column;
    text-align: center;
  }
}
</style>
