import { ProductWithPrice } from "@/lib/supabase/supabase.types";
import React from "react";

interface SubscriptionModalProps {
  products: ProductWithPrice[];
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ products }) => {
  console.log(products);
  return <div>SubscriptionModal</div>;
};

export default SubscriptionModal;
