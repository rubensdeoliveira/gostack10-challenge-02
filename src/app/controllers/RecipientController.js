import * as Yup from 'yup'
import Recipient from '../models/Recipient'

class RecipientController {
  async store(req, res) {
    const {
      id,
      name,
      street,
      neighborhood,
      number,
      cep,
      city,
      state,
      complement,
    } = await Recipient.create(req.body)

    return res.json({
      id,
      name,
      street,
      neighborhood,
      number,
      cep,
      city,
      state,
      complement,
    })
  }

  async update(req, res) {
    const recipient = await Recipient.findByPk(req.params.id)

    if (!recipient) {
      return res.status(400).json({ error: 'Destinatário não encontrado' })
    }

    const {
      name,
      street,
      neighborhood,
      number,
      cep,
      city,
      state,
      complement,
    } = await recipient.update(req.body)

    return res.json({
      name,
      street,
      neighborhood,
      number,
      cep,
      city,
      state,
      complement,
    })
  }
}

export default new RecipientController()
