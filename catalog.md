# AI 信源目录

核验日期：2026-07-30。网址和产品状态会变化，正式写作前必须重新打开原页核对。

## 1. 发现层

| 信源 | 入口 | 主要用途 | 能直接证明 | 不能单独证明 |
|---|---|---|---|---|
| AI HOT | <https://aihot.virxact.com/> | 中文 AI 热点、精选和多源聚合 | 平台收录了什么、当前聚合热度 | 产品事实、论文正确性、行业共识 |
| AI News Radar | <https://news.learnprompt.pro/> | 24 小时 AI 信号、热点合并、分类和信源健康 | 平台当时抓取、筛选和合并了什么 | 原始事件正确、官方已经发布或独立质量结论 |
| AI News | <https://news.smol.ai/> | 社区、产品和论文日报 | 日报选择和概括了什么 | 被概括事件的完整事实 |
| Hugging Face Papers | <https://huggingface.co/papers> | 每日论文发现和社区关注 | 平台提交、投票与关注情况 | 论文已经评审或结论正确 |
| GitHub Trending | <https://github.com/trending> | 发现近期升温的开源仓库 | GitHub 当前展示的趋势结果 | 项目质量、生产可用性 |
| X | <https://x.com/> | 追踪作者、维护者和厂商的即时发布 | 原作者本人发布的那段陈述 | 陈述正确、完整或已落地 |

发现层默认只能进入“待核验线索”。作者原帖在主张属于作者本人时，可以升级为原始证据。

X 不按“大 V”数量堆名单；项目维护一份按角色划分的 [X 上值得关注的 AI 账号](x-accounts.md)，供 Codex、Claude Code、中文解释和独立分析等不同任务选用。

## 2. 官方发布与产品证据

| 信源 | 入口 | 适合核验 | 关键边界 |
|---|---|---|---|
| Claude Blog | <https://claude.com/blog> | Claude Code、Agent、Skill、产品实践和官方最佳实践 | 官方经验与案例不是跨产品普遍结论 |
| Anthropic News | <https://www.anthropic.com/news> | 模型发布、研究、安全政策和公司立场 | 厂商自测仍需独立评测交叉验证 |
| OpenAI News | <https://openai.com/news/> | OpenAI 模型、产品和研究发布 | 功能细节还应回到开发文档和 Changelog |
| OpenAI Developers | <https://developers.openai.com/> | API 模型、参数、SDK、价格与开发说明 | 文档证明支持状态，不证明所有场景效果 |
| Google DeepMind Blog | <https://deepmind.google/blog/> | Google DeepMind 模型和研究发布 | 发布口径与独立复现分开记录 |
| Meta AI Blog | <https://ai.meta.com/blog/> | Meta 模型、研究和开源生态 | 许可证和权重状态回到仓库或模型卡 |
| Kimi Blog | <https://www.kimi.com/blog/> | Kimi 模型架构、评测、价格和部署说明 | 版本、权重与许可证同时核对仓库 |
| Qwen Blog | <https://qwenlm.github.io/blog/> | Qwen 模型发布和技术报告 | 正式模型文件与许可证回到仓库或模型卡 |
| DeepSeek News | <https://api-docs.deepseek.com/news/> | DeepSeek API、模型和产品更新 | 页面不可用时不使用转述补齐 |
| Hugging Face Blog | <https://huggingface.co/blog> | Hugging Face 产品与开源生态发布 | 第三方模型事实回到对应模型卡 |
| GitHub AI & ML Blog | <https://github.blog/ai-and-ml/> | Copilot、Agent harness 和开发实践 | 官方产品文章不代表所有 Agent 工具 |

### 通用官方证据

| 类型 | 适合核验 | 关键边界 |
|---|---|---|
| 官方文档、API Changelog、定价页、状态页 | 功能、版本、价格、限额、地区、生效日期和故障状态 | 截图必须带日期；当前状态不能写成永久承诺 |
| GitHub Release、tag、commit | 版本是否发布、代码是否落地、具体变更 | commit 已存在不等于稳定可用 |
| GitHub Issue、PR、Discussion | 维护者解释、回归、兼容性和真实边界 | 单个用户问题不能外推为普遍故障 |
| 模型卡、权重文件、LICENSE | 参数、文件、使用方法和许可条件 | “可下载权重”不自动等于 OSI 开源或低成本部署 |

