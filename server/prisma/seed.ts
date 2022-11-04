import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Nick Felix',
            email: 'felixnicolas045@gmail.com',
            avatarUrl: 'http://github.com/n4co.png',
        },
    });

    const pool = await prisma.pool.create({
        data: {
            title: 'Example Pool First Game',
            code: 'Bol123',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id,
                },
            },
        },
    });

    await prisma.game.create({
        data: {
            date: '2022-11-04T01:40:53.201Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR',
        },
    });

    await prisma.game.create({
        data: {
            date: '2022-11-05T01:40:53.201Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',

            guesses: {
                create: {
                    firstTeamPoints: 2,
                    secondTeamPoints: 1,

                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id,
                            },
                        },
                    },
                },
            },
        },
    });
}

main();
