import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';

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

        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleTheme = () => {
        console.log("ninihbhub");
        
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

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
                        <button className='cursor-pointer' onClick={toggleTheme}>
                            <img src="data:image/png;base64,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" alt="" class="w-6 dark:hidden"></img>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANySURBVHgB7Zs9dtNAEMfHeWkB05LGKaEiRahNQU24QKIb4JoGUUAbOIGVEwROYLe8FPgGdoFpY3yBYca7eh5thLWSxytF8e+9iVcf+/G31ruzswpAYBCxC22HRPbIbsmmZC8hIAcQloiMn2iP7AwCElpobeyFto290LbhJZTnPrI+NAyeonjK8rm3UKgtaEo2ovRHaAi2Lb/YfJwQnyfatcbETRBr2xDbQ26bjvNBBSeYpZJYyheLMmKoANfttCUGTTTEUp6ByB9BSXYuUlSkITaq0sBgIkWFKt24ZJ1hRYqKg4mtTaRogCs2AmVsN1cReQgV6XQ63AhOXvjmQTPfpVPVgspYFGSR8+Mnuj+GurDf+mDD9T7ZJZrFtgufG+IGr8uWH0FTQRNNGKE/Q/R05xoDNfgMTcjEZUk2t5YH5wkaeaiMFelyTXZO9tyxc3vNpQ/KdEAR2/XY0U4HkTnZB7KbgqxHZIn9ZHiQOqHBZwZKaK9HeT6VIiMoFinvndtjLmMIiqg9UdvdRuLUG1g33JdTsitx/Jqe6hgU0Hyicj79DuVFMjc2b4rawKQptC/S11AdmfctKLHqumii5r7f3oy6UyJPoPF4bsWpF7AdP8ke2fRT14NC46D4bm0kPKilLiB/iz3PjKvR1XHHZKVVuqzLEtZCn4AZhdO6I/q4BH/eU57jA8z6n77MoD56UI6VT33If0jsCZjh3Tdj4p4T6cewPUci/Vde4J5E7Z2Bv+DV4KY5vUxF5TwC+8yfebwC4zwwPB4cgwKao+4PkX4H1ZGD4hiU0BTqzn+nUJ5nkBV6BUqoCbUezFic+gKm4b7wvVJYouUVMSGcev69/inIyr/Lz7BDp16dDcu0i5xl2sV/lmn3ak2at/Bmfltb5ly7PwvvFDShlAT9GWGTQylYELxCExxjwdMccXzuK24Ojg2w7uAYZoPLA4/7u/ZJsxW6nZiN69azi4d3I+gRKIN3A9hhxWLAbQKsYa8nrTiYSFFnWLEaIm0ZEZQkmFglkfI3Vzh45eTfrVhU6q6os7W/G7Fo5sGtRdqyYqVyXLGFL2v4rF4msI4g1Lt1Z+EtS/r4Zg8XkI1w5FK4PypCLV1KT6AhUFvYY+I18MRjn9VvI7ipy6Uy69X9u4BtYy+0bTwYoUFB837tFE3IpAdtB2v4J59/7V0ID+cZYRYAAAAASUVORK5CYII=" alt="" class="w-6 hidden dark:block" />
                        </button>
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
                        <button className='cursor-pointer' onClick={toggleTheme}>
                            <img src="data:image/png;base64,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" alt="" class="w-6 dark:hidden"></img>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANySURBVHgB7Zs9dtNAEMfHeWkB05LGKaEiRahNQU24QKIb4JoGUUAbOIGVEwROYLe8FPgGdoFpY3yBYca7eh5thLWSxytF8e+9iVcf+/G31ruzswpAYBCxC22HRPbIbsmmZC8hIAcQloiMn2iP7AwCElpobeyFto290LbhJZTnPrI+NAyeonjK8rm3UKgtaEo2ovRHaAi2Lb/YfJwQnyfatcbETRBr2xDbQ26bjvNBBSeYpZJYyheLMmKoANfttCUGTTTEUp6ByB9BSXYuUlSkITaq0sBgIkWFKt24ZJ1hRYqKg4mtTaRogCs2AmVsN1cReQgV6XQ63AhOXvjmQTPfpVPVgspYFGSR8+Mnuj+GurDf+mDD9T7ZJZrFtgufG+IGr8uWH0FTQRNNGKE/Q/R05xoDNfgMTcjEZUk2t5YH5wkaeaiMFelyTXZO9tyxc3vNpQ/KdEAR2/XY0U4HkTnZB7KbgqxHZIn9ZHiQOqHBZwZKaK9HeT6VIiMoFinvndtjLmMIiqg9UdvdRuLUG1g33JdTsitx/Jqe6hgU0Hyicj79DuVFMjc2b4rawKQptC/S11AdmfctKLHqumii5r7f3oy6UyJPoPF4bsWpF7AdP8ke2fRT14NC46D4bm0kPKilLiB/iz3PjKvR1XHHZKVVuqzLEtZCn4AZhdO6I/q4BH/eU57jA8z6n77MoD56UI6VT33If0jsCZjh3Tdj4p4T6cewPUci/Vde4J5E7Z2Bv+DV4KY5vUxF5TwC+8yfebwC4zwwPB4cgwKao+4PkX4H1ZGD4hiU0BTqzn+nUJ5nkBV6BUqoCbUezFic+gKm4b7wvVJYouUVMSGcev69/inIyr/Lz7BDp16dDcu0i5xl2sV/lmn3ak2at/Bmfltb5ly7PwvvFDShlAT9GWGTQylYELxCExxjwdMccXzuK24Ojg2w7uAYZoPLA4/7u/ZJsxW6nZiN69azi4d3I+gRKIN3A9hhxWLAbQKsYa8nrTiYSFFnWLEaIm0ZEZQkmFglkfI3Vzh45eTfrVhU6q6os7W/G7Fo5sGtRdqyYqVyXLGFL2v4rF4msI4g1Lt1Z+EtS/r4Zg8XkI1w5FK4PypCLV1KT6AhUFvYY+I18MRjn9VvI7ipy6Uy69X9u4BtYy+0bTwYoUFB837tFE3IpAdtB2v4J59/7V0ID+cZYRYAAAAASUVORK5CYII=" alt="" class="w-6 hidden dark:block" />
                        </button>
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
