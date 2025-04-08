/**
 * Skill data interface
 */
interface SkillData {
  name: string;
  icon: string;
  color: string;
}

/**
 * Technology skills data for the scrolling skills section
 */
export const techSkills: SkillData[] = [
  { name: "HTML5", icon: "ri-html5-fill", color: "#E44D26" },
  { name: "CSS3", icon: "ri-css3-fill", color: "#264DE4" },
  { name: "JavaScript", icon: "ri-javascript-fill", color: "#F7DF1E" },
  { name: "TypeScript", icon: "ri-code-s-slash-fill", color: "#007ACC" },
  { name: "React", icon: "ri-reactjs-line", color: "#61DAFB" },
  { name: "Vue.js", icon: "ri-vuejs-fill", color: "#4FC08D" },
  { name: "Angular", icon: "ri-angularjs-fill", color: "#DD0031" },
  { name: "Node.js", icon: "ri-nodejs-fill", color: "#68A063" },
  { name: "Python", icon: "ri-python-fill", color: "#3776AB" },
  { name: "PostgreSQL", icon: "ri-database-2-fill", color: "#336791" },
  { name: "MongoDB", icon: "ri-database-2-fill", color: "#47A248" },
  { name: "Flutter", icon: "ri-flutter-fill", color: "#02569B" },
  { name: "GitHub", icon: "ri-github-fill", color: "#181717" },
  { name: "Git", icon: "ri-git-branch-fill", color: "#F05032" },
  { name: "Bash", icon: "ri-terminal-box-fill", color: "#4EAA25" },
  { name: "Docker", icon: "ri-docker-fill", color: "#2496ED" },
  { name: "GraphQL", icon: "ri-code-box-fill", color: "#E535AB" },
  { name: "Redux", icon: "ri-function-fill", color: "#764ABC" },
  { name: "Sass", icon: "ri-file-code-fill", color: "#CC6699" },
  { name: "Webpack", icon: "ri-stack-fill", color: "#8DD6F9" },
  { name: "Next.js", icon: "ri-app-store-fill", color: "#000000" },
  { name: "TailwindCSS", icon: "ri-palette-fill", color: "#38B2AC" }
];

/**
 * System and platform skills data for the scrolling skills section
 */
export const systemSkills: SkillData[] = [
  { name: "AWS", icon: "ri-aws-fill", color: "#FF9900" },
  { name: "Google Cloud", icon: "ri-google-fill", color: "#4285F4" },
  { name: "Firebase", icon: "ri-fire-fill", color: "#FFCA28" },
  { name: "Excel", icon: "ri-file-excel-2-fill", color: "#217346" },
  { name: "Gatsby", icon: "ri-gatsby-fill", color: "#663399" },
  { name: "Android", icon: "ri-android-fill", color: "#3DDC84" },
  { name: "iOS", icon: "ri-apple-fill", color: "#999999" },
  { name: "MySQL", icon: "ri-server-fill", color: "#00618A" },
  { name: "Firefox", icon: "ri-firefox-fill", color: "#FF7139" },
  { name: "Chrome", icon: "ri-chrome-fill", color: "#4285F4" },
  { name: "Arduino", icon: "ri-router-fill", color: "#00979D" },
  { name: "Ubuntu", icon: "ri-ubuntu-fill", color: "#E95420" },
  { name: "Microsoft", icon: "ri-microsoft-fill", color: "#00A4EF" },
  { name: "InVision", icon: "ri-invision-fill", color: "#FF3366" },
  { name: "macOS", icon: "ri-apple-fill", color: "#999999" },
  { name: "Windows", icon: "ri-windows-fill", color: "#0078D6" },
  { name: "Heroku", icon: "ri-server-line", color: "#430098" },
  { name: "Netlify", icon: "ri-cloud-fill", color: "#00C7B7" },
  { name: "Vercel", icon: "ri-servers-fill", color: "#000000" },
  { name: "Figma", icon: "ri-pen-nib-fill", color: "#F24E1E" }
];
