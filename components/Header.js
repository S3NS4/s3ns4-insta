import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { open } from '../store/features/modalState'

function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/*Left*/}
        <div
          onClick={() => router.push('/')}
          className="relative hidden w-24 cursor-pointer lg:inline-grid"
        >
          <Image
            layout="fill"
            src="https://links.papareact.com/ocw"
            alt="logo img"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push('/')}
          className="relative w-10 flex-shrink cursor-pointer lg:hidden"
        >
          <Image
            layout="fill"
            src="https://links.papareact.com/jjm"
            alt="logo img"
            objectFit="contain"
          />
        </div>

        {/*Middle*/}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5  text-gray-500 " />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full rounded-md border-gray-400 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
        </div>

        {/*Right*/}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          <MenuIcon className="h-6 w-6 cursor-pointer md:hidden" />

          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-sm text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => dispatch(open())}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                src={session.user.image}
                alt=""
                className="h-10 w-10 cursor-pointer rounded-full"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
