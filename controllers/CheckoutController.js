router.get('/contoh_api', (req, res) => {
    var options = {
        method: 'POST',
        url: 'https://api.rajaongkir.com/starter/cost',
        headers: { key: 'your-api-key', 'content-type': 'application/x-www-form-urlencoded' },
        form: { origin: '501', destination: '114', weight: 1700, courier: 'jne', key: '7d117e0fbc6d0dc9d61c119046e85af6' }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
})
