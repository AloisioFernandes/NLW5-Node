import { 
  Entity, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  PrimaryColumn 
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('settings') // nome da tabela criada pela migration no sqlite
class Setting {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() { // método chamado toda vez que new Setting é executado
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export { Setting }