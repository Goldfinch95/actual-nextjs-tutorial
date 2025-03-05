
import { InfoCard } from "anjrot-components";
import { bebas } from "../ui/fonts";
import { fetchCardData } from "../helpers/data";


const Dashboard = async () => {
  {/*const {
    
    numberOfCustomers,
    
  } = await fetchCardData();
  console.log("count costumers: ", numberOfCustomers)*/}
  return (
    <main>
      <h1 className={`${bebas.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
       {/*< InfoCard title="cualquiera" value={34455} type="pending" />
       < InfoCard title="cualquiera" value={34455} type="pending" />
       < InfoCard title="cualquiera" value={34455} type="pending" />
       < InfoCard title="cualquiera" value={34455} type="pending" />*/}
      </div>
    </main>
  );
};

export default Dashboard;
