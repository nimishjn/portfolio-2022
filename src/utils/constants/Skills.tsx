import { ReactNode } from 'react';
import {
	FaAngular,
	FaApple,
	FaCss3,
	FaDiscord,
	FaFigma,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaJava,
	FaJs,
	FaNodeJs,
	FaPython,
	FaReact,
	FaSass,
	FaUbuntu,
	FaWindows,
} from 'react-icons/fa';
import {
	SiChakraui,
	SiExpress,
	SiHeroku,
	SiIntellijidea,
	SiJquery,
	SiManjaro,
	SiMaterialui,
	SiMongodb,
	SiMysql,
	SiNetlify,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVisualstudiocode,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import CIcon from '../../assets/icons/c-original.svg';
import CppIcon from '../../assets/icons/cplusplus-original.svg';
import Matlab from '../../assets/icons/matlab.svg';
import PrimeReactLogo from '../../assets/icons/primereact-logo.svg';
import { BsBootstrap, BsPieChart } from 'react-icons/bs';

export type Categories =
	| 'language'
	| 'framework'
	| 'database'
	| 'software'
	| 'tool'
	| 'os'
	| 'design'
	| 'hosting'
	| 'editor'
	| 'ide'
	| 'scripting'
	| 'library'
	| 'misc';

export interface skillInterface {
	name: string;
	icon: ReactNode;
	bgcolor: string;
	id: string;
	link: string;
	color?: string;
	category?: Categories[];
}

export const allSkills: skillInterface[] = [
	{
		name: 'C',
		icon: <CIcon height='1em' />,
		bgcolor: 'rgb(4, 99, 172)',
		link: 'https://devdocs.io/c/',
		id: 'skill_c',
		category: ['language'],
	},
	{
		name: 'C++',
		icon: <CppIcon height='1em' />,
		bgcolor: '#af0443',
		link: 'https://devdocs.io/cpp/',
		id: 'skill_cpp',
		category: ['language'],
	},
	{
		name: 'Java',
		icon: <FaJava />,
		bgcolor: '#f89820',
		link: 'https://docs.oracle.com/en/java/',
		color: 'black',
		id: 'skill_java',
		category: ['language'],
	},
	{
		name: 'Python',
		icon: <FaPython />,
		bgcolor: '#306998',
		link: 'https://docs.python.org/3/',
		id: 'skill_python',
		category: ['language'],
	},
	{
		name: 'HTML',
		icon: <FaHtml5 />,
		bgcolor: '#E34F26',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		id: 'skill_html',
		category: ['language'],
	},
	{
		name: 'CSS',
		icon: <FaCss3 />,
		bgcolor: '#264de4',
		link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		id: 'skill_css',
		category: ['language'],
	},
	{
		name: 'JavaScript',
		icon: <FaJs />,
		bgcolor: '#F0DB4F',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		color: '#323330',
		id: 'skill_javascript',
		category: ['language'],
	},
	{
		name: 'TypeScript',
		icon: <SiTypescript />,
		bgcolor: '#007acc',
		link: 'https://www.typescriptlang.org/',
		id: 'skill_typescript',
		category: ['language'],
	},
	{
		name: 'Next.js',
		icon: <TbBrandNextjs />,
		bgcolor: 'white',
		link: 'https://nextjs.org/',
		color: 'black',
		id: 'skill_nextjs',
		category: ['framework'],
	},
	{
		name: 'React.js',
		icon: <FaReact />,
		bgcolor: '#61DBFB',
		link: 'https://reactjs.org/docs/getting-started.html',
		color: 'black',
		id: 'skill_reactjs',
		category: ['framework'],
	},
	{
		name: 'Angular.js',
		icon: <FaAngular />,
		bgcolor: '#a6120d',
		link: 'https://angularjs.org/',
		id: 'skill_angularjs',
		category: ['framework'],
	},
	{
		name: 'Node.js',
		icon: <FaNodeJs />,
		bgcolor: '#3c873a',
		link: 'https://nodejs.org/en/',
		id: 'skill_nodejs',
		category: ['framework'],
	},
	{
		name: 'Express.js',
		icon: <SiExpress />,
		bgcolor: '#fff',
		link: 'https://expressjs.com/',
		color: 'black',
		id: 'skill_expressjs',
		category: ['framework'],
	},
	{
		name: 'MongoDB',
		icon: <SiMongodb />,
		bgcolor: '#4DB33D',
		link: 'https://www.mongodb.com/docs/',
		color: '#3F3E42',
		id: 'skill_mongodb',
		category: ['database'],
	},
	{
		name: 'Discord.js',
		icon: <FaDiscord />,
		bgcolor: 'rgb(88 101 242)',
		link: 'https://discord.js.org/',
		id: 'skill_discordjs',
		category: ['framework'],
	},
	{
		name: 'Matlab',
		icon: <Matlab height='1em' />,
		bgcolor: '#f51300',
		link: 'https://mathworks.com/help/matlab/',
		id: 'skill_matlab',
		category: ['language', 'software'],
	},
	{
		name: 'Sass',
		icon: <FaSass />,
		bgcolor: '#CD6799',
		link: 'https://sass-lang.com/',
		id: 'skill_sass',
		category: ['language', 'scripting'],
	},
	{
		name: 'Tailwind CSS',
		icon: <SiTailwindcss />,
		bgcolor: '#38bdf8',
		link: 'https://tailwindcss.com/',
		color: 'black',
		id: 'skill_tailwindcss',
		category: ['framework'],
	},
	{
		name: 'Material UI',
		icon: <SiMaterialui />,
		bgcolor: '#007FFF',
		link: 'https://mui.com/',
		id: 'skill_materialui',
		category: ['framework', 'library'],
	},
	{
		name: 'Chakra UI',
		icon: <SiChakraui />,
		bgcolor: '#4FD1C5',
		link: 'https://chakra-ui.com/',
		id: 'skill_chakraui',
		category: ['framework', 'library'],
	},
	{
		name: 'Prime React',
		icon: <PrimeReactLogo />,
		bgcolor: '#06c4e8',
		link: 'https://primereact.org/',
		id: 'skill_primereact',
		category: ['framework', 'library'],
	},
	{
		name: 'Nivo.rocks',
		icon: <BsPieChart />,
		bgcolor: '#e1cf2c',
		link: 'https://nivo.rocks/',
		id: 'skill_nivorocks',
		category: ['framework', 'library'],
	},
	{
		name: 'Bookstrap',
		icon: <BsBootstrap />,
		bgcolor: '#8012f4',
		link: 'https://getbootstrap.com/',
		id: 'skill_bootstrap',
		category: ['framework', 'library'],
	},
	{
		name: 'JQuery',
		icon: <SiJquery />,
		bgcolor: '#0769AD',
		link: 'https://jquery.com/',
		id: 'skill_jquery',
		category: ['framework'],
	},
	{
		name: 'JavaFx',
		icon: <FaJava />,
		bgcolor: '#f89820',
		link: 'https://openjfx.io/',
		color: 'black',
		id: 'skill_javafx',
		category: ['framework'],
	},
	{
		name: 'MySQL',
		icon: <SiMysql />,
		bgcolor: '#f29111',
		link: 'https://www.mysql.com/',
		color: '#2c2c2c',
		id: 'skill_mysql',
		category: ['database'],
	},
	{
		name: 'Git',
		icon: <FaGitAlt />,
		bgcolor: '#F1502F',
		link: 'https://git-scm.com/doc',
		id: 'skill_git',
		category: ['software'],
	},
	{
		name: 'GitHub',
		icon: <FaGithub />,
		bgcolor: 'white',
		link: 'https://github.com',
		color: '#171515',
		id: 'skill_github',
		category: ['software'],
	},
	{
		name: 'VS Code',
		icon: <SiVisualstudiocode />,
		bgcolor: '#0065A9',
		link: 'https://code.visualstudio.com/',
		id: 'skill_vscode',
		category: ['software', 'editor'],
	},
	{
		name: 'IntelliJ',
		icon: <SiIntellijidea />,
		bgcolor: '#ff318c',
		link: 'https://www.jetbrains.com/idea/',
		id: 'skill_intellij',
		category: ['software', 'ide'],
	},
	{
		name: 'Figma',
		icon: <FaFigma />,
		bgcolor: '#a159ff',
		link: 'https://www.figma.com/',
		id: 'skill_figma',
		category: ['software', 'design'],
	},
	{
		name: 'Vercel',
		icon: <SiVercel />,
		bgcolor: '#ffffff',
		link: 'https://vercel.com/',
		id: 'skill_vercel',
		category: ['software', 'hosting'],
	},
	{
		name: 'Heroku',
		icon: <SiHeroku />,
		bgcolor: '#6762A6',
		link: 'https://heroku.com/',
		id: 'skill_heroku',
		category: ['software', 'hosting'],
	},
	{
		name: 'Netlify',
		icon: <SiNetlify />,
		bgcolor: '#00C7B7',
		link: 'https://netlify.com/',
		id: 'skill_netlify',
		category: ['software', 'hosting'],
	},
	{
		name: 'Ubuntu (Debian)',
		icon: <FaUbuntu />,
		bgcolor: '#E95420',
		link: 'https://ubuntu.com/',
		id: 'skill_ubuntu',
		category: ['os'],
	},
	{
		name: 'Manjaro (Arch)',
		icon: <SiManjaro />,
		bgcolor: '#34BE5B',
		link: 'https://manjaro.org/',
		color: 'black',
		id: 'skill_manjaro',
		category: ['os'],
	},
	{
		name: 'Mac OS',
		icon: <FaApple />,
		bgcolor: 'white',
		link: 'https://apple.com',
		color: 'black',
		id: 'skill_macos',
		category: ['os'],
	},
	{
		name: 'Windows OS',
		icon: <FaWindows />,
		bgcolor: '#00a4ef',
		link: 'https://www.microsoft.com/en-in/windows',
		id: 'skill_windowsos',
		category: ['os'],
	},
];
