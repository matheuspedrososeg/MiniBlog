import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const name = "Gustavo";
    const data = {
        age: 21,
        job: "Programmer",
    };

    return (
        <div>
            <h3>Olá {name}, tudo bem? </h3>
            <p>Você atua como: {data.job}</p>
            <p>{4+4}</p>
        </div>
    );
};

export default TemplateExpressions;