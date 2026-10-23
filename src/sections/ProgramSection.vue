<template>
  <section class="program" id="program">
    <div class="container">
      <div class="title">
        <p>ACADEMIC PROGRAM</p>
        <h1>Program Offered</h1>
      </div>

      <div class="cards">
        <div class="card">
          <div class="image">
            <img src="@/assets/image/programs/css.png" alt="CSS" />
          </div>
          <h2>CS</h2>
          <h3>Computer Science</h3>
          <p>
            Focuses on programming, algorithms, software development, 
            and the theoretical foundations of computing.
          </p>
        </div>

        <div class="card">
          <div class="image">
            <img src="@/assets/image/programs/itso.png" alt="ITSO" />
          </div>
          <h2>IT</h2>
          <h3>Information Technology</h3>
          <p>
            Focuses on programming, algorithms, software development, 
            and the theoretical foundations of computing.
          </p>
        </div>

        <div class="card">
          <div class="image">
            <img src="@/assets/image/programs/midas.png" alt="MIDAS" />
          </div>
          <h2>DMIA</h2>
          <h3>Digital Media and Interactive Arts</h3>
          <p>
            Combines creativity and technology to create digital content, 
            multimedia designs, animations, and interactive experiences.
          </p>
        </div>

        <div class="card">
          <div class="image">
            <img src="@/assets/image/programs/lis.png" alt="LIS" />
          </div>
          <h2>IS</h2>
          <h3>Information Systems</h3>
          <p>
            Focuses on organizing, managing, preserving, and providing 
            access to information and library resources.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.program {
  width: 100%;
  min-height: 100vh;
  padding: 70px 50px;
  scroll-margin-top: 140px;
  background-color: #013418;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
  margin: auto;

  .title {
    text-align: center;
    margin-bottom: 40px;

    p {
      color: #f5a623;
      font-weight: bold;
    }

    h1 {
      color: #f7f8f4;
      font-size: 45px;
      margin: 10px;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;

    .card {
      background-color: #fbfbfb;
      padding: 40px 30px;
      text-align: center;
      border: 2px groove #7675d4;
      border-radius: 10px;
      box-sizing: border-box;

      .image {
  width: 100%;
  height: 220px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
}

.image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-shadow: 0 6px 20px rgba(229, 152, 29, 0.2);
  border-radius: 10px;
}

      h2 {
        color: #230134;
        font-size: 30px;
        margin: 15px 0 5px;
      }

      h3 {
        margin-bottom: 12px;
        color: #7675d4;
        font-size: 17px;
      }

      p {
        color: #013402;
        line-height: 1.5;
      }
    }
  }
}

@media (max-width: 900px) {
  .container {
    .cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .card {
      padding: 30px 20px;
    }
  }
}

@media (max-width: 768px) {
  .program {
    min-height: auto;
    scroll-margin-top: 190px;
    padding: 60px 20px;
  }

  .container {
    .cards {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .card {
      padding: 30px 20px;
    }

    .title {
      h1 {
        font-size: 35px;
      }
    }
  }
}

@media (max-width: 400px) {
  .program {
    padding: 50px 12px;
  }

  .container {
    .card {
      padding: 25px 15px;

      h2 {
        font-size: 25px;
      }
    }
  }
}
</style>