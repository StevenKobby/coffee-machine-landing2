# Zoho Forms Integration Setup Guide

## Step-by-Step Instructions

### 1. Create Your Zoho Form

1. Go to [Zoho Forms](https://www.zoho.com/forms/)
2. Click "Create Form" or "New Form"
3. Add these fields to match your landing page:
   - **Company Name** (Single Line Text) - Required
   - **Name** (Single Line Text) - Required
   - **Email** (Email field) - Required
   - **Phone** (Phone Number) - Required
   - **Office Location/City** (Single Line Text) - Required
   - **Team Size** (Dropdown) with options:
     - 5-15 people
     - 16-30 people
     - 31-50 people
     - 50+ people
   - **Lead Source** (Hidden field) - Set default value: "Landing Page"
   - **Campaign** (Hidden field) - For tracking UTM parameters

### 2. Customize Form Settings

**Settings → General:**
- Form Name: "Coffee System Lead Form"
- Language: English

**Settings → Notifications:**
- Enable email notification to your sales team
- Set up auto-response email to leads

**Settings → Integrations:**
- Connect to Zoho CRM (recommended)
- Connect to Zoho Campaign for automated email sequences

### 3. Get Your Embed Code

1. Click the "Share" button in Zoho Forms
2. Select "Embed" tab
3. Choose "iFrame Embed"
4. Copy the iframe URL (it will look like):
   ```
   https://forms.zohopublic.com/yourcompany/form/FormName/formperma/XXXXX
   ```

### 4. Update Your Landing Page

1. Open `index.html`
2. Find this line (around line 378):
   ```html
   src="YOUR_ZOHO_FORM_EMBED_URL_HERE"
   ```
3. Replace with your actual Zoho Forms embed URL:
   ```html
   src="https://forms.zohopublic.com/yourcompany/form/FormName/formperma/XXXXX"
   ```

### 5. Connect to Zoho Campaign

**In Zoho Forms:**
1. Settings → Integrations → Zoho Campaign
2. Enable integration
3. Map form fields to Campaign fields
4. Choose or create a mailing list: "Coffee System Leads"

**In Zoho Campaign:**
1. Create automated workflow:
   - Trigger: New subscriber from Zoho Forms
   - Action 1: Send welcome email immediately
   - Action 2: Wait 1 day → Send follow-up email
   - Action 3: Wait 3 days → Send case study email

### 6. Set Up UTM Tracking for Email Campaigns

When sending emails from Zoho Campaign, use these UTM parameters in your links:

**Example Link:**
```
https://thebluebox.com/coffee-machine?utm_source=zoho_campaign&utm_medium=email&utm_campaign=coffee_launch_2026
```

The landing page will automatically capture these parameters and include them in the form submission.

### 7. Test Your Setup

1. Fill out the form on your landing page
2. Verify the lead appears in:
   - Zoho Forms → Entries
   - Zoho CRM → Leads (if integrated)
   - Zoho Campaign → Mailing List
3. Check if auto-response email was sent
4. Verify UTM tracking works by adding `?utm_campaign=test` to your URL

## Recommended Zoho Campaign Email Sequence

**Email 1 - Immediate (Welcome)**
- Subject: "Your Free Coffee Machine Installation - Next Steps"
- Content: Confirm interest, outline what happens next, set expectations

**Email 2 - Day 1 (Value)**
- Subject: "How Dubai Companies Save 1,500 AED Monthly on Coffee"
- Content: Case studies, testimonials, cost comparison

**Email 3 - Day 3 (Social Proof)**
- Subject: "200+ UAE & KSA Companies Choose Blue Box Coffee"
- Content: Client logos, success stories, installation photos

**Email 4 - Day 7 (Urgency)**
- Subject: "Ready to Schedule Your Free Installation?"
- Content: Limited availability, call-to-action, easy booking link

## Alternative: Manual Zoho CRM Integration

If you prefer not to use Zoho Forms, you can use Zoho CRM Web-to-Lead:

1. In Zoho CRM → Setup → Channels → Webforms
2. Create new webform with same fields
3. Get the embed code
4. Replace the form in index.html

## Support & Troubleshooting

**Form not showing?**
- Check if iframe src URL is correct
- Ensure form is published in Zoho Forms
- Check browser console for errors

**Leads not syncing to Campaign?**
- Verify Zoho Forms → Campaign integration is active
- Check field mapping is correct
- Ensure mailing list exists

**UTM parameters not tracking?**
- Check browser console for JavaScript errors
- Verify hidden field "Campaign" exists in Zoho Form
- Test with `?utm_campaign=test` in URL

## Next Steps

1. ✅ Create Zoho Form
2. ✅ Get embed code
3. ✅ Update index.html with your form URL
4. ✅ Test form submission
5. ✅ Connect to Zoho Campaign
6. ✅ Set up email automation sequence
7. ✅ Create email templates
8. ✅ Test full workflow from email click → form submit → auto-response

---

**Need Help?**
Contact Zoho Support or your Blue Box technical team.
