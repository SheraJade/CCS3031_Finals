
<script setup>
import cantelImage from '@/assets/image/people/cantel (1).jpg'
import adorImage from '@/assets/image/people/ador.jpg'
</script>

<template>
  <div class="page" id="faculty">

    <!-- Page Header -->
    <header class="hero">
      <div class="container">
        <p class="eyebrow">College of Computer Studies</p>
        <h1>Meet Our Faculty <span>&amp; Staff</span></h1>
        <p class="lead">
          Meet the educators, coordinators, and staff who inspire learning
          and support our students every day.
        </p>
      </div>
    </header>

    <main class="container main">

      <!-- College Dean -->
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">College Leadership</p>
          <h2>College Dean</h2>
        </div>

        <div class="featured-grid">
          <article class="person featured-card">
            <p class="role-label">College Dean</p>

            <div class="image">
              <img
                src="@/assets/image/people/quijano.png"
                alt="Ma. Christina A. Quijano"
              />
            </div>

            <p class="department">College of Computer Studies</p>
            <h3>Ma. Christina A. Quijano, MSCS</h3>
          </article>
        </div>
      </section>

      <!-- Department Head -->
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Academic Leadership</p>
          <h2>Department Head and Coordinators</h2>
        </div>

        <div class="featured-grid department-head">
          <article class="person featured-card">
            <p class="role-label">Department Head</p>

            <div class="image">
              <img
                src="@/assets/image/people/balontongg.jpg"
                alt="Rea P. Balontong"
              />
            </div>

            <p class="department">IT and IS Department</p>
            <h3>Rea P. Balontong, MBA</h3>
          </article>
        </div>

        <!-- Coordinators -->
        <div class="people-grid three-columns">

          <article class="person">
            <p class="role-label">Program Coordinator</p>

            <div class="image">
              <img
                src="@/assets/image/people/parreno.jpg"
                alt="Marjee Rose B. Parreño"
              />
            </div>

            <p class="department">
              BSCS, BSDMIA, and MSCS Programs
            </p>
            <h3>Marjee Rose B. Parreño, MSCS, MBA</h3>
          </article>

          <article class="person">
            <p class="role-label">Program Coordinator</p>

            <div class="image">
              <img
                :src="cantelImage"
                alt="Ana Mae B. Cantel"
              />
            </div>

            <p class="department">BLIS and MLIS Programs</p>
            <h3>Ana Mae B. Cantel, MLIS</h3>
          </article>

          <article class="person">
            <p class="role-label">Laboratory Coordinator</p>

            <div class="image">
              <img
                src="@/assets/image/people/pajar.jpg"
                alt="Lennon D. Pajar"
              />
            </div>

            <p class="department">Computer Laboratory</p>
            <h3>Lennon D. Pajar</h3>
          </article>

        </div>
      </section>

      <!-- Faculty Members -->
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Our Educators</p>
          <h2>Faculty by Program</h2>
          <p class="section-description">
            Explore the faculty members listed under their assigned programs.
          </p>
        </div>

        <!-- BSIT and BSIS -->
        <div class="program-group">
          <h3 class="program-heading">BSIT and BSIS Program</h3>

          <div class="people-grid">

            <article class="person">
              <p class="role-label">Faculty</p>
              <div class="image">
                <img
                  src="@/assets/image/people/beldia.jpg"
                  alt="Leo Paulo B. Beldia"
                />
              </div>
              <p class="department">BSIT and BSIS Program</p>
              <h3>Leo Paulo B. Beldia</h3>
            </article>

            <article class="person">
              <p class="role-label">Faculty</p>
              <div class="image">
                <img
                  src="@/assets/image/people/dignadice.jpg"
                  alt="Lesley Joy L. Dignadice"
                />
              </div>
              <p class="department">BSIT and BSIS Program</p>
              <h3>Lesley Joy L. Dignadice, MBA</h3>
            </article>

            <article class="person">
              <p class="role-label">Faculty</p>
              <div class="image">
                <img
                  src="@/assets/image/people/eregia.jpg"
                  alt="Rodolfo C. Eregia Jr."
                />
              </div>
              <p class="department">BSIT and BSIS Program</p>
              <h3>Rodolfo C. Eregia, Jr.</h3>
            </article>

            <article class="person">
              <p class="role-label">Faculty</p>
              <div class="image">
                <img
                  src="@/assets/image/people/jardleza.jpg"
                  alt="Donie S. Jardeleza"
                />
              </div>
              <p class="department">BSIT and BSIS Program</p>
              <h3>Donie S. Jardeleza, MSCS</h3>
            </article>

            <article class="person">
              <p class="role-label">Faculty</p>
              <div class="image">
                <img
                  src="@/assets/image/people/montano.jpg"
                  alt="Antonio M. Montaño Jr."
                />
              </div>
              <p class="department">BSIT and BSIS Program</p>
              <h3>Antonio M. Montaño, Jr.</h3>
            </article>

            <article class="person">
              <p class="role-label">Faculty</p>
              <div class="image">
                <img
                  src="@/assets/image/people/oja.jpg"
                  alt="Rose Leah Joy A. Ojacastro"
                />
              </div>
              <p class="department">BSIT and BSIS Program</p>
              <h3>Rose Leah Joy A. Ojacastro, MSCS</h3>
            </article>

          </div>
        </div>

        <!-- BSCS -->
        <div class="program-group">
          <h3 class="program-heading">BSCS Program</h3>

          <div class="people-grid two-columns">

            <article class="person">
              <p class="role-label">Faculty</p>
              <div class="image">
                <img
                  src="@/assets/image/people/cambronero.jpg"
                  alt="Pedro Peter Rhys B. Cambronero"
                />
              </div>
              <p class="department">BSCS Program</p>
              <h3>Pedro Peter Rhys B. Cambronero, MSCS</h3>
            </article>

            <article class="person">
              <p class="role-label">Faculty</p>
              <div class="image">
                <img
                  src="@/assets/image/people/sapul.jpg"
                  alt="Ma. Sheila C. Sapul"
                />
              </div>
              <p class="department">BSCS Program</p>
              <h3>Ma. Sheila C. Sapul, Ph. D.</h3>
            </article>

          </div>
        </div>

        <!-- BSDMIA -->
        <div class="program-group">
          <h3 class="program-heading">BSDMIA Program</h3>

          <div class="program-note">
            <p>
              Individual faculty details for the BSDMIA Program
              have not yet been added.
            </p>
          </div>
        </div>

        <!-- BLIS -->
        <div class="program-group">
          <h3 class="program-heading">BLIS Program</h3>

          <div class="program-note">
            <p>
              Individual faculty details for the BLIS Program
              have not yet been added.
            </p>
          </div>
        </div>
      </section>

      <!-- Staff -->
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Here to Help</p>
          <h2>Staff</h2>
        </div>

        <div class="people-grid four-columns">

          <article class="person">
            <p class="role-label">Secretary</p>
            <div class="image">
              <img
                src="@/assets/image/people/castano.jpg"
                alt="Chrislyn C. Castaño"
              />
            </div>
            <p class="department">College of Computer Studies</p>
            <h3>Chrislyn C. Castaño</h3>
          </article>

          <article class="person">
            <p class="role-label">Computer Laboratory Technician</p>
            <div class="image">
              <img
                src="@/assets/image/people/taasan.jpg"
                alt="A.M.P. Latter P. Taasan"
              />
            </div>
            <p class="department">Computer Laboratory</p>
            <h3>A.M.P. Latter P. Taasan</h3>
          </article>

          <article class="person">
            <p class="role-label">Guidance Counselor</p>
            <div class="image">
              <img
                :src="adorImage"
                alt="Chriselda Elaine Ador"
              />
            </div>
            <p class="department">Student Guidance and Support</p>
            <h3>Chriselda Elaine Ador</h3>
          </article>

          <article class="person">
            <p class="role-label">Library Liaison Officer</p>
            <div class="image">
              <img
                src="@/assets/image/people/rivera.png"
                alt="Donna May Rivera"
              />
            </div>
            <p class="department">Library Services</p>
            <h3>Donna May Rivera</h3>
          </article>

        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <p>College of Computer Studies</p>
      <p>Faculty and Staff</p>
    </footer>

  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background-color: #fbfaf6;
  color: #17382d;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Page Header */
