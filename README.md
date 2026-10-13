1| ![](/public/og-image.png)
2| 
3| English | [简体中文](README.zh-CN.md) | [日本語](README.ja-JP.md)
4| 
5| > [!NOTE]
6| > NewsNext, the next gen of NewsNow, is coming soon, join the [waitlist](https://tally.so/r/yPBBYg).
7| 
8| **_Elegant reading of real-time and hottest news_**
9| 
10| ## 友情链接
11| 
12| - [行止](https://xingzhiapp.com/)
13| - [拾言](https://stillquotes.com/)
14| 
15| ## Features
16| 
17| - Clean and elegant UI design for optimal reading experience
18| - Real-time updates on trending news
19| - GitHub OAuth login with data synchronization
20| - 30-minute default cache duration (logged-in users can force refresh)
21| - Adaptive scraping interval (minimum 2 minutes) based on source update frequency to optimize resource usage and prevent IP bans
22| - support MCP server
23| 
24| ```json
25| {
26|   "mcpServers": {
27|     "newsnow": {
28|       "command": "npx",
29|       "args": [
29|         "-y",
30|         "newsnow-mcp-server"
31|       ],
31|       "env": {
32|         "BASE_URL": "https://newsnow.busiyi.world"
33|       }
34|     }
35|   }
36| }
37| ```
38| You can change the `BASE_URL` to your own domain.
39| 
40| ## Deployment
41| 
42| ### Basic Deployment
43| 
44| For deployments without login and caching:
45| 
46| 1. Fork this repository
47| 2. Import to platforms like Cloudflare Page or Vercel
48| 
49| ### Cloudflare Page Configuration
50| 
51| - Build command: `pnpm run build`
52| - Output directory: `dist/output/public`
53| 
54| ### GitHub OAuth Setup
55| 
56| 1. [Create a GitHub App](https://github.com/settings/applications/new)
57| 2. No special permissions required
58| 3. Set callback URL to: `https://your-domain.com/api/oauth/github` (replace `your-domain` with your actual domain)
59| 4. Obtain Client ID and Client Secret
60| 
61| ### Environment Variables
62| 
63| Refer to `example.env.server`. For local development, rename it to `.env.server` and configure:
64| 
65| ```env
66| # Github Client ID
67| G_CLIENT_ID=
68| # Github Client Secret
69| G_CLIENT_SECRET=
70| # JWT Secret, usually the same as Client Secret
71| JWT_SECRET=
72| # Initialize database, must be set to true on first run, can be turned off afterward
73| INIT_TABLE=true
74| # Whether to enable cache
75| ENABLE_CACHE=true
76| ```
77| 
78| ### Database Support
79| 
80| Supported database connectors: https://db0.unjs.io/connectors
81| **Cloudflare D1 Database** is recommended.
82| 
83| 1. Create D1 database in Cloudflare Worker dashboard
84| 2. Configure database_id and database_name in wrangler.toml
85| 3. If wrangler.toml doesn't exist, rename example.wrangler.toml and modify configurations
86| 4. Changes will take effect on next deployment
87| 
88| ### Docker Deployment
89| 
90| In project root directory:
91| 
92| ```sh
93| docker compose up
94| ```
95| 
96| You can also set Environment Variables in `docker-compose.yml`.
97| 
98| ## Development
99| 
100| > [!Note]
101| > Requires Node.js >= 20
102| 
103| ```sh
104| corepack enable
105| pnpm i
106| pnpm dev
107| ```
108| 
109| ### Adding Data Sources
110| 
111| Refer to `shared/sources` and `server/sources` directories. The project provides complete type definitions and a clean architecture.
112| 
113| For detailed instructions on how to add new sources, see [CONTRIBUTING.md](CONTRIBUTING.md).
114| 
115| ## Roadmap
116| 
117| - Add **multi-language support** (English, Chinese, more to come).
118| - Improve **personalization options** (category-based news, saved preferences).
119| - Expand **data sources** to cover global news in multiple languages.
120| 
121| **_release when ready_**
122| ![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic/20250328172146_rec_.gif?x-oss-process=base_webp)
123| 
124| ## Contributing
125| 
126| ~~Contributions are welcome! Feel free to submit pull requests or create issues for feature requests and bug reports.~~
127| 
128| The new version is coming soon and we will no longer accept contributions
129| 
130| ~~See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on how to contribute, especially for adding new data sources.~~
131| 
132| ## License
133| 
134| [MIT](./LICENSE) © ourongxing
135| 
136| ## Sponsorship
137| 
138| If you rely on this service, sponsorship is welcome to help it run for the long term. If you need customization or other help, you can also use the contact method below and include a note.
139| 
140| ![](./screenshots/reward.gif)
141| 
