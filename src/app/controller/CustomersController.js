let customers = [
    { id: 1, name: "Renan Simas", idade: 20, info: ""},
    {id: 2, name: "Alexandre Fernandes", idade: "22", info: ""},
    {id: 3, name: "Camila Soares", idade: "22", info:""},
    {id: 4, name: "Guilherme Damasceno", idade:"23", info: ""}
];

class CustomersControllers {

    //LISTAGEM DOS REGISTROS
    index(req, res){
        return res.json(customers);
    }

    //RECUPERA UM REGISTRO
    show(req, res){
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customers ? 200 : 404;
    
        return res.status(status).json(customer);
    }

    //CRIA UM REGISTRO
    create(req, res){
        const { name, idade, info } = req.body;
    const id = customers[customers.length -1].id + 1;

    const newCustomer = { id, name, idade, info};
    customers.push(newCustomer);
    
    return res.status(201).json(newCustomer);
    }

    //ATUALIZA UM REGISTRO
    update(req, res){
        const id = parseInt(req.params.id);
        const { name, idade, info } = req.body;

        const index = customers.findIndex(item => item.id ===id);
        const status = index >= 0 ? 200 : 404;

        if(index >= 0) {
        customers[index] = { id: parseInt(id), name, idade, info };
    }

        return res.status(status).json(customers[index]);
    }

    //DELETA UM REGISTRO
    destroy(req, res){
        const id = parseInt(req.params.id);
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;
        if( index > 0 ){
        customers.splice(index, 1);
    };

    return res.status(status).json(); 
    }    
}
export default new CustomersControllers();