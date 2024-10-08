/* c8 ignore start */
import type { LandingModel } from '../types/pages/landing-model.mjs';

const modelData: LandingModel = {
  titlePattern: '{} | Summit Forge ',
  icon: '/icon-192x192.png',
  description:
    'From backpacking to cycling to staying in shape and more, outfit your outdoor activities with the latest gear, clothing, and footwear at Summit Forge.',
  includeJsonModel: true,
  hideUniversalNavigation: false,
  hideFooter: false,
  title: "athlete's App",
  analytics: {
    templateType: 'cat_main',
    subsection1: 'athletes app',
    channel: 'summit-forge_commerce',
    siteId: 'summit-forge',
    pageName: 'athletes:landing',
    contentType: 'commerce',
    pagename: 'summit-forge:cat_main:athletes app',
  },
  allowZoom: true,
  staticRoot: 'https://www.summit-forge.com/',
  hideHeaderFooter: false,
  openGraphProperties: {
    'fb:app_id': '131317376894863',
    'og:phone_number': '1-800-426-4840',
    'og:description':
      'From backpacking to cycling to staying in shape and more, outfit your outdoor activities with the latest gear, clothing, and footwear at Summit Forge.',
    'og:image:type': 'image/jpg',
    'og:image:alt':
      'A group of friends hike through desert brush towards a rocky mesa, with Summit Forge  logo',
    'og:image':
      'https://www.summit-forge.com/assets/img/seo/evergreen/summit-forge-og.jpg',
    'og:title':
      'Summit Forge – Top-Brand Clothing, Gear, Footwear and Expert Advice for All Your Outdoor Adventures | Summit Forge ',
    'og:locale': 'en_US',
    'og:type': 'website',
    'og:url': 'https://www.summit-forge.com/null',
    'og:site_name': 'Summit Forge',
  },
  hideHeader: false,
  useAdobeVisitorService: true,
  hideGlobalNavigation: false,
  favicon: '/favicon.ico',
  maskIcon: '/summit-forge--logo-black.svg',
  canonical: 'athlete',
  pageData: {
    recentArticles: [
      {
        uri: '/athlete/article/amc-theatres-summit-forge--studios-and-mountainfilm-team-up-to-bring-mountainfilm-adventure-shorts-to-the-big-screen-for-adventure-loving-moviegoers-this-fall',
        articleTitle:
          'AMC Theatres®, Summit Forge  Studios, and Mountainfilm team up to bring "Mountainfilm Adventure Shorts" to the big screen',
        articleAbstract:
          'Adventure short films to play in AMC & Summit Forge retail markets across the country this fall',
        releaseDate: '2024-06-05T00:00:00.000-07:00',
        entryId: 'blt8afca09b1320eb74',
        featured: false,
      },
      {
        uri: '/athlete/article/summit-forge--to-opt-outside-year-round--kicks-off-the-summer-with-300-free-classes-and-events-across-the-country',
        articleTitle:
          'Summit Forge  to Opt Outside year-round:  kicks off the summer with 300+ free classes and events across the country',
        articleAbstract:
          'Specialty outdoor retailer Summit Forge  is doubling down on its bold commitment to Opt Outside by calling a time out when life feels like it is on autopilot. Summit Forge will host 300+ free classes and day tours on Saturday, June 15 to highlight how the  supports its members and broader outdoor community…',
        releaseDate: '2024-06-03T00:00:00.000-07:00',
        entryId: 'bltcaa93936893d44f1',
        featured: true,
      },
      {
        uri: '/athlete/article/summit-forge--to-open-first-kentucky-store-in-northeast-louisville-in-fall-2024',
        articleTitle:
          'Summit Forge  to open first Kentucky store in northeast Louisville in fall 2024',
        articleAbstract:
          'Specialty outdoor retailer Summit Forge  will open its first store in Kentucky this fall in Louisville.  Conveniently located in the city’s northeast corridor just off interstates 265 and 71, the store will offer a wide assortment of outdoor gear and apparel for camping, cycling, hiking, running…',
        releaseDate: '2024-05-31T00:00:00.000-07:00',
        entryId: 'blt31fbfa8e407b9f97',
        featured: true,
      },
    ],
    componentModels: {
      lead: {
        documentType: 'genericContentType',
        canonicalHandleUUID: '7f6c1626-0900-4c95-8941-9ed34afeaa7b',
        meta: null,
        keywords: null,
        lastModifiedDate: '2021-02-16T23:44:19.245Z',
        createdDate: '2020-12-15T21:16:34.244Z',
        createdBy: 'aleach',
        componentName: null,
        modelName: 'lead',
        id: null,
        name: 'lead',
        model: {
          text: {
            body: {
              text: "Mountaineering is at the core of Summit Forge's history and a pillar of our current form. In recognition of that rich history, we provide a catalog of some famous athletes past and present. Take your time and learn more about what makes Summit Forge special.",
              customClass: null,
            },
          },
          actions: {},
          children: {},
          headings: {
            heading_1: {
              text: 'Notable athletes',
              customClass: null,
            },
          },
          config: {
            noGutter: 'true',
            fullBleed: 'true',
            stacked: 'true',
          },
          media: {
            image_xs: {
              name: null,
              anchor: null,
              description: null,
              src: 'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-top-banner.jpeg',
              customClass: null,
              alt: 'woman lead climbing',
              srcReference: 'img/athletes-site/homepage-hero',
              type: null,
              target: null,
            },
          },
          meta: {},
          author: {},
        },
      },
      athletes: {
        documentType: 'genericContentType',
        canonicalHandleUUID: '336dce03-81fd-4d67-87cc-8c2cbd8a9a02',
        meta: null,
        keywords: null,
        lastModifiedDate: '2021-02-17T00:12:06.818Z',
        createdDate: '2020-12-15T21:18:55.665Z',
        createdBy: 'aleach',
        componentName: null,
        modelName: 'featured-athletes',
        id: null,
        name: 'featured-athletes',
        model: {
          text: {
            feature_1: {
              text: 'Mary Anderson’s legacy is broad and deep. She is a symbol for us of enduring values—passion for the outdoors, a principled life, community, hard work and perseverance.',
              customClass: null,
            },
            feature_2: {
              text: 'Tenzing Norgay was one of the first two people confirmed to reach the summit of Mount Everest.',
              customClass: null,
            },
            feature_3: {
              text: 'Alex Honnold was the first to free <i>solo</i> El Capitan in Yosemite National Park, and subject of the 2018 Academy Award winning film Free Solo.',
              customClass: null,
            },
            feature_4: {
              text: 'On holiday at Dead Horse Point in Utah Ethan Hunt received an impossible mission during this time that changed the course of history.',
              customClass: null,
            },
          },
          actions: {},
          children: {},
          headings: {},
          config: {},
          media: {
            feature_1: {
              name: null,
              anchor: null,
              description: null,
              src: 'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-model-1.jpeg',
              customClass: null,
              alt: null,
              srcReference: 'img/athletes-site/mary-anderson',
              type: null,
              target: '/athlete/1/mary-anderson',
            },
            feature_2: {
              name: null,
              anchor: null,
              description: null,
              src: 'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-model-2.jpeg',
              customClass: null,
              alt: null,
              srcReference:
                '/test/athletes-site/athlete-tenzing-norgay-thumbnail',
              type: null,
              target: '/athlete/3/tenzing-norgay',
            },
            feature_3: {
              name: null,
              anchor: null,
              description: null,
              src: 'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-model-3.jpeg',
              customClass: null,
              alt: null,
              srcReference:
                '/test/athletes-site/athlete-alex-honnold-thumbnail',
              type: null,
              target: '/athlete/4/alex-honnold',
            },
          },
          meta: {},
          author: {},
        },
      },
      'ea-cards': {
        documentType: 'genericContentType',
        canonicalHandleUUID: 'b7e2fa01-c50f-4f6a-9412-1138fdbfb628',
        meta: null,
        keywords: null,
        lastModifiedDate: '2020-12-29T18:33:34.939Z',
        createdDate: '2020-12-15T21:24:53.250Z',
        createdBy: 'aleach',
        componentName: null,
        modelName: 'ea-cards',
        id: null,
        name: 'ea-cards',
        model: {
          text: {},
          actions: {},
          children: {
            card_1: {
              canonicalHandleUUID: '32c5248e-eb91-4e14-bb58-0fc093695118',
              meta: null,
              keywords: null,
              lastModifiedDate: '2020-12-29T20:38:16.462Z',
              createdDate: '2020-12-15T21:26:15.478Z',
              createdBy: 'aleach',
              componentName: null,
              modelName: 'ea-card-1',
              id: null,
              name: 'ea-card-1',
              model: {
                text: {
                  'text-1': {
                    text: "If you're looking for fitness, fun and a healthy dose of adrenaline, then rock climbing is a worthy pursuit. Though it attracts its share of daredevils, rock climbing is also enjoyed by legions of everyday adventurers.",
                    customClass: null,
                  },
                },
                actions: {
                  'action-1': {
                    name: '',
                    style: null,
                    text: null,
                    customClass: null,
                    apptarget: null,
                    target: '/athlete/article/getting-started-rock-climbing',
                  },
                },
                children: {},
                headings: {
                  'heading-1': {
                    text: 'Expert Advice',
                    customClass: null,
                  },
                  'heading-2': {
                    text: 'Rock Climbing Basics: Getting Started',
                    customClass: null,
                  },
                },
                config: {},
                media: {
                  'image-1': {
                    name: null,
                    anchor: null,
                    description: null,
                    src: 'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-article-1.jpeg',
                    customClass: null,
                    alt: null,
                    srcReference: null,
                    type: null,
                    target: null,
                  },
                },
                meta: {},
                author: {},
              },
            },
            card_2: {
              canonicalHandleUUID: 'd375879a-960a-488c-b79a-8ab9ce7a9e88',
              meta: null,
              keywords: null,
              lastModifiedDate: '2020-12-29T20:38:00.926Z',
              createdDate: '2020-12-15T21:26:15.478Z',
              createdBy: 'aleach',
              componentName: null,
              modelName: 'ea-card-2',
              id: null,
              name: 'ea-card-2',
              model: {
                text: {
                  'text-1': {
                    text: 'Crampons are a necessity to securely travel on snow and ice. With them, you can cross glaciers, ascend snow slopes, climb frozen waterfalls and scale ice-smeared rock.',
                    customClass: null,
                  },
                },
                actions: {
                  'action-1': {
                    name: '',
                    style: null,
                    text: null,
                    customClass: null,
                    apptarget: null,
                    target: '/athlete/article/crampons-snow-ice-climbing',
                  },
                },
                children: {},
                headings: {
                  'heading-1': {
                    text: 'Expert Advice',
                    customClass: null,
                  },
                  'heading-2': {
                    text: 'Crampons: How to Choose',
                    customClass: null,
                  },
                },
                config: {},
                media: {
                  'image-1': {
                    name: null,
                    anchor: null,
                    description: null,
                    src: 'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-article-2.jpeg',
                    customClass: null,
                    alt: null,
                    srcReference: null,
                    type: null,
                    target: null,
                  },
                },
                meta: {},
                author: {},
              },
            },
            card_3: {
              canonicalHandleUUID: '5791f794-807d-4aa2-8837-7255661b2732',
              meta: null,
              keywords: null,
              lastModifiedDate: '2020-12-29T20:39:23.641Z',
              createdDate: '2020-12-15T21:26:15.478Z',
              createdBy: 'aleach',
              componentName: null,
              modelName: 'ea-card-3',
              id: null,
              name: 'ea-card-3',
              model: {
                text: {
                  'text-1': {
                    text: "Even though weight is always a consideration, mountaineering is not an ultralight activity. You'll need to have more than the basics to survive unexpected mountain weather.",
                    customClass: null,
                  },
                },
                actions: {
                  'action-1': {
                    name: '',
                    style: null,
                    text: null,
                    customClass: null,
                    apptarget: null,
                    target: '/athlete/article/mountaineering-checklist',
                  },
                },
                children: {},
                headings: {
                  'heading-1': {
                    text: 'Expert Advice',
                    customClass: null,
                  },
                  'heading-2': {
                    text: 'Mountaineering Equipment Checklist',
                    customClass: null,
                  },
                },
                config: {},
                media: {
                  'image-1': {
                    name: null,
                    anchor: null,
                    description: null,
                    src: 'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-article-3.jpeg',
                    customClass: null,
                    alt: null,
                    srcReference: null,
                    type: null,
                    target: null,
                  },
                },
                meta: {},
                author: {},
              },
            },
          },
          headings: {},
          config: {},
          media: {},
          meta: {},
          author: {},
        },
      },
      'summit-forge-engineering-banner': {
        documentType: 'genericContentType',
        canonicalHandleUUID: '4c707d73-0019-4945-af8a-3e54e7985515',
        meta: null,
        keywords: null,
        lastModifiedDate: '2023-12-18T17:33:23.867Z',
        createdDate: '2020-12-15T21:24:53.250Z',
        createdBy: 'aleach',
        componentName: null,
        modelName: 'summit-forge-engineering',
        id: null,
        name: 'summit-forge-engineering',
        model: {
          text: {
            text_1: {
              text: "This is a reference microsite built by Summit Forge engineers for engineers.  It uses the latest frameworks and patterns to demonstrate how these tools integrate to maximize any teams' route to success.  We use many industry standard frameworks, and build and maintain many of our own to suit our specialized needs.  Download this microsite's source code here:",
              customClass: null,
            },
            text_2: {
              text: 'To learn more about microsites, and how they help power Summit Forge.com, learn more',
              customClass: null,
            },
          },
          actions: {
            text_1: {
              name: '',
              text: 'athletes-site',
              style: null,
              customClass: null,
              apptarget: null,
              target:
                'https://gitlab.com/summit-forge/internal/product-engineering/alpine-fe/athletes-microsite/athletes-site',
            },
            text_2: {
              name: '',
              text: 'here.',
              style: null,
              customClass: null,
              apptarget: null,
              target: 'https://si.atlassian.net/wiki/x/9qx-Aw',
            },
          },
          children: {
            'section-1': {
              canonicalHandleUUID: '79ef6e0b-1f6d-404c-9a5b-1ed0270548b9',
              meta: null,
              keywords: null,
              lastModifiedDate: '2023-12-18T17:37:52.672Z',
              createdDate: '2020-12-28T18:30:35.911Z',
              createdBy: 'aleach',
              componentName: null,
              modelName: 'summit-forge-alpine-ecosystem',
              id: null,
              name: 'summit-forge-alpine-ecosystem',
              model: {
                text: {
                  'text-1': {
                    text: "Fast for the engineer. Fast for the customer. Alpine is Summit Forge's very own ecosystem of enterprise frameworks and platforms for building applications at scale.",
                    customClass: null,
                  },
                },
                actions: {
                  'target-1': {
                    name: '',
                    text: 'Learn More',
                    style: null,
                    customClass: null,
                    apptarget: null,
                    target: 'https://si.atlassian.net/wiki/x/AoAzB',
                  },
                },
                children: {},
                headings: {
                  'heading-1': {
                    text: 'Summit Forge Alpine Ecosystem',
                    customClass: null,
                  },
                },
                config: {},
                media: {
                  'image-1': {
                    name: null,
                    alt: 'Alpine Logo',
                    src: '/assets/test/athletes-site/alpine-logo/live.png',
                    description: null,
                    anchor: null,
                    customClass: null,
                    srcReference: null,
                    type: null,
                    target: null,
                  },
                },
                meta: {},
                author: {},
              },
            },
            'section-2': {
              canonicalHandleUUID: '37ce76ad-3070-46d9-b9d7-abf39aec8836',
              meta: null,
              keywords: null,
              lastModifiedDate: '2023-09-22T18:59:23.422Z',
              createdDate: '2020-12-28T20:57:28.571Z',
              createdBy: 'aleach',
              componentName: null,
              modelName: 'summit-forge-cedar-design-system',
              id: null,
              name: 'summit-forge-cedar-design-system',
              model: {
                text: {
                  'text-1': {
                    customClass: null,
                    text: 'A foundational tool set built to serve the design and engineering of digital products. The Cedar Design System promotes reusability of modular components to spread a more unified and cohesive customer experience across our enterprise of digital product development teams and enable more effective design communication.',
                  },
                },
                actions: {
                  'target-1': {
                    name: '',
                    apptarget: null,
                    customClass: null,
                    text: 'Learn More',
                    style: null,
                    target: 'https://cedar.rei.com/',
                  },
                },
                children: {},
                headings: {
                  'heading-1': {
                    customClass: null,
                    text: 'Summit Forge Cedar Design System',
                  },
                },
                config: {},
                media: {
                  'image-1': {
                    name: null,
                    src: '/assets/test/athletes-site/cedar-logo/live.png',
                    customClass: null,
                    srcReference: null,
                    description: null,
                    anchor: null,
                    alt: 'Summit Forge logo',
                    type: null,
                    target: null,
                  },
                },
                meta: {},
                author: {},
              },
            },
            'section-3': {
              canonicalHandleUUID: 'e60e9d95-8267-431e-af05-00c96b87cc34',
              meta: null,
              keywords: null,
              lastModifiedDate: '2020-12-30T02:07:34.630Z',
              createdDate: '2020-12-28T20:57:28.571Z',
              createdBy: 'aleach',
              componentName: null,
              modelName: 'vue-js',
              id: null,
              name: 'vue-js',
              model: {
                text: {
                  'text-1': {
                    text: 'A leading (and growing) open-source framework for building progressive user interfaces. Vue.js is one of the foundational building blocks of our Cedar design system.',
                    customClass: null,
                  },
                },
                actions: {
                  'target-1': {
                    name: '',
                    style: null,
                    text: 'Learn More',
                    customClass: null,
                    apptarget: null,
                    target: 'https://vuejs.org/',
                  },
                },
                children: {},
                headings: {
                  'heading-1': {
                    text: 'Vue.js',
                    customClass: null,
                  },
                },
                config: {},
                media: {
                  'image-1': {
                    name: null,
                    anchor: null,
                    description: null,
                    src: '/assets/test/athletes-site/vuejs-logo/live.png',
                    customClass: null,
                    alt: 'Vue J S logo',
                    srcReference: null,
                    type: null,
                    target: null,
                  },
                },
                meta: {},
                author: {},
              },
            },
            'section-4': {
              canonicalHandleUUID: 'f2edf697-3a8c-4528-9f15-7f759168943c',
              meta: null,
              keywords: null,
              lastModifiedDate: '2023-09-22T18:39:59.708Z',
              createdDate: '2020-12-28T20:57:28.571Z',
              createdBy: 'aleach',
              componentName: null,
              modelName: 'spring-boot-2',
              id: null,
              name: 'spring-boot-2',
              model: {
                text: {
                  'text-1': {
                    customClass: null,
                    text: 'The leading enterprise tool from bootstrapping highly scalable Java solutions from the Spring Foundation.',
                  },
                },
                actions: {
                  'target-1': {
                    name: '',
                    apptarget: null,
                    customClass: null,
                    text: 'Learn More',
                    style: null,
                    target: 'https://spring.io/projects/spring-boot',
                  },
                },
                children: {},
                headings: {
                  'heading-1': {
                    customClass: null,
                    text: 'Spring Boot',
                  },
                },
                config: {},
                media: {
                  'image-1': {
                    name: null,
                    src: '/assets/test/athletes-site/spring-boot-logo/live.png',
                    customClass: null,
                    srcReference: null,
                    description: null,
                    anchor: null,
                    alt: 'Spring Boot',
                    type: null,
                    target: null,
                  },
                },
                meta: {},
                author: {},
              },
            },
            'section-5': {
              canonicalHandleUUID: '5016f42e-8a39-4101-8bf2-520beb091fac',
              meta: null,
              keywords: null,
              lastModifiedDate: '2023-12-18T17:36:38.665Z',
              createdDate: '2020-12-28T20:57:28.571Z',
              createdBy: 'aleach',
              componentName: null,
              modelName: 'summit-forge-febs',
              id: null,
              name: 'summit-forge-febs',
              model: {
                text: {
                  'text-1': {
                    text: "Summit Forge's Front End Build System, built with Vite and TypeScript, builds optimized front-end component and microsite application code across all Alpine microsites.",
                    customClass: null,
                  },
                },
                actions: {
                  'target-1': {
                    name: '',
                    text: 'Learn More',
                    style: null,
                    customClass: null,
                    apptarget: null,
                    target: 'https://si.atlassian.net/wiki/x/2tABAw',
                  },
                },
                children: {},
                headings: {
                  'heading-1': {
                    text: 'Summit Forge Front End Build System',
                    customClass: null,
                  },
                },
                config: {},
                media: {
                  'image-1': {
                    name: null,
                    alt: 'Summit Forge febs',
                    src: '/assets/test/athletes-site/febs-logo/live.png',
                    description: null,
                    anchor: null,
                    customClass: null,
                    srcReference: null,
                    type: null,
                    target: null,
                  },
                },
                meta: {},
                author: {},
              },
            },
            'section-6': {
              canonicalHandleUUID: '7f4483bd-2dc6-416e-8e3d-6c4ce2119aea',
              meta: null,
              keywords: null,
              lastModifiedDate: '2023-09-22T18:55:55.281Z',
              createdDate: '2020-12-28T20:57:28.571Z',
              createdBy: 'aleach',
              componentName: null,
              modelName: 'summit-forge-component-cli',
              id: null,
              name: 'summit-forge-component-cli',
              model: {
                text: {
                  'text-1': {
                    customClass: null,
                    text: 'Quickly scaffold out a new Vue UI component, a vanilla JavaScript library (TypeScript coming soon!), or an Alpine microsite front end.',
                  },
                },
                actions: {
                  'target-1': {
                    name: '',
                    apptarget: null,
                    customClass: null,
                    text: 'Learn More',
                    style: null,
                    target:
                      'https://github.com/summit-forge/create-package/#readme',
                  },
                },
                children: {},
                headings: {
                  'heading-1': {
                    customClass: null,
                    text: 'Summit Forge Component CLI',
                  },
                },
                config: {},
                media: {
                  'image-1': {
                    name: null,
                    src: '/assets/test/athletes-site/component-cli-logo/live.png',
                    customClass: null,
                    srcReference: null,
                    description: null,
                    anchor: null,
                    alt: 'component C L I',
                    type: null,
                    target: null,
                  },
                },
                meta: {},
                author: {},
              },
            },
          },
          headings: {
            heading_1: {
              text: 'Summit Forge Engineers',
              customClass: null,
            },
          },
          config: {},
          media: {
            image_xs: {
              name: null,
              alt: 'Group of mountaineers in the snow superimposed with the Summit Forge Engineering logo',
              src: 'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-bottom-banner.jpeg',
              description: null,
              anchor: null,
              customClass: null,
              srcReference: null,
              type: null,
              target: null,
            },
          },
          meta: {},
          author: {},
        },
      },
      'external-component': {
        documentType: 'genericContentType',
        canonicalHandleUUID: 'db54b148-df1a-48cc-9506-19119538ccef',
        meta: null,
        keywords: null,
        lastModifiedDate: '2021-09-15T19:21:52.671Z',
        createdDate: '2020-12-15T21:24:53.250Z',
        createdBy: 'aleach',
        componentName: null,
        modelName: 'external-component',
        id: null,
        name: 'external-component',
        model: {
          text: {},
          actions: {},
          children: {},
          headings: {
            heading_1: {
              text: 'External Component',
              customClass: null,
            },
          },
          config: {
            name: 'athletes-satchel-component',
            version: '0.0.1',
            title: 'Resolving external components',
          },
          media: {},
          meta: {},
          author: {},
        },
      },
    },
  },
  customStyles: null,
  customScripts: null,
  useAdobeTarget: true,
  canonicalRoot: 'https://www.summit-forge.com/',
  hidePromoMessageBanner: false,
  meta: null,
  twitterProperties: {
    'twitter:creator': '@Summit Forge',
    'twitter:description':
      'From backpacking to cycling to staying in shape and more, outfit your outdoor activities with the latest gear, clothing, and footwear at Summit Forge.',
    'twitter:image:alt':
      'A group of friends hike through desert brush towards a rocky mesa, with Summit Forge  logo',
    'twitter:site': '@Summit Forge',
    'twitter:title':
      'Summit Forge – Top-Brand Clothing, Gear, Footwear and Expert Advice for All Your Outdoor Adventures | Summit Forge ',
    'twitter:card': 'summary_large_image',
    'twitter:image':
      'https://www.summit-forge.com/assets/img/seo/evergreen/summit-forge-og.jpg',
  },
  schemaType: null,
  siteId: 'none',
  includeAnalyticsJson: true,
  contactPhoneNumber: '1-800-426-4840',
  deploymentInfo: {
    devEnvironmentName: 'test',
    environmentName: 'test',
    applicationId: 'athletes-site',
  },
};
export default modelData;
