import prisma from "@/app/libs/prismadb";


export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        publishedAt: "asc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      publishedAt: listing.publishedAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
