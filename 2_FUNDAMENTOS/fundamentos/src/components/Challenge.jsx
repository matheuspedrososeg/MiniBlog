const Challenge = () =>{
    const a = 1;
    const b = 2;
    function sum(){
        return console.log(a + b);
    }


    return (
        <div>
            <div className="numbers">
                <p>{a}</p>
                <p>{b}</p>
            </div>
            <button onClick={sum}>Somar</button>
        </div>
    )
};

export default Challenge;

