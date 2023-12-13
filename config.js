module.exports = {
    app: {
        token: 'MTE3ODA0MTk4NzMwNDI2MzcyMQ.GtSBsC.rqC5ltveTezRLVkoYd2j0cgMO93OootIVbCHQQ',
        playing: 'by Brahmi',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 200,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: false,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
