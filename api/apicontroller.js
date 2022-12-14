const addClient =  async(req,res) =>{

    try {
        const { nombre, apellidos, edad, email} = req.body;

        if(nombre === undefined ||apellidos === undefined ||edad === undefined ||email === undefined){
                res.status(400).json({message:"Bad Request. Please fill all fields."});
        }else{
                res.status(200).json({message:"Campos no Vacios, necesario implementar inserccion"})
        }
    } catch (error) {
        res.status(500);
        res.send(error.message)    
    } 
};

export default addClient;