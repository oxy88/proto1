const helloSubscription = {
    subscribe: async (parent, args, ctx, info) => {
        return ctx.db.subscription.user(
            {
                where: {
                    mutation_in: ['CREATED', 'UPDATED']
                }
            },
            info
        )
    }
}

export default helloSubscription