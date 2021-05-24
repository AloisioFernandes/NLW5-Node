import { Router } from 'express'
import { getCustomRepository } from 'typeorm'

import { SettingsRepository } from './repositories/SettingsRepository'

const routes = Router()

routes.post('/settings', async (request, response) => {
  const { chat, username } = request.body

  const settingsRepository = getCustomRepository(SettingsRepository)

  const settings = settingsRepository.create({ // create executa new setting()
    chat,
    username
  })

  await settingsRepository.save(settings)

  return response.json(settings)
})

export { routes }