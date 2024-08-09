interface ProductDetailProps {
  params: {
    productId: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  return <div>My product detail: {params.productId}</div>;
}
