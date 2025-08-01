---
layout: project
title: "Ecommerce Dashboard: TheLooker Dataset Analysis"
slug: thelooker-ecommerce-dashboard
tools:
  - BigQuery
  - SQL
  - Looker Studio
github: https://github.com/fassilsis/thelooker-ecommerce-dashboard
---

## Getting Started 

Data analysis becomes meaningful when it solves real business problems. That was my goal with this ecommerce dashboard project. I worked with the TheLooker ecommerce dataset stored in BigQuery. This dataset includes orders, customers, products, and distribution centers. I created a single denormalized table from these sources to power an interactive Looker Studio dashboard.

## Why This Project Matters

I wanted to build a dashboard that gives a clear picture of sales performance, customer behavior, product trends, and geographic insights. The key challenge was to design it so all visuals can filter each other smoothly. That is why starting with a denormalized table was so important.

## About the Data Source

The dataset has detailed order information like order status and timestamps. Customer data includes age, gender, and location. Product details cover categories, brands, costs, and sale prices. Distribution center data shows where items are shipped from. Having all this combined in one table simplified querying and boosted performance.

## What the Dashboard Covers

The dashboard is organized into three main pages. The first page is a sales overview. It shows total revenue, number of orders, average order size, and sales trends over time. You can filter by date ranges, customer gender, and order status.

The second page dives into product performance. It highlights revenue by category and brand. It also compares sale price against cost to reveal profitability. Top-selling products are easy to spot here.

The third page focuses on geographic insights. It maps sales by state and city. It also shows distribution centers to identify strong and weak markets. All pages include interactive filters that cross-filter charts for smooth exploration.

## Tools and Techniques Used

I wrote a SQL query in BigQuery to create the denormalized table. Then I built the dashboard in Looker Studio using its powerful filtering and visualization tools. The end result is a clean and interactive report that answers key business questions.
Lessons Learned

## Why Denormalization Works Better in BigQuery

In traditional databases, normalization reduces data duplication and keeps data consistent. This is helpful when data changes frequently. BigQuery, however, is built for analytical queries on huge datasets. Denormalization works better in this context. It combines related data into one wide table. This avoids costly joins and makes queries faster. Denormalized tables also reduce the amount of data scanned, which lowers costs. For dashboards, denormalized data simplifies filtering and cross-highlighting.

Normalization still makes sense when data updates are frequent or when complex data relationships need to be preserved. But for this dashboard, denormalization was the right choice.

This project helped me improve data modeling skills tailored for analytics. It showed me how to design dashboards that are both detailed and user-friendly. Above all, I learned that good data design and visualization go hand in hand to transform data into actionable insights.
