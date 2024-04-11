import PageContentWrapper from "../components/UI/PageContentWrapper";
import PageNavContent from "../components/UI/PageNavContent";

function CarRental() {
  return (
    <PageContentWrapper
      navigationContent={<PageNavContent />}
      mainContent={<div>About Main Content</div>}
      sidebarContent={<div>About Sidebar</div>}
    />
  );
}

export default CarRental;
