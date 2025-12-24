# EmailJS Template Setup - REQUIRED

## Quick Setup (5 minutes)

### Step 1: Go to EmailJS Dashboard
Visit: https://dashboard.emailjs.com/admin/templates

### Step 2: Create New Template
1. Click **"Create New Template"**
2. Template ID: `template_portfolio_visitor`

### Step 3: Configure Template

**To Email:**
```
ponnamandaram711@gmail.com
```

**Subject:**
```
🎯 New Portfolio Visitor: {{visitor_name}}
```

**Content (Body):**
```
Hi Siddhardha,

You have a new portfolio visitor!

👤 Name: {{visitor_name}}
📧 Email: {{visitor_email}}
🕐 Visit Time: {{visit_date}}

{{message}}

---
Automated notification from your portfolio
Portfolio URL: https://your-portfolio.vercel.app
```

### Step 4: Save Template
Click **"Save"** - Make sure Template ID is exactly: `template_portfolio_visitor`

## That's It!
Your email gate will now send you an email at **ponnamandaram711@gmail.com** every time someone visits your portfolio!

## Already Configured:
✅ Service ID: service_rlq4zzk
✅ Public Key: nNDmHWkPDJpYvWPDz  
✅ To Email: ponnamandaram711@gmail.com

## Test It:
1. Refresh your portfolio
2. Fill in the email gate
3. Check ponnamandaram711@gmail.com for the notification!
