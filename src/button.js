const Button = {
    button: '<button id="myBtn">++Press me++</button>',
    attachEl: () => {
        document.getElementById('myBtn').addEventListener('click',
            () => {
                // debugger;
                console.log("click ----");
            }
        )
    }
}

export default Button;