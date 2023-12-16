'use client'

import { useState } from 'react'

import { topics } from './constants/topics'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import AudioPlayer from './components/AudioPlayer'

import { FiGithub } from 'react-icons/fi'

const HomePage = () => {
    // const [topicOptions, setTopicOptions] = useState(topics.python.beginner)

    // const router = useRouter()

    const [language, setLanguage] = useState('javascript')
    const [difficulty, setDifficulty] = useState('Beginner')
    const [topic, setTopic] = useState('Random')
    const [numQuestions, setNumQuestions] = useState('5')

    const handleSetQuestions = (e) => {}

    const handleLanguageSelect = (e) => {
        setLanguage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(language, difficulty, topic)

        // router.push('/quiz')
    }

    // bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent

    return (
        <div className='min-h-screen grid place-items-center'>
            <div className='border rounded border-white/0 '>
                <h1 className='text-center text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-500 via-pink-400 to-blue-500 bg-clip-text text-transparent q-animate-gradient'>
                    Avidia Quiz AI
                </h1>
            </div>

            <a
                className='fixed bottom-0 flex items-center gap-2 pb-2 font-mono text-sm text-white/70 transition hover:text-emerald-300 sm:m-0'
                href='https://avidia.in'
                target='_blank'
            >
                {/* <FiGithub size={16} className='translate-y-[0px]' /> */}
                Powered by Avidia | Noobsverse
            </a>
        </div>
    )
}
export default HomePage
