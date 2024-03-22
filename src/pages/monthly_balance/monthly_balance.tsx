import { useIncomeData } from "../../hooks/useIncomeData";

const MonthlyBalance = () => {
    const {data} = useIncomeData();

    return (
        <div className="container">
            <h2>Balanço Mensal</h2>
            {data?.map(incomeData => 
                <p>{incomeData.name}</p>    
            )}
        </div>
    );
}

export default MonthlyBalance;