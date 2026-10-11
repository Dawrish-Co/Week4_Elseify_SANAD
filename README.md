# SANAD Platform - Week 4: Monitoring & Health Verification Exercise

**Author:** Mohamed Alseify  
**Project:** SANAD (Doctor-Patient Medical Services Platform)  
**Track:** Cloud / DevSecOps / MLOps  
**Date:** October 2026  
**Status:** Completed & Tested  

---

## 1. Overview & Objective

This exercise implements foundational operational monitoring and observability controls for the **SANAD** backend training service. In alignment with the Week 4 requirements, this setup addresses service availability, basic HTTP request logging, system health status verification, and dedicated verification for the SANAD Private Patient RAG/LLM service.

### Primary Goals Achieved:
1. **Basic HTTP Logging:** Integrated `morgan` middleware to trace incoming requests, response status codes, latency, and standard timestamps.
2. **Health Check Endpoint:** Developed a JSON-returning `/api/health` route indicating core system status, database connectivity, and uptime.
3. **RAG/LLM Service Verification:** Added targeted health status reporting (`rag_service`) to verify operational readiness for patient record retrieval and summarization.
4. **Alerting & Traceability:** Structured log outputs to highlight system state changes and failure modes for future queue/API integrations.

---

## 2. Architecture & File Structure

```text
featuremonitoring-exercise-week4/
├── app.js             # Main server logic & health endpoints
├── package.json       # Project configuration & dependencies
└── README.md          # Documentation & verification evidence