// Simple script to create a properly formatted contact page
// Run this in the browser console while logged into the admin panel

const contactPageContent = {
  root: {
    type: 'root',
    version: 1,
    children: [
      {
        type: 'heading',
        version: 1,
        tag: 'h1',
        children: [
          {
            type: 'text',
            version: 1,
            text: 'Contact Us',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
      },
      {
        type: 'heading',
        version: 1,
        tag: 'h3',
        children: [
          {
            type: 'text',
            version: 1,
            text: 'Clean Cuts Trees',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
      },
      {
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            version: 1,
            text: 'Fruit Heights, UT 84037',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        textFormat: 0,
        textStyle: '',
      },
      {
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            version: 1,
            text: '(801) 473-7548',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        textFormat: 0,
        textStyle: '',
      },
      {
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            version: 1,
            text: 'estimates@cleancutstrees.com',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        textFormat: 0,
        textStyle: '',
      },
      {
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            version: 1,
            text: 'Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of Davis, Salt Lake and Weber County, Utah, & surrounding areas.',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        textFormat: 0,
        textStyle: '',
      },
      {
        type: 'heading',
        version: 1,
        tag: 'h3',
        children: [
          {
            type: 'text',
            version: 1,
            text: 'Our Services',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
      },
      {
        type: 'heading',
        version: 1,
        tag: 'h3',
        children: [
          {
            type: 'text',
            version: 1,
            text: 'Service Areas',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
      },
      {
        type: 'heading',
        version: 1,
        tag: 'h3',
        children: [
          {
            type: 'text',
            version: 1,
            text: 'Location',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
  },
}

console.log('Contact page content in Lexical format:')
console.log(JSON.stringify(contactPageContent, null, 2))
