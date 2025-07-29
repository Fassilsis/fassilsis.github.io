<html lang="en">
<body>

<div class="layout">

  <!-- Sidebar -->
  <aside class="sidebar">
    <img src="images/placeholder.jpg" alt="Profile" class="profile-pic" />
    <h1>Placeholder Name</h1>
    <p class="title">Data Analytics Engineer</p>
    <nav>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="main-content">
    <section id="about" class="section">
      <h2>About Me</h2>
      <p>
        I’m a data analytics engineer passionate about turning raw data into actionable insights.
        With a strong background in SQL, Python, and modern BI tools, I help organizations make
        informed decisions by designing robust data pipelines and visualizing key metrics.
        I enjoy solving complex problems and communicating results in a clear, impactful way.
      </p>
    </section>

    <section id="projects" class="section">
      <h2>Projects</h2>
      <div class="projects-grid">
        {% assign projects = site.data.projects %}
        {% for project in projects %}
        <article class="project-card">
          <img src="{{ project.image }}" alt="{{ project.title }}" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a href="{{ project.link }}" target="_blank" rel="noopener">View on GitHub</a>
        </article>
        {% endfor %}
      </div>
    </section>

    <section id="contact" class="section">
      <h2>Contact</h2>
      <p>Email: your.email@example.com</p>
      <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener">github.com/yourusername</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener">linkedin.com/in/yourprofile</a></p>
    </section>
  </main>

</div>

</body>
</html>
