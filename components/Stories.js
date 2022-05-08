import faker from 'faker'
import { useEffect, useState } from 'react'
import Story from '../components/Story'
import { useSession } from 'next-auth/react'

export default function Stories() {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      image: 'https://i.pravatar.cc/' + 300 + i,
      id: i,
    }))

    setSuggestions(suggestions)
    console.log(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.image}
          username={profile.username}
        />
      ))}
    </div>
  )
}
