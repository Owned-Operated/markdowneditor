import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Top() {

	const router = useRouter()
	const [theme, setTheme] = useState('system')

	const getSystemTheme = () => {
	    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	        return 'dark'
	    }
	    return 'light'
	}
	
	useEffect(() => {
	    const storedTheme = localStorage.getItem('theme')
	    if (storedTheme) {
	        setTheme(storedTheme)
	    } else {
	        setTheme(getSystemTheme())
	    }
	}, [])
	
	useEffect(() => {
	    if (theme === 'dark') {
	        document.body.classList.add('dark')
	    } else {
	        document.body.classList.remove('dark')
	    }
	}, [theme])
	
	const toggleTheme = () => {
	    if (theme === 'light' || theme === 'system') {
	        setTheme('dark')
	        localStorage.setItem('theme', 'dark')
	        document.body.classList.add('dark')
	    } else {
	        setTheme('light')
	        localStorage.setItem('theme', 'light')
	        document.body.classList.remove('dark')
	    }
	}
	
	return (
		<>
		<div>
		  	<nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 font-bold font-system">
				<div className="mx-auto w-full px-6 md:px-9">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center w-full">
							<Link href="/" className="flex-shrink-0 normal-case" onClick={(e) => {e.preventDefault();window.location.href = '/';}}>
								<div className="flex">
									<span className="flex">
										<svg className="logo text-slate-800 italic dark:text-slate-200 max-w-none mr-3 mt-1" fill="none" height="46" width="46" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
											<path 
											 	fill="currentColor"
											 	stroke="currentColor" 
				            					d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"
												className="stroke-current"
											/>
										</svg>
									</span>
									<h1 className="logo hidden lg:block flex py-4 text-lg leading-5 font-semibold mr-12 font-['MonoLisa'] dark:text-slate-300">Markdown Editor</h1>
								</div>
							</Link>
						</div>
						<div>
							<div className="ml-4 flex items-center md:ml-6 whitespace-nowrap">
								<Link href="https://github.com/Owned-Operated/markdowneditor" className="text-slate-400 mr-4">
									<svg enable-background="new 0 0 32 32" height="24px" viewBox="0 0 32 32" width="24px">
										<path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" className="fill-current" fill-rule="evenodd"/><g/><g/><g/><g/><g/><g/>
									</svg>
								</Link>
								<button onClick={toggleTheme} className="focus:outline-none">
									{theme === 'light' ? (
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-400">
										    <circle cx="12" cy="12" r="5" className="fill-current"/>
										    <path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" className="fill-current"/>
										    <path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" className="fill-current"/>
										    <path d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z" className="fill-current"/>
										    <path d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z" className="fill-current"/>
										    <path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" className="fill-current"/>
										    <path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" className="fill-current"/>
										    <path d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z" className="fill-current"/>
										    <path d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z" className="fill-current"/>
										</svg>
									) : (
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-400">
											<path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" className="fill-current"/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
		</>
	)
}