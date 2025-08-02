---
layout: project
title: "Dataform Case Study: eCommerce Analytics Pipeline"
slug: thelooker-ecommerce-dashboard
tools:
  - BigQuery
  - Dataform
  - SQL
  - GitHub
  - Google Cloud Secret Manager
  - Looker Studio
github: https://github.com/fassilsis/thelooker-ecommerce-dashboard
---

## Getting Started

Working with data is not only about writing SQL. It is about solving real business problems using the right approach and tools. That was the idea behind this project. I set out to build a complete eCommerce analytics pipeline that transforms data, models it for analysis, and presents insights through a clean dashboard.

The project uses a structured dataset based on a realistic eCommerce setup. It contains information about customers, orders, returns, and inventory. This allowed me to work on meaningful business questions without being limited by missing or sensitive information.

## Why I Built This

In my previous roles, I worked with complex and often messy datasets. This project gave me a chance to practice the same skills in a cleaner and more structured environment. My goal was to create a full pipeline that reflects real analytics challenges.

I focused on building a data model that supports key business metrics. These include sales trends, return rates, customer behavior, and cohort-based retention. I also wanted to create a dashboard that is easy to use and helps tell the story behind the numbers.

## What I Did

To build this project, I used Dataform to manage and organize my SQL logic in a modular way. I followed a layered approach to structure the project into staging, production, and definition folders.

| ![](https://raw.githubusercontent.com/fassilsis/thelook-ecommerce-etl/thelook_etl/thelook_etl.png) |

### 1. Staging Layer

In the staging layer, I cleaned and prepared the raw data. This included:

  - Converting timestamp fields into standard date formats
  - Renaming columns for clarity
  - Filtering out invalid records
  - Extracting date parts

### 2. Production Layer

The production layer includes the final models used for analysis. These include:

- orders: combines staging tables and calculates revenue, returns, and order-level metrics
- order_items: item-level breakdown of sales and discounts
- cohorts: assigns each user to a first-order cohort and tracks retention over time

In this layer, I made the data ready for dashboard usage. I denormalized several tables to include all relevant information in a single table for each business topic. For example, the orders table includes user information, product category, revenue, and returns. This reduces the need for joins during dashboard queries.

Denormalization is a good practice in BigQuery when the goal is fast and cost-effective dashboard performance. Since BigQuery is a columnar and distributed data warehouse, reading a wide table with only the needed columns is faster than joining multiple tables at runtime. This approach helps dashboards load faster and ensures better user experience, especially when working with large datasets.

I used reusable SQLX files and dependency chains to keep the logic modular and easy to test. In traditional databases, normalization reduces data duplication and keeps data consistent. This is helpful when data changes frequently. BigQuery, however, is built for analytical queries on huge datasets. Denormalization works better in this context. It combines related data into one wide table. This avoids costly joins and makes queries faster. Denormalized tables also reduce the amount of data scanned, which lowers costs. For dashboards, denormalized data simplifies filtering and cross-highlighting.

### 3. GitHub Integration

To manage version control, I connected the project to GitHub. I created a personal access token (PAT) and stored it securely in Google Secret Manager. I then granted access to the Dataform service account so that it could use the secret to push changes to the GitHub repository.

This setup helps track changes over time and allows safe collaboration in a team setting.

## What the Dashboard Covers

The dashboard was built using Looker Studio. It includes five main pages. Each page focuses on a different business area.

The first page is the Executive Summary. It provides an overview of key metrics such as total revenue, order count, average order value, and return volume. It also includes a time-based revenue trend and basic filters.

The second page is Customer Insights. This section shows the number of new and returning customers. It tracks how customer counts change over time and includes a summary of customer lifetime value.

The third page is Sales and Product Performance. This part breaks down revenue by product category, highlights top-selling items, and shows sales performance by distribution center.

The fourth page focuses on Returns. It displays total returns, return rates by product or region, and the impact of returns on net revenue.

The fifth and final page is the Cohort Retention analysis. It shows how customer activity changes over the months following their first purchase. It includes a heatmap of retention and a line chart of revenue by cohort.

## Final Thoughts

This project was not about exploring something entirely new. In my previous roles, I have worked on larger datasets with more complexity and less structure. Those projects involved dealing with inconsistent fields, unclean data, and more advanced logic.

What this project offered was an opportunity to organize my process clearly from start to finish. I used this cleaner dataset to demonstrate how I approach data modeling, transformation, and reporting when I have full control over the workflow. It also gave me the chance to present my skills in a more structured and sharable way. I followed best practices for working in BigQuery.

This project is a simplified version of the work I have done before, but it follows the same principles I use in more complex environments.
