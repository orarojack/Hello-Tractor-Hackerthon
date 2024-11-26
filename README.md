# **Hello Tractor E-commerce Hackathon 🚜**

Welcome to the Hello Tractor E-commerce Hackathon! This repository is your central workspace for the challenge. Follow the structure below to organize and present your deliverables. Let’s innovate for Africa’s agricultural future!

---

## **Hackathon Overview 🌍**

### **Objective**
Design and develop a secondary marketplace e-commerce platform for buying and selling second-hand tractors, agri-implements, and connecting with certified tractor operators.

### **Key Features to Implement**
- **Homepage**: User-friendly showcase of featured listings with filters (price, location, brand).
- **User Registration**: Secure registration with email, phone, and social media verification.
- **Tractor Listings**: Create detailed listings with photos, specifications, history, and price.
- **Search & Filters**: Enable filtering by make, model, price, and location.
- **Messaging System**: Facilitate direct communication between buyers and sellers.
- **Seller Dashboard**: Track listing performance, inquiries, and sales.
- **Admin Panel**: Manage listings, approve content, and ensure platform quality.

### **Add-On Features**
- **Dealer Listings**: Highlight parts and equipment suppliers.
- **Certified Tractor Operators**: Connect tractor owners with trained operators.

---

## **Deliverables Checklist ✅**

Please organize and complete the following deliverables within this repository:

### 1. **Codebase**
- Ensure all code is well-structured and documented.
- Use folders for modularity and clarity. Include any configuration or setup files.

### 2. **Demo Video**
- Upload your video to YouTube, Vimeo, or as an mp4 file.
- **Link to Demo Video**: [Demo Video](https://vimeo.com/1033586809?share=copy)

### 3. **Live Application URL**
- Deploy your application to a platform like Vercel, Netlify, or AWS.
- **Link to Live App**: [hellotractor.app](https://hello-tractor-0e3507994143.herokuapp.com/)

### 4. **Technical Documentation**
- Include setup instructions for running the project locally.

#### Requirements
You'll need the following installed to run the project successfully:

Ruby 3.2+
Node.js v20+
PostgreSQL 15+
Redis - For ActionCable support (and Sidekiq, caching, etc)
Foreman - `gem install foreman` - helps run all your processes in development

#### Initial Setup
First, clone the app

```dotnetcli
git clone https://github.com/Hello-Tractor-Community/ht-marketplace-hackathon-annastacia-hello-tractor
cd ht-marketplace-hackathon-annastacia-hello-tractor
```
Run `bin/setup` to install Ruby and JavaScript dependencies and setup your database.

```dotnetcli
  bin/setup
```

#### Running The Project
To run your application, you'll use the bin/dev command:

```
bin/dev
```

This starts up Foreman (or Overmind) running the processes defined in `Procfile.dev`. We've configured this to run the Rails server, CSS bundling, and JS bundling out of the box. You can add background workers like Sidekiq, etc to have them run at the same time.






- Provide any architecture diagrams or flowcharts explaining the design.
- **Documentation**: Add details in a `docs/` folder or link to relevant markdown files.

### 5. **Project Report**
Complete this section in a separate ReadMe file `report.md`:
- **Project Name**: [Insert your project name]
- **Team Members**: [List all members and their GitHub handles]
- **Tech Stack**: [Mention all technologies used]
- **Key Features**: [Briefly list the implemented features]
- **Challenges**: [Summarize major challenges faced and how they were solved]
- **Lessons Learned**: [Highlight key takeaways from the project]

---

## **Submission Process 📥**

1. Complete your project and ensure all deliverables are present in this repository.
2. **Submission Deadline**: All submissions must be finalized by **Tuesday, Nov 26th, 11:59 EAT**.
3. Submit your repository by ensuring all deliverables are present in this repository and locked by the deadline.

---

## **Important Links 🔗**
- [Hackathon Website](https://hackathon.hellotractor.com)
- [Hello Tractor Main Site](https://hellotractor.com)

---

## **Contact & Support 📞**
For any questions, reach out via Discord. Mentors will host office hours to assist with challenges and technical support.

---

**Good luck and happy hacking!** 🚀
