import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export default async function getListingById(params: IParams) {
  try {
    const { listingId } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      //   publishedAt: listing.publishedAt.toString(),
    //   user: {
    //     ...listing.user,
    //     createdAt: listing.user.createdAt.toString(),
    //     updatedAt: listing.user.updatedAt.toString(),
    //     emailVerified: listing.user.emailVerified?.toString() || null,
    //   },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
