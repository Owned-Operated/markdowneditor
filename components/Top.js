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
				<div className="mx-auto w-full px-6 lg:px-6">
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
						<div className="hidden md:block">
							<div className="ml-4 flex items-center md:ml-6 whitespace-nowrap">
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