# PDF Setup Guide for CODE 4 IMPACT Magazine

## How to Add PDFs to Your Website

### 1. **File Organization**
Create these folders in your project:
```
magazines/
├── issue1.pdf
├── issue2.pdf
├── issue3.pdf
└── articles/
    ├── issue1-article1.pdf
    ├── issue1-article2.pdf
    ├── issue2-article1.pdf
    └── ... (more articles)
```

### 2. **How the PDF Viewer Works**

The website uses an **embedded iframe** to display PDFs directly:

```html
<iframe class="pdf-embed" id="pdf-iframe"></iframe>
```

When a user clicks "Read Article", it:
- Opens a modal (overlay) with the PDF viewer
- Loads the PDF file in an iframe
- Provides a download button
- Allows closing with Escape key or clicking outside

### 3. **Current Features**

✅ Embedded PDF viewing (no download required)  
✅ Download button for offline reading  
✅ Keyboard support (Escape to close)  
✅ Click outside to close  
✅ All functions in separate `js/magazines.js` file

### 4. **Adding New Articles**

To add a new article to a magazine:

**Step 1: Add the PDF file**
```
magazines/articles/issue1-article7.pdf
```

**Step 2: Update `js/magazines.js`**

Find the magazine's articles array and add:
```javascript
{
  id: 7,
  title: 'Your Article Title',
  category: 'Your Category',
  author: 'Author Name',
  date: '2026-03-20',
  image: 'images/article7.jpg',
  description: 'Article description here.',
  pdf: 'magazines/articles/issue1-article7.pdf'
}
```

### 5. **PDF Compatibility**

The PDF viewer works with:
- ✅ Standard PDF files
- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers
- ✅ Scanned PDFs

### 6. **Improvement Options**

**Option A: PDF.js (Better Control)**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
```
- More control over PDF rendering
- Custom viewer UI
- Better mobile experience

**Option B: Google Drive Embed**
```html
<iframe src="https://drive.google.com/file/d/{FILE_ID}/preview"></iframe>
```
- No download needed
- Reliable hosting
- Good mobile support

**Option C: Current Iframe (Simplest)**
- Works with all browsers
- Native browser PDF viewer
- No external dependencies

### 7. **Troubleshooting**

**PDFs not showing:**
- Check file path in `js/magazines.js`
- Ensure PDF file exists in correct folder
- Check browser console for errors

**Download not working:**
- Verify PDF file exists
- Check file permissions

**Slow loading:**
- Compress PDF files (use online tools)
- Use smaller file sizes
- Consider lazy loading for many PDFs

### 8. **JavaScript Functions**

```javascript
// Open PDF modal
openPdfModal(title, author, pdfLink);

// Close PDF modal
closePdfModal();

// Load articles for an issue
loadArticles(issueNumber);

// Select magazine issue
selectMagazine(issueNumber);
```

All functions are now in the separate `js/magazines.js` file for better organization!

---

### Success! You now have:
✅ Separated JavaScript code (cleaner HTML)  
✅ Improved article layout (better styling)  
✅ Working PDF viewer  
✅ Easy-to-update structure
