---
layout: project
title: Fabrikam Sales Dashboard
slug: fabrikam-sales-dashboard
tools:
  - Power BI Desktop
  - DAX
  - Power Query
---

This project started as a way to sharpen my Power BI skills using a fictional dataset. I wanted to simulate a real-world scenario — where a business needs to understand its sales performance, pricing strategy, and market position — all in one interactive dashboard.

The end result is a report that does exactly that, built around **Fabrikam, Inc.**, a made-up electronics company used in Microsoft’s training materials.

---

## Why Fabrikam?

Fabrikam is part of Microsoft’s demo ecosystem — think of it as a “sandbox company” with realistic data but no real-world consequences. That gave me full freedom to explore business questions without worrying about privacy or incomplete data.

In this scenario, Fabrikam sells consumer electronics through various manufacturers, and competes with fictional brands like Contoso and Proseware.

---

## What's in the data?

The dataset includes:

- Sales transactions (revenue, units sold, discount %)
- Product details (category, MSRP, segment)
- Manufacturer info
- City, state, and region data

It was enough to build a multi-layered report that can tell a story from the national level all the way down to product-level performance.

---

## The Report: What It Shows

The dashboard is broken into four pages, each designed to answer specific questions:

### 1. Executive Summary

What’s happening at a high level?

- Revenue, units sold, average prices
- Sales trends over time
- Manufacturer market share
- Regional performance at a glance

---

### 2. Product & Pricing

Are our pricing strategies working?

- How do prices compare to MSRP?
- Which segments rely most on discounts?
- Revenue by category and segment

---

### 3. Geographic Analysis

Where are we doing well (or not)?

- Revenue by state and region
- Top-performing cities
- Regional trends over time

---

### 4. Manufacturer View

Which suppliers are driving results?

- Revenue and discount patterns by manufacturer
- Best-selling products by supplier
- Supplier mix and contribution

---

## Screenshots

Here’s a quick look at what it all looks like in Power BI:

| Executive Summary With Filters Applied | Product & Pricing |
|----------------------------|-------------------|
| ![](https://github.com/fassilsis/screenshots/executive-summary-with-filters-on.png) | ![](https://github.com/fassilsis/screenshots/ppa.png) |

| Regional Insights | Manufacturer View |
|-------------------|-------------------|
| ![](https://github.com/fassilsis/screenshots/gra.png) | ![](/screenshots/msi.png) |

---

## Tools I Used

This project was built entirely in Power BI Desktop. Some specific tools and techniques include:

- **DAX**: to calculate custom KPIs and trends
- **Power Query**: for cleaning and shaping the data
- **Bookmarks + Slicers**: to make the report interactive and user-friendly

---

## What I Learned

This wasn’t just a dashboard exercise. I treated it like a real analytics project:

- How to frame business questions visually
- How to model relationships between product, geography, and sales
- How to avoid overloading a page while still offering depth

I also got better at designing for **clarity**, not just aesthetics.

---

## See the Project

If you want to check out the `.pbix` file or dig through the setup, feel free to explore the GitHub repo:

🔗 [View Project on GitHub](https://github.com/fassilsis/sales-dashboard)

---

Thanks for reading!  
Let me know what you think or connect with me on [LinkedIn](https://linkedin.com/in/fassil-s-yehuala) — always happy to talk data, design, or dashboards.
