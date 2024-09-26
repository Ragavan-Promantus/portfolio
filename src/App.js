import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Field, Label, Switch } from '@headlessui/react';
import './index.css';
import Header from './layout/header';
import profile from '../src/images/r-letter.webp';

export default function App() {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="bg-white dark:bg-slate-800 dark:text-white cursor-fancy">
            <Header />

            <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
                <img className='object-cover w-32 h-32 rounded-full' alt src={profile} />
                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Ragavan &#128075;</h3>
                <h1 className='text-4xl sm:text-5xl lg:text-[66px] font-Ovo leading-none'>full-stack developer based in chennai.</h1>
                <p class="max-w-2xl mx-auto font-Ovo">I am a full-stack developer from Chennai, Tamil Nadu, with 4 years of experience at Proflujo and Promantus.</p>
                <div class="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <a href="#contact" class="cursor-pointer px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">contact me
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAWCAYAAABOm/V6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgB1ZZhDYMwEIVfUYAEJDAHSJgEHIADmAIkzMLmAAfMATjYHNxeQ5N10GT8YNftSx45fjTvNeWOAjsiIhk1UCNVIwY0buWdBtrQtJA1UYLUgSAdtKFpGQhyplJoQsOcui+CDDGCZK5TfOx7Bk3+JwiLKnB2Wljf3NgKcbkmfPSIS2/cueTUt1uncj4+J2NMCw240SbwPbTQgmZdIIDOH5ZGqcyjekkJDVyAIdCOBTSQ18XGZ7TzABrIL4xoWd+sNgVIsC+TV9+oA+fA9GmRwc5w50fMg+/CAI8ta554HhFHncIuNwAAAABJRU5ErkJggg==" alt="" class="w-4" />
                    </a>
                    <a href="../../dev-icon.png" download="" class="cursor-pointer px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black">my resume
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALESURBVHgB7Zk9cuIwFMefbYp0a6DZ0jtAvZTpFm4AJ1i2261Cuu3inIC9QUi3Zcp0ITcgZQaYMRcAp+Yr/5fIHtlJJpEiZciM/zMeyfryD/np6Vk4ZFiNRqO52+2ucMWu63Ynk8mYDMolwwLoCRLfcZwA6REZlnFgyE8ygA/IsGwAW1UBbFsFsG0VwLZVANtWAWxbBbBtFcC29emASyqNgyDwS6VSjz9/ZrPZkN6her3e1xlHaYY9zxsgGeDz56xWq52RpkTfh3EAHqr0VQLGA3wp38PDTkhR3If7SkVNUpAS8Hq9PkYSS0WhCrRoGyb3MIkIY/ZJQUrAEYTZadNT6FcfmoflMfgYgMckBSl7CXHO0M0VD2CXP1/qI+pCuQyz+0vnzMIjDS0Wi6hcLs8x252kjPOVSuUa2RauQBRH1Wr1Bukl5WDhHf6ThrSAWcvlcgxARwAm6gDmIFmcyHPyG9eB1OYUsP9IUw6Olo62220f9jRarVbHMKlYZQDhlt668E6n02lIisIzrujxgObcwyxdYka+4qaJ9JZnTmUwmMcI5lFG30OyAAv772Dsv8gy46FL0tGSrvCKedc6f6me63RgWXjzMp9vLJYAdA/Jc29nLOqMyGjwg02AfXQKLTaGNhmUUWBesADssgnA7oabzaatuohfUyZak2MFXYmdq0eGhB+fYXL5tUn37wa2IDngijImkf81+yCZ6eFvCFCni0Qc8++VwPRduo3ZJOZSwQ/aP6XxMlhveIYvpEr/LaHiR4nDBsquqxEHL7xXL6UKdkO8jWoHKCbEsJjRkAQXOwdsQN8cUckflplvNG4g7DvCdYcrxr1Rn5p7XoDkCz2Gpi3KeSwRkg6dpEAx6vpopYFTGg9z1IVge45f0jSxgRhSDJ4/cvzsPNeKQzokLeFSfPaFtl1esoGxGbLnYmeAWR3l290Dvv43W3IHdnwAAAAASUVORK5CYII=" alt="" class="w-4" />
                    </a>
                </div>
            </div>

            {/* Contact section */}
            {/* <div className="isolate bg-white px-6 py-10 lg:px-8 h-screen">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Aute magna irure deserunt veniam aliqua magna enim voluptate.
                    </p>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                Company
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    autoComplete="organization"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone number
                            </label>
                            <div className="relative mt-2.5">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                    />
                                </div>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="tel"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                        <Field className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <Switch
                                    checked={agreed}
                                    onChange={setAgreed}
                                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                                >
                                    <span className="sr-only">Agree to policies</span>
                                    <span
                                        aria-hidden="true"
                                        className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                    />
                                </Switch>
                            </div>
                            <Label className="text-sm leading-6 text-gray-600">
                                By selecting this, you agree to our{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    privacy&nbsp;policy
                                </a>
                                .
                            </Label>
                        </Field>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let's talk
                        </button>
                    </div>
                </form>
            </div> */}
        </div>
    )
}
