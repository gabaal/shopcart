import { cn } from "@/lib/utils";

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
  const formatPrice = new Number(amount).toLocaleString("en-GB", {
    currency: "GBP",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return (
    <span className={cn("text-sm font-semibold text-darkColor", className)}>
      {formatPrice}
    </span>
  );
};
export default PriceFormatter;
