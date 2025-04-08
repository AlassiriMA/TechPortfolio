/**
 * Skill data interface
 */
interface SkillData {
  name: string;
  icon: string;
  color: string;
  url?: string;
}

/**
 * Technology skills data for the scrolling skills section
 */
export const techSkills: SkillData[] = [
  { name: "HTML5", icon: "ri-html5-fill", color: "#E44D26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: "ri-css3-fill", color: "#264DE4", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: "ri-javascript-fill", color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: "ri-code-s-slash-fill", color: "#007ACC", url: "https://www.typescriptlang.org/" },
  { name: "React", icon: "ri-reactjs-line", color: "#61DAFB", url: "https://reactjs.org/" },
  { name: "Vue.js", icon: "ri-vuejs-fill", color: "#4FC08D", url: "https://vuejs.org/" },
  { name: "Angular", icon: "ri-angularjs-fill", color: "#DD0031", url: "https://angular.io/" },
  { name: "Node.js", icon: "ri-nodejs-fill", color: "#68A063", url: "https://nodejs.org/" },
  { name: "Python", icon: "ri-python-fill", color: "#3776AB", url: "https://www.python.org/" },
  { name: "PostgreSQL", icon: "ri-database-2-fill", color: "#336791", url: "https://www.postgresql.org/" },
  { name: "MongoDB", icon: "ri-database-2-fill", color: "#47A248", url: "https://www.mongodb.com/" },
  { name: "Flutter", icon: "ri-flutter-fill", color: "#02569B", url: "https://flutter.dev/" },
  { name: "GitHub", icon: "ri-github-fill", color: "#181717", url: "https://github.com/" },
  { name: "Git", icon: "ri-git-branch-fill", color: "#F05032", url: "https://git-scm.com/" },
  { name: "Bash", icon: "ri-terminal-box-fill", color: "#4EAA25", url: "https://www.gnu.org/software/bash/" },
  { name: "Docker", icon: "ri-docker-fill", color: "#2496ED", url: "https://www.docker.com/" },
  { name: "GraphQL", icon: "ri-code-box-fill", color: "#E535AB", url: "https://graphql.org/" },
  { name: "Redux", icon: "ri-function-fill", color: "#764ABC", url: "https://redux.js.org/" },
  { name: "Sass", icon: "ri-file-code-fill", color: "#CC6699", url: "https://sass-lang.com/" },
  { name: "Webpack", icon: "ri-stack-fill", color: "#8DD6F9", url: "https://webpack.js.org/" },
  { name: "Next.js", icon: "ri-app-store-fill", color: "#000000", url: "https://nextjs.org/" },
  { name: "TailwindCSS", icon: "ri-palette-fill", color: "#38B2AC", url: "https://tailwindcss.com/" }
];

/**
 * AI and agent technologies data
 */
export const aiSkills: SkillData[] = [
  { name: "OpenAI", icon: "ri-openai-fill", color: "#00A67E", url: "https://openai.com/" },
  { name: "ChatGPT", icon: "ri-chat-3-fill", color: "#10A37F", url: "https://chat.openai.com/" },
  { name: "GPT-4", icon: "ri-brain-fill", color: "#00A67E", url: "https://openai.com/gpt-4" },
  { name: "DALL·E", icon: "ri-image-fill", color: "#FF6F61", url: "https://openai.com/dall-e-3" },
  { name: "TensorFlow", icon: "ri-code-box-fill", color: "#FF6F00", url: "https://www.tensorflow.org/" },
  { name: "PyTorch", icon: "ri-code-box-fill", color: "#EE4C2C", url: "https://pytorch.org/" },
  { name: "Hugging Face", icon: "ri-emotion-happy-fill", color: "#FFBD59", url: "https://huggingface.co/" },
  { name: "Midjourney", icon: "ri-palette-fill", color: "#5964F9", url: "https://www.midjourney.com/" },
  { name: "Stable Diffusion", icon: "ri-brush-fill", color: "#5763EB", url: "https://stability.ai/" },
  { name: "Langchain", icon: "ri-link-fill", color: "#3178C6", url: "https://www.langchain.com/" },
  { name: "Anthropic Claude", icon: "ri-ai-generate", color: "#B300FF", url: "https://www.anthropic.com/claude" },
  { name: "Gemini", icon: "ri-google-fill", color: "#4285F4", url: "https://gemini.google.com/" },
  { name: "LLaMA", icon: "ri-facebook-circle-fill", color: "#1877F2", url: "https://ai.meta.com/llama/" },
  { name: "Replicate", icon: "ri-code-s-slash-fill", color: "#262626", url: "https://replicate.com/" },
  { name: "Replit AI", icon: "ri-robot-fill", color: "#F26207", url: "https://replit.com/" },
  { name: "GitHub Copilot", icon: "ri-github-fill", color: "#8957E5", url: "https://github.com/features/copilot" }
];

/**
 * System and platform skills data for the scrolling skills section
 */
export const systemSkills: SkillData[] = [
  { name: "AWS", icon: "ri-aws-fill", color: "#FF9900", url: "https://aws.amazon.com/" },
  { name: "Google Cloud", icon: "ri-google-fill", color: "#4285F4", url: "https://cloud.google.com/" },
  { name: "Firebase", icon: "ri-fire-fill", color: "#FFCA28", url: "https://firebase.google.com/" },
  { name: "Azure", icon: "ri-microsoft-fill", color: "#0078D4", url: "https://azure.microsoft.com/" },
  { name: "Gatsby", icon: "ri-gatsby-fill", color: "#663399", url: "https://www.gatsbyjs.com/" },
  { name: "Android", icon: "ri-android-fill", color: "#3DDC84", url: "https://www.android.com/" },
  { name: "iOS", icon: "ri-apple-fill", color: "#999999", url: "https://developer.apple.com/ios/" },
  { name: "MySQL", icon: "ri-server-fill", color: "#00618A", url: "https://www.mysql.com/" },
  { name: "Chrome", icon: "ri-chrome-fill", color: "#4285F4", url: "https://www.google.com/chrome/" },
  { name: "Arduino", icon: "ri-router-fill", color: "#00979D", url: "https://www.arduino.cc/" },
  { name: "Ubuntu", icon: "ri-ubuntu-fill", color: "#E95420", url: "https://ubuntu.com/" },
  { name: "Microsoft", icon: "ri-microsoft-fill", color: "#00A4EF", url: "https://www.microsoft.com/" },
  { name: "macOS", icon: "ri-apple-fill", color: "#999999", url: "https://www.apple.com/macos/" },
  { name: "Windows", icon: "ri-windows-fill", color: "#0078D6", url: "https://www.microsoft.com/windows/" },
  { name: "Heroku", icon: "ri-server-line", color: "#430098", url: "https://www.heroku.com/" },
  { name: "Netlify", icon: "ri-cloud-fill", color: "#00C7B7", url: "https://www.netlify.com/" },
  { name: "Vercel", icon: "ri-servers-fill", color: "#000000", url: "https://vercel.com/" },
  { name: "Figma", icon: "ri-pen-nib-fill", color: "#F24E1E", url: "https://www.figma.com/" },
  { name: "Cloudflare", icon: "ri-cloud-fill", color: "#F38020", url: "https://www.cloudflare.com/" },
  { name: "Digital Ocean", icon: "ri-water-flash-fill", color: "#0080FF", url: "https://www.digitalocean.com/" }
];
