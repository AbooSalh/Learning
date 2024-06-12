export default function page({ params }: { params: { productId: string } }) {
  return <h1>{params.productId}</h1>;
}
