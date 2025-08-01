---
layout: default
title: Fassil's Portfolio
---

<div class="layout">

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Theme toggle button -->
    <button id="theme-toggle" aria-label="Toggle Light and Dark mode">Toggle Light/Dark Mode</button>

    <img src="images/profile.JPG" alt="Profile Photo" class="profile-pic" />
    <h1>Fassil Yehuala</h1>
    <p class="title">Data Analyst | Analytics Engineer</p>
    <div class="about-text">
      <p>
        With a background in economics and policy analysis, I bring strong analytical thinking and hands-on experience in data modeling, analysis, pipeline development, and visualization. My academic training sharpened my skills in data analysis, statistical modeling, and quantitative research.
      </p>
      <p>
        In recent years, I have taken on technical roles where I built and maintained scalable end-to-end data pipelines, developed automated reporting systems, and supported decision-making through data visualization.
      </p>
      <p>
       I can explore complex datasets, create data models that reflect real business logic, and communicate insights clearly and effectively.
      </p>
    </div>
    <div class="contact-icons">
      <a href="mailto:fassil.yehuala@gmail.com"><img src="/images/mail.png" alt="Email" /></a>
      <a href="https://github.com/fassilsis" target="_blank" rel="noopener noreferrer"><img src="/images/github.png" alt="GitHub" /></a>
      <a href="https://linkedin.com/in/fassil-s-yehuala" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
    </div>
  </div>

  <!-- Main Content -->
  <div class="main-content">
    <!-- Projects Section -->
    <section id="projects" class="section">
      <h2>Projects</h2>
      <div class="projects-list">
        {% for project in site.data.projects %}
        <div class="project-row" data-url="/projects/{{ project.slug }}">
          <img src="{{ project.image }}" alt="{{ project.title }} Image" class="project-img" />
          <div class="project-details">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <h4 style="margin-bottom: 0.3em;">Key Features:</h4>
            <ul style="font-size: 0.75em; margin-left: 1.5em; color: #555;">
              {% for feature in project.key_features %}
                <li>{{ feature }}</li>
              {% endfor %}
            </ul>
            {% if project.tools %}
            <div style="font-size: 0.65em; color: #52d9b1 !important; margin-top: 0.5em; display: flex; align-items: center; gap: 0.3em;">
              <span>Tools: {{ project.tools | join: ", " }}</span>
            </div>
            {% endif %}
            <a href="{{ project.link }}" target="_blank" rel="noopener noreferrer" class="project-link">🔗 View Project on GitHub</a>
          </div>
        </div>
        {% endfor %}
      </div>
    </section>

    <footer class="footer">
      <p>&copy; {{ "now" | date: "%Y" }} Fassil Yehuala. All rights reserved.</p>
    </footer>
  </div>
</div>

<script>
  // Theme toggle logic
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme from localStorage
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    if (body.classList.contains('light')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });

  // Click handler for project rows to open detailed project page
  document.querySelectorAll('.project-row').forEach(row => {
    row.addEventListener('click', (e) => {
      // Prevent navigation if the click was on the GitHub link
      if (e.target.closest('a.project-link')) return;
      const url = row.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
</script>
