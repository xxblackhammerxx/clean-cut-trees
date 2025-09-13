import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

const createMediaRecords = async () => {
  try {
    console.log('📁 Creating media records for land clearing images...')

    await payload.init({
      config,
    })

    console.log('✅ Payload initialized successfully')

    // Images from the land clearing page
    const imagesToCreate = [
      {
        filename: '654766ab01c63fc2cf45c8c5bdc851dcff4ceff2.jpg',
        alt: 'Land Clearing Removal Kaysville UT',
      },
      {
        filename: '0b189c959be0466f92b9b79315997699965fd0a0.jpg',
        alt: 'Land Clearing Services Kaysville UT',
      },
      {
        filename: '90a16e2ce5a7f00fb2e4f2b204af48a34ef55eab.png',
        alt: 'Clean Cuts Trees Logo',
      },
      {
        filename: 'f718afde080bd8d3dd3880e1e259267f39699dcb.png',
        alt: 'Service Badge',
      },
    ]

    console.log(`📸 Creating ${imagesToCreate.length} media records...`)

    for (const imageInfo of imagesToCreate) {
      try {
        // Check if media record already exists
        const existing = await payload.find({
          collection: 'media',
          where: {
            filename: {
              equals: imageInfo.filename,
            },
          },
          limit: 1,
        })

        if (existing.docs.length > 0) {
          console.log(`   ⏭️  Media record already exists for ${imageInfo.filename}`)
          continue
        }

        // Check if file exists
        const filePath = path.join(
          process.cwd(),
          'public',
          'content-migration',
          'assets',
          imageInfo.filename,
        )
        if (!fs.existsSync(filePath)) {
          console.log(`   ❌ File not found: ${imageInfo.filename}`)
          continue
        }

        // Get file stats
        const stats = fs.statSync(filePath)
        const isImage = imageInfo.filename.match(/\.(jpg|jpeg|png|gif|webp)$/i)

        if (!isImage) {
          console.log(`   ⏭️  Skipping non-image file: ${imageInfo.filename}`)
          continue
        }

        // Create media record
        const mediaRecord = await payload.create({
          collection: 'media',
          data: {
            alt: imageInfo.alt,
            filename: imageInfo.filename,
            mimeType: imageInfo.filename.toLowerCase().includes('.png')
              ? 'image/png'
              : 'image/jpeg',
            filesize: stats.size,
            url: `/content-migration/assets/${imageInfo.filename}`,
          },
          filePath: filePath, // This tells Payload where to find the actual file
        })

        console.log(`   ✅ Created media record for ${imageInfo.filename} (ID: ${mediaRecord.id})`)
      } catch (error) {
        console.error(
          `   ❌ Failed to create media record for ${imageInfo.filename}:`,
          error.message,
        )
      }
    }

    console.log('\n🎉 Media record creation completed!')
    console.log('📝 You can now use these images in the Lexical editor by:')
    console.log('   1. Place your cursor where you want the image')
    console.log('   2. Click the image/upload button in the Lexical toolbar')
    console.log('   3. Select from the existing media or upload new files')
  } catch (error) {
    console.error('❌ Error creating media records:', error)
  } finally {
    process.exit(0)
  }
}

createMediaRecords()
