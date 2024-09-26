import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from '../components/theme';

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollTop = document.documentElement.scrollTop;

            if (currentScrollTop > 0) {
                // User is scrolling up, apply blur to header
                setIsBlurred(true);
            } else {
                // User is scrolling down, remove blur
                setIsBlurred(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 z-50 fixed top-0 left-0 w-full transition duration-300 z-50`}>
            <header className="absolute inset-x-0 top-0 z-50 flex justify-center">
                <nav aria-label="Global"
                    className={`w-11/12 mt-2 flex items-center justify-between p-4 lg:px-8 ${isBlurred ? "backdrop-blur-lg bg-indigo-100 transition delay-400 duration-500 rounded-t-lg rounded-b-lg dark:bg-slate-800" : "transition delay-400 duration-500 bg-transparent"}`}
                >
                    <div className="flex lg:flex-1">
                        <span className='font-bold text-gray-900 sm:text-2xl text-black-300 dark:text-white'>Ragavan</span>
                    </div>
                    <div className="flex lg:hidden gap-4">
                        <ThemeToggle/>
                        
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-1xl font-semibold leading-6 text-gray-900 dark:text-white cursor-pointer">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <ThemeToggle/>
                        
                        <a href="#contact" class="hidden cursor-pointer lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">Contact
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgBzdg7UsJQFMbxc28ay7gDM2ksXUQepVtgB8ASKK0cVgB2ltZJCktWkYkrUDurxPNZOBASyOO+/g1zT5jhNydUV1CrOI6XQohV0zR3ZCH+3S8p5T7LsrWgU9iCP3bkQIzcyNbgkRyJ395Stgbf5E5+e3N7cijv+FCWZRWG4Qdv8IGPPllOkOHSNN3Vdb0Y8l2juDEwZAw3FoaM4KbAkCTNDYC99D3QihsCy/O897k23FwY0oJTAUPKcapgSClOJQwpw6mGISU4HTA0G6cLhmbhdMLQZJxuGJqEMwFDo3GmYGgUziQMDcaZhqFBOBswdBVnC4Yu4mzCUC/ONgx14lyAoTOcKzB0gnMJhv5xrsHQH84BWNUe8H1NJZMkeba9Mb7d2nbMNl4QBK+svCFLMMS3WwfcbjEIqAOP1kVRvIkoij4Z59uCXQr/uW3H3DoMebzSd361t7y9ez7/8FqfeKUrcqBflJQnWP0pHksAAAAASUVORK5CYII=" alt="" class="w-3 dark:hidden" />
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgB5dOLCcIwEAbgixM4kiM4Qp1AR6gT1A3aDbqCm9QNqhPEC6SgoWIe9wj0h+MgKdxHkwAEsdaesSarlxmrcxYTwBpsPdSRa4gbsR2hjjx3wcIL6sk+xA1QUb5wxpg7thPWA7YYvNd97LMFyaTARHGpMDFcDkwEFwEbVHAxMP+dLC4WJo5LgYniUmFiuByYCC4Xxo4rgbHiSmFsOAoYC44KRo6jhJHiqGFkOA4YCY4LVozjhBXhuGHZOAlYFk4KloyThCXhpGHROA1YFE4L9henCfPzp5WZk9voNGEed1mZ27iNWRP2AWywRn+Kh2Vx1ob9DCLaKmFLEHPzf9BVC5XkDSKdijNM7/ULAAAAAElFTkSuQmCC" alt="" class="w-3 hidden dark:block" />
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <button class="rounded-full ...">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    )
}
