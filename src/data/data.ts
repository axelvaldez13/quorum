const data = {
  navbar: [
    { id: 1, url: '', text: 'ARTFOL' },
    { id: 2, url: '#FAQsSection', text: 'FAQ' }
  ],
  hero: {
    text: { title: 'THE SOCIAL MEDIA APP TO KICKSTART YOUR ART JOURNEY' },
    nativeApp: [
      {
        id: 1,
        url: 'http://google.com',
        alt: 'Avaiable on Google Play',
        src: '/assets/google-play-artfol.png'
      },
      {
        id: 2,
        url: 'http://google.com',
        alt: 'Download on the AppStore',
        src: '/assets/app-store-artfol.png'
      }
    ]
  },
  secondary: {
    text: {
      title: 'Tailored for Artists',
      subtitle:
        'As an artist centered app, we try our best to not limit the artists on our platform. '
    },
    cards: [
      {
        id: 1,
        src: '/assets/Secondary/gallery-artfol-column.jpg',
        title: 'Gallery',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        creator: '@creador'
      },
      {
        id: 2,
        src: '/assets/Secondary/customization-artfol-column.jpg',
        title: 'Customization',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        creator: '@creador'
      },
      {
        id: 3,
        src: '/assets/Secondary/challenges-artfol-column.jpg',
        title: 'Challenges',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        creator: '@creador'
      },
      {
        id: 4,
        src: '/assets/Secondary/no-algorithms-artfol-column.jpg',
        title: 'NO complicated algorithms',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        creator: '@creador'
      }
    ]
  },
  faq: [
    {
      id: 1,
      title: 'Where can I get Artfol? ',
      text: 'Artfol will be available on Android and iOS phones.'
    },
    {
      id: 2,
      title: 'Will Artfol be available on the PC?',
      text: 'Artfol will be available on Android and iOS phones.'
    },
    {
      id: 3,
      title: 'Will I be able to post not safe for work art?',
      text:
        'Yes, Artfol lets users add a NSFW or Gore filter to their art before uploading. Please read our content guidelines for more details on what content we allow on Artfol.'
    },
    {
      id: 4,
      title: 'Can I sign up if I am not an artist?',
      text:
        'Of course! You have the option to sign up with a non-artist account.'
    },
    {
      id: 5,
      title: "Can I use the app if I don't do digital art?",
      text:
        'Artfol is open to all types of visual art! This includes photography, cosplay, traditional art etc!'
    }
  ]
}

export default data