.hero {
  background-color: #064e3b;
  background-image: linear-gradient(135deg, #087653, #064e3b);
  color: #ffffff;
  padding: 180px 0 80px;
  text-align: center;
  border-bottom: 4px solid #e5b94f;
}

.eyebrow {
  margin: 0 0 10px;
  color: #b9953b;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
}

.hero .eyebrow {
  color: #f8e7ae;
}

.hero h1 {
  margin: 0;
  color: #fffdf6;
  font-size: 38px;
  line-height: 1.25;
}

.hero h1 span {
  color: #e5b94f;
}

.lead {
  max-width: 620px;
  margin: 18px auto 0;
  color: #e2f1e8;
  font-size: 16px;
  line-height: 1.8;
}

/* Main Content */
.main {
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding-top: 55px;
  padding-bottom: 60px;
}

.section {
  width: 100%;
}

.section-heading {
  margin-bottom: 30px;
  text-align: center;
}

.section-heading .eyebrow {
  color: #8a7850;
}

.section-heading h2 {
  margin: 0;
  color: #064e3b;
  font-size: 28px;
  line-height: 1.35;
}

.section-description {
  max-width: 600px;
  margin: 12px auto 0;
  color: #64766c;
  font-size: 14px;
  line-height: 1.7;
}

/* Faculty Cards */
.person {
  display: flex;
  width: 100%;
  min-width: 0;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 24px 18px;
  border: 1px solid #e5d8b5;
  border-radius: 10px;
  background-color: #fffdf7;
  text-align: center;
  box-shadow: 0 5px 16px rgba(6, 78, 59, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.person:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(6, 78, 59, 0.15);
}

.role-label {
  min-height: 20px;
  margin: 0 0 15px;
  color: #087653;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.5;
}

.image {
  display: flex;
  width: 100%;
  max-width: 200px;
  height: 220px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 18px;
  border: 3px solid #f8e7ae;
  border-radius: 8px;
  background-color: #e0eee5;
}

.image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}

.person h3 {
  margin: 8px 0 0;
  color: #064e3b;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.department {
  margin: 0;
  color: #567166;
  font-size: 13px;
  line-height: 1.6;
}

/* Featured Cards */
.featured-grid {
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
}

.featured-card {
  max-width: 350px;
  padding: 28px 24px;
  border-top: 4px solid #e5b94f;
}

.featured-card .image {
  max-width: 245px;
  height: 270px;
}

.featured-card h3 {
  font-size: 19px;
}

.department-head .featured-card {
  max-width: 310px;
}

.department-head .image {
  max-width: 205px;
  height: 225px;
}

/* Grid Layouts */
.people-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 22px;
}

