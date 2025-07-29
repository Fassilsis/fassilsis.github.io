---
layout: default
title: Portfolio
---

<div class="layout">

  <!-- Sidebar -->
  <div class="sidebar">
    <img src="https://via.placeholder.com/100" alt="Profile Photo" class="profile-pic" />
    <h1>Placeholder Name</h1>
    <p class="title">Data Analytics Engineer</p>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <!-- Main Content -->
  <div class="main-content">
    
    <section id="about" class="section">
      <h2>About Me</h2>
      <p>
        I am a Data Analytics Engineer with a strong background in data pipelines, visualization, and statistical analysis.
        I specialize in building scalable data systems using tools like Python, SQL, Airflow, and Tableau to extract insights that drive business growth.
        I thrive on solving real-world data problems and turning raw data into meaningful intelligence.
      </p>
    </section>

    <section id="projects" class="section">
      <h2>Projects</h2>
      <div class="projects-grid">
        {% for project in site.data.projects %}
        <div class="project-card">
          <img src="{{ project.image }}" alt="{{ project.title }} Image" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a href="{{ project.link }}" target="_blank">View on GitHub</a>
        </div>
        {% endfor %}
      </div>
    </section>

    <section id="contact" class="section">
      <h2>Contact</h2>
      <p>Email: your.email@example.com</p>
      <p>GitHub: <a href="https://github.com/yourusername" target="_blank">yourusername</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">yourprofile</a></p>
    </section>

  </div>

</div>
