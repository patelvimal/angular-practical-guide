const proxyConfig: any = [
    {
        context: ['/api/v1', '/api/v2'],
        target: 'https://example.com',
        secure: true,
        changeOrigin: true
    },
    {
        context: ['**'], // Rest of other API call
        target: 'http://somethingelse.com',
        secure: false,
        changeOrigin: true
    }
];

module.exports = proxyConfig;
