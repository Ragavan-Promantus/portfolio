import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import './index.css';
import Header from './layout/header';
import profile from '../src/images/photo_2025-09-18_22-41-17.jpg';
import profile2 from '../src/images/photo_2025-09-18_22-41-17-original.jpg';
import vscodeIcon from '../src/images/vs-code-icon.png';
import gitHubLogo from '../src/images/github-6980894_960_720.webp';
import awsLogo from '../src/images/aws-icon-2048x2048-ptyrjxdo.png';
import resume from '../src/images/Ragavan Govindhasamy Resume.docx';

export default function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-white dark:bg-slate-800 dark:text-white cursor-fancy relative overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse dark:opacity-10"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000 dark:opacity-10"></div>
                <div className="absolute -bottom-8 left-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000 dark:opacity-10"></div>
            </div>

            <Header />

            {/* Hero Section */}
            <section className='relative h-auto sm:h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-4xl text-center mx-auto'>
                    <img 
                        className='object-cover w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl mb-8' 
                        src={profile} 
                        alt="Ragavan"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-6 font-Ovo text-gray-700 dark:text-gray-300'>
                            Hi! I'm Ragavan 
                            <motion.span
                                animate={{ rotate: [0, 20, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                            >
                                👋
                            </motion.span>
                        </h3>
                    </motion.div>

                    <motion.h1 
                        className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-Ovo leading-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <TypeAnimation
                            sequence={[
                                'Associate Software Engineer',
                                2000,
                                'Full-Stack Developer',
                                2000,
                                'Spring Boot Expert',
                                2000,
                                'React.js Developer',
                                2000,
                                'PHP & Laravel Expert',
                                2000,
                                'AWS Cloud Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.h1>

                    <motion.p 
                        className="max-w-3xl mx-auto font-Ovo text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        Associate Software Engineer at <span className="font-semibold text-purple-600 dark:text-purple-400">Promantus Inc</span> specializing in designing and developing scalable applications. Proficient in Spring Boot for building secure, high-performance back-end solutions, with strong expertise in PHP and Laravel for web application development. Skilled in React.js, jQuery, and modern front-end technologies with hands-on AWS cloud experience.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <motion.a 
                            href="#contact" 
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Contact Me
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </motion.a>

                        <motion.a 
                            href={resume} 
                            download="Ragavan Govindhasamy Resume.docx"
                            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold transition-all duration-300 hover:border-purple-500 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 flex items-center gap-2 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                            <motion.span
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="group-hover:animate-bounce"
                            >
                                📄
                            </motion.span>
                        </motion.a>
                    </motion.div>

                    {/* Floating Stats */}
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        {[
                            { label: 'Years Experience', value: 3, suffix: '+' },
                            { label: 'Projects Completed', value: 5, suffix: '+' },
                            { label: 'Technologies', value: 10, suffix: '+' },
                            { label: 'Happy Clients', value: 2, suffix: '' }
                        ].map((stat, index) => (
                            <motion.div 
                                key={stat.label}
                                className="text-center p-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                    <CountUp end={stat.value} duration={2.5} />{stat.suffix}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </motion.div>
            </section>

            {/* About Section */}
            <div id="about" className="w-full px-[12%] py-24 scroll-mt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 relative z-10"
                >
                    <motion.h4 
                        className="text-center mb-3 text-xl font-Ovo bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Introduction
                    </motion.h4>
                    <motion.h2 
                        className="text-center text-5xl md:text-6xl lg:text-7xl font-Ovo bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-slate-200 bg-clip-text text-transparent font-bold"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>
                </motion.div>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0 mb-10 lg:mb-0 relative"
                    >
                        {/* Decorative ring around image */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                        <div className="relative">
                            <img
                                src={profile2}
                                alt="Ragavan"
                                className="w-64 h-80 sm:w-80 sm:h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-white hover:scale-105 transition-transform duration-500"
                            />
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                Available for hire
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <p className="mb-8 max-w-2xl font-Ovo text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            I am an <span className="font-semibold text-purple-600 dark:text-purple-400">Associate Software Engineer</span> with 3 years of experience as a Full-Stack Developer, specializing in designing and developing scalable applications. Proficient in <span className="font-semibold">Spring Boot</span> for secure, high-performance back-end solutions, and strong expertise in <span className="font-semibold">PHP & Laravel</span> for web development. Skilled in <span className="font-semibold">React.js</span>, <span className="font-semibold">HTML</span>, and <span className="font-semibold">jQuery</span> for dynamic, responsive UIs. Experienced with <span className="font-semibold">MySQL</span> and <span className="font-semibold">PostgreSQL</span> for efficient data management, and hands-on with <span className="font-semibold">AWS</span> for scalable, secure deployments.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-all duration-300">
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASeSURBVHgBtVnNbttGEJ5ZyTVyc99AhxxylFH0XPpQwHYPpZIHiHtL7AB1n8D2E8QBrLRAD3YeoAh7iYT2EOaYXKTccggQ5gmiWxL/cDNDSs7ukpSW4uQDbJAj/sxwfvabWYQa+OXO3t00hWM6nGgFh8N/+k+gJjbDewGACq7gIvo/+nsMDaF8L9y+vXtAyp/R4Rr9dTA3pBa2wgchYus5Ih608bvRZvgggIbwMoCV1xoPHfEEagJB/2pL0gAaor3ogq3bew+1hn1XrrU+gprQCIEtUTE0BFb9EIT7azfU+Sm9NXR+mpA3esPoJIYa2A53uxpxZD5n8LT/PTREqQco0TqIF09J+a7zU4Ja9wZRv3bypQBd52s1TmBGwYBc+dZzOuw4PyVaX20Mor8SWAKkvB3/Ov0XBGAl8Rzlx6z8cEnlMyAG5uklXMYggGsPzFE+/qhXenHUr111jGcHkJffGRKJNYDRnr6gVHmqPk+GUX8HGgLBziWqYK9BCCr/1zoA98trfCShfAZUTv2HCISgNsPdHarPO5aUlB9EJ/sgh8A+TWMQgqJl/a4jG0sqP41/E0mjYuCAQ8iKz0t9/hsIAkFZCyF5OwZBsAFmdQCp6nANxJ/M0zSVqf8zKNCQmAIJhvj1Wfc64Hj4HFZjEAR5QFtfBFGfTl/cGAhtl4qM4+h46fWkDEpD6vL6bE2QMKJAn7V+UXbd9p3d37d6ex/o791WeL9WAVFZRdDwhyMXMcKlzxpUaf3XKbLSWaNEa8ZD7j/AE9lCRuzymJ7utoeNjJje1zFlcyi4VUi4efI14prMrcIKfwW3AjUwQgWOIK66kqgFR8DElrERe6ew6C2zg4iSixqM9QpPjH6mhgRqoA59HkaPz6jP2KDDxLpFww7lxYibK1hkwAwD5j9EJRzxWpu6qU2aSoAvatLnZ9HjjLKDYwShewMvRlVRUNrUM5UgFxZ6XppEnPnE5nbuLfOrTXwWSC4oFUZUhrKqftjJYZkRPgmmQQf2PeXls/y910Z45aOa/7CTw5ISu9iIhvSZjVjVKxs+lXHhXIhLLCnMX6RQJebcFtin9elzVlTK89EywmuwxfWb3LoOdmwmZddK0+eKfGQjshLrPVqcxSa3mYhwNo3TAr4Ffc5DueCJgIkngjC4boPBQK902vsv+lOkhaRnc98eGKLY2wM+CPMFx1rwiK+L9ReYr9gmuqIGfIbLwBGNJdtHXuwc0ZqoAb70eVnwAMIRjUUN8KXPyyCfXeGB8z45A8ro8ydoi8R/5dQwvToS9IAKHEEs0T5WTw3xiPNLzIBvMX2u/PLZ1JDWBvDYofEGOvNPaDUKn+mGCCvvdGs8r/06eBPxwJQ+dwzRpO4OjgneDa1W3p7XihjQhD674AmFsRtqPLR82CyTA0LT52w3NEV3zJMlbNW8VioHrPinTeza8V+1G8r9CIVj5Z50YwMkdl9YeSgqP+FpBTf88+4V8IAKzLOl6HOJ8jylGBS5T/Ht0BjOZnW6VALHxjH3HevPPJRntKAh3r55ldy89eN7pZBd/miRy8tw89YPL2gfjXuTlzSrvV+HwX4BXiw3woMjPHAAAAAASUVORK5CYII="
                                    alt="Programming"
                                    className="w-8 h-8 mb-3"
                                />
                                <h3 className="font-semibold text-gray-700 dark:text-white mb-2">Technologies</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80 text-center">
                                    Java, PHP, React.js, jQuery, JavaScript, Bootstrap 5, Material UI, HTML5, CSS3, XML, MySQL, MongoDB, PostgreSQL, Laravel, Spring Boot, React Native
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-all duration-300">
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAyCAYAAAAN6MhFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgB5ZpNcts2FMcfSNmZdFP3BGFOUPcGyi7Wpkx6gCi7VuqM1RNEvoE9k6Sd6SLMBWp203imCzMnCHMCMzfQJhMnloG8J1EkxPDjgSJpZfLf2JBAAD/hAXjvgQDfiAR0rPvur30BYl+B2BOgwlf+nz50oM5AF4DCfoL/9jNfRUqpozP/uQctqnXQA/c3F4R1CF8CZhUJoTwp5csz/68IGlZroPfd0VAIQTPogJlaAW4clAEYKCWOLJAzCWIiBDwqqNcocCOgfXey95316RABhlABeOY/DfQPce1ifXvaNvBGoBrgBIt7+T0oX0nrJAuYlQb8c0FbGwHXAuUAKgEeyOsj00EtgXto/opm2MmpUgvYCLRNwKwYwICzj8C8vligDMAZfncCMPeaPhqaAi4F5QJeQu848I9n0KI2Bc4F3SbArOoCr4FuM2BWpsAJ6OCX0aGSYgpbDpinKicFf4ypWFZcONznOXW2GjCrMuAYdDSNK+gKP6ide18DYFYDd/wCj7mh/pkV/wly6u/fFldv6FeCr0RkmQcPxudZSFKyRg/c34/RXTssaKOTmLGuYpOlse8X1RHrD1Q72NsEbBIKivwGthuYGwribptkNER5g9sFzAVcRUq0XoEDmnbQTcxY3L8Z4ErGoGmH3QJXAVZFSrVB8xooUG1gVjAf9/Hq9NldYI7TgnrSt/Ew53sHB4ozb18MHo5fLC2hXAQ4eDh6gmf3BT0L+ZCB3gc9A0wZg7rLxpMOcFB/KHV9l9YIFqNsfaVgWAbMASQTpT5uqZ0H+uc78N4BpnpgqEu43Bdga+VeGPhPyU2cIohXFFHEwEME9q7kpxMb7JllWY+UupogYHm24jQ1fzRH6mtR34YdsqwQGDIGpesErRjqvnC8HiuBe2J3GP+fqzxArYEAwxF3OZZiTygrY1Bs3tEKuQ7/ChgW0GzvJY2UTksDiXfpUMSPwJQ5qNY4Oguvq6rHzoRXAmwUCqIRhNpR0eaMpo1LvA3jPrQGjG0IS3yvpHz7AW55JqEg7p6hZvG4kY3v/PfPs3dVzxmBDtwRXvdpOy7MIzDUpu7iLuxGH+EqKc+l/Al0cy6Q0fGiwHL08v/+3+wZbUo+zb5KjzGbeYllCCqrHIVOhONI9gZlWawNyQgU15a+EVWaS1sS2o8sVOW960JmnpEQTtoZnmc3JjvSCoWuoH4qmLqAiekqsG/QdOdrfRe5grjxTRH2MR5f99igtOPqZXL94IYUOyTJkRS7ggV1n3sUp7JBMzvubAvSoOk6ZTgOBqYr+3md3JiUepv8z3AF+aC66ye+DMe6llr/sStnlJ1hOHDHF1jbSR40uIRtUkUZCLxV+KFsORnM6PosxvHlOQXNnAxCEyI/mW4PcgL0qGrPYPu6GOE/zkmMrVImFFAHbcwwI4cUCjxCqtoxTo5xUo+g5L9zmAd1fWGyEAzw6Y0zekOlX1BtEd7h0TEFhmplASlvdAnzSdkl7GowQJuGotCKdkkZ0YfXcD2jVEr67OLocixL3FFLl66szVovhGz0nhHn1rlBYdSiXqJDf9zZe0Z5ik2agPvQrBZLwTRAz6ox0JVo87gN8z6aqosbF5297HRHLEx+4xVDjexDmT4DS9Ehw7bN52oAAAAASUVORK5CYII="
                                    alt="Education"
                                    className="w-8 h-8 mb-3"
                                />
                                <h3 className="font-semibold text-gray-700 dark:text-white mb-2">Education</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80 text-center">
                                    Bachelor of Computer Applications (BCA), Sri Vidya Mandir Arts & Science College (Autonomous), Periyar University, 2021
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-all duration-300">
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAYAAABe6Vn9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7ZnNUhNBEMf/vVk0ejFv4HKwyhvhpDeTG+Higg8g3JRYBTyB+ASEKlCO+AKyXgw349mD4ebBKtYnMBwsIsK2PakE9itkYdZil8rvsMnM7Hz07PTMdDchBWbsFxWiwmdowEzVPWezBU0MpACBytCEcKrdhiIVgUDGU+iSRhtISyAgjdlN5QsRNInRH7e5uzWZpG5trv5LfkqDdBp6pP2FwvrDzPsJq8q73sdgW/p6pL/komvfQUJkebRHtHVp0tChSjDptZAQBoeFL1fslRI0iOiQanACv60CCiMbNmBMMVHDl9VhPp3DJRD920VAj3hRJsVNUreLYrvlNDqB9gZ/lCB38XedCba/g6xDhB3PO32z52y7vbR6yE5l9XcqC/nElZVRVUL1BJLt8wD5FWaAe8QT0+aMvbSAqDBqXbaRbSwEx20VcbxiEtFy4DWmjaazuYIcULNfNUB8Nn6R5YnatoMHI04ayAm3Ya6FssqRc2iwW+QBJ7RlC6W0LqeZ4eYLNDtfv4+coM7PcF5EIM/jKnKDUYnkhDNk63uOnCBjfR3Oi9OhSs1+mflzaHZ+SQljhfPjNwUy1vsVMsnss6VlsW7X4spI7nF8Qd0W2JObw7vERtv/QlkDRXTLcolWE10Z9t4ogfy4vv/WBWU6WEjeZyxmTJ46fUsJOktapoM1ojwy1ogOiV0xLY9rX2IJaPXGGiL2Ltd03s4plxIz3iNbZoQrk72hxiausmrcvdMcVrPvH2sN0v5TmSDWLZ0vB9UBcOJCC1OsZg7495QVej6eZJdmEwnxN1iz64Eyw+CDTx+2f0IDmTB5Fob2mZTxbTvrJF5yQWhV3Lhn2+UR3zqEJkUUO10+XjzrAUYHV+BKAonPIfVtvW997kCTsQ5lnbFAWWcsUNa5+QLpRtCuG0Oc2a4/4w7+LCAnKN9CKKstNwWWSLQvAtFzkNSnxD/3BRlGou9T7CHgnZLoY5v60btvyFEYchhiP00ayuaQQO0q8g5jVcnSs6h+fP/afvDw0b58x8fI35cSs5wWm87WjkpEwvoSFZMouFchg+4hw7DHhwzD6cIMhPb/AQhkFNSBuhSEAAAAAElFTkSuQmCC"
                                    alt="Projects"
                                    className="w-8 h-8 mb-3"
                                />
                                <h3 className="font-semibold text-gray-700 dark:text-white mb-2">Projects</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80 text-center">
                                    Built more than 5 projects
                                </p>
                            </div>
                        </div>
                        <h4 className="mb-4 text-gray-700 font-Ovo dark:text-white/80">Tools I Use</h4>
                        <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 shadow hover:-translate-y-1 transition-transform duration-300">
                                <img src={vscodeIcon} alt="VSCode" className="w-11 h-11" />
                            </div>
                            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 shadow hover:-translate-y-1 transition-transform duration-300">
                                <img src={gitHubLogo} alt="GitHub" className="w-7 h-7" />
                            </div>
                            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 shadow hover:-translate-y-1 transition-transform duration-300">
                                <img src="data:image/png;base64,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"
                                alt="Tool"
                                className="w-7 h-7"
                                />
                            </div>
                            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 shadow hover:-translate-y-1 transition-transform duration-300">
                                <img src={awsLogo} alt="AWS" className="w-10 h-10" />
                            </div>
                            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 shadow hover:-translate-y-1 transition-transform duration-300">
                                <img src="data:image/png;base64,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"
                                alt="Tool"
                                className="w-7 h-7"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <div id="skills" className="w-full px-[12%] py-20 scroll-mt-20 bg-gray-50 dark:bg-slate-900">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h4 className="text-center mb-2 text-xl font-Ovo text-purple-600 dark:text-purple-400">Technical Expertise</h4>
                    <h2 className="text-center text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white">Skills & Technologies</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Operating Systems */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-2xl mb-4">🖥️</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Operating Systems</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Windows', 'Linux', 'Ubuntu'].map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Programming Languages */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-2xl mb-4">💻</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Java', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'XML'].map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Frontend Technologies */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-2xl mb-4">🎨</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React.js', 'jQuery', 'Bootstrap 5', 'Material UI', 'React Native'].map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend Frameworks */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-2xl mb-4">⚙️</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Backend Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Spring Boot', 'Laravel'].map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Databases */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-red-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-2xl mb-4">🗄️</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            {['MySQL', 'PostgreSQL', 'MongoDB'].map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Version Control */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-2xl mb-4">📚</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Version Control</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Git', 'GitHub'].map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cloud Services */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-yellow-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-2xl mb-4">☁️</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Cloud Services</h3>
                        <div className="flex flex-wrap gap-2">
                            {['AWS (Amazon Web Services)', 'API Gateway', 'EC2'].map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Development Tools */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-pink-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-2xl mb-4">🛠️</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Development Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Visual Studio Code', 'Sublime', 'PhpMyAdmin', 'MySQL Workbench', 'Adminer'].map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Skills Section End */}

            {/* Experience Section */}
            <div id="experience" className="w-full px-[12%] py-20 scroll-mt-20">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h4 className="text-center mb-2 text-xl font-Ovo text-purple-600 dark:text-purple-400">Career Journey</h4>
                    <h2 className="text-center text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white">Work Experience</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Current Role - Promantus Inc */}
                    <motion.div 
                        className="relative pl-8 pb-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* Timeline line */}
                        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                        {/* Timeline dot */}
                        <div className="absolute left-[-6px] top-2 w-3 h-3 bg-purple-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                        
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Associate Software Engineer</h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-semibold">Promantus Inc, Chennai</p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                                        September 2023 - Present
                                    </span>
                                </div>
                            </div>
                            
                            <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-3 mt-1">•</span>
                                    <span>Developed and maintained the backend of a payment application using <strong>Spring Boot</strong>, ensuring secure and efficient transaction processing.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-3 mt-1">•</span>
                                    <span>Built the front end of the payment application using <strong>React.js and Material UI</strong>, creating an intuitive and responsive user interface.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-3 mt-1">•</span>
                                    <span>Designed and implemented payment creation, cancellation, and settlement report generation features, enabling seamless operations for merchants.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-3 mt-1">•</span>
                                    <span>Integrated payment gateway APIs to support multiple payment methods, including credit cards and digital wallets.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-3 mt-1">•</span>
                                    <span>Built and optimized <strong>RESTful APIs</strong> for payment notifications and custom invoice generation, improving system reliability and performance.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-3 mt-1">•</span>
                                    <span>Utilized <strong>AWS services</strong>, including API Gateway and EC2, for scalable hosting and secure API management.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-3 mt-1">•</span>
                                    <span>Implemented user roles and permissions for access control, enhancing security and ensuring proper authorization.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Previous Role - Proflujo Technology */}
                    <motion.div 
                        className="relative pl-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {/* Timeline line */}
                        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-pink-500 to-transparent"></div>
                        {/* Timeline dot */}
                        <div className="absolute left-[-6px] top-2 w-3 h-3 bg-pink-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                        
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Full-Stack Developer</h3>
                                    <p className="text-pink-600 dark:text-pink-400 font-semibold">Proflujo Technology Pvt Ltd, Chennai</p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                                        October 2021 - September 2023
                                    </span>
                                </div>
                            </div>
                            
                            <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3 mt-1">•</span>
                                    <span>Developed and maintained web applications using <strong>React.js, jQuery, JavaScript, Laravel, PHP, HTML, CSS, and Bootstrap 5</strong>.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3 mt-1">•</span>
                                    <span>Customized <strong>Odoo modules</strong> and created custom models to meet specific business requirements.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3 mt-1">•</span>
                                    <span>Collaborated with cross-functional teams to gather requirements, design solutions, and implement features.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3 mt-1">•</span>
                                    <span>Created responsive user interfaces utilizing modern front-end frameworks and libraries.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3 mt-1">•</span>
                                    <span>Implemented back-end functionalities, including <strong>database interactions and API integrations</strong>.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3 mt-1">•</span>
                                    <span>Conducted thorough testing and debugging to ensure code quality and application stability.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3 mt-1">•</span>
                                    <span>Contributed to the successful deployment and release of multiple projects within set timelines.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Experience Section End */}

            {/* Projects Section */}
            <div id="projects" className="w-full px-[12%] py-20 scroll-mt-20 bg-gray-50 dark:bg-slate-900">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h4 className="text-center mb-2 text-xl font-Ovo text-purple-600 dark:text-purple-400">Portfolio Showcase</h4>
                    <h2 className="text-center text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white">Featured Projects</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* SBAS Project */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
                            <div className="text-3xl mb-4">🛡️</div>
                            <h3 className="text-2xl font-bold text-white mb-2">SBAS - Safety Behaviour Analysis System</h3>
                            <p className="text-purple-100">Road Safety Education Platform</p>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                A comprehensive platform that integrates quiz and gaming models to enhance users' awareness and knowledge of road safety. The system educates users on traffic rules, signs, and safe driving practices while providing an enjoyable learning experience.
                            </p>
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Tech Stack:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React.js', 'Laravel', 'MySQL'].map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Role: <span className="font-medium text-gray-700 dark:text-gray-200">Developer</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sacola Wallets Project */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
                            <div className="text-3xl mb-4">💰</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Sacola Wallets</h3>
                            <p className="text-blue-100">Blockchain Wallet & NFT Marketplace</p>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                Provides native wallet services for Rubix Blockchain, featuring NFT Marketplace and bridges for porting crypto assets between different blockchains using trustless bridges technology.
                            </p>
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Tech Stack:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React.js', 'Laravel', 'MySQL'].map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Role: <span className="font-medium text-gray-700 dark:text-gray-200">Developer</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* TMS Project */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                            <div className="text-3xl mb-4">📋</div>
                            <h3 className="text-2xl font-bold text-white mb-2">TMS - Task Management System</h3>
                            <p className="text-green-100">Project & Team Management Platform</p>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                A robust platform designed to streamline and optimize task organization, delegation, and tracking. Provides a centralized hub for teams to efficiently assign tasks, monitor progress, and ensure timely completion.
                            </p>
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Tech Stack:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React.js', 'Laravel', 'MySQL'].map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Role: <span className="font-medium text-gray-700 dark:text-gray-200">Developer</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Expense Tracker Project */}
                    <motion.div 
                        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
                            <div className="text-3xl mb-4">📊</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Expense Tracker for Swadha Foundation</h3>
                            <p className="text-orange-100">Odoo ERP Customization</p>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                Customized and developed Odoo modules to meet specific business requirements, including CRM, Sales, and Inventory management. Developed Timesheets and Leave application modules using ODOO framework.
                            </p>
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Tech Stack:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'JavaScript', 'XML', 'PostgreSQL', 'ODOO'].map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Role: <span className="font-medium text-gray-700 dark:text-gray-200">Developer</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Projects Section End */}

            {/* Contact Section */}
            <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h4 className="text-center mb-2 text-xl font-Ovo text-purple-600 dark:text-purple-400">Get In Touch</h4>
                    <h2 className="text-center text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white">Contact Me</h2>
                    <p className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-400 font-Ovo">
                        Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's Connect</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📧</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                                        <a href="mailto:ragavangtpt@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                                            ragavangtpt@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📱</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                                        <a href="tel:+916374133569" className="text-purple-600 dark:text-purple-400 hover:underline">
                                            +91 6374133569
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Chennai, Tamil Nadu, India</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">💼</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                                        <a href="https://www.linkedin.com/in/ragavan-g-353705250/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                                            Connect with me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <motion.div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/Ragavanbca" target="_blank" rel="noopener noreferrer" 
                                   className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                                    <img src={gitHubLogo} alt="GitHub" className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/ragavan-g-353705250/" target="_blank" rel="noopener noreferrer" 
                                   className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                                    <span className="text-white text-lg">💼</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Message</h3>
                            
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Your Name
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-colors"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-colors"
                                        placeholder="Enter subject"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea 
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-colors resize-none"
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>
                                
                                <motion.button 
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message 🚀
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Contact Section End */}
        </div>
    )
}
