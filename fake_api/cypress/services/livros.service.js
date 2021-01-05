import Rest from './_rest.service'
import factory from '../fixtures/factory'
let fakerBody = new factory;
let url = 'Books'
export default class Livros extends Rest {
    
    static get_all_books(){
        
        return super.get(`${url}`);
    }

    static post_book(body){
        
        return super.post(url, body);
    }

    static post_book_faker(){
        
        return super.post(url, fakerBody.getRandomData());
    }

    static delete_by_id(id){
        
        return super.delete(`${url}/${id}`);
    }
}