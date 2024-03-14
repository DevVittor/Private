async function handleKeyStripe(event){
    event.preventDefault();
    const KeyStripe = document.getElementById("input_stripe").value;

    const formData = {
        codigoStripe:KeyStripe
    }

    try {
        
        const response = await fetch("http://localhost:3000/v1/stripe",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        });

        if(response.ok){
            console.log(`Tudo foi enviado`);
        }else{
            console.log(`Não deu para adicionar o stripe key`)
        }

    } catch (error) {
        console.log(`Não foi possível pegar os dados no stripe key`)
    }

}