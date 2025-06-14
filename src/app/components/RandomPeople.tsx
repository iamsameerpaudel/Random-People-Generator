import { useEffect, useState } from 'react'
import { PersonDetailsDialogue } from './PersonDetailsDialogue'
import axios from 'axios'
import { type person } from './personType'
import SkeletonUI from './SkeletonUI'
const RandomPeople = () => {
    const [people, setPeople] = useState<person[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchPeople = async () => {
            try {

                const response = await axios.get<{ results: person[] }>('https://randomuser.me/api/?results=8')
                const data = response.data
                setPeople(data.results)
            } catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchPeople()
    }
        , [])
    if (isLoading) return <SkeletonUI />
    return (
        <div className='grid grid-cols-1 p-5 xs:grid-cols-2 sm:grid-cols-3 2md:grid-cols-4 gap-5'>
            {
                people.map(person => (
                    <PersonDetailsDialogue key={person.login.uuid} person={person} />
                ))
            }
        </div>
    )
}

export default RandomPeople