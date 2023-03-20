import { Company } from "@/models/Company";
import { getBrand } from "@/preloaders/getBrand";

const SsrHeading = ({ name, image, acn }: Company) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <img src={image} height={32} width={32} />
      <h3>{name}</h3>
      <h4>ACN: {acn}</h4>
    </div>
  );
};
export default SsrHeading;
