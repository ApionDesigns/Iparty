import Link from 'next/link'
import Container from '@/components/container'

export default function Nav({ title = 'Entries' }) {
  return (
    <Container className="block fixed inset-x-0 top-0 z-10 py-2 border-b bg-white">
      <nav className="flex items-center gap-4 justify-between">
        <a href="/" className="flex gap-2 font-bold text-2xl italic">Iparty</a>
        <div className="flex items-center divide-x divide-gray-400">
          <Link href={`/profile/`}>
            <a className="pr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </a>
          </Link>
        </div>
      </nav>
    </Container>
  )
}
//<ButtonLink href="/new" className='bg-blue-500'>New</ButtonLink>
//<img src="https://iparty-jm.online/img/i-party.png" width="30" height="30"></img>
