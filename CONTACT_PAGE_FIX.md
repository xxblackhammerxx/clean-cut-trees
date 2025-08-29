# Manual Fix for Contact Page Lexical Editor Issue

## Problem

The contact page content was imported as markdown string but the Lexical editor expects a structured JSON object, resulting in the error:
"The value passed to the Lexical editor is not an object. This is not supported."

## Quick Fix

### Method 1: Replace Content Directly in Admin Panel

1. Go to your admin panel at `http://localhost:3000/admin`
2. Navigate to **Collections > Pages**
3. Find the **Contact Us** page (or the page causing the error)
4. Click to edit the page
5. In the **Content** field, you'll see the error message
6. Delete the current content completely
7. Start typing fresh content in the editor, or copy-paste the formatted JSON below

### Method 2: Delete and Recreate the Page

1. Go to your admin panel at `http://localhost:3000/admin`
2. Navigate to **Collections > Pages**
3. Find the **Contact Us** page and **delete** it
4. Click **Create New** to create a new page
5. Fill in the fields:
   - **Title**: Contact Us
   - **Slug**: contact-us
   - **Page Type**: Static Page
   - **Content**: Use the Lexical editor to create the content normally

### Method 3: Use the Raw JSON (Advanced)

If you need to insert the exact content, you can temporarily modify the database directly or use the browser's developer tools to insert this JSON structure:

```json
{
  "root": {
    "type": "root",
    "version": 1,
    "children": [
      {
        "type": "heading",
        "version": 1,
        "tag": "h1",
        "children": [{ "type": "text", "version": 1, "text": "Contact Us" }],
        "direction": "ltr",
        "format": "",
        "indent": 0
      },
      {
        "type": "paragraph",
        "version": 1,
        "children": [{ "type": "text", "version": 1, "text": "Clean Cuts Trees" }],
        "direction": "ltr",
        "format": "",
        "indent": 0,
        "textFormat": 0,
        "textStyle": ""
      },
      {
        "type": "paragraph",
        "version": 1,
        "children": [{ "type": "text", "version": 1, "text": "Fruit Heights, UT 84037" }],
        "direction": "ltr",
        "format": "",
        "indent": 0,
        "textFormat": 0,
        "textStyle": ""
      },
      {
        "type": "paragraph",
        "version": 1,
        "children": [{ "type": "text", "version": 1, "text": "(801) 473-7548" }],
        "direction": "ltr",
        "format": "",
        "indent": 0,
        "textFormat": 0,
        "textStyle": ""
      },
      {
        "type": "paragraph",
        "version": 1,
        "children": [{ "type": "text", "version": 1, "text": "estimates@cleancutstrees.com" }],
        "direction": "ltr",
        "format": "",
        "indent": 0,
        "textFormat": 0,
        "textStyle": ""
      }
    ],
    "direction": "ltr",
    "format": "",
    "indent": 0
  }
}
```

## Recommended Approach

**Method 2** (Delete and recreate) is the cleanest and safest approach. Just delete the problematic page and create a new one using the Lexical editor interface normally.

## Prevention for Future Migrations

To prevent this issue in future content migrations, the migration script should convert markdown to Lexical format using the `markdownToLexical` utility function I created in `/src/utils/markdownToLexical.ts`.

## Content to Add

For the contact page, include:

- **Title**: Contact Us
- **Page Type**: Static Page
- **Content**:
  - Heading 1: Contact Us
  - Company name and address
  - Phone number with tel: link
  - Email address with mailto: link
  - Company description
  - Social media links
  - Service areas
  - Contact form (if using the ContactForm component)

The content should be entered naturally using the Lexical editor's formatting tools rather than trying to insert raw JSON.
