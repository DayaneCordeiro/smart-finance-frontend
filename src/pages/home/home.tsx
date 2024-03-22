import "./home.css";
import { Card } from '../../components/card/card';

const Home = () => {
    return (
        <div>
            <div className="header">
                <img src="https://r2.easyimg.io/mi6m62nw7/s_(1).png"></img>
            </div>
            
            <div className="card-grid">
                <Card 
                route={"/monthly-balance"}
                title={"Balanço Mensal"} 
                image={"https://files.sunoresearch.com.br/p/uploads/2022/11/9-1.png"}
                />
                <Card 
                route={"/yearly-balance"}
                title={"Balanço Anual"} 
                image={"https://files.sunoresearch.com.br/p/uploads/2022/11/4-2.png"}
                />
                <Card 
                route={"/monthly-balance"}
                title={"Dívidas Parceladas"} 
                image={"https://files.sunoresearch.com.br/p/uploads/2022/11/3-1.png"}
                />
            </div>
        </div>
    );
}
export default Home;