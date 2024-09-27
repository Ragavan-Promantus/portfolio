import { useState } from 'react';
import './index.css';
import Header from './layout/header';
import profile from '../src/images/r-letter.webp';
import boyEmoji from './images/boy-emoji.jpg';

export default function App() {
    return (
        <div className="bg-white dark:bg-slate-800 dark:text-white cursor-fancy">
            <Header />

            {/* Page-1- start */}
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
            {/* Page-1- end */}

            <div id="about" class="w-full px-[12%] py-10 scroll-mt-20">
                <h4 class="text-center mb-2 text-lg font-Ovo">Introduction</h4>
                <h2 class="text-center text-5xl font-Ovo">About me</h2>
                <div class="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                    <div class="max-w-max mx-auto relative">
                        <img src="https://elianajade.com/assets/user-image-Dc_rZ4ty.png" alt="" class="w-64 sm:w-80 rounded-3xl max-w-none"/>
                        <div class="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                            <img src="https://elianajade.com/assets/circular-text-CzRyQliD.png" alt="" class="w-full animate-spin-slow" viewBox="6 6 24 24" />
                            <img src={boyEmoji} alt="" class="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    <div class="flex-1">
                        <p class="mb-10 max-w-2xl font-Ovo">
                            I am an experienced Frontend Developer with over a decade of
                            professional expertise in the field. Throughout my career, I have had the privilege of collaborating
                            with prestigious organizations, contributing to their success and growth.
                        </p>
                        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                            <li class="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASeSURBVHgBtVnNbttGEJ5ZyTVyc99AhxxylFH0XPpQwHYPpZIHiHtL7AB1n8D2E8QBrLRAD3YeoAh7iYT2EOaYXKTccggQ5gmiWxL/cDNDSs7ukpSW4uQDbJAj/sxwfvabWYQa+OXO3t00hWM6nGgFh8N/+k+gJjbDewGACq7gIvo/+nsMDaF8L9y+vXtAyp/R4Rr9dTA3pBa2wgchYus5Ih608bvRZvgggIbwMoCV1xoPHfEEagJB/2pL0gAaor3ogq3bew+1hn1XrrU+gprQCIEtUTE0BFb9EIT7azfU+Sm9NXR+mpA3esPoJIYa2A53uxpxZD5n8LT/PTREqQco0TqIF09J+a7zU4Ja9wZRv3bypQBd52s1TmBGwYBc+dZzOuw4PyVaX20Mor8SWAKkvB3/Ov0XBGAl8Rzlx6z8cEnlMyAG5uklXMYggGsPzFE+/qhXenHUr111jGcHkJffGRKJNYDRnr6gVHmqPk+GUX8HGgLBziWqYK9BCCr/1zoA98trfCShfAZUTv2HCISgNsPdHarPO5aUlB9EJ/sgh8A+TWMQgqJl/a4jG0sqP41/E0mjYuCAQ8iKz0t9/hsIAkFZCyF5OwZBsAFmdQCp6nANxJ/M0zSVqf8zKNCQmAIJhvj1Wfc64Hj4HFZjEAR5QFtfBFGfTl/cGAhtl4qM4+h46fWkDEpD6vL6bE2QMKJAn7V+UXbd9p3d37d6ex/o791WeL9WAVFZRdDwhyMXMcKlzxpUaf3XKbLSWaNEa8ZD7j/AE9lCRuzymJ7utoeNjJje1zFlcyi4VUi4efI14prMrcIKfwW3AjUwQgWOIK66kqgFR8DElrERe6ew6C2zg4iSixqM9QpPjH6mhgRqoA59HkaPz6jP2KDDxLpFww7lxYibK1hkwAwD5j9EJRzxWpu6qU2aSoAvatLnZ9HjjLKDYwShewMvRlVRUNrUM5UgFxZ6XppEnPnE5nbuLfOrTXwWSC4oFUZUhrKqftjJYZkRPgmmQQf2PeXls/y910Z45aOa/7CTw5ISu9iIhvSZjVjVKxs+lXHhXIhLLCnMX6RQJebcFtin9elzVlTK89EywmuwxfWb3LoOdmwmZddK0+eKfGQjshLrPVqcxSa3mYhwNo3TAr4Ffc5DueCJgIkngjC4boPBQK902vsv+lOkhaRnc98eGKLY2wM+CPMFx1rwiK+L9ReYr9gmuqIGfIbLwBGNJdtHXuwc0ZqoAb70eVnwAMIRjUUN8KXPyyCfXeGB8z45A8ro8ydoi8R/5dQwvToS9IAKHEEs0T5WTw3xiPNLzIBvMX2u/PLZ1JDWBvDYofEGOvNPaDUKn+mGCCvvdGs8r/06eBPxwJQ+dwzRpO4OjgneDa1W3p7XihjQhD674AmFsRtqPLR82CyTA0LT52w3NEV3zJMlbNW8VioHrPinTeza8V+1G8r9CIVj5Z50YwMkdl9YeSgqP+FpBTf88+4V8IAKzLOl6HOJ8jylGBS5T/Ht0BjOZnW6VALHxjH3HevPPJRntKAh3r55ldy89eN7pZBd/miRy8tw89YPL2gfjXuTlzSrvV+HwX4BXiw3woMjPHAAAAAASUVORK5CYII="
                                    alt="" class="w-7 mt-3 dark:hidden"
                                />

                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKZSURBVHgBzZmBcdswDEXhTpARNEK7gTaoN6g7QbtBvEG9gbxB2wnsTOBsoGygbPBDHpmLDZGMQH3m8u54tnQUAZIgCIIiBgD8cGVyZfT/pQL3Xe/K3pWv8pE4gfe4ZRIj7putaqOXlXxZUskr73726vWz2PmunntpjVP+D9LsxEg0PeoMlITdufI3ofhUI9jb/FoTtAjrXLkklB9rF5+fMdXWSVoQlR8zyndSSWI2fwubgvKXNcrHtifVJteNFpQ/uXInK0Dw/TezKUwKyh+FgDcX1e4/YeIaHBLKH4REnMVrdsICc+9AVT7K0HTCIjE6FyGCxvbvQwntDX4Kl616PgsTPbdCBvMNcStM0DA+QfBumlUuWeNN6L96NxAXmTbPx81mUxPF5smM0sjoBObu+ZCp9wtvByV7iIH5RkPpBBaaZ6LevVhxHx2ZnUjNbKHulJBt6wRC/H9hdQKG8DnWTXViECuZmfCNm6JHGMNnhAPPmJDtB9XmudwHB6RZnIlARfgM5lkEIfWR4l3bxIrj46foBFaGzygfaTtLWzkXW+wECOEzglPheEaEiHLmJQr1NZ1UgvR6HGs6oW1zzNSjh89Im7I9qxE74ad1yI1AYsTsvnxZu55e2KBh+Iz52uLmlhAWnqYTEmid3cM8+0w9nkYZNyzKThvQ2ecHIYK5O34UJmh/utPtUxzEtQAN5fiIfHjRCQs0yj4XlN8LEzTIPheUpybeXoVpQb2sAMFlpg45R2EDsn/G221oe+WjQFr2GSFDgQ8xmyuhJyVsJxVgfpX7yl5aAsLtC/K3ofyrKCV4dficUX4C8x6hIFzH6ubdMaP8ollkxEJn9VwT/5yv/j+58s3lULlxTgmEXXhA/eL1G9Yhls7y7QuIfii2tUincgAAAABJRU5ErkJggg=="
                                    alt="" class="w-7 mt-3 hidden dark:block"
                                />
                                <h3 class="my-4 font-semibold text-gray-700 dark:text-white">Languages</h3>
                                <p class="text-gray-600 text-sm dark:text-white/80">HTML, CSS, JavaScript React Js, Next Js </p>
                            </li>

                            <li class="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAyCAYAAAAN6MhFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgB5ZpNcts2FMcfSNmZdFP3BGFOUPcGyi7Wpkx6gCi7VuqM1RNEvoE9k6Sd6SLMBWp203imCzMnCHMCMzfQJhMnloG8J1EkxPDjgSJpZfLf2JBAAD/hAXjvgQDfiAR0rPvur30BYl+B2BOgwlf+nz50oM5AF4DCfoL/9jNfRUqpozP/uQctqnXQA/c3F4R1CF8CZhUJoTwp5csz/68IGlZroPfd0VAIQTPogJlaAW4clAEYKCWOLJAzCWIiBDwqqNcocCOgfXey95316RABhlABeOY/DfQPce1ifXvaNvBGoBrgBIt7+T0oX0nrJAuYlQb8c0FbGwHXAuUAKgEeyOsj00EtgXto/opm2MmpUgvYCLRNwKwYwICzj8C8vligDMAZfncCMPeaPhqaAi4F5QJeQu848I9n0KI2Bc4F3SbArOoCr4FuM2BWpsAJ6OCX0aGSYgpbDpinKicFf4ypWFZcONznOXW2GjCrMuAYdDSNK+gKP6ide18DYFYDd/wCj7mh/pkV/wly6u/fFldv6FeCr0RkmQcPxudZSFKyRg/c34/RXTssaKOTmLGuYpOlse8X1RHrD1Q72NsEbBIKivwGthuYGwribptkNER5g9sFzAVcRUq0XoEDmnbQTcxY3L8Z4ErGoGmH3QJXAVZFSrVB8xooUG1gVjAf9/Hq9NldYI7TgnrSt/Ew53sHB4ozb18MHo5fLC2hXAQ4eDh6gmf3BT0L+ZCB3gc9A0wZg7rLxpMOcFB/KHV9l9YIFqNsfaVgWAbMASQTpT5uqZ0H+uc78N4BpnpgqEu43Bdga+VeGPhPyU2cIohXFFHEwEME9q7kpxMb7JllWY+UupogYHm24jQ1fzRH6mtR34YdsqwQGDIGpesErRjqvnC8HiuBe2J3GP+fqzxArYEAwxF3OZZiTygrY1Bs3tEKuQ7/ChgW0GzvJY2UTksDiXfpUMSPwJQ5qNY4Oguvq6rHzoRXAmwUCqIRhNpR0eaMpo1LvA3jPrQGjG0IS3yvpHz7AW55JqEg7p6hZvG4kY3v/PfPs3dVzxmBDtwRXvdpOy7MIzDUpu7iLuxGH+EqKc+l/Al0cy6Q0fGiwHL08v/+3+wZbUo+zb5KjzGbeYllCCqrHIVOhONI9gZlWawNyQgU15a+EVWaS1sS2o8sVOW960JmnpEQTtoZnmc3JjvSCoWuoH4qmLqAiekqsG/QdOdrfRe5grjxTRH2MR5f99igtOPqZXL94IYUOyTJkRS7ggV1n3sUp7JBMzvubAvSoOk6ZTgOBqYr+3md3JiUepv8z3AF+aC66ye+DMe6llr/sStnlJ1hOHDHF1jbSR40uIRtUkUZCLxV+KFsORnM6PosxvHlOQXNnAxCEyI/mW4PcgL0qGrPYPu6GOE/zkmMrVImFFAHbcwwI4cUCjxCqtoxTo5xUo+g5L9zmAd1fWGyEAzw6Y0zekOlX1BtEd7h0TEFhmplASlvdAnzSdkl7GowQJuGotCKdkkZ0YfXcD2jVEr67OLocixL3FFLl66szVovhGz0nhHn1rlBYdSiXqJDf9zZe0Z5ik2agPvQrBZLwTRAz6ox0JVo87gN8z6aqosbF5297HRHLEx+4xVDjexDmT4DS9Ehw7bN52oAAAAASUVORK5CYII="
                                    alt="" class="w-7 mt-3 dark:hidden"
                                />

                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAyCAYAAAAN6MhFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMDSURBVHgB5ZqNldowDMdFJ6ATNJ2gGSEjsEG5CZoN4DZgA9jgukF6E0AnSG4C2ECVL6ZPF/wh5Tvt/z29Bmpb+hFbsXwB+E+0gpGFiBn9k5KtyS6r1eon/EsygGQFPqok28LSRRAbD6ALeEeWwJJk7pINXqtyEcACwALraZySnRYFTMGsbVBlDNDRN5k9MAO8BgJ9cQE6xroDX2cDLAQ8tgnKAu/RPzuGBx4S0OErBtybL+40Bni1QSXQs0YBVgCuYWANAjwnQEds3YHnDOiItR0wffFjCYAuYXyTsrs3zJYI2FQI+N5g7/i/81IAm7JT1gnqu6MlLqiEQn8piLzRAf0q5wyM9ZQ9B+LHZgfJBnsLMxEqSkHfALMGRnkpWARB2YCzApYCsvaFCJR1mLRm1AKyfoUKlHUcFVgAeAz5ag3qGqBvYJSVgu8+BGMVXUF5EOdIQEcJsBCwaHxew1CgNiAuk91aVxSoKObx0XcKA4Jmvl9VAZzatjsJYMM/b7+FAUFz5ujsaSMBRg0gG/uFtTuAEPQT6JWw65urAf09pSLbk32lj09kFcRlxnom+0z9nswYnnZv7PobDCX8mBD2in6+R4WqFLTj/O0LwlhBK/y4RjaglA30YKdnjspSEOv1zfUl0LYdqMNJCiMLHzPvJtC2aLtGE/6B1tEFRhb5NGu5Yl8lkn5aUH4HR4dkemXXooSkBeWDvsF04j9yJunQZer+gulUseskkNBeoY0aSSCDiYT1hkSUFG2Wz0AqR8ad9IQQFVtBI83UTdj1zWa/KcXXafQxpwHNPE6m0m92Hc28GlA+WAXTS3VHxcLHfeoRJ3ivAP31az85A/0vQ+3GAkZ/YRA9VtE4CR2MlUPdYYyfQJijnP733Cg7esy7OLc/ao7hQ7j38k46ZquXHrFeDznZdwhvqs0j6GLNZMmKfX9jfRNrpuTKIL5RP5E9B4rzfoXdj0w0MnfQ1LEJTCmsp3SB/avAFgV6U72/r2sDyshMQWyevdq1WkFdMJipfuprB/YHv62y0lDBHLQAAAAASUVORK5CYII="
                                    alt="" class="w-7 mt-3 hidden dark:block"
                                />
                                <h3 class="my-4 font-semibold text-gray-700 dark:text-white">Education</h3>
                                <p class="text-gray-600 text-sm dark:text-white/80">B.Tech in Computer Science </p>
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
                                <img src="data:image/png;base64,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"
                                    alt="" class="w-5 sm:w-7" />
                            </li>

                            <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src="data:image/png;base64,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"
                                    alt="" class="w-5 sm:w-7" />
                            </li>

                            <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaWSURBVHgB7Zx/aFVlGMef5z1ny11da8PKizNL/WcjXKGFjFnOdE602T9jXLZMdIFQ/4RBGpl3LPojkKh/puKQdDiRQcxKvGTCUINgxiKDoJIFW7NhNX9senfveZ+em0G/TLz3nufc+17fD5ydwbjPzv2+73nO+77P97wAFovFYrFYLBaLxWKxWAwGIYdMrCsrJ/e+FQ7BAiSaqRHUnX723kWr4I4h1IA4wcd3MKG/wO7uXyFHBC746PpwqBSdCCkVYZHr+RLuWOS/U5qO4P/E4+MsHz2wu3s/IhIESKCCX93wUDUR7OFfl0OWZCH4XxAMsv6b8N0PvoGAyKh3ZcK15+Y1ENFX4IPYvoGwFNA9TdteXAMBEYjgl5sqGz2t+vgbupB3UDmQPk7btjwFASAuOK2prOBnYRcClULeQgq0PkyvPv8ACCMu+LUZTiefHoZ8B3Eu6OIoCCMq+KV14SpN1A7GQFvolY1zQRBRwUuUU8vDoGIwh2JApwkEERU8iSh68SIQrgNBhHM4LgbzWAKCiAquEETzoQx0Pwgi28Mpt2s1mcHrLoJIDwsvgWkoHAFBRAXnrnIOTIPoaxBENocTHQfTIDgGgogKHifq5yQeB2PAOCj3LAgiKvjsj0dGecrcDaaA0I27930LgoivpUwqt4NPo5D/DMME7ARhxAWf8+EP4x7pVkplx7yFroJHW4MovQWyHl7+0ciAg2otKz4BeQcmOZU043sHYhAAgVV8ZvUPxxRBHYs+CHkDneF5Tg3uDkbsFIHPBLmmiVzb5CVbauN/XwcZNnoWNU2u4MMp/nkEJt1e3LdvCgIkp1PvwZb3FyY82M6Kr0ZKzoM0xH9i/vmO2/19pGR2+enZVSsu3VP6yDQ4JQ7onxyk2KQuemfHSxu+hxwRuOB711OoZBZEOLVEEKEeMuzhG3vxP9cePkYhDHkRrpil4tfjrX0uf9gkiHTP2CpnPxSyTaKnmaq1649N4t+CzzlJ1Qoordic3gbJwU0XV2Lh2SR6WqhBOyBikwh/Rg1cpE47NjfZUuXR6fCnVFg2iQMRavQU9PH95LtNInwi0YhEfdzdM4uNUM6NdZwbrTBsEke3UIUD0MWC+G6TqPycKtB1uiDb2JzrUdPhB2Nkvk1iegrEbBLaz9hcnVJKR0EY0YfmwRaq4iYdAoHK/Wubp6s5Qw1xIvYvNtF0/IZa8MuzKLb2I9vDHagFIZsE61zrq9h/Bp0RAnNtElwdFLt4jSQSW2sy1yahEcRsEjxdkYptrk2CHxCSNgmh2AbbJFDQJoFSD3w02CbBKUXQJkEysQnMtUnwxYvZJIhQJDbfNubaJBwEMZsEL/KJxPYQzbVJeEXQD0I2CYXK/9gEceWAuTaJFw7iKN+iIjaJkWdSs0HyNzZS91g9mm2TIBc6uOeITJU9T/lmweAqxPC1pDLfJrHxEI4nEVr5G/leWfl5DY5r7XFsyio2f/gqkLf1SiMWhk1icy8OOApEbBIXG4oGyFFrWfSMYnNbJVns5rHVRYVlk2g9jDEWPFWl990mMbYSY9pRdTffLE4D0mfoHlUTlNgpcmCTIDwUgXZCaMObDeBbETk1OA+f9NoRVRuLXwe3KCJz8tGYskl4+gjFnd6xJrx7bBIte88uTHg3titwVisP50Eau0kcffnp21575Qmq4GjLuLS3iDUu49CTvFx8YcqFgcvL8TfIEcELPhgNhZQTQYURIp3xbhJTj+808HUWgEDffS/+8u1qB7w93MzLbw4sjNQsKwITfOZQZwNp7xOJyr1JBDJKmXmus5HXPPvudrFTyAt+PlqhFXTx2nge7yYRHOKChxJuJ5qwm0RAiAo+61xnFY98DdpNQh7ZzQ1cOZuEqci+p+mBebtJCCMqOAnaJEzFZJuEkUiPUkSmkjxJTYChCFftZawMvPoiamWQRFZwlLFJkJa1MkginVJErAwIWtTKIInsKOW66md1/LUycLykWyRqZZBEVPDrtW+M8tjQXysDx5te/LqolUES8bUUpZId5N9uEsNuUVLcyiCJ/FaoNdFxSlArZLmbRMrKgFpvvfJoNGebrftBIOvhN558c8BDnYWVAZJK6+bJJbsCq65LEZhNIv7YrphS6dskeAh4xit2agpB7BTBFxWJMDT0VjuniDYEqrtVEZlYZq6ynwJFR8p+9HrHmqKBWhkkyW0Vl6tBoYSzjBQuQo/K+DyJii4UlbkDl+fvyJmVwWKxWCwWi8VisVgsFovlf/gdcRgtJNfn99MAAAAASUVORK5CYII="
                                    alt="" class="w-5 sm:w-7" />
                            </li>

                            <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src="data:image/png;base64,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"
                                    alt="" class="w-5 sm:w-7" />
                            </li>
                        </ul>
                    </div>
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
