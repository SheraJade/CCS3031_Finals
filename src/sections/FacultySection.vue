
<script setup>
import cantelImage from '@/assets/image/people/cantel (1).jpg'
</script>

<template>
  <div class="page" id="faculty">

    <!-- Page Header -->
    <header class="hero">
      <div class="container">
        <p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p>
        <h1>Meet Our Faculty <span>& Staff</span></h1>
        <p class="lead">
          Meet the educators, coordinators, and staff who inspire
          learning and support our students every day.
        </p>
        <div class="header-line"></div>
      </div>
    </header>

    <main class="container main">

      <!-- College Dean -->
      <section class="section">
        <p class="section-label">LEADERSHIP</p>
        <h2>College Dean</h2>

        <div class="people-grid one">
          <article class="person featured">
            <p class="role">College Dean</p>
            <img
              src="@/assets/image/people/quijano.png"
              alt="Ma. Christina A. Quijano"
            />
            <p class="department">College of Computer Studies</p>
            <h3>Ma. Christina A. Quijano, MSCS</h3>
          </article>
        </div>
      </section>

      <!-- Department Head and Coordinators -->
      <section class="section">
        <p class="section-label">ACADEMIC LEADERSHIP</p>
        <h2>Department Head and Coordinators</h2>

        <div class="people-grid one">
          <article class="person featured">
            <p class="role">Department Head</p>
            <img
              src="@/assets/image/people/balontongg.jpg"
              alt="Rea P. Balontong"
            />
            <p class="department">IT and IS Department</p>
            <h3>Rea P. Balontong, MBA</h3>
          </article>
        </div>

        <div class="people-grid three">

          <article class="person">
            <p class="role">Program Coordinator</p>
            <img
              src="@/assets/image/people/parreno.jpg"
              alt="Marjee Rose B. Parreño"
            />
            <p class="department">BSCS, BSDMIA, and MSCS Programs</p>
            <h3>Marjee Rose B. Parreño, MSCS, MBA</h3>
          </article>

          <article class="person">
            <p class="role">Program Coordinator</p>
            <img
              :src="cantelImage"
              alt="Ana Mae B. Cantel"
            />
            <p class="department">BLIS and MLIS Programs</p>
            <h3>Ana Mae B. Cantel, MLIS</h3>
          </article>

          <article class="person">
            <p class="role">Laboratory Coordinator</p>
            <img
              src="@/assets/image/people/pajar.jpg"
              alt="Lennon D. Pajar"
            />
            <p class="department">Computer Laboratory</p>
            <h3>Lennon D. Pajar</h3>
          </article>

        </div>
      </section>

      <!-- BSIT and BSIS Faculty -->
      <section class="section">
        <p class="section-label">OUR EDUCATORS</p>
        <h2>BSIT and BSIS Program</h2>

        <div class="people-grid three">

          <article class="person">
            <p class="role">Faculty</p>
            <img src="@/assets/image/people/beldia.jpg" alt="Leo Paulo B. Beldia" />
            <p class="department">BSIT and BSIS Program</p>
            <h3>Leo Paulo B. Beldia</h3>
          </article>

          <article class="person">
            <p class="role">Faculty</p>
            <img src="@/assets/image/people/dignadice.jpg" alt="Lesley Joy L. Dignadice" />
            <p class="department">BSIT and BSIS Program</p>
            <h3>Lesley Joy L. Dignadice, MBA</h3>
          </article>

          <article class="person">
            <p class="role">Faculty</p>
            <img src="@/assets/image/people/eregia.jpg" alt="Rodolfo C. Eregia Jr." />
            <p class="department">BSIT and BSIS Program</p>
            <h3>Rodolfo C. Eregia, Jr.</h3>
          </article>

          <article class="person">
            <p class="role">Faculty</p>
            <img src="@/assets/image/people/jardleza.jpg" alt="Donie S. Jardeleza" />
            <p class="department">BSIT and BSIS Program</p>
            <h3>Donie S. Jardeleza, MSCS</h3>
          </article>

          <article class="person">
            <p class="role">Faculty</p>
            <img src="@/assets/image/people/montano.jpg" alt="Antonio M. Montaño Jr." />
            <p class="department">BSIT and BSIS Program</p>
            <h3>Antonio M. Montaño, Jr.</h3>
          </article>

          <article class="person">
            <p class="role">Faculty</p>
            <img src="@/assets/image/people/oja.jpg" alt="Rose Leah Joy A. Ojacastro" />
            <p class="department">BSIT and BSIS Program</p>
            <h3>Rose Leah Joy A. Ojacastro, MSCS</h3>
          </article>

        </div>
      </section>

      <!-- BSCS Faculty -->
      <section class="section">
        <p class="section-label">COMPUTER SCIENCE</p>
        <h2>BSCS Program</h2>

        <div class="people-grid two">

          <article class="person">
            <p class="role">Faculty</p>
            <img
              src="@/assets/image/people/cambronero.jpg"
              alt="Pedro Peter Rhys B. Cambronero"
            />
            <p class="department">BSCS Program</p>
            <h3>Pedro Peter Rhys B. Cambronero, MSCS</h3>
          </article>

          <article class="person">
            <p class="role">Faculty</p>
            <img
              src="@/assets/image/people/sapul.jpg"
              alt="Ma. Sheila C. Sapul"
            />
            <p class="department">BSCS Program</p>
            <h3>Ma. Sheila C. Sapul, Ph. D.</h3>
          </article>

        </div>
      </section>

      <!-- BSDMIA Faculty -->
      <section class="section">
        <p class="section-label">DATA AND INFORMATION</p>
        <h2>BSDMIA Program</h2>

        <p class="notice">
          Faculty profiles will be added after the official
          teaching assignments are verified.
        </p>
      </section>

      <!-- BLIS Faculty -->
      <section class="section">
        <p class="section-label">LIBRARY AND INFORMATION SCIENCE</p>
        <h2>BLIS Program</h2>

        <p class="notice">
          Faculty profiles will be added after the official
          teaching assignments are verified.
        </p>
      </section>

      <!-- Staff -->
      <section class="section">
        <p class="section-label">HERE TO HELP</p>
        <h2>Our Staff</h2>

        <div class="people-grid four">

          <article class="person">
            <p class="role">Secretary</p>
            <img src="@/assets/image/people/castano.jpg" alt="Chrislyn C. Castaño" />
            <p class="department">College of Computer Studies</p>
            <h3>Chrislyn C. Castaño</h3>
          </article>

          <article class="person">
            <p class="role">Computer Laboratory Technician</p>
            <img src="@/assets/image/people/taasan.jpg" alt="A.M.P. Latter P. Taasan" />
            <p class="department">Computer Laboratory</p>
            <h3>A.M.P. Latter P. Taasan</h3>
          </article>

          <article class="person">
            <p class="role">Guidance Counselor</p>
            <img src="@/assets/image/people/ador.jpg" alt="Chriselda Elaine Ador" />
            <p class="department">Student Guidance and Support</p>
            <h3>Chriselda Elaine Ador</h3>
          </article>

          <article class="person">
            <p class="role">Library Liaison Officer</p>
            <img src="@/assets/image/people/rivera.png" alt="Donna May Rivera" />
            <p class="department">Library Services</p>
            <h3>Donna May Rivera</h3>
          </article>

        </div>
      </section>

    </main>

    <footer class="footer">
      <p>College of Computer Studies</p>
      <p>Inspiring knowledge. Building futures.</p>
    </footer>

  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background-color: #ffffff;
  color: #10916f;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.hero {
  padding: 180px 0 90px;
  text-align: center;
  color: white;
  background: linear-gradient(135deg, #10916f, #1e7258);
  border-bottom: 4px solid #e5b94f;
}

