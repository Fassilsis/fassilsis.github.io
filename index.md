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
        Versatile Data Analyst with a unique blend of social policy training and hands-on experience in data visualization, engineering, and statistical analysis. Skilled at turning complex datasets into actionable insights using Python, SQL, Tableau, and dbt, with a proven track record across sectors and collaborative environments.
      </p>
    </div>

    <div class="contact-icons">
      <a href="mailto:fassil.yehuala@gmail.com"><img src="/images/mail.png" alt="Email" /></a>
      <a href="https://github.com/fassilsis" target="_blank"><img src="/images/github.png" alt="GitHub" /></a>
      <a href="https://linkedin.com/in/fassilsis" target="_blank"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
    </div>
  </div>

  <!-- Main Content -->
  <div class="main-content">
    <!-- Skills Section -->
    <section id="skills" class="section">
      <h2>Skills</h2>
      <div class="skills-list">
        <span class="skill-item">Python</span>
        <span class="skill-item">SQL</span>
        <span class="skill-item">Tableau</span>
        <span class="skill-item">dbt</span>
        <span class="skill-item">BigQuery</span>
        <span class="skill-item">Excel</span>
        <span class="skill-item">AWS</span>
        <span class="skill-item">Airflow</span>
        <span class="skill-item">Data Visualization</span>
        <span class="skill-item">Statistical Analysis</span>
      </div>
    </section>

    
    <!-- Projects Section -->
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

