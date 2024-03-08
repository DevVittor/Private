async function handleData(event){
    event.preventDefault();
    const emailData = document.getElementById("email_input").value;
    const passwordData = document.getElementById("password_input").value;

    const formData = {
        email: emailData,
        password: passwordData
    }

    try {
        const response = await fetch("http://localhost:3000/v1/register/save",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        });
        console.log(`Tudo OK por aqui!`);
    } catch (error) {
        console.log(`Não foi possível registrar por causa do error: ${error}`);
    }

}