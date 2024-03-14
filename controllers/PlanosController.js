import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
import Plano from "../models/Planos.js";

class Planos{

    async index(req,res){
        res.render("Planos");
    }
    
    async store(req,res){
        

        const {nome,descricao,valor,moeda,frequencia,idProduto} = req.body;

        try {
            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
            const produto = await stripe.products.create({
                name: nome, // Nome do produto
                description: descricao // Descrição do produto
            });

            const plano = await stripe.plans.create({
                amount:valor,
                currency:moeda,
                interval:frequencia,
                product: produto.id,
                nickname:nome
            });
            const createPlan = await Plano.create({
                planId:plano.id,
                nome,
                frequencia,
                valor
            })
            await createPlan.save()
            res.status(201).json({msg:`O plano foi criado com sucesso! ${plano.id}`});
        } catch (error) {
            res.status(404).json({msg:`Não foi possível encontrar na para usar no Plano Controller. ${error}`});
        }

    }
    
    async put(req,res){
        //
    }

    async delete(req,res){
        const {nome} = req.body;

        try {
            const checkExistProduct = await Plano.findOne({
                where:{
                    nome:nome
                }
            });
    
            if(!checkExistProduct) return res.status(404).json({msg:`Esse produto ${nome} nem existe!`});
    
            await Plano.destroy({
                where:{
                    nome:nome
                }
            });
    
            const produtoDelete = await Plano.findOne({
                where:{
                    nome:nome
                }
            });
            if(produtoDelete) res.status(301).json({msg:`O produto não foi deletado`});
    
            res.status(200).json({msg:`O produto foi deletado com sucesso!`});
        } catch (error) {
            res.status(404).json({msg:`Não foi possível pegar os dados necessários! ${error}`})
        }

    }

}

export default Planos;