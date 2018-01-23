import { getUserId } from '../../utils'

const createPubgProfile = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { mode, server } = args
    return await ctx.db.mutation.createProfile({
        data: {
            category: "GAME",
            gameProfile: {
                create: {
                    gameCategory: "PUBG",
                    pubg: {
                        create: {
                            mode: mode,
                            server: server
                        }
                    }
                }
            },
            user: {
                connect: {
                    id: userId
                }
            },
        }
    })
}

export default createPubgProfile