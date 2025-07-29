---
layout: default
title: Portfolio
---

<div class="layout">

  <!-- Sidebar -->
  <div class="sidebar">
    <img src="images/placeholder.jpg" alt="Profile Photo" class="profile-pic" />
    <h1>Fassil Yehuala</h1>
    <p class="title">Data Analytics Engineer</p>

    <div class="about-text">
      <p>
        I am a Data Analytics Engineer with a strong background in data pipelines, visualization, and statistical analysis.
        I specialize in building scalable data systems using tools like Python, SQL, Airflow, and Tableau to extract insights that drive business growth.
      </p>
    </div>

    <div class="contact-icons">
      <a href="mailto:fassil@example.com"><img src="/images/email-icon.png" alt="Email" /></a>
      <a href="https://github.com/fassilsis" target="_blank"><img src="/images/github-icon.png" alt="GitHub" /></a>
      <a href="https://linkedin.com/in/fassilsis" target="_blank"><img src="/images/linkedin-icon.png" alt="LinkedIn" /></a>
    </div>
  </div>

  <!-- Main Content -->
  <div class="main-content">
    
    <section id="projects" class="section">
      <h2>Projects</h2>
      <div class="projects-list">
        {% for project in site.data.projects %}
        <div class="project-row">
          <img src="{{ project.image }}" alt="{{ project.title }} Image" class="project-img" />
          <div class="project-details">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a href="{{ project.link }}" target="_blank">View on GitHub</a>
          </div>
        </div>
        {% endfor %}
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2025 Fassil Yehuala. All rights reserved.</p>
    </footer>

  </div>

</div>

