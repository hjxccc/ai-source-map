# AI 一手信源地图

这是“翻斗花园二蛋”维护的 AI 信源目录，也是公众号文章《可能是全网最全的 AI 一手信源指南：100+ 网站、社区与大佬账号》的配套仓库。

仓库不转载网站内容，只整理公开的**原始入口**，帮助读者找到模型厂商、论文平台、独立评测、技术社区和作者本人。

## 在线目录

GitHub Pages 启用后，可直接在网页中搜索并打开全部信源：

**https://hjxccc.github.io/ai-source-map/**

当前网页明确列出 **165 个实际去重入口**，不是把 AI HOT、AI News Radar 或伯乐 Skill 背后的来源模糊相加。每一项都提供名称、用途和原始网址。

## 五类信源

1. **聚合入口**：集中发现最新动态
2. **官方博客**：确认产品发布口径
3. **论文原站**：追踪研究进展
4. **第三方评测**：提供横向数据
5. **独立作者与社区**：补充解释和观点

完整的 165 项清单直接列在 README 下方；[catalog.md](catalog.md) 是便于单独引用的副本，[x-accounts.md](x-accounts.md) 是 X 账号子集，[sources.json](sources.json) 供程序读取。

## 特别推荐的两个中文入口

### AI HOT

数字生命卡兹克制作的中文 AI 资讯聚合站。

- 官网：https://aihot.news/
- 关于页面：https://aihot.news/about
- Agent 接入：https://aihot.news/agent
- Skill 完整包：https://aihot.news/aihot-skill/README.md

AI HOT 提供精选、全部动态、日报，以及 Skill、RSS、REST API 等 Agent 接入方式。网页适合普通读者直接浏览，结构化入口适合 Agent 和自动化流程调用。

### AI News Radar 与伯乐 Skill

卡尔的 AI 沃茨开源的 AI 新闻雷达和信源管理 Skill。

- 当前网站：https://news.learnprompt.pro/
- 原 GitHub Pages 地址：https://learnprompt.github.io/ai-news-radar/
- 项目原仓库：https://github.com/LearnPrompt/ai-news-radar
- 作者介绍伯乐 Skill 的原帖：https://x.com/aiwarts/status/2053845829580923329

根据作者原帖，伯乐 Skill 从 AI News Radar 项目衍生而来。它不只是增加信息源，还会判断一个来源是否值得长期追踪、与现有信息流是否重复，以及应该使用 RSS、公开 API、网页 Feed、邮件或其他方式稳定接入。

作者在原帖中提到：

- 默认版本覆盖 22 个信息源和 9 类来源；
- 曾用约 150 个日常订阅来源测试其判断与接入方法；
- AI News Radar 可通过 GitHub Actions 定时更新；
- 网页保留分类、时间线、原始链接和信源健康状态。

这些数字是作者对项目版本的介绍，后续可能变化，请以[项目原仓库](https://github.com/LearnPrompt/ai-news-radar)的最新 README 和配置为准。

<!-- FULL_CATALOG -->

## 目录文件

- `index.html`：面向普通读者的可搜索、可点击网页
- `sources.json`：165 个信源的结构化数据
- `catalog.md`：五类信源、用途与原始网址
- `x-accounts.md`：X 上值得关注的 AI 官方账号、产品成员与独立作者
- `sources.mjs`：目录的可维护源数据
- `validate.mjs`：失效链接检查脚本

## 收录原则

- 优先保存官网、官方博客、论文页、仓库和作者原帖。
- 聚合站用于发现线索，不自动替代原始证据。
- 榜单只代表各自的方法和样本，不外推为所有场景的统一结论。
- 网址、产品名称或维护状态发生变化时，直接修订原条目。

## 补充信源

欢迎通过 Issue 补充。请同时提供：

- 信源名称与原始网址；
- 它属于哪一类；
- 适合获得什么信息；
- 是否需要登录或付费；
- 为什么值得长期关注。

---

整理：翻斗花园二蛋  
最近核对：2026-07-30
