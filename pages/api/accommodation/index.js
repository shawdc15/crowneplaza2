import dbConnect from '../../../utils/dbConnect'
import Accomodation from '../../../models/Accomodation'

dbConnect()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const accomodation = await Accomodation.find()
        res.status(200).json({
          success: true,
          data: accomodation,
        })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'POST':
      try {
        const accomodation = await Accomodation.create(req.body)
        res.status(201).json({ success: true, data: accomodation })
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
