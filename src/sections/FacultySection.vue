
<template>
  <main class="faculty-page" id="faculty">
    <div class="container">

      <!-- 1. PAGE HEADER -->
      <header class="page-header">
        <p class="eyebrow">Teaching as a Way of Life</p>
        <h1>Faculty and Staff</h1>
        <p class="intro">
          Meet the educators, coordinators, and staff who support
          the College of Computer Studies.
        </p>
        <div class="header-line" aria-hidden="true"></div>
      </header>

      <!-- 2. COLLEGE DEAN -->
      <section class="faculty-section">
        <SectionHeading
          eyebrow="College Leadership"
          title="College Dean"
        />

        <div class="dean-layout">
          <article class="person dean-card">
            <p class="role-label">College Dean</p>

            <div class="image">
              <img
                src="@/assets/image/people/quijano.png"
                alt="Ma. Christina A. Quijano"
              />
            </div>

            <p class="department">College of Computer Studies</p>
            <h3 class="person-name">Ma. Christina A. Quijano, MSCS</h3>
          </article>
        </div>
      </section>

      <!-- 3. DEPARTMENT HEAD AND COORDINATORS -->
      <section class="faculty-section">
        <SectionHeading
          eyebrow="Academic Leadership"
          title="Department Head and Coordinators"
        />

        <!-- Department Head is centered above the coordinators -->
        <div class="department-head-layout">
          <article class="person department-head-card">
            <p class="role-label">Department Head</p>

            <div class="image">
              <img
                src="@/assets/image/people/balontongg.jpg"
                alt="Rea P. Balontong"
              />
            </div>

            <p class="department">IT and IS Department</p>
            <h3 class="person-name">Rea P. Balontong, MBA</h3>
          </article>
        </div>

        <!-- Coordinators share one evenly aligned row -->
        <div class="coordinator-grid">

          <article class="person">
            <p class="role-label">Program Coordinator</p>

            <div class="image">
              <img
                src="@/assets/image/people/parreno.jpg"
                alt="Marjee Rose B. Parreño"
              />
            </div>

            <p class="department">BSCS, BSDMIA, and MSCS Programs</p>
            <h3 class="person-name">
              Marjee Rose B. Parreño, MSCS, MBA
            </h3>
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
            <h3 class="person-name">Ana Mae B. Cantel, MLIS</h3>
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
            <h3 class="person-name">Lennon D. Pajar</h3>
          </article>

        </div>
      </section>

      <!-- 4. FACULTY MEMBERS -->
      <section class="faculty-section">
        <SectionHeading
          eyebrow="Our Educators"
          title="Faculty by Program"
        />

        <!-- BSIT AND BSIS -->
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
              <h3 class="person-name">Leo Paulo B. Beldia</h3>
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
              <h3 class="person-name">Lesley Joy L. Dignadice, MBA</h3>
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
              <h3 class="person-name">Rodolfo C. Eregia, Jr.</h3>
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
              <h3 class="person-name">Donie S. Jardeleza, MSCS</h3>
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
              <h3 class="person-name">Antonio M. Montaño, Jr.</h3>
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
              <h3 class="person-name">Rose Leah Joy A. Ojacastro, MSCS</h3>
            </article>

          </div>
        </div>

        <!-- BSCS -->
        <div class="program-group">
          <h3 class="program-heading">BSCS Program</h3>

          <div class="people-grid people-grid--two">

            <article class="person">
              <p class="role-label">Faculty</p>
              <div class="image">
                <img
                  src="@/assets/image/people/cambronero.jpg"
                  alt="Pedro Peter Rhys B. Cambronero"
                />
              </div>
              <p class="department">BSCS Program</p>
              <h3 class="person-name">
                Pedro Peter Rhys B. Cambronero, MSCS
              </h3>
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
              <h3 class="person-name">Ma. Sheila C. Sapul, Ph. D.</h3>
            </article>

          </div>
        </div>
      </section>

      <!-- 5. STAFF -->
      <section class="faculty-section">
        <SectionHeading
          eyebrow="Here to Help"
          title="Staff"
        />

        <div class="staff-grid">

          <article class="person">
            <p class="role-label">Secretary</p>
            <div class="image">
              <img
                src="@/assets/image/people/castano.jpg"
                alt="Chrislyn C. Castaño"
              />
            </div>
            <p class="department">College of Computer Studies</p>
            <h3 class="person-name">Chrislyn C. Castaño</h3>
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
            <h3 class="person-name">A.M.P. Latter P. Taasan</h3>
          </article>

          <article class="person">
            <p class="role-label">Guidance Counselor</p>
            <div class="image placeholder" aria-label="Photo unavailable">
              CA
            </div>
            <p class="department">Student Guidance and Support</p>
            <h3 class="person-name">Chriselda Elaine Ador</h3>
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
            <h3 class="person-name">Donna May Rivera</h3>
          </article>

        </div>
      </section>

    </div>
  </main>
</template>

<script setup>
// 6. IMPORTS
import { h } from 'vue'

// The filename includes a space and parentheses.
// Importing it here allows Vite to resolve the image correctly.
import cantelImage from '@/assets/image/people/cantel (1).jpg'

// Reusable section heading used throughout the page.
const SectionHeading = (props) =>
  h('div', { class: 'section-title' }, [
    h('p', { class: 'eyebrow' }, props.eyebrow),
    h('h2', props.title)
  ])
</script>

<style scoped>
/* 7. MAIN PAGE THEME */
.faculty-page {
  --green-dark: #484f0a;
  --green: #087653;
  --green-light: #e8f4ec;
  --gold: #e5b94f;
  --gold-light: #f8e7ae;
  --text: #17382d;
  --muted: #567166;

  min-height: 60vh;
  padding: 76px 28px;
  scroll-margin-top: 100px;
  color: var(--text);
  background:
    radial-gradient(
      ellipse at top,
      rgba(229, 185, 79, 0.13),
      transparent 38%
    ),
    linear-gradient(
      145deg,
      #064e3b 0%,
      #087653 58%,
      #07553f 100%
    );
}

