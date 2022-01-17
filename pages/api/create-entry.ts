import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'

var formidable = require('formidable');
var fs = require('fs');

const filter = new Filter()


const handler: NextApiHandler = async (req, res) => {
  const { title, content, file, date } = req.body
  try {
    if (!title || !content || !file || !date) {
      return res
        .status(400)
        .json({ message: '`all`  are both required' })
    }

    const results = await query(
      `
      INSERT INTO entries (title, content, date, src)
      VALUES (?, ?, ?, ?)
      `,
      [filter.clean(title), filter.clean(content), date , file]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
