import PageContentWrapper from "../components/UI/PageContentWrapper";
import PageNavContent from "../components/UI/PageNavContent";
import StaysList from "../components/stays/StaysList";
import FilterFormStays from "../components/forms/FilterFormStays";
import FilterSideBar from "../components/forms/FilterSideBar";
import { StaysProvider } from "../context/StaysContext";
import Layout from "./../components/UI/Layout";
import SideBarStays from "../components/forms/SideBarStays";
const Stays = () => {
  return (
    <Layout>
      <StaysProvider>
        <PageContentWrapper
          navigationContent={<PageNavContent />}
          filterContent={<FilterFormStays/>}
          mainContent={<StaysList />}
          sidebarContent={<SideBarStays />}
        />
      </StaysProvider>
    </Layout>
  );
};
export default Stays;
