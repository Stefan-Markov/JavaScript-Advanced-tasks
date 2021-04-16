function dataClass(input) {

    class Request {
        constructor(method, uri, version, message) {
            this.method = String(method);
            this.uri = String(uri);
            this.version = String(version);
            this.message = String(message);
            this.response = undefined;
            this.fulfilled = false;
        }
    }
}


dataClass(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);

