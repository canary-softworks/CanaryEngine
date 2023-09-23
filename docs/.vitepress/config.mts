import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: 'static/images/logo.png' }]],
  base: "/CanaryEngine/",
  title: "CanaryEngine",
  titleTemplate: "Canary Docs",
  description: "A blazingly fast & lightweight Luau framework",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Guides',
        items: [
          { text: 'Get Started', link: '/getstarted/intro'},
          { text: 'Usage', link: '/tutorials/update' },
          { text: 'Libraries', link: '/tutorials/libraries/benchmark' }
        ]
      },

      {
        text: 'Articles',
        items: [
          { text: 'Blogs', link: '/blog/enginerecaps/enginerecap-september2023' },
          { text: 'Featured', link: '/featured' }
        ]
      },

      {
        text: 'API',
        items: [
          { text: 'Framework', link: '/api/engine/framework/canaryengine' },
          { text: 'Controllers', link: '/api/controllers/signal/signalcontroller' },
          { text: 'Library', link: '/api/libraries/data/easyprofile' }
        ]
      },

      { text: 'Changelog', link: '/changelog'}
    ],

    sidebar: {
      '/tutorials/libraries/': [
        {
          text: 'Libraries',
          items: [
            { text: 'Benchmark', link: '/tutorials/libraries/benchmark' },
            { text: 'Debugger', link: '/tutorials/libraries/debugger' },
            { text: 'UIShelf', link: '/tutorials/libraries/uishelf' }
          ]
        }
      ],
      '/getstarted': [
        {
          text: 'Get Started',
          items: [
            { text: 'Introduction', link: '/getstarted/intro' },
            { text: 'Features', link: '/getstarted/features' },
            { text: 'Comparison', link: '/getstarted/comparison' },
            { text: 'Installation', link: '/getstarted/installation' },
            { text: 'FAQ', link: '/getstarted/faq' }
          ]
        }
      ],
      '/tutorials': [
        {
          text: 'Management',
          items: [
            { text: 'Update', link: '/tutorials/update' },
            { text: 'Packages', link: '/tutorials/packages' },
            { text: 'Structure', link: '/tutorials/structure' },
            { text: 'Style Guide', link: '/tutorials/styleguide' },
          ]
        },

        {
          text: 'Engine',
          items: [
            { text: 'Signals', link: 'tutorials/signals' },
            { text: 'Networking', link: 'tutorials/networking' },
            { text: 'Data Management', link: 'tutorials/datastoring' },
            { text: 'Loading Screen', link: 'tutorials/customloader' }
          ]
        }
      ],
      '/blog': [
        {
          text: 'Engine Recaps',
          items: [
            { text: 'September 2023', link: '/blog/enginerecaps/enginerecap-september2023' },
            { text: 'August 2023', link: '/blog/enginerecaps/enginerecap-august2023' },
            { text: 'July 2023', link: '/blog/enginerecaps/enginerecap-july2023' },
            { text: 'June 2023', link: '/blog/enginerecaps/enginerecap-june2023'}
          ]
        },

        {
          text: 'Announcements',
          items: [

          ]
        }
      ],

      '/api/engine': [
        {
          text: 'Canary',
          items: [
            {
              text: 'Framework',
              items: [
                { text: 'CanaryEngine', link: '/api/engine/framework/canaryengine' },
                { text: 'CanaryEngineServer', link: '/api/engine/framework/canaryengineserver' },
                { text: 'CanaryEngineClient', link: '/api/engine/framework/canaryengineclient' },
                { text: 'CanaryEngineReplicated', link: '/api/engine/framework/canaryenginereplicated'}
              ]
            },

            {
              text: 'Dependencies',
              items: [
                { text: 'EngineDebugger', link: '/api/engine/dependencies/enginedebugger' },
                { text: 'EngineLoader', link: '/api/engine/dependencies/engineloader' },
                { text: 'EngineTypes', link: '/api/engine/types' }
              ]
            },

            {
              text: 'Runtime',
              items: [
                { text: 'EngineRuntime', link: '/api/engine/runtime/engineruntime' },
                { text: 'EngineRuntimeContext', link: '/api/engine/runtime/engineruntimecontext' },
                { text: 'EngineRuntimeSettings', link: '/api/engine/runtime/engineruntimesettings' }
              ]
            }
          ]
        },
      ],

      '/api/controllers': [
        {
          text: 'Controllers',
          items: [
            {
              text: 'Signal',
              items: [
                { text: 'SignalController', link: '/api/controllers/signal/signalcontroller' }
              ]
            },

            {
              text: 'Network',
              items: [
                { text: 'NetworkControllerServer', link: '/api/controllers/network/server' },
                { text: 'NetworkControllerClient', link: '/api/controllers/network/client' }
              ]
            }
          ]
        },
      ],

      '/api/libraries': [
        {
          text: 'Libraries',
          items: [
            {
              text: 'EasyProfile',
              items: [
                { text: 'EasyProfile', link: '/api/libraries/data/easyprofile' },
                { text: 'ProfileStoreObject', link: '/api/libraries/data/profilestoreobject' },
                { text: 'ProfileObject', link: '/api/libraries/data/profileobject' }
              ]
            },

            {
              text: 'UIShelf',
              items: [
                { text: 'UIShelf', link: '/api/libraries/uishelf' },
                { text: 'TopBarIconObject', link: '/api/libraries/topbariconobject' },
                { text: 'TopBarSpacerObject', link: '/api/libraries/topbarspacerobject' }
              ]
            },

            {
              text: 'Benchmark',
              items: [
                { text: 'Benchmark', link: '/api/libraries/benchmark' },
                { text: 'BenchmarkObject', link: '/api/libraries/benchmarkobject' }
              ]
            },
            
            { text: 'Base64', link: '/api/libraries/base64' },
            { text: 'MDify', link: '/api/libraries/mdify' },
            { text: 'Sprite', link: '/api/libraries/sprite' },
            { text: 'Statistics', link: '/api/libraries/statistics' }
          ]
        },
      ]
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/canary-development/CanaryEngine/edit/main/docs/:path'
    },

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2021 - 2023 Canary Development'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/canary-development/CanaryEngine' },
      { icon: 'discord', link: 'https://discord.gg/cwwcZtqJAt'},
    ]
  }
})