# Hey team! Welcome to our GBV Control Project

Check it out and contribute!

It is a mobile app built with **React Native (Expo)** to support and report Gender-Based Violence (GBV) cases in a simple, user-friendly interface.

🔗 https://github.com/DavidOlwangu/GBV-Control-App

### How to Contribute:
1. Fork the repo  
2. Clone it to your machine  
3. Make your changes  
4. Push and create a Pull Request 

###Tech Stack
1.Expo
2.React Native
3.TypeScript
4.Expo Router

**DOCUMENTATION - GENDER BASED VIOLENCE CONTROL(GBV) APP**

Version 1.0

Maintained by: GBV Control Dev Team

1. **Overview**

App Name: GBV Control app

Platforms: Android

iOS (planned release)

**Purpose**

GBV Control is a mobile application designed to prevent, respond to and track gender-based violence (GBV). It empowers survivors with emergency tools, safe reporting and access to trusted support systems.

2. **Target Audience**

- Survivors of gender based violence
- Counselors and social workers
- NGOs and emergency responders
- Law enforcement (with survivor consent)

3. **Key Features**

**Features Description**

**Emergency:** Sends real-time location and distress alert to trusted contacts; silent trigger supported

**Incident reporting:** Anonymous or detailed reporting with optional media attachments (text, image, audio, video)

**Survivor chat:** 24/7 encrypted live chat with trained counselors and support workers

**Resource center:** Legal guides, helplines, local shelters; location-filtered content

**Community forum:** Moderated, anonymous peer-to-peer survivor discussions

**Case tracking:** Survivors can view and follow up on submitted cases

**Offline access:** Core emergency features accessible offline; auto-sync when back online

4. **User Roles**

**Role** **Access level**

**Survivor** Full access to mobile app features (SOS, reporting, chat, resources)

**Counselor** Access to web dashboard, live chat, report review

**NGO/Admin** Full dashboard access: analytics, role management, report escalation

**Law enforcer** Optional, limited access with survivor consent

5. **User Flow**

**Home screen**

Quick access to;

1. SOS Button
2. Report Incident
3. Support Chat
4. Resources
5. Incident reporting

Fill out report and submit

6. Live Chat

User is connected with available counselor via encrypted real-time chat system.

7. Settings

Managed trusted contacts, emergency preferences, language, privacy settings.

8. **Technical Stack**

**Layer** **Technology Used**

Frontend: React Native (Expo Router), TypeScript

Backend: Python (Django framework)

Database: PostgreSQL

Authentication: Firebase Auth (email, phone, anonymous support)

9. **API & Integrations**

**Method** **Endpoint** **Purpose**

POST /api/report submit a GBV report

POST /api/sos-alert triggers SOS alert to registered emergency contacts

GET /api/resources retrieve location-based support resources

GET /api/chat/:userId connect user to available counselor

10. **Privacy & Security**

- End-to-end encrypted live chat
- Anonymous reporting mode
- Disguised app icon (Stealth mode)
- Panic exit button (quick exit to fake screen)
- Users can delete all their data anytime
- Data privacy compliance

11. **Admin Panel (Web Dashboard)**

- Manage and review user reports
- Update local resources directories
- Role-based access for counselors, NGOs, admin and law enforcement (limited)
- Case escalation and response assignment tools
- Real-time analytics dashboard for usage tracking

12. **Future Roadmap**

- iOS version launch
- Multilingual support: Swahili
- AI-driven incident scoring & risk prediction
- SOS voice command activation
- Peer-led support forum (with moderation & counselor oversight)
- Direct integration with hospitals and police systems

13. **Contact & Support**

Support email

[support@gbvcontrol.org](mailto:support@gbvcontrol.org)

Partners:

Human Rights Commissions, Local NGOs, Legal Aid Networks