.eyebrow {
  margin: 0 0 12px;
  color: #e5b94f;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

.hero h1 {
  margin: 0 0 18px;
  color: white;
  font-size: 42px;
  line-height: 1.25;
}

.hero h1 span {
  color: #e5b94f;
}

.lead {
  max-width: 600px;
  margin: 0 auto;
  color: #e2f1e8;
  font-size: 16px;
  line-height: 1.8;
}

.header-line {
  width: 75px;
  height: 4px;
  margin: 24px auto 0;
  border-radius: 5px;
  background-color: #e5b94f;
}

/* Main Content */
.main {
  padding-top: 45px;
  padding-bottom: 45px;
}

.section {
  margin-bottom: 60px;
}

.section h2 {
  margin: 0 0 28px;
  color: #000000;
  font-size: 26px;
  text-align: center;
}

.section-label {
  margin: 0 0 8px;
  color: #cc9f34;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
}

/* Faculty Cards */
.people-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 22px;
  margin-bottom: 25px;
}

.one {
  grid-template-columns: 1fr;
  max-width: 340px;
  margin: 0 auto 25px;
}

.two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 750px;
  margin: 0 auto;
}

.four {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.person {
  padding: 25px 18px;
  border: 1px solid #e5b94f;
  border-top: 4px solid #e5b94f;
  border-radius: 14px;
  background-color: #fffdf7;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 30, 20, 0.12);
  transition: transform 0.2s, box-shadow 0.2s;
}

.person:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 22px rgba(0, 30, 20, 0.25);
}

.person img {
  display: block;
  width: 190px;
  height: 210px;
  max-width: 100%;
  margin: 0 auto 18px;
  border: 3px solid #f8e7ae;
  border-radius: 12px;
  object-fit: cover;
  object-position: center 25%;
}

.featured {
  border-top: 5px solid #e5b94f;
}

.featured img {
  width: 210px;
  height: 230px;
}

.role {
  min-height: 22px;
  margin: 0 0 15px;
  color: #087653;
  font-size: 13px;
  font-weight: bold;
}

.department {
  margin: 0;
  color: #567166;
  font-size: 13px;
  line-height: 1.6;
}

.person h3 {
  margin: 8px 0 0;
  color: #484f0a;
  font-size: 16px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

/* Unverified Faculty Information */
.notice {
  max-width: 700px;
  margin: 0 auto;
  padding: 22px;
  border: 1px solid #e5b94f;
  border-radius: 12px;
  background-color: #fffdf7;
  color: #567166;
  text-align: center;
  line-height: 1.8;
}

/* Footer */
.footer {
  padding: 28px 20px;
  border-top: 3px solid #e5b94f;
  background-color: #10916f;
  color: #e2f1e8;
  text-align: center;
  font-size: 13px;
}

.footer p {
  margin: 5px 0;
}

.footer p:last-child {
  color: #e5b94f;
}

/* Tablet */
@media (max-width: 900px) {
  .people-grid,
  .four {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Mobile */
@media (max-width: 600px) {
  .container {
    padding: 0 16px;
  }

  .hero {
    padding: 45px 0;
  }

  .hero h1 {
    font-size: 32px;
  }

  .lead {
    font-size: 14px;
  }

  .section {
    margin-bottom: 45px;
  }

  .section h2 {
    font-size: 22px;
  }

  .people-grid,
  .four,
  .two {
    grid-template-columns: 1fr;
    max-width: 380px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
