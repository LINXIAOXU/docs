module.exports = {
    evergreen: true,
    base: '/qa-docs/',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '个人文档',
        description: ''
      }
    },
    themeConfig: {
      sidebarDepth: 2,
      nav: [
        { 
          text: '分类',
          items: [
            { text: '零碎知识', link: '/others/vuepress.md' },
            { text: '测试基础', link: '/base/test-definition.md' },
            { text: '代码学习', link: '/code/mocha.md' },
            { text: 'Linux学习', link: '/linux/other.md' }
          ]
        },
      ],
      locales: {
        '/': {
          label: '简体中文',
          selectText: '选择语言',
          lastUpdated: '上次编辑时间',
          sidebar: {
            '/': [
              {
                title: '零碎知识',
                children: [
                  '/others/vuepress.md',
                  '/others/git.md',
                  '/others/redis.md',
                  '/others/charles.md',
                  '/others/jenkins.md',
                  '/others/http-request.md',
                  '/others/attention-point.md',
                  '/others/automation-framework.md'
                ]
              },
              {
                title: '测试基础',
                children: [
                  '/base/test-definition.md',
                  '/base/test-classification.md',
                  '/base/test-principles.md',
                  '/base/test-plan.md',
                  '/base/test-points.md',
                  '/base/test-case-design.md',
                  '/base/bug.md',
                  '/base/test-report.md',
                ]
              },
              {
                title: '代码学习',
                children: [
                  '/code/monkey.md',
                  '/code/python.md',
                  '/code/python-interface.md',
                  '/code/selenium.md',
                  '/code/mocha.md'
                ]
              },
              {
                title: 'Linux学习',
                children: [
                  '/linux/other.md',
                  '/linux/find.md',
                  '/linux/grep.md',
                  '/linux/awk.md',
                  '/linux/sed.md'
                ]
              },
              {
                title: '读书笔记',
                children: [
                  '/notes/2020-08-03.md',
                  '/notes/2020-09-07.md',
                  '/notes/2020-09-09.md',
                  '/notes/2020-10-10.md',
                  '/notes/2020-10-13.md'
                ]
              },
            ]
          }
        }
      }
    }
  }
  