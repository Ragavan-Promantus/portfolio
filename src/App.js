import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import './index.css';
import Header from './layout/header';
import profile from '../src/images/r-letter.webp';
import gitHubLogo from '../src/images/github-6980894_960_720.webp';
import awsLogo from '../src/images/aws-icon-2048x2048-ptyrjxdo.png';

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
            <section className='relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-4xl text-center mx-auto'>
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className='relative mb-8'
                    >
                        <img 
                            className='object-cover w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl' 
                            src={profile} 
                            alt="Ragavan"
                        />
                        <motion.div
                            className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur"
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                    </motion.div>

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
                        Associate Software Engineer at <span className="font-semibold text-purple-600 dark:text-purple-400">Promantus India</span> with 3+ years of experience building secure, scalable applications using Spring Boot, Laravel, React.js, and AWS.
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
                            href="/home/promantus/Downloads/Ragavan resume.docx" 
                            download="Ragavan_Resume.docx"
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

            {/* Page-2- start */}
            <div id="about" class="w-full px-[12%] py-10 scroll-mt-20">
                <h4 class="text-center mb-2 text-xl font-Ovo">Introduction</h4>
                <h2 class="text-center text-5xl font-Ovo">About me</h2>
                <div class="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                    <div class="max-w-max mx-auto relative">
                        <img src="https://elianajade.com/assets/user-image-Dc_rZ4ty.png" alt="" class="w-64 sm:w-80 rounded-3xl max-w-none animate-fade-up animate-ease-in" />
                    </div>
                    <div class="flex-1">
                        <p class="mb-10 max-w-3xl font-Ovo">
                            I am an full-Stack Developer with 3 years of experience in building scalable applications using Spring Boot, PHP, Laravel, React.js, and jQuery. Proficient in MySQL, PostgreSQL, GitHub, and AWS for efficient data management and deployment. Skilled in debugging, code optimization, and improving system performance. Passionate about learning new technologies and delivering high-quality software solutions.
                        </p>
                        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
                            <li class="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASeSURBVHgBtVnNbttGEJ5ZyTVyc99AhxxylFH0XPpQwHYPpZIHiHtL7AB1n8D2E8QBrLRAD3YeoAh7iYT2EOaYXKTccggQ5gmiWxL/cDNDSs7ukpSW4uQDbJAj/sxwfvabWYQa+OXO3t00hWM6nGgFh8N/+k+gJjbDewGACq7gIvo/+nsMDaF8L9y+vXtAyp/R4Rr9dTA3pBa2wgchYus5Ih608bvRZvgggIbwMoCV1xoPHfEEagJB/2pL0gAaor3ogq3bew+1hn1XrrU+gprQCIEtUTE0BFb9EIT7azfU+Sm9NXR+mpA3esPoJIYa2A53uxpxZD5n8LT/PTREqQco0TqIF09J+a7zU4Ja9wZRv3bypQBd52s1TmBGwYBc+dZzOuw4PyVaX20Mor8SWAKkvB3/Ov0XBGAl8Rzlx6z8cEnlMyAG5uklXMYggGsPzFE+/qhXenHUr111jGcHkJffGRKJNYDRnr6gVHmqPk+GUX8HGgLBziWqYK9BCCr/1zoA98trfCShfAZUTv2HCISgNsPdHarPO5aUlB9EJ/sgh8A+TWMQgqJl/a4jG0sqP41/E0mjYuCAQ8iKz0t9/hsIAkFZCyF5OwZBsAFmdQCp6nANxJ/M0zSVqf8zKNCQmAIJhvj1Wfc64Hj4HFZjEAR5QFtfBFGfTl/cGAhtl4qM4+h46fWkDEpD6vL6bE2QMKJAn7V+UXbd9p3d37d6ex/o791WeL9WAVFZRdDwhyMXMcKlzxpUaf3XKbLSWaNEa8ZD7j/AE9lCRuzymJ7utoeNjJje1zFlcyi4VUi4efI14prMrcIKfwW3AjUwQgWOIK66kqgFR8DElrERe6ew6C2zg4iSixqM9QpPjH6mhgRqoA59HkaPz6jP2KDDxLpFww7lxYibK1hkwAwD5j9EJRzxWpu6qU2aSoAvatLnZ9HjjLKDYwShewMvRlVRUNrUM5UgFxZ6XppEnPnE5nbuLfOrTXwWSC4oFUZUhrKqftjJYZkRPgmmQQf2PeXls/y910Z45aOa/7CTw5ISu9iIhvSZjVjVKxs+lXHhXIhLLCnMX6RQJebcFtin9elzVlTK89EywmuwxfWb3LoOdmwmZddK0+eKfGQjshLrPVqcxSa3mYhwNo3TAr4Ffc5DueCJgIkngjC4boPBQK902vsv+lOkhaRnc98eGKLY2wM+CPMFx1rwiK+L9ReYr9gmuqIGfIbLwBGNJdtHXuwc0ZqoAb70eVnwAMIRjUUN8KXPyyCfXeGB8z45A8ro8ydoi8R/5dQwvToS9IAKHEEs0T5WTw3xiPNLzIBvMX2u/PLZ1JDWBvDYofEGOvNPaDUKn+mGCCvvdGs8r/06eBPxwJQ+dwzRpO4OjgneDa1W3p7XihjQhD674AmFsRtqPLR82CyTA0LT52w3NEV3zJMlbNW8VioHrPinTeza8V+1G8r9CIVj5Z50YwMkdl9YeSgqP+FpBTf88+4V8IAKzLOl6HOJ8jylGBS5T/Ht0BjOZnW6VALHxjH3HevPPJRntKAh3r55ldy89eN7pZBd/miRy8tw89YPL2gfjXuTlzSrvV+HwX4BXiw3woMjPHAAAAAASUVORK5CYII="
                                    alt="" class="w-7 mt-3 dark:hidden"
                                />

                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKZSURBVHgBzZmBcdswDEXhTpARNEK7gTaoN6g7QbtBvEG9gbxB2wnsTOBsoGygbPBDHpmLDZGMQH3m8u54tnQUAZIgCIIiBgD8cGVyZfT/pQL3Xe/K3pWv8pE4gfe4ZRIj7putaqOXlXxZUskr73726vWz2PmunntpjVP+D9LsxEg0PeoMlITdufI3ofhUI9jb/FoTtAjrXLkklB9rF5+fMdXWSVoQlR8zyndSSWI2fwubgvKXNcrHtifVJteNFpQ/uXInK0Dw/TezKUwKyh+FgDcX1e4/YeIaHBLKH4REnMVrdsICc+9AVT7K0HTCIjE6FyGCxvbvQwntDX4Kl616PgsTPbdCBvMNcStM0DA+QfBumlUuWeNN6L96NxAXmTbPx81mUxPF5smM0sjoBObu+ZCp9wtvByV7iIH5RkPpBBaaZ6LevVhxHx2ZnUjNbKHulJBt6wRC/H9hdQKG8DnWTXViECuZmfCNm6JHGMNnhAPPmJDtB9XmudwHB6RZnIlARfgM5lkEIfWR4l3bxIrj46foBFaGzygfaTtLWzkXW+wECOEzglPheEaEiHLmJQr1NZ1UgvR6HGs6oW1zzNSjh89Im7I9qxE74ad1yI1AYsTsvnxZu55e2KBh+Iz52uLmlhAWnqYTEmid3cM8+0w9nkYZNyzKThvQ2ecHIYK5O34UJmh/utPtUxzEtQAN5fiIfHjRCQs0yj4XlN8LEzTIPheUpybeXoVpQb2sAMFlpg45R2EDsn/G221oe+WjQFr2GSFDgQ8xmyuhJyVsJxVgfpX7yl5aAsLtC/K3ofyrKCV4dficUX4C8x6hIFzH6ubdMaP8ollkxEJn9VwT/5yv/j+58s3lULlxTgmEXXhA/eL1G9Yhls7y7QuIfii2tUincgAAAABJRU5ErkJggg=="
                                    alt="" class="w-7 mt-3 hidden dark:block"
                                />
                                <h3 class="my-4 font-semibold text-gray-700 dark:text-white">Languages</h3>
                                <p class="text-gray-600 text-sm dark:text-white/80">Java, PHP,  React.js,  jQuery, JavaScript, bootstrap 5, Material UI, HTML5, CSS3, XML,  MySQL, MongoDB, PostgreSQL, Laravel, Spring Boot </p>
                            </li>

                            <li class="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAyCAYAAAAN6MhFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgB5ZpNcts2FMcfSNmZdFP3BGFOUPcGyi7Wpkx6gCi7VuqM1RNEvoE9k6Sd6SLMBWp203imCzMnCHMCMzfQJhMnloG8J1EkxPDjgSJpZfLf2JBAAD/hAXjvgQDfiAR0rPvur30BYl+B2BOgwlf+nz50oM5AF4DCfoL/9jNfRUqpozP/uQctqnXQA/c3F4R1CF8CZhUJoTwp5csz/68IGlZroPfd0VAIQTPogJlaAW4clAEYKCWOLJAzCWIiBDwqqNcocCOgfXey95316RABhlABeOY/DfQPce1ifXvaNvBGoBrgBIt7+T0oX0nrJAuYlQb8c0FbGwHXAuUAKgEeyOsj00EtgXto/opm2MmpUgvYCLRNwKwYwICzj8C8vligDMAZfncCMPeaPhqaAi4F5QJeQu848I9n0KI2Bc4F3SbArOoCr4FuM2BWpsAJ6OCX0aGSYgpbDpinKicFf4ypWFZcONznOXW2GjCrMuAYdDSNK+gKP6ide18DYFYDd/wCj7mh/pkV/wly6u/fFldv6FeCr0RkmQcPxudZSFKyRg/c34/RXTssaKOTmLGuYpOlse8X1RHrD1Q72NsEbBIKivwGthuYGwribptkNER5g9sFzAVcRUq0XoEDmnbQTcxY3L8Z4ErGoGmH3QJXAVZFSrVB8xooUG1gVjAf9/Hq9NldYI7TgnrSt/Ew53sHB4ozb18MHo5fLC2hXAQ4eDh6gmf3BT0L+ZCB3gc9A0wZg7rLxpMOcFB/KHV9l9YIFqNsfaVgWAbMASQTpT5uqZ0H+uc78N4BpnpgqEu43Bdga+VeGPhPyU2cIohXFFHEwEME9q7kpxMb7JllWY+UupogYHm24jQ1fzRH6mtR34YdsqwQGDIGpesErRjqvnC8HiuBe2J3GP+fqzxArYEAwxF3OZZiTygrY1Bs3tEKuQ7/ChgW0GzvJY2UTksDiXfpUMSPwJQ5qNY4Oguvq6rHzoRXAmwUCqIRhNpR0eaMpo1LvA3jPrQGjG0IS3yvpHz7AW55JqEg7p6hZvG4kY3v/PfPs3dVzxmBDtwRXvdpOy7MIzDUpu7iLuxGH+EqKc+l/Al0cy6Q0fGiwHL08v/+3+wZbUo+zb5KjzGbeYllCCqrHIVOhONI9gZlWawNyQgU15a+EVWaS1sS2o8sVOW960JmnpEQTtoZnmc3JjvSCoWuoH4qmLqAiekqsG/QdOdrfRe5grjxTRH2MR5f99igtOPqZXL94IYUOyTJkRS7ggV1n3sUp7JBMzvubAvSoOk6ZTgOBqYr+3md3JiUepv8z3AF+aC66ye+DMe6llr/sStnlJ1hOHDHF1jbSR40uIRtUkUZCLxV+KFsORnM6PosxvHlOQXNnAxCEyI/mW4PcgL0qGrPYPu6GOE/zkmMrVImFFAHbcwwI4cUCjxCqtoxTo5xUo+g5L9zmAd1fWGyEAzw6Y0zekOlX1BtEd7h0TEFhmplASlvdAnzSdkl7GowQJuGotCKdkkZ0YfXcD2jVEr67OLocixL3FFLl66szVovhGz0nhHn1rlBYdSiXqJDf9zZe0Z5ik2agPvQrBZLwTRAz6ox0JVo87gN8z6aqosbF5297HRHLEx+4xVDjexDmT4DS9Ehw7bN52oAAAAASUVORK5CYII="
                                    alt="" class="w-7 mt-3 dark:hidden"
                                />

                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAyCAYAAAAN6MhFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMDSURBVHgB5ZqNldowDMdFJ6ATNJ2gGSEjsEG5CZoN4DZgA9jgukF6E0AnSG4C2ECVL6ZPF/wh5Tvt/z29Bmpb+hFbsXwB+E+0gpGFiBn9k5KtyS6r1eon/EsygGQFPqok28LSRRAbD6ALeEeWwJJk7pINXqtyEcACwALraZySnRYFTMGsbVBlDNDRN5k9MAO8BgJ9cQE6xroDX2cDLAQ8tgnKAu/RPzuGBx4S0OErBtybL+40Bni1QSXQs0YBVgCuYWANAjwnQEds3YHnDOiItR0wffFjCYAuYXyTsrs3zJYI2FQI+N5g7/i/81IAm7JT1gnqu6MlLqiEQn8piLzRAf0q5wyM9ZQ9B+LHZgfJBnsLMxEqSkHfALMGRnkpWARB2YCzApYCsvaFCJR1mLRm1AKyfoUKlHUcFVgAeAz5ag3qGqBvYJSVgu8+BGMVXUF5EOdIQEcJsBCwaHxew1CgNiAuk91aVxSoKObx0XcKA4Jmvl9VAZzatjsJYMM/b7+FAUFz5ujsaSMBRg0gG/uFtTuAEPQT6JWw65urAf09pSLbk32lj09kFcRlxnom+0z9nswYnnZv7PobDCX8mBD2in6+R4WqFLTj/O0LwlhBK/y4RjaglA30YKdnjspSEOv1zfUl0LYdqMNJCiMLHzPvJtC2aLtGE/6B1tEFRhb5NGu5Yl8lkn5aUH4HR4dkemXXooSkBeWDvsF04j9yJunQZer+gulUseskkNBeoY0aSSCDiYT1hkSUFG2Wz0AqR8ad9IQQFVtBI83UTdj1zWa/KcXXafQxpwHNPE6m0m92Hc28GlA+WAXTS3VHxcLHfeoRJ3ivAP31az85A/0vQ+3GAkZ/YRA9VtE4CR2MlUPdYYyfQJijnP733Cg7esy7OLc/ao7hQ7j38k46ZquXHrFeDznZdwhvqs0j6GLNZMmKfX9jfRNrpuTKIL5RP5E9B4rzfoXdj0w0MnfQ1LEJTCmsp3SB/avAFgV6U72/r2sDyshMQWyevdq1WkFdMJipfuprB/YHv62y0lDBHLQAAAAASUVORK5CYII="
                                    alt="" class="w-7 mt-3 hidden dark:block"
                                />
                                <h3 class="my-4 font-semibold text-gray-700 dark:text-white">Education</h3>
                                <p class="text-gray-600 text-sm dark:text-white/80">Bachelor of Computer Applications (BCA) in Sri Vidya Mandir Arts & Science college (Autonomous), Periyar University, 2021 </p>
                            </li>

                            <li class="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAYAAABe6Vn9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7ZnNUhNBEMf/vVk0ejFv4HKwyhvhpDeTG+Higg8g3JRYBTyB+ASEKlCO+AKyXgw349mD4ebBKtYnMBwsIsK2PakE9itkYdZil8rvsMnM7Hz07PTMdDchBWbsFxWiwmdowEzVPWezBU0MpACBytCEcKrdhiIVgUDGU+iSRhtISyAgjdlN5QsRNInRH7e5uzWZpG5trv5LfkqDdBp6pP2FwvrDzPsJq8q73sdgW/p6pL/komvfQUJkebRHtHVp0tChSjDptZAQBoeFL1fslRI0iOiQanACv60CCiMbNmBMMVHDl9VhPp3DJRD920VAj3hRJsVNUreLYrvlNDqB9gZ/lCB38XedCba/g6xDhB3PO32z52y7vbR6yE5l9XcqC/nElZVRVUL1BJLt8wD5FWaAe8QT0+aMvbSAqDBqXbaRbSwEx20VcbxiEtFy4DWmjaazuYIcULNfNUB8Nn6R5YnatoMHI04ayAm3Ya6FssqRc2iwW+QBJ7RlC6W0LqeZ4eYLNDtfv4+coM7PcF5EIM/jKnKDUYnkhDNk63uOnCBjfR3Oi9OhSs1+mflzaHZ+SQljhfPjNwUy1vsVMsnss6VlsW7X4spI7nF8Qd0W2JObw7vERtv/QlkDRXTLcolWE10Z9t4ogfy4vv/WBWU6WEjeZyxmTJ46fUsJOktapoM1ojwy1ogOiV0xLY9rX2IJaPXGGiL2Ltd03s4plxIz3iNbZoQrk72hxiausmrcvdMcVrPvH2sN0v5TmSDWLZ0vB9UBcOJCC1OsZg7495QVej6eZJdmEwnxN1iz64Eyw+CDTx+2f0IDmTB5Fob2mZTxbTvrJF5yQWhV3Lhn2+UR3zqEJkUUO10+XjzrAUYHV+BKAonPIfVtvW997kCTsQ5lnbFAWWcsUNa5+QLpRtCuG0Oc2a4/4w7+LCAnKN9CKKstNwWWSLQvAtFzkNSnxD/3BRlGou9T7CHgnZLoY5v60btvyFEYchhiP00ayuaQQO0q8g5jVcnSs6h+fP/afvDw0b58x8fI35cSs5wWm87WjkpEwvoSFZMouFchg+4hw7DHhwzD6cIMhPb/AQhkFNSBuhSEAAAAAElFTkSuQmCC"
                                    alt="" class="w-7 mt-3 dark:hidden"
                                />

                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAYAAABe6Vn9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgB7ZntbcIwEIbfVPxvO0HTCVo2CBOUEegEhQkYod2AFegE0AlIJ8CdADqBe6cEyXEuIZEtsKs8kvmwY+debF98B+ABrXWm3cnggRv44Rnu+BjDm6AXuONjDCTwAC2XA73dwY1jkiT3uDbC/tn36HvwvY98LDl77X+jO59nxuqND0H22l+jO/mZsS6P4H7THn1Tqy8vQae9OBJuwgOm6LbJn6zvR+7bR1TZ53Qvfp9Sf9Wxb06O5Ci2sBAqK2Gjhs5KGz9gUorhig2KmYkRRWVCs6VOgtjVpogbRWU8IjEz1MXwuswRNimqdvPnOc/OzlqTH4gEttWyfePkdq+NLhyZySHhV/Mi2lhezneXwrbf12k7GP6/IJrBB0SCtN+lGZogHrJajeDlNogEPhDYxkuCmDkCh2xcSoY3CWKWCBSy7a3J6DZBzIbKFAGgi4doVtrUSO3B2oIyPqctbS6k6H5PEUmQGXCFTs1WyW2P0S8vcC22KGyt0HiW00VKaYYizPaS1fSAQpEpWpOZW66o2d8kyEZXn8p2dDuB+z5Ky3FPKBgPeY5GIdtVsX+EjpgDCn5kT+0/cEDyTU0i2hhO26HTeclZLFB1l79wh13wq/W9N0PEGjqDoNAZBIXOICh0pDRWLLGQCAtSVt0MkcC5Basq56MPxxdmwztdyDHQF8KGbbSzU3lSxjk7xBN2t/F4U8YcC8TPohI/cbpKC5nICNhrI9VWO1mXjRmVW4QNhyyczKn8tf8HiTbLNoodLQgAAAAASUVORK5CYII="
                                    alt="" class="w-7 mt-3 hidden dark:block"
                                />
                                <h3 class="my-4 font-semibold text-gray-700 dark:text-white">Projects</h3>
                                <p class="text-gray-600 text-sm dark:text-white/80">Built more than 5 projects </p>
                            </li>
                        </ul>
                        <h4 class="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>
                        <ul class="flex items-center gap-3 sm:gap-5">
                            <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src="https://elianajade.com/assets/vscode-xCMPv9CZ.png" alt="" class="w-5 sm:w-7" />
                            </li>

                            <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={gitHubLogo} alt="" class="w-5 sm:w-7" />
                            </li>

                            <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src="data:image/png;base64,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" alt="" class="w-5 sm:w-7" />
                            </li>

                            <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={awsLogo} alt="" class="w-10 sm:w-10" />
                            </li>

                            <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src="data:image/png;base64,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"
                                    alt="" class="w-5 sm:w-7" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Page-2- end */}

            {/* Contact section */}
        </div>
    )
}
