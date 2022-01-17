import Link from 'next/link'
import Container from '@/components/container'

export default function Nav({ title = 'Entries' }) {
  return (
    <Container className="block fixed inset-x-0 top-0 z-10 py-2 border-b bg-white">
      <nav className="flex justify-center">
        <a href="/" className="flex gap-2 font-bold text-2xl italic">Iparty</a>
      </nav>
    </Container>
  )
}
//<ButtonLink href="/new" className='bg-blue-500'>New</ButtonLink>
//<img src="https://iparty-jm.online/img/i-party.png" width="30" height="30"></img>
