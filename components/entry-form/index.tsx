import { useState } from 'react'
import Router from 'next/router'

import Button from '@/components/button'

export default function EntryForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [file, setFile] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('/api/create-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          date,
          file,
        }),
      })
      setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="title">
          <h3 className="font-bold">Title</h3>
        </label>
        <input
          id="title"
          className="border rounded w-full pl-2 p-1"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="date">
          <h3 className="font-bold">Date</h3>
        </label>
        <input
          id="date"
          className="border rounded w-full pl-2 p-1"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="file">
          <h3 className="font-bold">File</h3>
        </label>
        <input
          id="file"
          className="border rounded w-full pl-2 p-1"
          type="file"
          accept="image/*,.pdf"
          name="file"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="content">
          <h3 className="font-bold">Description</h3>
        </label>
        <textarea
          className="border resize-none focus:shadow-outline w-full h-32 pl-2 p-1"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Button disabled={submitting} type="submit">
        {submitting ? 'Creating ...' : 'Create'}
      </Button>
    </form>
  )
}
