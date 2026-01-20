# Database Relationships

## 1. Definition of a Database Relationship

A **database relationship** defines how data in one table is connected to data in another table using keys (primary key and foreign key).  
Relationships help organize data, reduce duplication, maintain consistency, and allow meaningful queries across multiple tables.

In real-world applications like e-commerce systems, relationships are essential to connect users, products, orders, and payments.

---

## 2. Types of Database Relationships

There are **three main types** of database relationships:

1. One-to-One (1:1)
2. One-to-Many (1:N)
3. Many-to-Many (M:N)

Each type is explained below with **clear e-commerce examples**.

---

## 2.1 One-to-One Relationship (1:1)

### Definition
In a **one-to-one relationship**, one record in a table is associated with **exactly one** record in another table.

### E-commerce Example
**User ↔ User Profile**

- Each user has only **one profile**
- Each profile belongs to **one user**

**Tables:**
- `users`
- `user_profiles`

**Example:**
- A user has one profile containing address, phone number, and preferences.


