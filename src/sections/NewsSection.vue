<template>
  <section class="news" id="news">
    <div class="container">
      <div class="title">
        <p>STAY INFORMED</p>
        <h1>Latest News</h1>
      </div>

      <div class="cards">
        <div class="card">
          <p>November 12, 2026</p>
          <h2>IT Week 2026 Opens</h2>
          <h3>Campus News</h3>
          <p>
            The College of Computer Studies kicks off IT Week
            with activities, competitions, and technology talks.
          </p>
        </div>

        <div class="card">
          <p>November 14, 2026</p>
          <h2>Students Compete in Code Wars</h2>
          <h3>Student Activities</h3>
          <p>
            Student programmers put their coding and
            problem-solving skills to the test in Code Wars.
          </p>
        </div>

        <div class="card">
          <p>November 18, 2026</p>
          <h2>IoT Workshop Highlights</h2>
          <h3>Technology</h3>
          <p>
            Students explore smart devices and sensor-based
            systems through hands-on Internet of Things activities.
          </p>
        </div>

        <div class="card">
          <p>December 05, 2026</p>
          <h2>Technology Talk for Students</h2>
          <h3>Learning and Development</h3>
          <p>
            Industry professionals share insights on technology
            careers, workplace skills, and opportunities for graduates.
          </p>
        </div>

        <div class="card">
          <p>December 15, 2026</p>
          <h2>CCS Year-End Celebration</h2>
          <h3>Campus Community</h3>
          <p>
            Students and members of the college community come
            together to celebrate the year's accomplishments.
          </p>
        </div>

        <div class="card">
          <p>January 20, 2027</p>
          <h2>Hackathon 2027</h2>
          <h3>Innovation</h3>
          <p>
            Student teams develop creative technology solutions
            to address real-world and campus-related challenges.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news {
  width: 100%;
  min-height: 100vh;
  padding: 70px 50px;
  background-color: #230134;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
  margin: auto;
}

.title {
  text-align: center;
  margin-bottom: 40px;
}

.title p {
  color: #f5a623;
  font-weight: bold;
}

.title h1 {
  color: #f7f8f4;
  font-size: 45px;
  margin: 10px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background-color: #f7f4f7;
  padding: 30px 20px;
  border: 2px groove #420d48;
  border-radius: 10px;
}

.card h2 {
  color: #f5a623;
  font-size: 24px;
  margin: 10px 0 5px;
}

.card h3 {
  color: #0b011b;
  font-size: 16px;
  margin-bottom: 10px;
}

.card p {
  color: #420d48;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .news {
    padding: 60px 20px;
  }

  .title h1 {
    font-size: 35px;
  }

  .cards {
    display: flex;
    flex-direction: column;
  }
}
</style>
