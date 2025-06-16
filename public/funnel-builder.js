
// Import GrapesJS from CDN
const script = document.createElement('script');
script.src = 'https://unpkg.com/grapesjs@0.20.3/dist/grapes.min.js';
script.onload = initializeFunnelBuilder;
document.head.appendChild(script);

// Also load the CSS
const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'https://unpkg.com/grapesjs@0.20.3/dist/css/grapes.min.css';
document.head.appendChild(cssLink);

let editor;

function initializeFunnelBuilder() {
  // Initialize GrapesJS editor
  editor = grapesjs.init({
    container: '#gjs',
    height: 'calc(100vh - 80px)',
    width: 'auto',
    storageManager: {
      type: 'local',
      autosave: true,
      autoload: true,
      stepsBeforeSave: 1,
    },
    blockManager: {
      appendTo: '#blocks',
      blocks: [
        {
          id: 'section',
          label: '<b>Section</b>',
          attributes: { class: 'gjs-block-section' },
          content: `<section class="section">
            <div class="container">
              <h1>Section Title</h1>
              <p>Section content goes here...</p>
            </div>
          </section>`,
        },
        {
          id: 'text',
          label: 'Text',
          content: '<div data-gjs-type="text">Insert your text here</div>',
        },
        {
          id: 'image',
          label: 'Image',
          select: true,
          content: { type: 'image' },
          activate: true,
        },
        {
          id: 'video',
          label: 'Video',
          content: `<video class="video" controls>
            <source src="" type="video/mp4">
            Your browser does not support the video tag.
          </video>`,
        },
        {
          id: 'button',
          label: 'Button',
          content: '<button class="btn btn-primary">Click Me</button>',
        },
        {
          id: 'form',
          label: 'Form',
          content: `<form class="form">
            <div class="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>`,
        },
        {
          id: 'hero',
          label: 'Hero Section',
          content: `<section class="hero">
            <div class="container">
              <h1 class="hero-title">Amazing Product</h1>
              <p class="hero-subtitle">Transform your business with our solution</p>
              <button class="btn btn-cta">Get Started Now</button>
            </div>
          </section>`,
        },
        {
          id: 'testimonial',
          label: 'Testimonial',
          content: `<div class="testimonial">
            <blockquote>"This product changed my life!"</blockquote>
            <cite>- Happy Customer</cite>
          </div>`,
        },
        {
          id: 'pricing',
          label: 'Pricing',
          content: `<div class="pricing-card">
            <h3>Basic Plan</h3>
            <div class="price">$29/month</div>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button class="btn btn-primary">Choose Plan</button>
          </div>`,
        },
        {
          id: 'footer',
          label: 'Footer',
          content: `<footer class="footer">
            <div class="container">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </footer>`,
        },
      ],
    },
    styleManager: {
      appendTo: '#styles',
      sectors: [
        {
          name: 'Dimension',
          open: false,
          buildProps: ['width', 'min-height', 'padding'],
          properties: [
            {
              type: 'integer',
              name: 'The width',
              property: 'width',
              units: ['px', '%'],
              defaults: 'auto',
              min: 0,
            }
          ]
        },
        {
          name: 'Typography',
          open: false,
          buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height'],
          properties: [
            {
              name: 'Font',
              property: 'font-family'
            },
            {
              name: 'Weight',
              property: 'font-weight'
            },
            {
              name: 'Font color',
              property: 'color',
            }
          ]
        },
        {
          name: 'Decorations',
          open: false,
          buildProps: ['opacity', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        },
        {
          name: 'Extra',
          open: false,
          buildProps: ['transition', 'perspective', 'transform'],
        },
      ],
    },
    traitManager: {
      appendTo: '#traits',
    },
    layerManager: {
      appendTo: '#layers',
    },
    canvas: {
      styles: [
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Open+Sans:wght@300;400;700&family=Lato:wght@300;400;700&family=Montserrat:wght@300;400;700&display=swap'
      ],
    },
  });

  // Load default CSS
  editor.setStyle(`
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Arial, sans-serif; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .section { padding: 60px 0; }
    .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 100px 0; }
    .hero-title { font-size: 3rem; margin-bottom: 20px; font-weight: bold; }
    .hero-subtitle { font-size: 1.5rem; margin-bottom: 30px; opacity: 0.9; }
    .btn { padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; text-decoration: none; display: inline-block; transition: all 0.3s ease; }
    .btn-primary { background: #007bff; color: white; }
    .btn-primary:hover { background: #0056b3; transform: translateY(-2px); }
    .btn-cta { background: #ff6b6b; color: white; font-size: 18px; padding: 18px 36px; }
    .btn-cta:hover { background: #ff5252; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255,107,107,0.4); }
    .form { max-width: 400px; margin: 0 auto; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; margin-bottom: 5px; font-weight: bold; }
    .form-group input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px; }
    .testimonial { text-align: center; padding: 40px; background: #f8f9fa; border-radius: 10px; margin: 20px 0; }
    .testimonial blockquote { font-size: 1.5rem; font-style: italic; margin-bottom: 20px; }
    .testimonial cite { font-weight: bold; color: #666; }
    .pricing-card { background: white; border: 1px solid #ddd; border-radius: 10px; padding: 30px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    .pricing-card h3 { font-size: 1.5rem; margin-bottom: 20px; }
    .price { font-size: 2.5rem; font-weight: bold; color: #007bff; margin-bottom: 20px; }
    .pricing-card ul { list-style: none; padding: 0; margin-bottom: 30px; }
    .pricing-card li { padding: 10px 0; border-bottom: 1px solid #eee; }
    .footer { background: #333; color: white; text-align: center; padding: 40px 0; }
    .video { width: 100%; max-width: 800px; height: auto; }
    
    /* Responsive */
    @media (max-width: 768px) {
      .hero-title { font-size: 2rem; }
      .hero-subtitle { font-size: 1.2rem; }
      .container { padding: 0 15px; }
    }
  `);

  // Templates
  const templates = {
    template1: {
      name: 'Landing Page',
      html: `
        <section class="hero">
          <div class="container">
            <h1 class="hero-title">Welcome to Our Amazing Product</h1>
            <p class="hero-subtitle">Transform your business with our innovative solution</p>
            <button class="btn btn-cta">Get Started Today</button>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <h2 style="text-align: center; margin-bottom: 40px;">Why Choose Us?</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
              <div style="text-align: center;">
                <h3>Fast</h3>
                <p>Lightning-fast performance that exceeds expectations.</p>
              </div>
              <div style="text-align: center;">
                <h3>Reliable</h3>
                <p>99.9% uptime guarantee with enterprise-grade security.</p>
              </div>
              <div style="text-align: center;">
                <h3>Scalable</h3>
                <p>Grows with your business from startup to enterprise.</p>
              </div>
            </div>
          </div>
        </section>
      `,
    },
    template2: {
      name: 'Product Launch',
      html: `
        <section class="hero" style="background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);">
          <div class="container">
            <h1 class="hero-title">🚀 Product Launch</h1>
            <p class="hero-subtitle">Be the first to experience the future</p>
            <button class="btn btn-cta">Join Waitlist</button>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="testimonial">
              <blockquote>"This is going to revolutionize the industry!"</blockquote>
              <cite>- Industry Expert</cite>
            </div>
          </div>
        </section>
      `,
    },
    template3: {
      name: 'Lead Generation',
      html: `
        <section class="hero" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);">
          <div class="container">
            <h1 class="hero-title">Get Your Free Guide</h1>
            <p class="hero-subtitle">Discover the secrets to success</p>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <form class="form">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="Enter your first name">
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter your email">
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">Download Free Guide</button>
            </form>
          </div>
        </section>
      `,
    },
    template4: {
      name: 'Sales Page',
      html: `
        <section class="hero" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <div class="container">
            <h1 class="hero-title">Limited Time Offer</h1>
            <p class="hero-subtitle">50% OFF - Only Today!</p>
            <button class="btn btn-cta">Buy Now</button>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="pricing-card">
              <h3>Special Deal</h3>
              <div class="price">$49 <span style="text-decoration: line-through; font-size: 1rem; color: #999;">$99</span></div>
              <ul>
                <li>✓ Full Access</li>
                <li>✓ 24/7 Support</li>
                <li>✓ Money Back Guarantee</li>
              </ul>
              <button class="btn btn-primary">Purchase Now</button>
            </div>
          </div>
        </section>
      `,
    },
    template5: {
      name: 'Webinar Registration',
      html: `
        <section class="hero" style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);">
          <div class="container">
            <h1 class="hero-title">Free Webinar</h1>
            <p class="hero-subtitle">Learn the insider secrets from industry experts</p>
            <p style="font-size: 1.2rem; margin: 20px 0;">📅 Date: March 25, 2024 | ⏰ Time: 2:00 PM EST</p>
            <button class="btn btn-cta">Register Now</button>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <h2 style="text-align: center; margin-bottom: 30px;">What You'll Learn</h2>
            <ul style="max-width: 600px; margin: 0 auto; font-size: 1.1rem; line-height: 2;">
              <li>Secret strategy #1 that top performers use</li>
              <li>How to 10x your results in 30 days</li>
              <li>Common mistakes to avoid</li>
              <li>Live Q&A session</li>
            </ul>
          </div>
        </section>
      `,
    },
    template6: {
      name: 'Newsletter Signup',
      html: `
        <section class="hero" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
          <div class="container">
            <h1 class="hero-title">Stay Updated</h1>
            <p class="hero-subtitle">Get weekly insights delivered to your inbox</p>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div style="max-width: 500px; margin: 0 auto; text-align: center;">
              <h2>Join 10,000+ Subscribers</h2>
              <p>Get exclusive content, tips, and updates straight to your email.</p>
              <form class="form">
                <div class="form-group">
                  <input type="email" name="email" placeholder="Enter your email address" style="text-align: center;">
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Subscribe Now</button>
              </form>
              <p style="font-size: 0.9rem; color: #666; margin-top: 15px;">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      `,
    },
    template7: {
      name: 'E-commerce',
      html: `
        <section class="hero" style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
          <div class="container">
            <h1 class="hero-title">Premium Products</h1>
            <p class="hero-subtitle">Quality you can trust, prices you'll love</p>
            <button class="btn btn-cta">Shop Now</button>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
              <div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px; text-align: center;">
                <div style="height: 200px; background: #f8f9fa; border-radius: 5px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; color: #999;">Product Image</div>
                <h3>Product Name</h3>
                <p style="color: #666;">Product description goes here...</p>
                <div style="font-size: 1.5rem; font-weight: bold; color: #007bff; margin: 10px 0;">$99.99</div>
                <button class="btn btn-primary">Add to Cart</button>
              </div>
              <div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px; text-align: center;">
                <div style="height: 200px; background: #f8f9fa; border-radius: 5px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; color: #999;">Product Image</div>
                <h3>Product Name</h3>
                <p style="color: #666;">Product description goes here...</p>
                <div style="font-size: 1.5rem; font-weight: bold; color: #007bff; margin: 10px 0;">$149.99</div>
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
      `,
    },
    template8: {
      name: 'App Download',
      html: `
        <section class="hero" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <div class="container">
            <h1 class="hero-title">📱 Download Our App</h1>
            <p class="hero-subtitle">Available on iOS and Android</p>
            <div style="margin-top: 30px;">
              <button class="btn btn-cta" style="margin: 0 10px;">App Store</button>
              <button class="btn btn-cta" style="margin: 0 10px;">Google Play</button>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: center;">
              <div>
                <h2>Features</h2>
                <ul style="font-size: 1.1rem; line-height: 1.8;">
                  <li>✓ Easy to use interface</li>
                  <li>✓ Offline functionality</li>
                  <li>✓ Real-time sync</li>
                  <li>✓ Secure & private</li>
                </ul>
              </div>
              <div style="text-align: center;">
                <div style="width: 200px; height: 400px; background: #f8f9fa; border-radius: 20px; margin: 0 auto; display: flex; align-items: center; justify-content: center; color: #999;">App Screenshot</div>
              </div>
            </div>
          </div>
        </section>
      `,
    },
    template9: {
      name: 'Course Enrollment',
      html: `
        <section class="hero" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
          <div class="container">
            <h1 class="hero-title">Master Your Skills</h1>
            <p class="hero-subtitle">Comprehensive online course with lifetime access</p>
            <button class="btn btn-cta">Enroll Now</button>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
              <div>
                <h2>Course Includes</h2>
                <ul style="font-size: 1.1rem; line-height: 1.8;">
                  <li>📹 50+ Video Lessons</li>
                  <li>📄 Downloadable Resources</li>
                  <li>🏆 Certificate of Completion</li>
                  <li>💬 Community Access</li>
                  <li>♾️ Lifetime Access</li>
                </ul>
              </div>
              <div class="pricing-card">
                <h3>Limited Time</h3>
                <div class="price">$197 <span style="text-decoration: line-through; font-size: 1rem; color: #999;">$497</span></div>
                <button class="btn btn-primary">Start Learning</button>
              </div>
            </div>
          </div>
        </section>
      `,
    },
    template10: {
      name: 'Event Registration',
      html: `
        <section class="hero" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
          <div class="container">
            <h1 class="hero-title">🎉 Annual Conference 2024</h1>
            <p class="hero-subtitle">Join industry leaders for 3 days of networking and learning</p>
            <p style="font-size: 1.2rem; margin: 20px 0;">📍 San Francisco | 📅 June 15-17, 2024</p>
            <button class="btn btn-cta">Register Now</button>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <h2 style="text-align: center; margin-bottom: 40px;">Event Highlights</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
              <div style="text-align: center; padding: 20px;">
                <h3>🎤 Keynote Speakers</h3>
                <p>World-renowned experts sharing their insights</p>
              </div>
              <div style="text-align: center; padding: 20px;">
                <h3>🤝 Networking</h3>
                <p>Connect with like-minded professionals</p>
              </div>
              <div style="text-align: center; padding: 20px;">
                <h3>🛠️ Workshops</h3>
                <p>Hands-on sessions to boost your skills</p>
              </div>
            </div>
            <div style="text-align: center; margin-top: 40px;">
              <div class="pricing-card" style="display: inline-block; max-width: 400px;">
                <h3>Early Bird Special</h3>
                <div class="price">$299 <span style="text-decoration: line-through; font-size: 1rem; color: #999;">$599</span></div>
                <button class="btn btn-primary">Secure Your Spot</button>
              </div>
            </div>
          </div>
        </section>
      `,
    },
  };

  // Event Listeners
  document.getElementById('template-selector').addEventListener('change', function(e) {
    const templateId = e.target.value;
    if (templateId && templates[templateId]) {
      editor.setComponents(templates[templateId].html);
      console.log(`Loaded template: ${templates[templateId].name}`);
    }
  });

  document.getElementById('font-selector').addEventListener('change', function(e) {
    const selectedFont = e.target.value;
    const selected = editor.getSelected();
    if (selected) {
      selected.setStyle({ 'font-family': selectedFont });
    } else {
      // Apply to body if no element is selected
      editor.setStyle(`* { font-family: ${selectedFont} !important; }`);
    }
  });

  document.getElementById('color-picker').addEventListener('change', function(e) {
    const selectedColor = e.target.value;
    const selected = editor.getSelected();
    if (selected) {
      selected.setStyle({ 'color': selectedColor });
    }
  });

  document.getElementById('upload-btn').addEventListener('click', function() {
    document.getElementById('image-upload').click();
  });

  document.getElementById('image-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const imageUrl = event.target.result;
        
        // Add image to assets
        editor.AssetManager.add({
          src: imageUrl,
          name: file.name,
        });
        
        // Option to set as background
        if (confirm('Set as background image for selected element?')) {
          const selected = editor.getSelected();
          if (selected) {
            selected.setStyle({
              'background-image': `url(${imageUrl})`,
              'background-size': 'cover',
              'background-position': 'center',
            });
          }
        } else {
          // Add as image element
          editor.setComponents(editor.getComponents().add({
            type: 'image',
            src: imageUrl,
            style: {
              'max-width': '100%',
              'height': 'auto',
            }
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('save-btn').addEventListener('click', function() {
    const html = editor.getHtml();
    const css = editor.getCss();
    localStorage.setItem('funnel-html', html);
    localStorage.setItem('funnel-css', css);
    alert('Funnel saved successfully!');
  });

  document.getElementById('preview-btn').addEventListener('click', function() {
    const html = editor.getHtml();
    const css = editor.getCss();
    const previewWindow = window.open('', '_blank');
    previewWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Funnel Preview</title>
          <style>${css}</style>
        </head>
        <body>${html}</body>
      </html>
    `);
    previewWindow.document.close();
  });

  document.getElementById('export-btn').addEventListener('click', function() {
    const html = editor.getHtml();
    const css = editor.getCss();
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Funnel</title>
    <style>
        ${css}
    </style>
</head>
<body>
    ${html}
</body>
</html>`;
    
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'funnel.html';
    a.click();
    URL.revokeObjectURL(url);
  });

  // Load saved content if available
  const savedHtml = localStorage.getItem('funnel-html');
  const savedCss = localStorage.getItem('funnel-css');
  if (savedHtml) {
    editor.setComponents(savedHtml);
  }
  if (savedCss) {
    editor.setStyle(savedCss);
  }

  // Add custom commands for better UX
  editor.Commands.add('show-blocks', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getBlocksEl(editor) { return this.getRowEl(editor).querySelector('.blocks-container') },
    run(editor) {
      const blocksEl = this.getBlocksEl(editor);
      blocksEl.style.display = '';
    },
    stop(editor) {
      const blocksEl = this.getBlocksEl(editor);
      blocksEl.style.display = 'none';
    },
  });

  console.log('Funnel Builder initialized successfully!');
}
