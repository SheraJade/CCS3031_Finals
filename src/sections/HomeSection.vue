<template>
  <section class="home" id="home">
    <div class="container">
      <div class="left">
        <p class="sub-top">
          COLLEGE OF COMPUTER STUDIES
        </p>

        <h1 class="title">
          Home of the<br />
          Dauntless<br />
          and the<br />
          Brave.
        </h1>

        <h2 class="sub">
          Different people. <strong>One Goal.</strong>
        </h2>

        <p class="sub-top">
          Discover your potential, create wit purpose,
          and what comes next on technology.
        </p>

        <button class="btn" @click="$router.push('/about')">
          About Us
        </button>
      </div>

      <div class="right">
        <div class="image">
          <img src="@/assets/image/ccs-logo.jpg" alt="CCS Logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  box-sizing: border-box;
  scroll-margin-top: 140px;
}

.container {
  width: 100%;
  max-width: 1600px;
  min-height: 75vh;
  margin: 0 auto;
  padding: 40px 5%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(60px, 9vw, 150px);

  transform: translateY(-50px);
}

.left {
  flex: 1.1;
  min-width: 0;
  max-width: 700px;
  padding: 30px 0;
}

.sub-top {
  font-size: clamp(1rem, 1.3vw, 1.2rem);
  font-weight: 600;
  line-height: 1.7;
  margin: 0 0 24px;
  color: #235f31;
}

.title {
  font-size: clamp(3.5rem, 6vw, 6rem);
  font-weight: 900;
  line-height: 1.05;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 28px;
  color: #2d5f23;
}

.sub {
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-weight: 500;
  line-height: 1.5;
  margin: 0 0 32px;
  color: #ffcc80;
}

.btn {
  background-color: #055e03;
  color: #fafaf5;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background-color: #058909;
  transform: translateY(-3px);
}

.right {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.image {
  width: 100%;
  max-width: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 520px;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

/* Tablets and smaller screens */
@media (max-width: 900px) {
  .container {
    gap: 35px;
    padding: 35px 5%;
  }

  .title {
    font-size: clamp(3rem, 6vw, 4.5rem);
  }

  .image {
    max-width: 420px;
  }
}

/* Mobile phones */
@media (max-width: 600px) {
  .home {
    min-height: auto;
    padding: 30px 0 40px;
    scroll-margin-top: 190px;
  }

  .container {
    min-height: auto;
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
    padding: 25px 7%;
  }

  .left {
    max-width: none;
    padding: 10px 0;
  }

  .sub-top {
    font-size: 1rem;
    margin-bottom: 18px;
  }

  .title {
    font-size: clamp(3rem, 12vw, 4.5rem);
    line-height: 1.05;
    margin-bottom: 22px;
  }

  .sub {
    font-size: 1.35rem;
    margin-bottom: 26px;
  }

  .btn {
    font-size: 1rem;
    padding: 15px 28px;
  }

  .right {
    width: 100%;
  }

  .image {
    max-width: 400px;
    margin: 0 auto;
  }

  .image img {
    max-height: 400px;
  }
}
</style>
