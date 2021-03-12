const networkSettings = require('../../src/config/networkSettings');
const network = require('../../src/config/network');

test('read default settings', () => {
    const settings = networkSettings.getDefault(network.network.mainnet);
    expect(settings.threads).toBe(0);
    expect(settings.protocolMaximum).toBe(70015);
    expect(settings.protocolMinimum).toBe(31402);
    expect(settings.services).toBe(1);
    expect(settings.invalidServices).toBe(0);
    expect(settings.relayTransactions).toBe(true);
    expect(settings.validateChecksum).toBe(false);
    expect(settings.identifier).toBe(3908297187);
    expect(settings.inboundPort).toBe(8333);
    expect(settings.inboundConnections).toBe(0);
    expect(settings.outboundConnections).toBe(8);
    expect(settings.manualAttemptLimit).toBe(0);
    expect(settings.connectBatchSize).toBe(5);
    expect(settings.connectTimeoutSeconds).toBe(5);
    expect(settings.channelHandshakeSeconds).toBe(6000);
    expect(settings.channelHeartbeatMinutes).toBe(5);
    expect(settings.channelInactivityMinutes).toBe(10);
    expect(settings.channelExpirationMinutes).toBe(60);
    expect(settings.channelGerminationSeconds).toBe(30);
    expect(settings.hostPoolCapacity).toBe(1000);
    expect(settings.hostsFile).toBe('hosts.cache');
    // expect(settings.self.ip).toBe('0.0.0.0');
    expect(settings.self.port).toBe(0);
    expect(settings.blacklist.length).toBe(0);
    expect(settings.peers.length).toBe(0);
    expect(settings.seeds.length).toBe(6);
    expect(settings.seeds[0].scheme).toBe('');
    expect(settings.seeds[0].host).toBe('seed.flowee.cash');
    expect(settings.seeds[0].port).toBe(8333);
    expect(settings.debugFile).toBe('debug.log');
    expect(settings.errorFile).toBe('error.log');
    expect(settings.archiveDirectory).toBe('archive');
    expect(settings.rotationSize).toBe(0);
    expect(settings.minimumFreeSpace).toBe(0);
    expect(settings.maximumArchiveSize).toBe(0);
    expect(settings.maximumArchiveFiles).toBe(0);
    // expect(settings.statisticsServer.ip).toBe('0.0.0.0');
    expect(settings.statisticsServer.port).toBe(0);
    expect(settings.verbose).toBe(false);
    expect(settings.useIpv6).toBe(true);
    expect(settings.userAgentBlacklist.length).toBe(1);
    expect(settings.userAgentBlacklist[0]).toBe('/Bitcoin SV:');
});
