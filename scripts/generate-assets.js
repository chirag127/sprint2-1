const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateAssets() {
  console.log('🎨 Generating application assets...');

  // Ensure assets and public directories exist
  const assetsDir = path.join(__dirname, '..', 'assets');
  const publicDir = path.join(__dirname, '..', 'public');
  
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  try {
    // Convert logo SVG to PNG
    const logoSvgPath = path.join(assetsDir, 'logo.svg');
    const logoPngPath = path.join(publicDir, 'logo.png');
    
    if (fs.existsSync(logoSvgPath)) {
      await sharp(logoSvgPath)
        .png()
        .resize(200, 60)
        .toFile(logoPngPath);
      
      console.log('✅ Logo PNG generated successfully');
    } else {
      console.log('⚠️  Logo SVG not found, skipping logo generation');
    }

    // Generate favicon from logo
    const faviconPath = path.join(publicDir, 'favicon.ico');
    if (fs.existsSync(logoSvgPath)) {
      await sharp(logoSvgPath)
        .resize(32, 32)
        .png()
        .toFile(faviconPath.replace('.ico', '.png'));
      
      console.log('✅ Favicon generated successfully');
    }

    // Create a simple cart icon SVG and convert to PNG
    const cartIconSvg = `
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" fill="#059669"/>
        <circle cx="9" cy="20" r="1" fill="#059669"/>
        <circle cx="15" cy="20" r="1" fill="#059669"/>
      </svg>
    `;

    const cartIconPath = path.join(publicDir, 'cart-icon.png');
    await sharp(Buffer.from(cartIconSvg))
      .png()
      .resize(24, 24)
      .toFile(cartIconPath);
    
    console.log('✅ Cart icon generated successfully');

    console.log('🎉 All assets generated successfully!');
    
  } catch (error) {
    console.error('❌ Error generating assets:', error);
    process.exit(1);
  }
}

generateAssets();