.three-columns {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.two-columns {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 790px;
  margin: 0 auto;
}

.four-columns {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.four-columns .person {
  padding-right: 14px;
  padding-left: 14px;
}

.four-columns .image {
  max-width: 180px;
  height: 200px;
}

/* Program Sections */
.program-group {
  margin-bottom: 40px;
}

.program-group:last-child {
  margin-bottom: 0;
}

.program-heading {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 22px;
  color: #064e3b;
  font-size: 20px;
  line-height: 1.5;
}

.program-heading::after {
  height: 1px;
  flex: 1;
  content: "";
  background-color: #d5dfd8;
}

.program-note {
  padding: 22px;
  border: 1px solid #e2e8e3;
  border-radius: 8px;
  background-color: #ffffff;
  color: #64766c;
  font-size: 14px;
  line-height: 1.7;
  text-align: center;
}

.program-note p {
  margin: 0;
}

/* Footer */
.site-footer {
  padding: 25px 20px;
  border-top: 1px solid #e2e8e3;
  background-color: #064e3b;
  color: #e2f1e8;
  text-align: center;
  font-size: 13px;
  line-height: 1.6;
}

.site-footer p {
  margin: 3px 0;
}

/* Tablet */
@media (max-width: 1000px) {
  .people-grid,
  .three-columns,
  .four-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .container {
    padding-right: 24px;
    padding-left: 24px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .container {
    padding-right: 59px;
    padding-left: 16px;
  }

  .hero {
    padding: 160px 0 80px;
  }

  .hero h1 {
    font-size: 29px;
  }

  .lead {
    font-size: 14px;
  }

  .main {
    gap: 42px;
    padding-top: 160px;
    padding-bottom: 45px;
  }

  .section-heading {
    margin-bottom: 24px;
  }

  .section-heading h2 {
    font-size: 23px;
  }

  .people-grid,
  .three-columns,
  .two-columns,
  .four-columns {
    grid-template-columns: minmax(0, 1fr);
    width: 100%;
    max-width: 390px;
    margin-right: auto;
    margin-left: auto;
  }

  .person {
    padding: 22px 18px;
  }

  .image {
    max-width: 230px;
    height: 245px;
  }

  .program-heading {
    font-size: 17px;
  }

  .featured-card .image {
    max-width: 230px;
    height: 250px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .person {
    transition: none;
  }

  .person:hover {
    transform: none;
  }
}
</style>
