async function handlePost(event){
    event.preventDefault();

    try {
        const titleInput = document.getElementById("title_post").value;
        const formData = {
            title: titleInput
        }
        const response = await fetch("http://localhost:3000/v1/painel/post/1",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });
        console.log(`O post foi criado com sucesso!`);
    } catch (error) {
        console.log(`Não foi possível criar o post. ${error}`);
    }
}

