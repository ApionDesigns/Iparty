import Skeleton from 'react-loading-skeleton'
import Footer from '@/components/h-footer'

import Nav from '@/components/nav'
import Container from '@/components/container'
import Entries from '@/components/entries'

import { useEntries } from '@/lib/swr-hooks'

export default function NewEntryPage() {
  const { entries, isLoading } = useEntries()

  if (isLoading) {
    return (
      <div>
        <Nav />
        <Container className="mt-12">
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <Container className="mt-12 mb-16 bg-gray-100 h-full">
        <Entries entries={entries} />
      </Container>
      <Footer />
    </div>
  )
}
