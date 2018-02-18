module.exports = {
    apps: [{
        name: "iteck",
        script: "./app.js",
        watch: false,
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        },
        instances: "max",
        exec_mode: "cluster"
    }]
}