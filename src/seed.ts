import { dataSource } from './db/config'

import { Unit } from './db/entities/unit'

dataSource.initialize().then(async () => {
    console.log('Seeding DB...')

    const units = [
        {
          name: 'Conselho Superior da Polícia Civil',
          localization: 'Goiânia'
        },
        {
          name: 'Delegacia-Geral Adjunta',
          localization: 'Goiânia'
        },
        {
          name: 'Superintendência de Polícia Judiciária',
          localization: 'Goiânia'
        },
        {
          name: 'Gerência de Gestão e Finanças',
          localization: 'Goiânia'
        },
        {
          name: 'Gerência de Operações de Inteligência da Polícia Civil',
          localization: 'Goiânia'
        },
        {
          name: 'Escola Superior da Polícia Civil',
          localization: 'Goiânia'
        },
        {
          name: 'Gerência de Correições e Disciplina da Polícia Civil',
          localization: 'Goiânia'
        },
        {
          name: 'Gerência de Identificação',
          localization: 'Goiânia'
        },
        {
          name: 'Assessoria Contábil ',
          localization: 'Goiânia'
        }
    ]

    try {
        const unitRepository = dataSource.getRepository(Unit)

        for(let unit of units) {
            const entity = unitRepository.create(unit)
            await unitRepository.save(entity)
        }

        console.log('Database has been seeded!')
    } catch(e) {
        console.log('Failed to complete seeding!')
        console.log(e)
    }
})