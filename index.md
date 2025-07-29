---
layout: default
title: Portfolio
---

<div class="layout">

  <!-- Sidebar -->
  <div class="sidebar">
    <img src="images/placeholder.jpg" alt="Profile Photo" class="profile-pic" />
    <h1>Fassil Yehuala</h1>
    <p class="title">Analytics Engineer</p>
    <div class="about-text">
    <p>
      I am an Analytics Engineer with a background in economics and public policy, combined with strong hands-on experience in data analysis and pipeline development. My training sharpened my analytical thinking and gave me a solid foundation in regression analysis, statistical modeling, and quantitative research.
    </p>
    <p>
      In recent years, I have taken on technical roles where I have built and maintained scalable data pipelines, developed automated reporting systems, and supported decision-making through data visualization. At datadice, I helped design and deliver data solutions end-to-end — from ingestion to dashboards — while collaborating closely with technical and business teams.
    </p>
    <p>
     I can explore complex datasets, create data models that reflect real business logic, and communicate insights clearly and effectively.
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

