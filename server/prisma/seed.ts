import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '653add2b-5e8c-4167-8be1-f6b4ed62712f',
            title: 'Unite Summit2',
            slug: 'unite-summit2',
            details: 'Im evento p/ apaixonados(as) por código',
            maximumAttendees: 120,
        }
    })

}


seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})