import Container from "@/app/components/Container";
import MapListing from "./components/listings/MapListing";
import getListings from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";

const Home = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <MapListing listings={listings} currUser={currentUser} />
    </Container>
  );
};

export default Home;
