    async function handleInfo(event){
        event.preventDefault();
        const emailInput = document.getElementById("input_email").value;
        const passwordInput = document.getElementById("input_password").value;
        console.log("Email:",emailInput,"Password:",passwordInput);

        const formData = {
            email:emailInput,
            password:passwordInput
        }

        try {
            const response = await fetch("http://localhost:3000/v1/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData)
            });
            const responseData = await response.json();
            const token = responseData.token;
            localStorage.setItem("token",token);
        } catch (error) {
            console.error("Ocorreu um erro ao processar a solicitação:", error);    
        }

    }