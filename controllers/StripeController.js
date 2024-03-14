import fs from "node:fs";
import dotenv from "dotenv";
dotenv.config();
class Stripe{

    async store(req,res){

        const { codigoStripe } = req.body;
        let envFileContent = fs.readFileSync('.env', 'utf8');

        // Atualizar apenas o valor da variável STRIPE
        envFileContent = envFileContent.replace(/^STRIPE=.*/m, `STRIPE=${codigoStripe}`);
    
        // Salvar o conteúdo de volta no arquivo .env
        fs.writeFileSync('.env', envFileContent); 
        res.json({msg:'Código do Stripe armazenado com sucesso!'});

    }

}

export default Stripe;