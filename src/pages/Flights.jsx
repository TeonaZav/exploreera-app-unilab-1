import PageContentWrapper from "../components/UI/PageContentWrapper";
import PageNavContent from "../components/UI/PageNavContent";
import FlightList from "../components/flights/FlightList";
import FilterForm from "../components/forms/FilterForm";
import FilterSideBar from "../components/forms/FilterSideBar";
import { FlightsProvider } from "../context/FlightContext";
import Layout from "./../components/UI/Layout";

const Flights = () => {
  return (
    <Layout>
      <FlightsProvider>
        <PageContentWrapper
          navigationContent={<PageNavContent />}
          filterContent={<FilterForm />}
          mainContent={<FlightList />}
          sidebarContent={<FilterSideBar />}
        />
      </FlightsProvider>
    </Layout>
  );
};
export default Flights;
