import { EntityRepository, Repository } from "typeorm";

import { Setting } from "../entities/Setting";

@EntityRepository(Setting) // faz todas as manipulações de entidade no banco de dados
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository }