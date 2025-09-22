import { motion } from 'framer-motion';
import gitHubLogo from '../images/github-6980894_960_720.webp';

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/Ragavanbca',
        icon: gitHubLogo,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ragavan-g-353705250/',
        icon: '💼',
    },
    {
        name: 'Email',
        href: 'mailto:ragavangtpt@gmail.com',
        icon: '📧',
    },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-slate-950 text-white">
            <div className="w-full px-[12%] py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <motion.div 
                        className="md:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Ragavan Govindhasamy
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                            Associate Software Engineer passionate about creating scalable applications and innovative solutions. 
                            Specializing in Full-Stack Development with expertise in Spring Boot, React.js, and AWS.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.name === 'GitHub' ? (
                                        <img src={social.icon} alt={social.name} className="w-5 h-5" />
                                    ) : (
                                        <span className="text-lg">{social.icon}</span>
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-400">
                                <span className="mr-2">📍</span>
                                <span>Chennai, Tamil Nadu, India</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <span className="mr-2">📧</span>
                                <a 
                                    href="mailto:ragavangtpt@gmail.com"
                                    className="hover:text-purple-400 transition-colors duration-300"
                                >
                                    ragavangtpt@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <span className="mr-2">📱</span>
                                <a 
                                    href="tel:+916374133569"
                                    className="hover:text-purple-400 transition-colors duration-300"
                                >
                                    +91 6374133569
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div 
                    className="border-t border-gray-800 mt-12 pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Ragavan Govindhasamy. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <motion.span 
                                className="text-gray-400"
                                whileHover={{ color: '#a855f7' }}
                            >
                                Built with React.js & Tailwind CSS
                            </motion.span>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll to Top Button */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <span className="text-white text-xl">↑</span>
                </motion.button>
            </div>
        </footer>
    );
}
