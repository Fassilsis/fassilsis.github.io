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
      I am an Analytics Engineer with a unique foundation in policy analysis, combined with practical experience in data analysis and engineering. My academic background in economics and policy analysis sharpened my analytical thinking and gave me strong skills in quantitative research, including regression analysis, program evaluation, and statistical modeling.
      </p>
      <p>
      In recent years, I have taken on technical roles where I have built and maintained scalable data pipelines, developed automated reporting systems, and supported decision-making through data visualization. I work with tools like SQL, Python, dbt, Power BI and Looker Studio, and have applied them in cloud environments. At datadice, I was involved in end-to-end data analytics projects, from data ingestion and transformation to dashboard creation and stakeholder collaboration.
      </p>
      <p>
      What sets me apart is my ability to move easily between strategic and technical work. I can explore complex datasets, create data models that reflect real business logic, and communicate insights clearly and effectively. I focus on delivering value through collaboration, precision, and a practical understanding of how data drives business impact.
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

