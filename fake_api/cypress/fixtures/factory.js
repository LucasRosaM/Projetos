var faker = require('faker');
export default class factory {
        
    getRandomData(){

        const dados = {
            title: faker.name.title(),
            description: faker.lorem.paragraph(),
            pageCount: faker.random.number(),
            publishDate: faker.date.past()
        }

        return dados;

    }
     
}
