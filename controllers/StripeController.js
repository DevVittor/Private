import fs from "node:fs";
import dotenv from "dotenv";
dotenv.config();

class Stripe{

    async index(req,res){

        const stripeKey = process.env.STRIPE_SECRET_KEY;
        // Renderiza a página de planos e passa a chave secreta do Stripe como uma variável
        res.render("Stripe", { stripeKey });

    }

    async store(req,res){

        const { codigoStripe } = req.body;


        let envFileContent = fs.readFileSync('.env', 'utf8');

        // Atualizar apenas o valor da variável STRIPE
        envFileContent = envFileContent.replace(/^STRIPE_SECRET_KEY=.*/m, `STRIPE_SECRET_KEY=${codigoStripe}`);
    
        // Salvar o conteúdo de volta no arquivo .env
        fs.writeFileSync('.env', envFileContent); 
        res.json({msg:'Código do Stripe armazenado com sucesso!'});

    }

}

export default Stripe;