## 3. 论文与正式研究记录

| 信源 | 入口 | 能直接证明 | 关键边界 |
|---|---|---|---|
| arXiv cs.AI | <https://arxiv.org/list/cs.AI/recent> | 作者版本、摘要、提交和修订时间 | 预印本不等于同行评审通过 |
| OpenReview | <https://openreview.net/> | 投稿、评审、作者回复和决定 | 只适用于使用 OpenReview 的会议或期刊 |
| ACL Anthology | <https://aclanthology.org/> | NLP 正式论文版本和会议归属 | 仍需阅读方法、样本与限制 |
| PMLR | <https://proceedings.mlr.press/> | 机器学习会议正式论文版本 | 正式发表不等于结论适用于生产 |
| NeurIPS Proceedings | <https://proceedings.neurips.cc/> | NeurIPS 正式论文版本 | arXiv 与正式版不一致时记录版本差异 |

## 4. 独立评测与平台自有数据

| 信源 | 入口 | 对什么是一手 | 不能外推为 |
|---|---|---|---|
| LMArena | <https://lmarena.ai/> | 其盲测规则、票数和排名 | 所有任务的综合实力或生产成功率 |
| Artificial Analysis | <https://artificialanalysis.ai/> | 其方法下的质量、速度、价格和开放程度 | 所有供应商、地区和任务的普遍表现 |
| OpenRouter Rankings | <https://openrouter.ai/rankings> | OpenRouter 站内调用、消费和任务分布 | 全球开发者使用份额 |
| OpenRouter Provider Benchmarks | <https://openrouter.ai/provider-benchmarks> | 其测得的供应商延迟、吞吐与可用性 | 长期 SLA 或其他接入方式的体验 |
| SWE-bench | <https://www.swebench.com/> | 指定任务集和 harness 下的代码修复结果 | 通用软件工程自治能力 |
| LiveBench | <https://livebench.ai/> | 其动态任务集和评分方法下的表现 | 所有推理、语言和生产任务 |

记录榜单时必须同时保存：榜单版本、模型配置、harness、样本或票数、日期和指标定义。

## 5. 解释、质疑与工程反例

| 信源 | 入口 | 最适合获得 | 关键边界 |
|---|---|---|---|
| The Batch | <https://www.deeplearning.ai/the-batch/> | 周度编辑判断和行业框架 | 被评论事件仍回到原始来源 |
| Simon Willison | <https://simonwillison.net/> | 作者本人的模型和工具实测 | 他的实验是一手，转述厂商时不是 |
| Latent Space | <https://www.latent.space/> | Agent、模型和工程团队的深度访谈 | 受访者陈述需要与公开证据区分 |
| Interconnects | <https://www.interconnects.ai/> | 训练、后训练和开放模型分析 | 作者判断不能替代论文和公司原始数据 |
| SemiAnalysis | <https://semianalysis.com/> | 芯片、算力、数据中心与产业分析 | 付费内容不绕过订阅；模型和估算标明口径 |
| alphaXiv | <https://alphaxiv.org/> | 论文解释、评论和质疑 | 评论不代表作者结论或评审共识 |
| Hacker News | <https://news.ycombinator.com/> | 技术争议、失败复现和补充链接 | 评论热度和个案不能代表行业事实 |
| Reddit LocalLLaMA | <https://www.reddit.com/r/LocalLLaMA/> | 本地部署、量化、显卡与推理经验 | 保留硬件、版本、参数和复现条件 |

## 最小组合

不必每天刷完所有站点。按任务选一组：

- **追产品变化**：AI HOT、AI News Radar 或 AI News → 对应官方博客/文档 → GitHub Release/Issue。
- **选模型**：官方模型卡/价格 → LMArena → Artificial Analysis → OpenRouter。
- **追论文**：Hugging Face Papers → arXiv → OpenReview或正式论文库 → alphaXiv。
- **做 Agent/Skill 文章**：Claude/GitHub 官方博客 → 仓库与 Issue → Simon Willison/Hacker News → 二蛋自己的任务实测。
- **看算力产业**：公司公告和财报 → SemiAnalysis → 多家独立报道或原始数据。
