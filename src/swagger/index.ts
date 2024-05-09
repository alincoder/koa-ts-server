import swaggerJSDoc from 'swagger-jsdoc'

const options = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'api document',
            version: '1.0.0',
            descripttion: 'server api document'
        },
        servers: [{
            url: '',
            description: 'API server'
        }],
    },
    apis: ['./src/router/*.ts']
}

export const swaggerSpec = swaggerJSDoc(options)