.container {
  width: min(100%, 1180px);
  margin: 0 auto;
}

/* 8. PAGE HEADER */
.page-header {
  max-width: 760px;
  margin: 0 auto 68px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--gold);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  line-height: 1.5;
  text-transform: uppercase;
}

.page-header h1 {
  margin: 0;
  color: #fffdf6;
  font-size: clamp(2.25rem, 5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.12;
}

.intro {
  max-width: 590px;
  margin: 18px auto 0;
  color: #e2f1e8;
  font-size: 1rem;
  line-height: 1.8;
}

.header-line {
  width: 76px;
  height: 4px;
  margin: 25px auto 0;
  border-radius: 999px;
  background: var(--gold);
}

/* 9. SECTION SPACING AND TITLES */
.faculty-section {
  margin-bottom: 76px;
}

.section-title {
  margin-bottom: 30px;
  text-align: center;
}

.section-title h2 {
  margin: 0;
  color: #fffdf6;
  font-size: clamp(1.55rem, 3vw, 2rem);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

/* 10. GENERAL PROFILE CARDS */
.person {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 24px 20px 26px;
  border: 1px solid rgba(229, 185, 79, 0.75);
  border-radius: 18px;
  background: #fffdf7;
  text-align: center;
  box-shadow: 0 10px 26px rgba(0, 30, 20, 0.15);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
}

.person:hover {
  transform: translateY(-5px);
  border-color: var(--gold);
  box-shadow: 0 16px 34px rgba(0, 25, 17, 0.24);
}

.role-label {
  min-height: 22px;
  margin: 0 0 16px;
  color: var(--green);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.025em;
  line-height: 1.4;
}

.department {
  margin: 0;
  color: var(--muted);
  font-size: 0.84rem;
  line-height: 1.55;
}

.person-name {
  margin: 9px 0 0;
  color: var(--green-dark);
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

/* 11. PROFILE PHOTOS
   Fixed image dimensions prevent oversized photos. */
.person .image {
  display: flex;
  box-sizing: border-box;
  width: min(100%, 210px);
  height: 230px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto 18px;
  border: 3px solid var(--gold-light);
  border-radius: 13px;
  background: #e0eee5;
  box-shadow: 0 4px 13px rgba(6, 78, 59, 0.12);
}

.person .image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}

/* Placeholder for staff members without an available photo */
.person .placeholder {
  color: var(--green-dark);
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

/* 12. COLLEGE DEAN */
.dean-layout {
  display: flex;
  justify-content: center;
}

.dean-card {
  width: min(100%, 350px);
  height: auto;
  padding: 30px 28px;
  border-top: 5px solid var(--gold);
}

.dean-card .image {
  width: min(100%, 245px);
  height: 270px;
}

.dean-card .person-name {
  font-size: 1.16rem;
}

/* 13. DEPARTMENT HEAD
   Keep this card centered above the coordinators. */
.department-head-layout {
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
}

.department-head-card {
  width: min(100%, 310px);
  height: auto;
  border-top: 4px solid var(--gold);
}

.department-head-card .image {
  width: min(100%, 205px);
  height: 225px;
}

/* 14. GRID LAYOUTS */
.coordinator-grid,
.people-grid,
.staff-grid {
  display: grid;
  align-items: stretch;
  gap: 22px;
}

/* Three coordinators aligned in the same row */
.coordinator-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

/* Faculty members displayed in three columns */
.people-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

/* Two BSCS faculty cards centered together */
.people-grid--two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 790px;
  margin: 0 auto;
}

/* Four staff cards on larger screens */
.staff-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.staff-grid .person {
  padding-right: 16px;
  padding-left: 16px;
}

.staff-grid .image {
  width: min(100%, 180px);
  height: 200px;
}

/* 15. PROGRAM SUBHEADINGS */
.program-group {
  margin-bottom: 42px;
}

.program-heading {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 23px;
  color: var(--gold-light);
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.4;
}

.program-heading::after {
  height: 1px;
  flex: 1;
  content: "";
  background: rgba(248, 231, 174, 0.45);
}

/* 16. TABLET RESPONSIVE LAYOUT */
@media (max-width: 1000px) {
  .faculty-page {
    padding: 64px 24px;
  }

  .coordinator-grid,
  .people-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .staff-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* 17. MOBILE RESPONSIVE LAYOUT */
@media (max-width: 600px) {
  .faculty-page {
    padding: 48px 16px;
    scroll-margin-top: 90px;
  }

  .page-header {
    margin-bottom: 50px;
  }

  .intro {
    font-size: 0.94rem;
  }

  .faculty-section {
    margin-bottom: 56px;
  }

  .section-title {
    margin-bottom: 24px;
  }

  .section-title h2 {
    font-size: 1.55rem;
  }

  .coordinator-grid,
  .people-grid,
  .people-grid--two,
  .staff-grid {
    grid-template-columns: minmax(0, 1fr);
    width: 100%;
    max-width: 390px;
    margin-right: auto;
    margin-left: auto;
  }

  .person {
    padding: 22px 18px 24px;
  }

  .person .image {
    width: min(100%, 230px);
    height: 245px;
  }

  .program-heading {
    font-size: 1.05rem;
  }
}

/* 18. ACCESSIBILITY: REDUCE ANIMATIONS IF REQUESTED */
@media (prefers-reduced-motion: reduce) {
  .person {
    transition: none;
  }

  .person:hover {
    transform: none;
  }
}
</style>
git diff -- src/views/Faculty.vue