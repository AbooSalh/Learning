export default function page({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h1>
      product {params.productId} rev {params.reviewId}
    </h1>
  );
}
