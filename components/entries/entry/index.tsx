import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'

import ButtonLink from '@/components/button-link'
import Button from '@/components/button'

function Entry({ id, title, content }) {
  const [deleting, setDeleting] = useState(false)

  async function deleteEntry() {
    setDeleting(true)
    let res = await fetch(`/api/delete-entry?id=${id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-entries')
    setDeleting(false)
  }
  return (
    <div>
      <div className="flex justify-between items-center w-full p-2">
        <Link href={`/entry/${id}`}>
          <a className="font-bold py-2">{title}</a>
        </Link>
        <div className="flex ml-4">
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            </button>
        </div>
      </div>
      <p>{content}</p>
    </div>
  )
}

export default Entry

//<Button disabled={deleting} onClick={deleteEntry} className="h-5 py-0 mx-1"> {deleting ? 'Deleting ...' : 'Delete'} </Button>
/*<ButtonLink
            href={`/entry/edit/${id}?title=${title}&content=${content}`}
            className="h-5 py-0 mx-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </ButtonLink>*/
