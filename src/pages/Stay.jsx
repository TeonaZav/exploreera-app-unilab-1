import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useStays } from "../context/StaysContext";

import Layout from "../components/UI/Layout";
import PageContentWrapper from "./../components/UI/PageContentWrapper";
import PageNavContent from "./../components/UI/PageNavContent";
import StayDetails from "../components/stays/StayDetails";
import SideBarStays from "../components/forms/SideBarStays";
import FilterFormStays from "../components/forms/FilterFormStays";

const Stay = () => {
  let { id } = useParams();

  const { fetchStayById, selectedStay } = useStays();

  useEffect(() => {
    fetchStayById(id);
  }, []);

  return (
    <Layout>
      <PageContentWrapper
        navigationContent={<PageNavContent />}
        filterContent={<FilterFormStays />}
        mainContent={
          selectedStay ? (
            <StayDetails {...selectedStay} />
          ) : (
            <div>Loading or not available...</div>
          )
        }
        sidebarContent={<SideBarStays />}
      />
    </Layout>
  );
};

export default Stay;
